class Player {
  constructor() {
    this.gravity = 0.6;
    this.speed = 9;
    this.jumps = 0;
    this.x = 100;
    this.health=100;
    this.bloodGlucose=120;
  }
  setupPlayer() {
    this.y = height - 200; //cool falling effect
    this.width = game.playerImg.width;
    this.height = game.playerImg.height;
  }
  jump() {
    this.jumps += 1;
    if (this.jumps < 3) {
      this.speed = -11 ;
    }
  }
  drawPlayer() {
    this.speed += this.gravity;
    this.y += this.speed;
    //14 pixels from the bottom is where the grass ends!
    if (this.y >= height - game.playerImg.height-14) {
      this.y = height - game.playerImg.height-14;
      this.jumps = 0;
    }
    if (this.jumps>0) {
      image(game.playerJmp, this.x, this.y); //jumping character
    } else {
      image(game.playerImg, this.x, this.y);
    }
  }
}
