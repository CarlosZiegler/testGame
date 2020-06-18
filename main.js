const width=450;
const height=300;
const game = new Game();
let playGame=false;
let gameIntro=false;
let soundtrack, jumpSound, goodFood, badFood, insulinVialCollect, insulinVialUse, dead;
function preload() {
  game.preloadGame();
  introMusic = loadSound("assets/sound/Intro.mp3");
  goodFood = loadSound("assets/sound/hpUp.wav");
  badFood = loadSound("assets/sound/hpDown.wav");
  insulinVialCollect = loadSound("assets/sound/insulinFound.wav");
  insulinVialUse = loadSound("assets/sound/sugarDown.wav");
  jumpSound = loadSound("assets/sound/jump.wav");
  dead = loadSound("assets/sound/dead.wav");
}
function setup() {
  createCanvas(width, height);
  game.setup();
    //introMusic.play();
}
function draw() {
  if (playGame) {
    game.drawGame();
    if (game.player.health<=0) {
      dead.play();
      game.endGame(`You died from bad diet. \n Insulin doesn't save all the problems.`);
      noLoop();
      console.log('You died.');
    } else if (game.player.bloodGlucose>=600) {
      dead.play();
      game.endGame('You died of diabetes mellitus. \n Try avoiding high GI food next time.');
      noLoop();
      console.log('You died.');
    }
  } else {
    game.startGame();
  }
}
function keyPressed() {
  playGame=true;
  if (keyCode == 32 && playGame) {
    game.player.jump();
  }
  if (keyCode == 73 && playGame) {
    game.player.useInsulin();
  }
}

