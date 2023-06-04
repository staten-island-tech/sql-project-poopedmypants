<script setup>
import container from '../components/container.vue'
import login from '../components/loginPage.vue'
</script>

<template>
  <main>
    <div>
        <login id="login"/>
      </div>
      <div id="con">
        <container :started="started"/>
      </div>
  </main>
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
<style scoped>
#login{
  position: absolute;
  top: 2%;
  right: 2%;
  z-index: 55;
}
</style>
