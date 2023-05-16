<script setup>
import leaderboard from '../components/leaderboard.vue'
import container from '../components/container.vue'
</script>

<template>
  <main>
    <div>
      <h1 id="title">SOUP RUN</h1>
      <div id="leaderboard">
        <leaderboard />
      </div>
      <div id="con">
        <container/>
      </div>
    </div>
  </main>
</template>
<style scoped>
#leaderboard{
  position: absolute;
  left: 2vw;
}
#title {
  text-align: center;
}
#con{
  position: absolute;
}
</style>
