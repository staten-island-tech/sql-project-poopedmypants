<script>
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Database } from 'lib/database.types'

const supabase = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

interface Database {
  public: {
    Tables: {
      movies: {
        Row: {} // The data expected to be returned from a "select" statement.
        Insert: {} // The data expected passed to an "insert" statement.
        Update: {} // The data expected passed to an "update" statement.
      }
    }
  }
}
</script>

<template>
  <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
</template>
