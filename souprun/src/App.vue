<template>
  <div>
    <router-view />
    <div class="container" style="padding: 50px 0 100px 0">
      <Profile v-if="user" />
      <Auth v-else />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, watch } from 'vue'
import { supabase } from "./supabase"

const user = ref(null)

watch(() => {
  user.value = supabase.auth.user
})

supabase.auth.onAuthStateChange((_, session) => {
  user.value = session.user
})

const setup = () => {
  return {
    user,
  }
}
</script>
