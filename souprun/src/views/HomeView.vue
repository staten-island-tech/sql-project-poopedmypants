<script setup>
import container from '../components/container.vue'
import logoutbtn from '../components/logoutbtn.vue';
import loginbtn from '../components/loginbtn.vue'
</script>
<template>
  <main>
    <div>
      <p id="guide">DONT BE A DUMMY: <br/>click the character charms to change characters <br/>click the character to start game <br/>click gamescreen/spacebar to jump
      </p>
      <loginbtn/>
      <logoutbtn/>
      </div>
      <div id="con">
        <container :started="started"/>
      </div>
  </main>
</template>
<style>
#guide{
  width: 10vw;
  font-size: 1vw;
  margin-left: 1vw;
}
</style>