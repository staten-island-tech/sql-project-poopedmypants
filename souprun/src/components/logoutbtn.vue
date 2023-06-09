<template>
    <button @click="logoutt" id="logout">LOGOUT</button>
</template>
<script setup>
import { supabase } from "../clients/supabase";

async function logoutt(){
    const { error } = await supabase.auth.signOut();
    if(error){
        console.log(error)
    }else{
        console.log("logged out")
    }
}
</script>
<style scoped>
#logout{
    border: transparent;
    position: absolute;
  right: 2%;
  top: 6%;
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
#logout:hover{
  background-color: rgb(218, 212, 192);
}
</style>