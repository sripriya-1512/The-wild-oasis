import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gllbhemqoofrudklrvqs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsbGJoZW1xb29mcnVka2xydnFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4MTg5NTUsImV4cCI6MjA0MjM5NDk1NX0.QT0NiNBQdRqmQVxW1Q9HjPc44KMgcAesb5yDXBVCbPQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
