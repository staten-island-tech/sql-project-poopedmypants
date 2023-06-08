<template>
  <div id="container">
   <form @submit.prevent="login">
     <p>SIGN UP</p>
     <input v-model="username" type="name" placeholder="Username" />
     <input v-model="email" type="email" placeholder="Email" />
     <input v-model="password" type="password" placeholder="Password" />
     <router-link :to="{ path: '/' }"><button @click="CreateAccount" class="logsign" id="sign-up">SIGN UP</button></router-link>
     <router-link :to="{ path: '/login' }"><button class="logsign" id="log-in">LOGIN</button></router-link>
   </form>
 </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../clients/supabase';
let email = ref("")
let password = ref("")
let username = ref("")

async function CreateAccount() {
  const { user, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (error) {
    console.log(error);
  } else {
    console.log(user);
    const { data, error } = await supabase
      .from('clients')
      .insert([{ email: email.value, username: username.value }]);
      
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
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