const SUPABASE_URL = 'https://dqwlhtbxwndcjezfvypw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxd2xodGJ4d25kY2plemZ2eXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MzgwMzcsImV4cCI6MjA2MzUxNDAzN30.oytkaqwB6EcUbuLhg6iI_TYVKz4jHWCqch9HyZ43UcM'; // sua chave inteira

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
