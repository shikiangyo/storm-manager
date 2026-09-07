// ============================================================
//  Storm Manager — settings
//
//  SUPABASE_URL       : Supabase dashboard > Project Settings > Data API ("Project URL")
//  SUPABASE_ANON_KEY  : Supabase dashboard > Project Settings > API Keys > Publishable key
//                       (starts with sb_publishable_).  NEVER the sb_secret_ key.
//
//  The publishable key is safe in public code: the database policies allow
//  anonymous reads only, and every write requires a logged-in admin account.
//
//  Leave both blank to run the app purely on this device (no sharing, no login).
//
//  KILL_TRACKER_THP_FEED_URL : (added 2026-09-07) a public, read-only feed
//                       published by the separate "Kill Tracker" app/repo —
//                       Supabase Edge Function `public-thp-feed`, deployed
//                       there with --no-verify-jwt so it needs no key at
//                       all. Powers the "Sync THP from Kill Tracker" button
//                       on the Storm Players tab: pulls each player's Power/
//                       Army Power/Total Hero Power and writes it onto their
//                       CS record here. Get the exact URL from whoever runs
//                       Kill Tracker (Supabase dashboard > Edge Functions >
//                       public-thp-feed > the function's own URL). Leave
//                       blank to hide the button entirely.
// ============================================================
window.CS_CONFIG = {
  SUPABASE_URL: "https://khglcnxzdexsighnmrtg.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_AgP69VSmje6i5OSIekVGQA_9WOG23vS",
  KILL_TRACKER_THP_FEED_URL: "https://xchlzfjjifdftwtptcxb.supabase.co/functions/v1/public-thp-feed"
};
