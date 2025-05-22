const SUPABASE_URL = 'https://dqwlhtbxwndcjezfvypw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // sua chave inteira

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
