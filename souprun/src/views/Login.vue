<script setup>
import login from '../components/loginPage.vue'
</script>

<template>
<divs>
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
