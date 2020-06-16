class CollisionText {
    constructor(food, index) {
        this.x = game.player.x;
        this.y = game.player.y-10;
        this.text1 = `${food}  GI: ${index}`;
      }
      drawText() {
          if (this.y>-15) {
              this.y-=1;
              this.x-=0.5;
          }
          text(this.text1, this.x, this.y);
      }
}   