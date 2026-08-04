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
// ============================================================
window.CS_CONFIG = {
  SUPABASE_URL: "https://khglcnxzdexsighnmrtg.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_AgP69VSmje6i5OSIekVGQA_9WOG23vS"
};
