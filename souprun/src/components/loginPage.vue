<template>
  <div id="container">
    <input type="text" placeholder="username" />
    <input type="text" placeholder="password" />
    <router-link :to="{ path: '/' }"><button class="logsign" id="sign-up">LOGIN</button></router-link>
    <router-link :to="{ path: '/' }"><button class="logsign" id="log-in">SIGN UP</button></router-link>
  </div>
</template>

<script>

</script>
<style>
#container{
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 48%;
}
input{
  color: rgba(104,22,22,255);
  display: block;
  margin-top: 2vw;
  width: 30vw;
  height: 5vw;
  font-size: 3vw;
  border-color: transparent;
  border-radius: 1vw;
  background-color: rgb(255, 248, 226);
  font-family: 'Bubblegum Sans', cursive;
font-family: 'Cute Font', cursive;
padding-left: 1vw;
outline: none;
font-weight: bold;
}
.logsign{
  color: rgba(104,22,22,255);
  margin-top: 2vw;
  height: 3vw;
  margin-right: 2vw;
  width: 6vw;
  border-color: transparent;
  border-radius: 1vw;
  background-color: rgb(255, 248, 226);
  font-family: 'Bubblegum Sans', cursive;
font-family: 'Cute Font', cursive;
font-size: 1.5vw;
font-weight: bold;
}
.logsign:hover{
  background-color: rgb(218, 212, 192);
}
</style>