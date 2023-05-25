<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
</script>

<template>
  <RouterView />
</template>
