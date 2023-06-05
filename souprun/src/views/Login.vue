<template>
  <div>
    <login-page />
  </div>
</template>

<script>
import LoginPage from '../components/loginPage.vue';
//ness: idk if i wanna import it again so i didnt but if issue import
//oops login page is missing uh oh 
export default {
  components: {
    'login-page': LoginPage
  },
  data() {
    return {
      started: false
    };
  }
};
</script>
