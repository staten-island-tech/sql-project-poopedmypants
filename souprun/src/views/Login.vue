<script setup>
import login from '../components/loginPage.vue'
</script>

<template>
<divs>
  <h1>login</h1>
    <login/>
</divs>
</template>
<script>
export default {
  components: { login },
  data() {
    return {
      started: false,
    };
  },
};
</script>
