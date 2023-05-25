<template>
  <div>
    <canvas id="con"></canvas>
  </div>
</template>

<script>
export default {
  data() { //very sorry for all these variables .-.
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
    };
  },
  mounted() {
    this.canvas = document.querySelector('canvas');
    this.canvas.width = window.innerWidth * 0.75;
    this.canvas.height = this.canvas.width * 0.6;
    window.addEventListener('resize', this.resizeplz);
    this.ctx = this.canvas.getContext('2d')
    this.conRect = this.canvas.getBoundingClientRect();
    this.conBottom = this.conRect.bottom
    this.canvas.addEventListener('click', this.startButtonClick);
    this.canvas.addEventListener('click', this.avatarClick);
    this.makeBowl();
    this.makeStartButton();
    this.avatarList = ['/bun.png', '/cat.png', '/hippo.png']
    this.makeAvatar();
  },
  methods: {
    resizeplz() {
      this.canvas.width = window.innerWidth * 0.75;
      this.canvas.height = this.canvas.width * 0.6;
      this.conBottom = this.canvas.height - this.bowlHeight;
      this.bowlWidth = this.canvas.width + (this.canvas.width/2)
      this.bowlHeight = this.canvas.height * .75;
      this.bowlX = this.canvas.width/3
      this.newBowlX = this.bowlX/-.7
      this.startBtnWidth = this.canvas.width/4
      this.startBtnHeight = this.canvas.width/9;
      this.startBtnX = this.canvas.width * .09
      this.startBtnY = this.conBottom + this.canvas.width * .23
      if(this.started === true){
        this.ctx.drawImage(this.bowl, this.newBowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
      }else{
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
        this.ctx.drawImage(this.startBtn,this.startBtnX,this.startBtnY,this.startBtnWidth,this.startBtnHeight);
      }
    },
    makeAvatar(){
      this.avatar = new Image();
      this.avatar.src = this.avatarList[this.avatarIndex]
      this.avatar.onload = () => {
        this.ctx.drawImage(this.avatar,this.avatarX,this.avatarY,this.avatarWidth,this.avatarHeight);
      };
      this.avatarWidth = this.canvas.width/5
      this.avatarHeight = this.canvas.height/4;
      this.avatarX = this.canvas.width/1.5
      this.avatarY = this.conBottom - this.canvas.width * .1
      this.newAvatarY = this.conBottom + this.canvas.width * .05
    },
    makeStartButton(){
      this.startBtn = new Image();
      this.startBtn.src = "/start.png"; //placeholderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr ahhhh
      this.startBtn.onload = () => {
        this.ctx.drawImage(this.startBtn,this.startBtnX,this.startBtnY,this.startBtnWidth,this.startBtnHeight);
      };
      this.startBtnWidth = this.canvas.width/4
      this.startBtnHeight = this.canvas.width/9;
      this.startBtnX = this.canvas.width * .09
      this.startBtnY = this.conBottom + this.canvas.width * .23
    },
    startButtonClick(event) {
      const clickX = event.offsetX;
      const clickY = event.offsetY;
    if (
      clickX >= this.startBtnX &&
      clickX <= this.startBtnX + this.startBtnWidth &&
      clickY >= this.startBtnY &&
      clickY <= this.startBtnY + this.startBtnHeight
    ) {
      this.moveBowl(); // Execute moveBowl function
    }
  },
    avatarClick(event){
      const clickX = event.offsetX;
      const clickY = event.offsetY;
      if (
      clickX >= this.avatarX &&
      clickX <= this.avatarX + this.avatarWidth &&
      clickY >= this.avatarY &&
      clickY <= this.avatarY + this.avatarHeight
    ) {
      this.avatarIndex += 1;
      this.avatar.src = this.avatarList[this.avatarIndex % this.avatarList.length]
      this.ctx.clearRect(this.avatarX, this.avatarY, this.avatarWidth, this.avatarHeight);
    }
    },
    makeBowl() {
      this.bowl = new Image();
      this.bowl.src = '/bowl.png';

      this.bowl.onload = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
      };
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.bowlWidth = this.canvas.width + (this.canvas.width/2)
      this.bowlHeight = this.canvas.height * .75;
      this.bowlX = this.canvas.width/3
      this.conBottom = this.canvas.height - this.bowlHeight;
      this.newBowlX = this.bowlX/-.7
    },
    moveBowl(){
      if (this.bowlX > this.newBowlX){
        requestAnimationFrame(this.moveBowl);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.bowl, this.bowlX, this.conBottom, this.bowlWidth, this.bowlHeight);
      let moveBowlSpeed = this.canvas.width/200
      setTimeout(() => {
        this.bowlX -= moveBowlSpeed
      }, 1000);
      this.startBtnY -= moveBowlSpeed
      if(this.avatarY <= this.conBottom + this.canvas.width * .05){
        this.avatarY += moveBowlSpeed/2
      }
      this.started = true
      this.ctx.drawImage(this.startBtn,this.startBtnX,this.startBtnY,this.startBtnWidth,this.startBtnHeight);
      this.ctx.drawImage(this.avatar,this.avatarX,this.avatarY,this.avatarWidth,this.avatarHeight);
      }
    }
  }
};
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
