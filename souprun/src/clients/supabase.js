import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://cdablomeaoepwtkvvthb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkYWJsb21lYW9lcHd0a3Z2dGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMjYyMTksImV4cCI6MjAwMTgwMjIxOX0.t0QYYm96gcRlBfFAzvKq6CLYH4_RDKzEWu9fCb8SdbM';

export const supabase = createClient(supabaseUrl, supabaseKey)