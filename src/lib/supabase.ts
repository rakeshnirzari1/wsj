import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

// Debug logging
console.log('Environment check:', {
  hasUrl: !!supabaseUrl,
  hasKey: !!supabaseAnonKey,
  urlPreview: supabaseUrl ? supabaseUrl.substring(0, 20) + '...' : 'missing',
  keyPreview: supabaseAnonKey ? supabaseAnonKey.substring(0, 20) + '...' : 'missing'
});

export const supabase = createClient(
  supabaseUrl || 'https://demo.supabase.co', 
  supabaseAnonKey || 'demo-key', 
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

// Check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

console.log('Supabase configured:', isSupabaseConfigured);
if (!isSupabaseConfigured) {
  console.warn('⚠️ Supabase environment variables not found. Using mock data.');
  console.log('Expected variables: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY');
}