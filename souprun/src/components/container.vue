<script setup>
// import score from '../components/score.vue'
</script>
<template>
  <div>
    <!-- <score :started="started"/> -->
    <p>SCORE: {{ this.score }}</p>
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
      obbyImage: null,
      x: 0,
      y:0,
      height:0,
      width:0,
      speed:0,
      wait: false,
      a: 0,
      score: 0,
      catx: 0,
      caty: 0,
      cath: 0,
      catw: 0,
      i: 0,
      testerx:0,
      hippox:0,
      bunx: 0,
      gameOver:false,
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
    this.canvas.addEventListener('click', this.clicked)
    this.makeBowl()
    this.makeLeaderBoard()
    this.avatarList = ['/bun.png', '/cat.png', '/hippo.png', '/bundied.png', '/hippodead.png']
    this.makeAvatar()
    this.obbyImage = new Image()
    this.obbyImage.src = '/obby1.png'
    this.speed =this.canvas.width /100
    this.cath =this.canvas.width / 20
      this.catw =this.canvas.width / 20
      this.catx = this.canvas.width /12
      this.caty = this.canvas.width / 1.95
      this.hippox = this.canvas.width /5.3
      this.bunx = this.canvas.width /3.5
  },
  
  watch: {
    started(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.canvas.addEventListener('click', this.jump)
}, 1000);
        setTimeout(() => {
          this.spawnObstacle();
          this.startTimer();
}, 2000);
      }
    },
    gameOver(newVal){
      if (newVal === true){
        if(this.gameOver ===true){
          console.log("fewknjf")
        if(this.i === 0){
          this.i= 3
        }
        if(this.i === 2){
          this.i = 4
        }
        this.avatar.src = this.avatarList[this.i]
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
          this.ctx.drawImage(this.obbyImage, this.x, this.y, this.width, this.height);
          this.ctx.drawImage(
          this.avatar,
          this.avatarX,
          this.avatarY,
          this.avatarWidth,
          this.avatarHeight
        )
        }
      }
    }
  },
  methods: {
    clicked(){
      const clickX = event.offsetX
      const clickY = event.offsetY
      if (
        clickX >= this.avatarX &&
        clickX <= this.avatarX + this.avatarWidth &&
        clickY >= this.avatarY &&
        clickY <= this.avatarY + this.avatarHeight
      ) {
        if (this.started === false) {
          this.moveBowl()
        }
      }
      if (
        clickX >= this.catx &&
        clickX <= this.catx + this.catw &&
        clickY >= this.caty &&
        clickY <= this.caty + this.cath
      ) {
        if (this.started === false) {
          console.log("ok")
          this.i = 1
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
        this.ctx.drawImage(
          this.startBtn,
          this.startBtnX,
          0,
          this.startBtnWidth,
          this.startBtnHeight
        )
          this.makeAvatar()
        }
      }
      if (
        clickX >= this.hippox &&
        clickX <= this.hippox + this.catw &&
        clickY >= this.caty &&
        clickY <= this.caty + this.cath
      ) {
        if (this.started === false) {
          console.log("hippo")
          this.i = 2
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
        this.ctx.drawImage(
          this.startBtn,
          this.startBtnX,
          0,
          this.startBtnWidth,
          this.startBtnHeight
        )
          this.makeAvatar()
        }
      }
      if (
        clickX >= this.bunx &&
        clickX <= this.bunx + this.catw &&
        clickY >= this.caty &&
        clickY <= this.caty + this.cath
      ) {
        if (this.started === false) {
          console.log("hippo")
          this.i = 0
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
        this.ctx.drawImage(
          this.startBtn,
          this.startBtnX,
          0,
          this.startBtnWidth,
          this.startBtnHeight
        )
          this.makeAvatar()
        }
      }
    },
    o(){
      if(this.started === false){
        this.cath =this.canvas.width / 20
      this.catw =this.canvas.width / 20
      this.testerx = this.canvas.width /3.5
      this.caty = this.canvas.width / 1.95
      this.ctx.fillRect(this.testerx, this.caty, this.catw, this.cath)
      this.ctx.fillStyle = 'rgba(225,225,225,0.5)';
      requestAnimationFrame(this.o);
      }
    },
    collisionDetection() {
      if (
        this.avatarX < this.x + this.width &&
        this.avatarX + this.avatarWidth > this.x &&
        this.avatarY < this.y + this.height &&
        this.avatarY + this.avatarHeight > this.y
      ) {
        this.started = false;
        this.gameOver = true;
      }
    },
    startTimer() {
      setInterval(() => {
        if(this.started === true){
          this.score += 1;
        }
      }, 50);
    },
    velocity(){
      if(this.score< 1500){
        this.a = Math.floor(this.score/50) *2
      console.log(this.a)
      this.speed = this.canvas.width /(100 -this.a)
      console.log(this.speed)
      }
    },
    spawnObstacle() {
      this.wait = false
      this.x= this.canvas.width / 1.1,
    this.y= this.conBottom * 2,
    this.height= this.canvas.height / 10,
    this.width= this.canvas.width / 9
      if (this.started) {
        this.ctx.drawImage(this.obbyImage, this.x, this.y, this.width, this.height);
        this.moveObstacles();
      }
    },
    moveObstacles() {
      const delay = Math.floor(Math.random() * 0) + 1000;
      if (this.started) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
      this.ctx.drawImage(this.avatar, this.avatarX, this.avatarY, this.avatarWidth, this.avatarHeight);
      if(this.x >= this.canvas.width / -9){
        this.x -= this.speed
      this.ctx.drawImage(this.obbyImage, this.x, this.y, this.width, this.height);
      }else{
        this.wait = true
        setTimeout(() => {
          this.velocity();
          this.x = this.canvas.width / 1.1
          this.wait = false
    }, delay);
      }
      if(this.wait === false){
        requestAnimationFrame(this.moveObstacles);
      }else{
        setTimeout(() => {
          requestAnimationFrame(this.moveObstacles);
    }, delay);
      }
      this.collisionDetection()
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
          this.avatarY += this.canvas.width /150
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
          if (this.avatarY >= this.conBottom/-4  ) {
          this.avatarY -= this.canvas.width /150
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
      this.ctx.drawImage(this.obbyImage, this.x, this.y, this.width, this.height);
    },
    resizeplz() {
      this.canvas.width = window.innerWidth * 0.75
      this.canvas.height = this.canvas.width * 0.6
  
        this.conBottom =this.canvas.width /7
      this.bowlWidth = this.canvas.width + this.canvas.width / 2
      this.bowlHeight = this.canvas.height * 0.75
      this.bowlX = this.canvas.width / 3
      this.newBowlX = this.bowlX / -0.7
      this.startBtnWidth = this.canvas.width / 2.45
      this.startBtnHeight = this.canvas.width / 1.7
      this.startBtnX = this.canvas.width * 0.001
      this.startBtnY = 0
      this.avatarWidth = this.canvas.width / 5
      this.avatarHeight = this.canvas.height / 4
      this.avatarX = this.canvas.width / 1.5
      this.avatarY = this.conBottom - this.canvas.width * 0.1
      this.newAvatarY = this.conBottom + this.canvas.width * 0.05
      this.ctx.drawImage(this.avatar, this.avatarX, this.avatarY, this.avatarWidth, this.avatarHeight);
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight)
        this.ctx.drawImage(
          this.startBtn,
          this.startBtnX,
          this.startBtnY,
          this.startBtnWidth,
          this.startBtnHeight
        )
        this.started = false
      this.score = 0
    },
    makeAvatar() {
      this.avatar = new Image()
      this.avatar.src = this.avatarList[this.i]
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
    makeLeaderBoard() {
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
    // avatarClick(event) {
    //   const clickX = event.offsetX
    //   const clickY = event.offsetY
    //   if (
    //     clickX >= this.avatarX &&
    //     clickX <= this.avatarX + this.avatarWidth &&
    //     clickY >= this.avatarY &&
    //     clickY <= this.avatarY + this.avatarHeight
    //   ) {
    //     if (this.started === false) {
    //       this.moveBowl()
    //     }
    //   }
    // },
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
      this.conBottom = this.canvas.width /7
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
