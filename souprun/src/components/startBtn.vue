<template>
  <div>
    <button @click="start()"  id="startBtn">start</button>
  </div>
</template>

<script>
export default {
  props: {
    started: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    start() {
      this.$emit('update:started', true); // Emit an event to update the prop value in the parent
    },
  },
};
</script>
