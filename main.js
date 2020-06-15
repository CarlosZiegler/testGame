console.log("hello world ");
const game = new Game();
// these thre function are p5 created and they are being called from p5 library! :)
function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(450, 300);
  game.setup();
}
function draw() {
  game.drawingGame();
}

function keyPressed() {
  if (keyCode == 32) {
    game.player.jump();
  }
}
