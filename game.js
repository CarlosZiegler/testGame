class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
  }
  preloadGame() {
    this.bgImgs = [
      { src: loadImage("assets/background/bg01.png"), x: 0, speed: 1 },
      { src: loadImage("assets/background/bg02.png"), x: 0, speed: 2 },
      { src: loadImage("assets/background/bg03.png"), x: 0, speed: 3 },
      { src: loadImage("assets/background/bg04.png"), x: 0, speed: 4 },
      { src: loadImage("assets/background/bg05.png"), x: 0, speed: 5 },
      { src: loadImage("assets/background/bg05.png"), x: 0, speed: 6 }
    ];
    this.playerImg = loadImage("assets/player/run.gif");
    this.playerJmp = loadImage("assets/player/midair.gif")
    this.food = [
      {name: 'aubergine', src: loadImage("assets/food/aubergine.png"), GI: 20, health: 5},
      {name: 'avocado', src: loadImage("assets/food/avocado.png"), GI: 20, health: 5},
      {name: 'bellPepper', src: loadImage("assets/food/bellPepper.png"), GI: 20, health: 5},
      {name: 'broccoli', src: loadImage("assets/food/broccoli.png"), GI: 20, health: 5},
      {name: 'cheese', src: loadImage("assets/food/cheese.png"), GI: 20, health: 5},
      {name: 'cherries', src: loadImage("assets/food/cherries.png"), GI: 20, health: 5},
      {name: 'chicken', src: loadImage("assets/food/chicken.png"), GI: 20, health: 5},
      {name: 'chili', src: loadImage("assets/food/chili.png"), GI: 20, health: 5},
      {name: 'coconut', src: loadImage("assets/food/coconut.png"), GI: 20, health: 5},
      {name: 'coffee', src: loadImage("assets/food/coffee.png"), GI: 20, health: 5},
      {name: 'corn', src: loadImage("assets/food/corn.png"), GI: 20, health: 5},
      {name: 'cucumber', src: loadImage("assets/food/cucumber.png"), GI: 20, health: 5},
      {name: 'egg', src: loadImage("assets/food/egg.png"), GI: 20, health: 5},
      {name: 'fish', src: loadImage("assets/food/fish.png"), GI: 20, health: 5},
      {name: 'greenApple', src: loadImage("assets/food/greenApple.png"), GI: 20, health: 5},
      {name: 'greenPeas', src: loadImage("assets/food/greenPeas.png"), GI: 20, health: 5},
      {name: 'hazelnut', src: loadImage("assets/food/hazelnut.png"), GI: 20, health: 5},
      {name: 'hotdog', src: loadImage("assets/food/hotdog.png"), GI: 20, health: 5},
      {name: 'insulin', src: loadImage("assets/food/insulin.png"), GI: 20, health: 5},
      {name: 'lettuce', src: loadImage("assets/food/lettuce.png"), GI: 20, health: 5},
      {name: 'mushroom', src: loadImage("assets/food/mushroom.png"), GI: 20, health: 5},
      {name: 'orange', src: loadImage("assets/food/orange.png"), GI: 20, health: 5},
      {name: 'pear', src: loadImage("assets/food/pear.png"), GI: 20, health: 5},
      {name: 'pineapple', src: loadImage("assets/food/pineapple.png"), GI: 20, health: 5},
      {name: 'pomegranate', src: loadImage("assets/food/pomegranate.png"), GI: 20, health: 5},
      {name: 'potatoes', src: loadImage("assets/food/potatoes.png"), GI: 20, health: 5},
      {name: 'pumpkin', src: loadImage("assets/food/pumpkin.png"), GI: 20, health: 5},
      {name: 'radish', src: loadImage("assets/food/radish.png"), GI: 20, health: 5},
      {name: 'raspberry', src: loadImage("assets/food/raspberry.png"), GI: 20, health: 5},
      {name: 'redApple', src: loadImage("assets/food/redApple.png"), GI: 20, health: 5},
      {name: 'salami', src: loadImage("assets/food/salami.png"), GI: 20, health: 5},
      {name: 'shrimp', src: loadImage("assets/food/shrimp.png"), GI: 20, health: 5},
      {name: 'steak', src: loadImage("assets/food/steak.png"), GI: 20, health: 5},
      {name: 'strawberry', src: loadImage("assets/food/strawberry.png"), GI: 20, health: 5},
      {name: 'tomato', src: loadImage("assets/food/tomato.png"), GI: 20, health: 5},{name: 'waffle', src: loadImage("assets/food/waffle.png"), GI: 20, health: 5},
      {name: 'toast', src: loadImage("assets/food/toast.png"), GI: 20, health: 5},
      {name: 'sandwich', src: loadImage("assets/food/sandwich.png"), GI: 20, health: 5},
      {name: 'pizza', src: loadImage("assets/food/pizza.png"), GI: 20, health: 5},
      {name: 'popcorn', src: loadImage("assets/food/popcorn.png"), GI: 20, health: 5},
      {name: 'noodles', src: loadImage("assets/food/noodles.png"), GI: 20, health: 5},
      {name: 'banana', src: loadImage("assets/food/banana.png"), GI: 20, health: 5},
      {name: 'iceCream', src: loadImage("assets/food/iceCream.png"), GI: 20, health: 5},
      {name: 'fries', src: loadImage("assets/food/fries.png"), GI: 20, health: 5},
      {name: 'dumplings', src: loadImage("assets/food/dumplings.png"), GI: 20, health: 5},
      {name: 'pasta', src: loadImage("assets/food/pasta.png"), GI: 20, health: 5},
      {name: 'nigiri', src: loadImage("assets/food/nigiri.png"), GI: 20, health: 5},
      {name: 'lollipop', src: loadImage("assets/food/lollipop.png"), GI: 20, health: 5},
      {name: 'maki', src: loadImage("assets/food/maki.png"), GI: 20, health: 5},
      {name: 'donut', src: loadImage("assets/food/donut.png"), GI: 20, health: 5},
      {name: 'bretzel', src: loadImage("assets/food/bretzel.png"), GI: 20, health: 5},
      {name: 'burger', src: loadImage("assets/food/burger.png"), GI: 20, health: 5},
      {name: 'cake', src: loadImage("assets/food/cake.png"), GI: 20, health: 5},
      {name: 'chocolate', src: loadImage("assets/food/chocolate.png"), GI: 20, health: 5},
      {name: 'chocolateCake', src: loadImage("assets/food/chocolateCake.png"), GI: 20, health: 5},
      {name: 'croissant', src: loadImage("assets/food/croissant.png"), GI: 20, health: 5}
    ]
  }
  setup() {
    this.player.setupPlayer();
  }
  drawGame() {
    clear();
    frameRate(30);
    this.background.drawBg();
    this.player.drawPlayer();
//randomizing obstacles & unhealthy foods are prevalent in the bottom of the canvas.
    if (frameCount % 30 === 0 && frameCount % 60 !== 0) {
      let randomY = random(0, height - 55);
      let randomO = Math.floor(random(0, 34));
      console.log(randomO)
      this.obstacles.push(new Obstacles(randomY,randomO));
    }
    if (frameCount % 60 === 0) {
      let randomY = random(height-75, height - 32);
      let randomO = Math.floor(random(35, 55));
      console.log(randomO)
      this.obstacles.push(new Obstacles(randomY,randomO));
    }
    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacles();
      obstacle.checkCollision(this.player);
    });
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.checkCollision(this.player)) {
        return false;
      } else {
        return true;
      }
    });
  }
}
