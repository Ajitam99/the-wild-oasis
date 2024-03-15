import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://llsbwgkdmthxlyqestit.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxsc2J3Z2tkbXRoeGx5cWVzdGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NDk0MDYsImV4cCI6MjAyNDUyNTQwNn0.8nsYbtPTABhkvSI3NJ9In4YOyNmX0PBsVqVaSP1NBJY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
