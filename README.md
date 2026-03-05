# Seahawks Community Purchase Proposal

## Development

Run from repo root:

```bash
npm install
npm run dev
```

This starts the monolithic server at:

- `http://127.0.0.1:5001`

Health check:

- `http://127.0.0.1:5001/health`

## API Endpoints

- `GET /api/stats`
- `POST /api/commitments`

## Production

Serve from root:

```bash
npm start
```

`npm start` runs the same monolithic server.

## Notes

- `server.js` serves static files from `public/` and the `/api` endpoints.
- The API is privacy-first and only stores anonymous commitment rows.

## Supabase Privacy-First Setup

This project now uses a privacy-first model:
- no names
- no emails
- no public participant list
- only anonymous commitments + global stats

### 1) Environment variables

Set these for the server runtime:

```bash
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
PORT=5001
```

Frontend realtime config is read from `public/index.html` body attributes:

```html
<body data-supabase-url="https://YOUR_PROJECT.supabase.co" data-supabase-anon-key="YOUR_ANON_KEY">
```

If these are empty, the app still works (polling via `/api/stats`), but realtime subscriptions are disabled.

### 2) SQL schema + RLS

Run this in Supabase SQL Editor:

```sql
-- Required extension for UUID defaults.
create extension if not exists pgcrypto;

create table if not exists public.stats (
  id integer primary key,
  participants_count bigint not null default 0,
  updated_at timestamptz not null default now()
);

insert into public.stats (id, participants_count)
values (1, 0)
on conflict (id) do nothing;

create table if not exists public.commitments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  county text null
);

alter table public.stats enable row level security;
alter table public.commitments enable row level security;

-- commitments: public can insert anonymously, cannot read rows
drop policy if exists "anon_insert_commitments" on public.commitments;
create policy "anon_insert_commitments"
on public.commitments
for insert
to anon
with check (true);

-- stats: public can read
drop policy if exists "anon_read_stats" on public.stats;
create policy "anon_read_stats"
on public.stats
for select
to anon
using (true);

-- Realtime on stats table
alter publication supabase_realtime add table public.stats;
```

### 3) Atomic increment function

The server calls this RPC to atomically increment `participants_count`:

```sql
create or replace function public.increment_participants_count()
returns table (participants_count bigint)
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.stats
  set participants_count = participants_count + 1,
      updated_at = now()
  where id = 1;

  return query
  select s.participants_count
  from public.stats s
  where s.id = 1;
end;
$$;

revoke all on function public.increment_participants_count() from public;
grant execute on function public.increment_participants_count() to service_role;
```
