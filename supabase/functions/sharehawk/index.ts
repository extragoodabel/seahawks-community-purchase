import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

type TurnstileResponse = {
  success?: boolean;
  'error-codes'?: string[];
};

function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  const turnstileSecret = Deno.env.get('TURNSTILE_SECRET');
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!turnstileSecret || !supabaseUrl || !serviceRoleKey) {
    return jsonResponse(500, { error: 'Server configuration missing' });
  }

  let token = '';
  try {
    const body = await req.json();
    token = String(body?.token || '').trim();
  } catch {
    return jsonResponse(400, { error: 'Invalid request body' });
  }

  if (!token) {
    return jsonResponse(400, { error: 'Missing Turnstile token' });
  }

  const verificationBody = new URLSearchParams();
  verificationBody.set('secret', turnstileSecret);
  verificationBody.set('response', token);

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  if (ip) {
    verificationBody.set('remoteip', ip);
  }

  let verification: TurnstileResponse | null = null;
  try {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: verificationBody.toString()
    });

    verification = (await verifyRes.json()) as TurnstileResponse;
  } catch {
    return jsonResponse(502, { error: 'Turnstile verification unavailable' });
  }

  if (!verification?.success) {
    return jsonResponse(403, {
      error: 'Turnstile verification failed',
      code: verification?.['error-codes']?.[0] || 'turnstile_failed'
    });
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });

  const insertRes = await admin.rpc('insert_participant');
  if (insertRes.error) {
    return jsonResponse(500, { error: 'Insert failed' });
  }

  const countRes = await admin.rpc('get_participant_count');
  if (countRes.error) {
    return jsonResponse(500, { error: 'Count fetch failed' });
  }

  const count = Number(countRes.data || 0);
  return jsonResponse(200, { count: Number.isFinite(count) ? count : 0 });
});
