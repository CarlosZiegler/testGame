class Player {
  constructor() {
    this.gravity = 0.7;
    this.speed = 9;
    this.jumps = 0;
    this.x = 150;
    this.health=100;
    this.bloodGlucose=120;
    this.insulin=1;
  }
  setupPlayer() {
    this.y = height - 200; //cool falling effect
    this.width = game.playerImg.width;
    this.height = game.playerImg.height;
  }
  jump() {
    this.jumps += 1;
    if (this.jumps < 3) {
      this.speed = -13 ;
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
  changeStats(hp, sugar) {
    if (sugar<0) {
      this.insulin++;
    } else {
      this.health+=hp;
      this.bloodGlucose+=sugar;
    }
  }
  drawStats() {
    line(0, 15, this.health, 15);
    line(0, 30, this.bloodGlucose/1.52, 30);
  }
  drawWords() {
    fill(0);
    text('health', 3, 7);
    fill(0);
    text('blood glucose', 3, 22);
  }
  drawInsulin() {
    for (let i=0; i<this.insulin; i++) {
image(game.insulinImg, 3+i*(game.insulinImg.width*0.7+2), 40, game.insulinImg.width*0.7, game.insulinImg.height*0.7)
    }
  }
  useInsulin() {
    if (this.insulin>0) {
      this.insulin--;
      this.bloodGlucose-=100;
    }
  }
}

