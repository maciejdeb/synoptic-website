import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aoghaivnvpeabzdcbhjc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZ2hhaXZudnBlYWJ6ZGNiaGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MDQ2OTcsImV4cCI6MjA3MzA4MDY5N30.331oUZ2XvlMDOSe6sCjMs8jgczO9uxksrwlUlzHd9VE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)