<template>
   <div id="container">
    <form @submit.prevent="login">
      <p>LOGIN</p>
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="loginn" class="logsign" id="log-in">LOGIN</button>
      <router-link :to="{ path: '/signup' }"><button class="logsign" id="sign-up">SIGN UP</button></router-link>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../clients/supabase';
import { storeToRefs } from 'pinia';
import { useTaskStore } from './taskStore';
import router from '../router';

let email = ref("")
let password = ref("")
let taskStore = storeToRefs(useTaskStore());

async function loginn(){
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if(error){
    window.alert(error);
    console.log(error)  
  } else{
    console.log(data)
    taskStore.user.value = data.user
    router.push ('/')
  }

}

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