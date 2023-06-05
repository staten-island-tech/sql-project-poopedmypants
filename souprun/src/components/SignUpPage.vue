<template>
  <div id="container">
    <form @submit.prevent="signUp">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async signUp() {
      try {
        const { user, error } = await this.$supabase.auth.signUp({
          email: this.email,
          password: this.password
        })

        if (error) {
          console.log('Error signing up:', error.message)
        } else {
          console.log('Sign up successful:', user)

          // Save the sign-up information to the 'profiles' table
          const { data, error } = await this.$supabase
            .from('profiles')
            .insert([
              {
                email: this.email,
                // Include other relevant user information here
              }
            ])

          if (error) {
            console.log('Error saving sign-up information:', error.message)
          } else {
            console.log('Sign-up information saved to the table:', data)
          }

          // Redirect the user to the login page or another appropriate route
          this.$router.push('/login')
        }
      } catch (error) {
        console.log('An error occurred:', error.message)
      }
    }
  }
}
</script>

  