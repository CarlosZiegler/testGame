const width=450;
const height=300;
const game = new Game();
function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(width, height);
  game.setup();
}
function draw() {
  game.drawGame();
  if (game.player.health<=0) {
    game.endGame('You died of bad diet.');
    noLoop();
    console.log('You died.');
  } else if (game.player.bloodGlucose>=600) {
    game.endGame('You died of diabetes mellitus.');
    noLoop();
    console.log('You died.');
  }
}
function keyPressed() {
  if (keyCode == 32) {
    game.player.jump();
  }
  if (keyCode == 73) {
    game.player.useInsulin();
  }
}

