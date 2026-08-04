-- ============================================================
--  Storm Manager — Supabase setup
--  Run this once in Supabase dashboard > SQL Editor > New query > Run.
-- ============================================================

-- Single shared document holding roster, events, squads and settings.
create table if not exists public.kv (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.kv enable row level security;

-- Anyone with the link can READ (view-only members).
drop policy if exists "kv public read" on public.kv;
create policy "kv public read"
  on public.kv for select
  using (true);

-- Only logged-in admin accounts can WRITE.
drop policy if exists "kv admin write" on public.kv;
create policy "kv admin write"
  on public.kv for all
  to authenticated
  using (true)
  with check (true);

-- ============================================================
--  Create your admin account in:
--    Authentication > Users > Add user  (email + password, "Auto Confirm User" ON)
--
--  Then turn OFF public sign-ups so nobody can make their own admin account:
--    Authentication > Sign In / Providers > Email > disable "Allow new users to sign up"
-- ============================================================
