import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sgmythlzhsbaecjuwicr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnbXl0aGx6aHNiYWVjanV3aWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MTA5MjUsImV4cCI6MjAwODk4NjkyNX0.EGsDSY-5uOLFA6pjKBF31QQMLXmizuKztMoui9kA268";

export const supabase = createClient(supabaseUrl, supabaseKey);