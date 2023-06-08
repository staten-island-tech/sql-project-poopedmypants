
<template>
    <main>
        <div>
            <!-- <router-link :to="{ path: '/login' }" id="login">{{ account.data.session.user.email }}</router-link> -->
            <router-link :to="{ path: '/login' }" id="login"> LOGIN</router-link>
        </div>
    
    </main>
</template>
<script setup>
import { account } from "./loginPage.vue";
</script>
<style>
#login{
  position: absolute;
  right: 2%;
  top: 2%;
  color: rgba(104,22,22,255);
  padding-top: .25vw;
  padding-bottom: .25vw;
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