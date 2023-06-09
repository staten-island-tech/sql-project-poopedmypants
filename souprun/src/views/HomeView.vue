<script setup>
import container from '../components/container.vue'
</script>

<template>
  <main>
    <div>
      <p id="guide">DONT BE A DUMMY: <br/>click the character charms to change characters <br/>click the character to start game <br/>click gamescreen/spacebar to jump
      </p>
      <router-link :to="{ path: '/login' }" id="login">LOGIN</router-link>
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
#login{
  position: absolute;
  right: 2%;
  top: 2%;
  color: rgba(104,22,22,255);
  padding: .3vw;
  width: 5vw;
  text-align: center;
  margin-top: 1vw;
  margin-right: 1vw;
  border-radius: 1vw;
  background-color: rgb(255, 248, 226);
  font-family: 'Bubblegum Sans', cursive;
font-family: 'Cute Font', cursive;
font-size: 1.5vw;
font-weight: bold;
text-decoration: none;
}
#login:hover{
  background-color: rgb(218, 212, 192);
}
</style>