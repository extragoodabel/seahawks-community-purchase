const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = Number(process.env.PORT || 5001);
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const PURCHASE_PRICE = 12_000_000_000;

const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function json(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(payload));
}

function notFound(res) {
  json(res, 404, { error: 'Not found' });
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';

    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 50_000) {
        reject(new Error('Request body too large.'));
        req.destroy();
      }
    });

    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error('Invalid JSON body.'));
      }
    });

    req.on('error', reject);
  });
}

function sanitizeCounty(value) {
  if (typeof value !== 'string') {
    return null;
  }

  // Basic privacy-first sanitization: trim, strip tags, remove control chars.
  const cleaned = value
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ');

  if (!cleaned) return null;
  return cleaned.slice(0, 80);
}

function computeStats(participantsCount) {
  const safeCount = Number.isFinite(participantsCount) ? Math.max(0, Math.floor(participantsCount)) : 0;
  return {
    purchasePrice: PURCHASE_PRICE,
    participantsCount: safeCount,
    equalShare: PURCHASE_PRICE / Math.max(safeCount, 1)
  };
}

function supabaseHeaders() {
  return {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json'
  };
}

async function supabaseRequest(endpoint, options = {}) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  }

  const response = await fetch(`${SUPABASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...supabaseHeaders(),
      ...(options.headers || {})
    }
  });

  const text = await response.text();
  let data = null;

  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!response.ok) {
    const message = typeof data === 'string'
      ? data
      : (data && (data.message || data.error || data.hint)) || `Supabase request failed (${response.status}).`;
    throw new Error(message);
  }

  return data;
}

async function getStatsRow() {
  const rows = await supabaseRequest('/rest/v1/stats?id=eq.1&select=participants_count', {
    method: 'GET'
  });

  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error('Stats row id=1 is missing.');
  }

  return rows[0];
}

async function insertCommitment(county) {
  const payload = county ? { county } : {};
  await supabaseRequest('/rest/v1/commitments', {
    method: 'POST',
    headers: {
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(payload)
  });
}

async function incrementParticipantsCount() {
  const result = await supabaseRequest('/rest/v1/rpc/increment_participants_count', {
    method: 'POST',
    body: JSON.stringify({})
  });

  if (!Array.isArray(result) || result.length === 0 || typeof result[0].participants_count !== 'number') {
    throw new Error('RPC increment_participants_count returned an unexpected payload.');
  }

  return result[0].participants_count;
}

function serveStatic(reqPath, res) {
  let decodedPath = reqPath;
  try {
    decodedPath = decodeURIComponent(reqPath);
  } catch {
    notFound(res);
    return;
  }

  let filePath = decodedPath === '/' ? '/index.html' : decodedPath;
  filePath = path.normalize(filePath).replace(/^(\.\.[/\\])+/, '');
  const absolutePath = path.join(PUBLIC_DIR, filePath);

  if (!absolutePath.startsWith(PUBLIC_DIR)) {
    notFound(res);
    return;
  }

  fs.readFile(absolutePath, (err, data) => {
    if (err) {
      notFound(res);
      return;
    }

    const ext = path.extname(absolutePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream'
    });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = reqUrl.pathname;

  // Basic CORS for local sharing.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    if (req.method === 'GET' && pathname === '/health') {
      json(res, 200, { ok: true });
      return;
    }

    if (req.method === 'GET' && pathname === '/api/stats') {
      const row = await getStatsRow();
      json(res, 200, computeStats(Number(row.participants_count)));
      return;
    }

    if (req.method === 'GET' && pathname === '/api/participants') {
      notFound(res);
      return;
    }

    if (req.method === 'POST' && pathname === '/api/participants') {
      notFound(res);
      return;
    }

    if (req.method === 'POST' && pathname === '/api/commitments') {
      const body = await parseBody(req);
      const county = sanitizeCounty(body.county);

      await insertCommitment(county);
      const participantsCount = await incrementParticipantsCount();

      json(res, 200, {
        ok: true,
        stats: computeStats(participantsCount)
      });
      return;
    }

    if (pathname.startsWith('/api/')) {
      notFound(res);
      return;
    }

    serveStatic(pathname, res);
  } catch (err) {
    json(res, 500, { error: err.message || 'Server error' });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Seahawks Community Proposal server running at http://127.0.0.1:${PORT}`);
});
