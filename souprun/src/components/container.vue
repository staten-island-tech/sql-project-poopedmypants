<template>
  <canvas ref="canvas" @click="clickedthebunny"></canvas>
</template>

<script>
let x = 500
let y = 20
let x2 = 1250
let choice = 0
let characters = ['/cat.png', '/bun.png', '/hippo.png']
let chara = characters[choice]

export default {
  props: {
    started: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    resize() {
      const canvas = this.$refs.canvas
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      this.ctx = canvas.getContext('2d')

      this.newImage = new Image()
      this.newImage.src = '/bowl.png'
      this.bun = new Image()
      this.bun.src = chara

      this.bun.onload = () => {
        this.animate()
      }
      this.newImage.onload = () => {
        this.animate()
      }
    },
    startGame() {
      console.log('start')
    },
    animate() {
      let extra = window.innerWidth + window.innerWidth
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      this.ctx.drawImage(this.newImage, x, 0)
      this.ctx.drawImage(this.bun, x2, y, 200, 150)

      if (y < 301) {
        y += 5
      } else {
        x -= 7
        if (x2 >= 250) {
          x2 -= 7
        }
      }

      if (x >= -1900 && this.started) {
        requestAnimationFrame(this.animate)
      }
    },
    clickedthebunny(event) {
      const clickX = event.clientX
      const clickY = event.clientY

      if (
        clickX >= x2 &&
        clickX <= x2 + 290 &&
        clickY >= y &&
        clickY <= y + 200 &&
        this.started === false
      ) {
        choice += 1
        this.bun.src = characters[choice % characters.length]
        y = 20
      }
    }
  },
  watch: {
    started: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log('Prop value changed:', newValue)

        if (newValue) {
          this.animate()
        }
      }
    }
  },
  mounted() {
    const canvas = this.$refs.canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    this.ctx = canvas.getContext('2d')

    this.newImage = new Image()
    this.newImage.src = '/bowl.png'
    this.bun = new Image()
    this.bun.src = chara

    this.bun.onload = () => {
      this.animate()
    }
    this.newImage.onload = () => {
      this.animate()
    }
    window.onresize = this.resize()
  }
}
</script>
