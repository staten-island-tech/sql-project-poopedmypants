
<template>
    <div id="counter"><p>SCORE: {{ score }}</p></div>
</template>
<script>
export default {
  props: {
    started: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      score: 0,
    };
  },
  watch: {
    started(newVal) {
      if (newVal) {
        this.startTimer();
      }
    },
  },
  methods: {
    startTimer() {
      setInterval(() => {
        this.score += 1;
      }, 50);
    },
  },
};
</script>
<style scoped>
#counter{
    text-align: center;
}
</style>