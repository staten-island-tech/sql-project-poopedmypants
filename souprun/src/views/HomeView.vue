<script setup>
import leaderboard from '../components/leaderboard.vue'
import container from '../components/container.vue'
import startBtn from '../components/startBtn.vue'
import login from '../components/login.vue'
</script>

<template>
  <main>
    <div>
      <div id="titleCon" :class="{ 'slide-up': started }">
        <h1 id="title">SOUP RUN</h1>
        <login id="login"/>
      </div>
      <div id="leaderboard" :class="{ 'slide-out': started }">
        <leaderboard :started="started"/>
        <startBtn id="start" :started="started" @update:started="started = $event" />
      </div>
      <div id="con">
        <container :started="started"/>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: { login },
  data() {
    return {
      started: false,
    };
  },
};
</script>
<style scoped>
#login{
  position: absolute;
  top: 2%;
  right: 2%;
  z-index: 55;
}
.slide-out {
  transform: translateX(-150%);
}
.slide-up {
  transform: translateY(-100vh);
}
#start{
  position: absolute;
  right: 50%;
  z-index: 99;
  margin-top: 3vw;
}
#leaderboard{
  position: absolute;
  left: 4vw;
  z-index: 2;
  transition: transform 1s ease-in-out;
  top: 25%;
}
#title {
  left: 2%;
  font-family: 'Bubblegum Sans', cursive;
  position: absolute;
  font-size: 8vw;
  margin: 0;
  margin-top: 2.5vw;
  color: #681616;
}
#titleCon{
  transition: transform 1s ease-in-out;
}
#con{
  position: absolute;
  z-index: 1;
}
</style>
