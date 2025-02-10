import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://mysamzktrrmwxgvycfdd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15c2Ftemt0cnJtd3hndnljZmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MzY0NTcsImV4cCI6MjA1NDAxMjQ1N30.kvM3yUAOmrnbxjLqIOU9kIAJFV_Q4QEox8zzr4YegVI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
