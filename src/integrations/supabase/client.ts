import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rkkxfvtykhuvikarmxpv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJra3hmdnR5a2h1dmlrYXJteHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwODg2NTYsImV4cCI6MjA3OTY2NDY1Nn0.orgY4brEHVkCKRloXWxJdFALRwNmTkTqXEaQz93HSYw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// For React:
// import { supabase } from "@/integrations/supabase/client";
// For React Native:
// import { supabase } from "@/src/integrations/supabase/client";
