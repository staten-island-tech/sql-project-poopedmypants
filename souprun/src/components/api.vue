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
      users: {
        Row: {
const { data, error } = await supabase
  .from('countries')
  .select()
        }
        Insert: {
const { error } = await supabase
  .from('countries')
  .insert({ id: 1, name: 'Denmark' })
        }
        Update: {
const { error } = await supabase
  .from('countries')
  .update({ name: 'Australia' })
  .eq('id', 1)
        }
      }
    }
  }
}
</script>

<template>
  <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
</template>
