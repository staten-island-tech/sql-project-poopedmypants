<template>
   <div id="container">
    <form @submit.prevent="login">
      //ness: used to listen forform submission 
      //calls login method and prevent default sub
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit" class="logsign" id="login">LOGIN</button>
      <button type="button" class="logsign" id="signup" @click="navigateToSignUp">SIGN UP</button>
    </form>
  </div>
      //ness: why was router-link here mamas i removed it
</template>

<script>
import { createClient } from '@supabase/supabase-js'
//ness: logic for login 
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
      try {
        const { user, error } = await this.$supabase.auth.signIn({
          email: this.email,
          password: this.password,
        })
        //access stuff here
        if (error) {
          console.log(error.message)
        } else {
          console.log('Logged in successfully', user)
        }
      } catch (error) {
        console.log('An error occurred:', error.message)
      }
    },
  },

  created() {
    const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_KEY')
    this.$supabase = supabase
  },
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