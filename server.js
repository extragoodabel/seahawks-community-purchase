const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.PORT ? Number(process.env.PORT) : 5001;
const PURCHASE_PRICE = 12_000_000_000;

const WA_COUNTIES = [
  'Adams', 'Asotin', 'Benton', 'Chelan', 'Clallam', 'Clark', 'Columbia',
  'Cowlitz', 'Douglas', 'Ferry', 'Franklin', 'Garfield', 'Grant',
  'Grays Harbor', 'Island', 'Jefferson', 'King', 'Kitsap', 'Kittitas',
  'Klickitat', 'Lewis', 'Lincoln', 'Mason', 'Okanogan', 'Pacific',
  'Pend Oreille', 'Pierce', 'San Juan', 'Skagit', 'Skamania',
  'Snohomish', 'Spokane', 'Stevens', 'Thurston', 'Wahkiakum',
  'Walla Walla', 'Whatcom', 'Whitman', 'Yakima'
];

const participants = [];

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

function sendText(res, statusCode, text, contentType = 'text/plain; charset=utf-8') {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(text);
}

function sanitizeName(input) {
  return String(input || '')
    .replace(/[^a-zA-Z\s'\-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60);
}

function initials(fullName) {
  const parts = String(fullName).split(' ').filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return `${parts[0][0].toUpperCase()}.`;
  return `${parts[0][0].toUpperCase()}. ${parts[parts.length - 1][0].toUpperCase()}.`;
}

function statsPayload() {
  const participantsCount = participants.length;
  return {
    purchasePrice: PURCHASE_PRICE,
    participantsCount,
    equalShare: participantsCount === 0 ? null : PURCHASE_PRICE / participantsCount
  };
}

function participantListPayload() {
  return participants
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((p) => ({
      id: p.id,
      initials: initials(p.fullName),
      county: p.county,
      createdAt: p.createdAt
    }));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function serveStatic(req, res, pathname) {
  const filePath = pathname === '/' ? '/index.html' : pathname;
  const resolvedPath = path.join(__dirname, 'public', filePath);

  if (!resolvedPath.startsWith(path.join(__dirname, 'public'))) {
    sendText(res, 403, 'Forbidden');
    return;
  }

  fs.readFile(resolvedPath, (err, data) => {
    if (err) {
      sendText(res, 404, 'Not Found');
      return;
    }

    const ext = path.extname(resolvedPath);
    const contentType = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml'
    }[ext] || 'application/octet-stream';

    sendText(res, 200, data, contentType);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const { pathname } = parsedUrl;

    if (req.method === 'GET' && pathname === '/api/stats') {
      sendJson(res, 200, statsPayload());
      return;
    }

    if (req.method === 'GET' && pathname === '/api/participants') {
      sendJson(res, 200, {
        list: participantListPayload(),
        count: participants.length
      });
      return;
    }

    if (req.method === 'POST' && pathname === '/api/participants') {
      const rawBody = await readBody(req);
      let payload;

      try {
        payload = JSON.parse(rawBody || '{}');
      } catch {
        sendJson(res, 400, { error: 'Invalid JSON body.' });
        return;
      }

      const fullName = sanitizeName(payload.name);
      const county = String(payload.county || '').trim();
      const email = String(payload.email || '').trim().slice(0, 120);

      if (!fullName) {
        sendJson(res, 400, { error: 'Name is required.' });
        return;
      }

      if (!WA_COUNTIES.includes(county)) {
        sendJson(res, 400, { error: 'Valid Washington county is required.' });
        return;
      }

      const id = participants.length + 1;
      participants.push({
        id,
        fullName,
        county,
        email: email || null,
        createdAt: Date.now()
      });

      sendJson(res, 201, {
        ok: true,
        stats: statsPayload(),
        participant: {
          id,
          initials: initials(fullName),
          county
        }
      });
      return;
    }

    if (pathname.startsWith('/api/')) {
      sendJson(res, 404, { error: 'Not found.' });
      return;
    }

    serveStatic(req, res, pathname);
  } catch (err) {
    sendJson(res, 500, { error: 'Internal server error.' });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
