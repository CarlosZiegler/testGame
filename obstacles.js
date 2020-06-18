class Obstacles {
  constructor(randomY, randomO) {
    this.x = width;
    this.y = randomY;
    this.item=game.food[randomO];
    this.gi=this.item.gi;
    this.name=this.item.name;
    this.health=this.item.health;
    this.img = this.item.src;
    this.width = this.img.width;
    this.height = this.img.height;
  }
  checkCollision(player) {
    let leftSide = this.x-5;
    let rightSide = this.x + this.width+5;
    let playerLeftSide = game.player.x-25;
    let playerRightSide = game.player.x + game.player.width+25;
    let topSide = this.y-5;
    let bottomSide = this.y + this.height+5;
    let playerTopSide = game.player.y-25;
    let playerBottomSide = game.player.y + game.player.height+25;
    let xCollision =
      leftSide > playerLeftSide &&
      leftSide < playerRightSide &&
      rightSide > playerLeftSide  &&
      rightSide < playerRightSide;
    let yCollision =
      topSide > playerTopSide &&
      topSide < playerBottomSide &&
      bottomSide > playerTopSide &&
      bottomSide < playerBottomSide;
    if (yCollision && xCollision) {
      return true;
    } else {
      return false;
    }
  }
  drawObstacles() {
    this.x -= 2;
    this.yMod=1;
    if (frameCount%30<15) {
      this.yMod=-1;
    } else {this.yMod=1}
    this.y+=this.yMod;
    image(this.img, this.x, this.y, this.width, this.height);
  }
}
