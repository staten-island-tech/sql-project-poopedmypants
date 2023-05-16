<template>
  <div>
    <div class="slide" :class="{ 'slide-out': started }" id="leaderboard">
      <h2>leaderboard</h2>
      <p>1. richy</p>
      <p>2. nessy</p>
      <p>3. jessy</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    started: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
#leaderboard {
  width: 30vw;
  height: 20vw;
  background-color: white;
}
</style>
