import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Animal {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  description: string;
  personality: string;
  image_url: string;
  available: boolean;
  created_at: string;
}
