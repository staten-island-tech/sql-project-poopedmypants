<template>
    <canvas ref="canvas"></canvas>
</template>
  
<script>

  export default {
    mounted() {
      const canvas = this.$refs.canvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight
      const ctx = canvas.getContext('2d');
  
      // Create our image
      const newImage = new Image();
      newImage.src = '/bowl.png';
  
      // When it loads
      newImage.onload = () => {
        // Draw the image onto the context
        ctx.drawImage(newImage, 500, 0);
      };
    },
  };
</script>