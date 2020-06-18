class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.messages = [];
  }
  preloadGame() {
    this.font1=loadFont('assets/fonts/BitPotion.ttf');
    this.font2=loadFont('assets/fonts/ThaleahFat.ttf');
    this.bgImgs = [
      { src: loadImage("assets/background/bg01.png"), x: 0, speed: 1 },
      { src: loadImage("assets/background/bg02.png"), x: 0, speed: 2 },
      { src: loadImage("assets/background/bg03.png"), x: 0, speed: 3 },
      { src: loadImage("assets/background/bg04.png"), x: 0, speed: 4 },
      { src: loadImage("assets/background/bg05.png"), x: 0, speed: 5 },
      { src: loadImage("assets/background/bg05.png"), x: 0, speed: 6 }
    ];
    this.playerImg = loadImage("assets/player/run.gif");
    this.playerJmp = loadImage("assets/player/midair.gif");
    this.playerFall = loadImage("assets/player/landing.png")
    this.insulinImg = loadImage("assets/food/insulin.png");
    this.food = [
      {name: 'aubergine', src: loadImage("assets/food/aubergine.png"), gi: 15, health: 2},
      {name: 'avocado', src: loadImage("assets/food/avocado.png"), gi: 15, health: 5},
      {name: 'red pepper', src: loadImage("assets/food/bellPepper.png"), gi: 18, health: 5},
      {name: 'broccoli', src: loadImage("assets/food/broccoli.png"), gi: 10, health: 5},
      {name: 'cheese', src: loadImage("assets/food/cheese.png"), gi: 27, health: 1},
      {name: 'cherries', src: loadImage("assets/food/cherries.png"), gi: 62, health: 6},
      {name: 'baked chicken', src: loadImage("assets/food/chicken.png"), gi: 2, health: 2},
      {name: 'chili pepper', src: loadImage("assets/food/chili.png"), gi: 45, health: 5},
      {name: 'coconut', src: loadImage("assets/food/coconut.png"), gi: 10, health: 1},
      {name: 'coffee', src: loadImage("assets/food/coffee.png"), gi: 0, health: -5},
      {name: 'corn', src: loadImage("assets/food/corn.png"), gi: 52, health: -5},
      {name: 'cucumber', src: loadImage("assets/food/cucumber.png"), gi: 15, health: 2},
      {name: 'egg', src: loadImage("assets/food/egg.png"), gi: 0, health: 1},
      {name: 'fish', src: loadImage("assets/food/fish.png"), gi: 0, health: 3},
      {name: 'green apple', src: loadImage("assets/food/greenApple.png"), gi: 35, health: 3},
      {name: 'green peas', src: loadImage("assets/food/greenPeas.png"), gi: 28, health: 3},
      {name: 'hazelnut', src: loadImage("assets/food/hazelnut.png"), gi: 15, health: 2},
      {name: 'insulin', src: loadImage("assets/food/insulin.png"), gi: -100, health: 5},
      {name: 'lettuce', src: loadImage("assets/food/lettuce.png"), gi: 32, health: 5},
      {name: 'mushroom', src: loadImage("assets/food/mushroom.png"), gi: 32, health: 5},
      {name: 'orange', src: loadImage("assets/food/orange.png"), gi: 42, health: 5},
      {name: 'pear', src: loadImage("assets/food/pear.png"), gi: 38, health: 5},
      {name: 'pineapple', src: loadImage("assets/food/pineapple.png"), gi: 59, health: 5},
      {name: 'pomegranate', src: loadImage("assets/food/pomegranate.png"), gi: 67, health: 5},
      {name: 'potatoes', src: loadImage("assets/food/potatoes.png"), gi: 60, health: 5},
      {name: 'pumpkin', src: loadImage("assets/food/pumpkin.png"), gi: 75, health: 5},
      {name: 'radish', src: loadImage("assets/food/radish.png"), gi: 32, health: 5},
      {name: 'raspberry', src: loadImage("assets/food/raspberry.png"), gi: 25, health: 5},
      {name: 'redApple', src: loadImage("assets/food/redApple.png"), gi: 38, health: 5},
      {name: 'salami', src: loadImage("assets/food/salami.png"), gi: 28, health: 5},
      {name: 'shrimp', src: loadImage("assets/food/shrimp.png"), gi: 50, health: 5},
      {name: 'steak', src: loadImage("assets/food/steak.png"), gi: 0, health: 5},
      {name: 'strawberry', src: loadImage("assets/food/strawberry.png"), gi: 40, health: 5},
      {name: 'tomato', src: loadImage("assets/food/tomato.png"), gi: 38, health: 5},
      {name: 'waffle', src: loadImage("assets/food/waffle.png"), gi: 76, health: -18},
      {name: 'toast', src: loadImage("assets/food/toast.png"), gi: 88, health: -12},
      {name: 'sandwich', src: loadImage("assets/food/sandwich.png"), gi: 56, health: -1},
      {name: 'pizza', src: loadImage("assets/food/pizza.png"), gi: 30, health: -8},
      {name: 'popcorn', src: loadImage("assets/food/popcorn.png"), gi: 55, health: -4},
      {name: 'noodles', src: loadImage("assets/food/noodles.png"), gi: 42, health: -9},
      {name: 'banana', src: loadImage("assets/food/banana.png"), gi: 52, health: 1},
      {name: 'ice cream', src: loadImage("assets/food/iceCream.png"), gi: 61, health: -12},
      {name: 'fries', src: loadImage("assets/food/fries.png"), gi: 75, health: -9},
      {name: 'dumplings', src: loadImage("assets/food/dumplings.png"), gi: 63, health: 0},
      {name: 'nigiri', src: loadImage("assets/food/nigiri.png"), gi: 57, health: 0},
      {name: 'lollipop', src: loadImage("assets/food/lollipop.png"), gi: 85, health: -15},
      {name: 'maki', src: loadImage("assets/food/maki.png"), gi: 55, health: 0},
      {name: 'donut', src: loadImage("assets/food/donut.png"), gi: 76, health: -20},
      {name: 'bretzel', src: loadImage("assets/food/bretzel.png"), gi: 80, health: -15},
      {name: 'burger', src: loadImage("assets/food/burger.png"), gi: 66, health: -14},
      {name: 'cake', src: loadImage("assets/food/cake.png"), gi: 74, health: -8},
      {name: 'milk chocolate', src: loadImage("assets/food/chocolate.png"), gi: 42, health: -3},
      {name: 'chocolate cake', src: loadImage("assets/food/chocolateCake.png"), gi: 38, health: -10},
      {name: 'croissant', src: loadImage("assets/food/croissant.png"), gi: 67, health: -12},
      {name: 'hotdog', src: loadImage("assets/food/hotdog.png"), gi: 80, health: -10},
      {name: 'insulin', src: loadImage("assets/food/insulin.png"), gi: -100, health: 5}
    ]
  }
  setup() {
    this.player.setupPlayer();
  }
  drawGame() {
    clear();
    frameRate(30);
    textFont(this.font1);
    textSize(18);
    textAlign(CENTER, CENTER);
    this.background.drawBg();
    this.player.drawPlayer();
//randomizing obstacles & unhealthy foods are prevalent in the bottom of the canvas.
    if (frameCount % 30 === 0 && frameCount % 60 !== 0) {
      let randomY = random(50, height - 60);
      let randomO = Math.floor(random(0, 34));
      this.obstacles.push(new Obstacles(randomY,randomO));
    }
    if (frameCount % 60 === 0) {
      let randomY = random(height-75, height - 32);
      let randomO = Math.floor(random(35, 56));
      this.obstacles.push(new Obstacles(randomY,randomO));
    }
    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacles();
      obstacle.checkCollision(this.player);
    });
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.checkCollision(this.player)) {
        console.log(obstacle.name);
        this.messages.push(new CollisionText(obstacle.name, obstacle.gi));
        this.player.changeStats(obstacle.health, obstacle.gi);
        return false;
      } else {
        return true;
      }
    }); 
    this.messages.forEach((message) => {
      message.drawText();
    })
    this.player.drawStats();
    textAlign(LEFT);
    this.player.drawWords(width * 0.25);
    this.player.drawInsulin();
  }
  endGame(option) {
    fill(255);
    rect(50, 50, width-100, height-100);
    textFont(this.font2);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(24);
    text('GAME OVER.', width/2, height/2-30)
    textSize(18);
    text(option, width/2, height/2+30)
  }
  startGame() {
    fill(255);
    rect(0, 0, width, height);
    textFont(this.font2);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(24);
    text('READY FOR SOME GLUCOSE?', width/2, height/2-30)
    textSize(18);
    text('PRESS ANY KEY TO START.', width/2, height/2+30)
  }
}
