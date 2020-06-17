class CollisionText {
    constructor(food, index) {
        this.x = game.player.x;
        this.y = game.player.y-10;
        this.text1 = `${food}  GI: ${index}`;
        this.fade = 255;
        this.fadeAmount = 1;
      }
      drawText() {
          if (this.y>-15) {
              this.y-=1;
              this.x-=0.5;
          }
          if (this.fade<0) {
              this.fadeAmount=1;
          }
          if (this.fade>255) {
              this.fadeAmount=-10;
          }
          this.fade -= this.fadeAmount; 
          fill(0, 0, 0, this.fade)
          text(this.text1, this.x, this.y);
      }
}   