const game = new Game();
function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(450, 300);
  game.setup();
}
function draw() {
  game.drawGame();
}
function keyPressed() {
  if (keyCode == 32) {
    game.player.jump();
  }
}
