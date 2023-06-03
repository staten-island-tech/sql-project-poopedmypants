<script setup>
import score from '../components/score.vue'
</script>
<template>
  <div>
    <score :started="started"/>
    <canvas id="con"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    //very sorry for all these variables .-.
    return {
      canvas: null,
      ctx: null,
      conRect: null,
      conBottom: null,
      bowlX: null,
      bowlHeight: null,
      bowlWidth: null,
      bowl: null,
      newBowlX: null,
      started: false,
      startBtnX: null,
      startBtnHeight: null,
      startBtnWidth: null,
      startBtn: null,
      startBtnY: null,
      avatarList: null,
      avatar: null,
      avatarIndex: 0,
      newAvatarY: null,
      newAvatarX: null,
      done: false,
      up: false,
      obbies: [],
      obbyImage: null,
      minSpawnTime: 1000,
      maxSpawnTime: 4000,
    }
  },
  mounted() {
    this.canvas = document.querySelector('canvas')
    this.canvas.width = window.innerWidth * 0.75
    this.canvas.height = this.canvas.width * 0.6
    window.addEventListener('resize', this.resizeplz)
    this.ctx = this.canvas.getContext('2d')
    this.conRect = this.canvas.getBoundingClientRect()
    this.conBottom = this.conRect.bottom
    this.canvas.addEventListener('click', this.startButtonClick)
    this.canvas.addEventListener('click', this.avatarClick)
    this.canvas.addEventListener('click', this.jump)
    this.makeBowl()
    this.makeStartButton()
    this.avatarList = ['/bun.png', '/cat.png', '/hippo.png']
    this.makeAvatar()
    this.speed = 5
    this.obbyImage = new Image()
      this.obbyImage.src = '/obby1.png'
  },
  
  watch: {
    started(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.spawnObstacle();
}, 2000);
      }
    },
  },
  methods: {
    spawnObstacle() {
      if (this.started) {
        console.log("running")
        const obstacle = {
    x: this.canvas.width / 1.1,
    y: this.conBottom * 1.9,
    height: this.canvas.height / 8,
    width: this.canvas.width / 7,
    speed: this.speed,
  };
  this.obbies.push(obstacle);
        const spawnTime = Math.floor(
          Math.random() * (this.maxSpawnTime - this.minSpawnTime + 1) + this.minSpawnTime
        );
        setTimeout(this.spawnObstacle, spawnTime);
        this.moveObstacles();
      }
    },
    moveObstacles() {
      if (this.started) {
        console.log("okewfw")
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
      this.ctx.drawImage(this.avatar, this.avatarX, this.avatarY, this.avatarWidth, this.avatarHeight);
        for (let i = 0; i < this.obbies.length; i++) {
          let el = this.obbies[i];
          el.x -= 5;
          this.ctx.drawImage(this.obbyImage, el.x, el.y, el.width, el.height);
          if (el.x + el.width < 0) {
            this.obbies.splice(i, 1);
            i--;
          }
        }
        requestAnimationFrame(this.moveObstacles);
      }
  },
    jump(){
      if(this.started === true){
        if(this.done === true){
        this.jumpP()
      } else{
        this.done = true
      }
      }

    },
    jumpP() {
      if (this.done === true) {
        requestAnimationFrame(this.jump)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight)
        if(this.up === true){
          if (this.avatarY <= this.conBottom + this.canvas.width * 0.05) {
          this.avatarY += this.canvas.width /100
          this.ctx.drawImage(
            this.avatar,
            this.avatarX,
            this.avatarY,
            this.avatarWidth,
            this.avatarHeight
          )
        } else{
          this.up = false
          this.done = false
        }
        }
        if(this.up === false){
          if (this.avatarY >= this.conBottom/5  ) {
          this.avatarY -= this.canvas.width /100
          this.ctx.drawImage(
            this.avatar,
            this.avatarX,
            this.avatarY,
            this.avatarWidth,
            this.avatarHeight
          )
        } else{
          this.up = true 
        }
        }
      }
    },
    resizeplz() {
      this.canvas.width = window.innerWidth * 0.75
      this.canvas.height = this.canvas.width * 0.6
      this.conBottom = this.canvas.height - this.bowlHeight
      this.bowlWidth = this.canvas.width + this.canvas.width / 2
      this.bowlHeight = this.canvas.height * 0.75
      this.bowlX = this.canvas.width / 3
      this.newBowlX = this.bowlX / -0.7
      this.startBtnWidth = this.canvas.width / 2.45
      this.startBtnHeight = this.canvas.width / 1.7
      this.startBtnX = this.canvas.width * 0.001
      this.startBtnY = 0
      if (this.started === true) {
        this.ctx.drawImage(
          this.bowl,
          this.newBowlX,
          this.conBottom,
          this.bowlWidth,
          this.bowlHeight
        )
      } else {
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight)
        this.ctx.drawImage(
          this.startBtn,
          this.startBtnX,
          this.startBtnY,
          this.startBtnWidth,
          this.startBtnHeight
        )
      }
    },
    makeAvatar() {
      this.avatar = new Image()
      this.avatar.src = this.avatarList[this.avatarIndex]
      this.avatar.onload = () => {
        this.ctx.drawImage(
          this.avatar,
          this.avatarX,
          this.avatarY,
          this.avatarWidth,
          this.avatarHeight
        )
      }
      this.avatarWidth = this.canvas.width / 5
      this.avatarHeight = this.canvas.height / 4
      this.avatarX = this.canvas.width / 1.5
      this.avatarY = this.conBottom - this.canvas.width * 0.1
      this.newAvatarY = this.conBottom + this.canvas.width * 0.05
      this.newAvatarX = this.canvas.width / 8
    },
    makeStartButton() {
      this.startBtn = new Image()
      this.startBtn.src = '/sign.png' //placeholderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr ahhhh
      this.startBtn.onload = () => {
        this.ctx.drawImage(
          this.startBtn,
          this.startBtnX,
          0,
          this.startBtnWidth,
          this.startBtnHeight
        )
      }
      this.startBtnWidth = this.canvas.width / 2.45
      this.startBtnHeight = this.canvas.width / 1.7
      this.startBtnX = this.canvas.width * 0.001
      this.startBtnY = 0
    },
    startButtonClick(event) {
      const clickX = event.offsetX
      const clickY = event.offsetY
      if (
        clickX >= this.startBtnX &&
        clickX <= this.startBtnX + this.startBtnWidth &&
        clickY >= this.startBtnY &&
        clickY <= this.startBtnY + this.startBtnHeight
      ) {
        this.moveBowl() // Execute moveBowl function
      }
    },
    avatarClick(event) {
      const clickX = event.offsetX
      const clickY = event.offsetY
      if (
        clickX >= this.avatarX &&
        clickX <= this.avatarX + this.avatarWidth &&
        clickY >= this.avatarY &&
        clickY <= this.avatarY + this.avatarHeight
      ) {
        if (this.started === false) {
          this.avatarIndex += 1
          this.avatar.src = this.avatarList[this.avatarIndex % this.avatarList.length]
          this.ctx.clearRect(this.avatarX, this.avatarY, this.avatarWidth, this.avatarHeight)
        }
      }
    },
    makeBowl() {
      this.bowl = new Image()
      this.bowl.src = '/bowl.png'

      this.bowl.onload = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight)
      }
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.bowlWidth = this.canvas.width + this.canvas.width / 2
      this.bowlHeight = this.canvas.height * 0.75
      this.bowlX = this.canvas.width / 3
      this.conBottom = this.canvas.height - this.bowlHeight
      this.newBowlX = this.bowlX / -0.7
    },
    moveBowl() {
      if (this.bowlX > this.newBowlX) {
        requestAnimationFrame(this.moveBowl)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight)
        let moveBowlSpeed = this.canvas.width / 200
          this.bowlX -= moveBowlSpeed
        this.startBtnY -= moveBowlSpeed * 2
        if (this.avatarY <= this.newAvatarY) {
          this.avatarY += moveBowlSpeed
        } else {
          if (this.avatarX >= this.newAvatarX) {
            this.avatarX -= moveBowlSpeed
          }
        }
        if (this.avatarX <= this.newAvatarX) {
          this.done = true
        }
        this.started = true
        this.ctx.drawImage(
          this.startBtn,
          this.startBtnX,
          this.startBtnY,
          this.startBtnWidth,
          this.startBtnHeight
        )
        this.ctx.drawImage(
          this.avatar,
          this.avatarX,
          this.avatarY,
          this.avatarWidth,
          this.avatarHeight
        )
      }
    }
  },
}
</script>

<style scoped>
#con {
  background-color: rgb(255, 248, 226);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
}
</style>
