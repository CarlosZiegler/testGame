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
    this.aubergine = loadImage("assets/food/aubergine.png");
    this.avocado = loadImage("assets/food/avocado.png");
    this.banana = loadImage("assets/food/banana.png");
    this.bellPepper = loadImage("assets/food/bellPepper.png");
    this.bretzel = loadImage("assets/food/bretzel.png");
    this.broccoli = loadImage("assets/food/broccoli.png");
    this.burger = loadImage("assets/food/burger.png");
    this.cake = loadImage("assets/food/cake.png");
    this.cheese = loadImage("assets/food/cheese.png");
    this.cherries = loadImage("assets/food/cherries.png");
    this.chicken = loadImage("assets/food/chicken.png");
    this.chili = loadImage("assets/food/chili.png");
    this.chocolate = loadImage("assets/food/chocolate.png");
    this.chocolateCake = loadImage("assets/food/chocolateCake.png");
    this.coconut = loadImage("assets/food/coconut.png");
    this.coffee = loadImage("assets/food/coffee.png");
    this.corn = loadImage("assets/food/corn.png");
    this.croissant = loadImage("assets/food/croissant.png");
    this.cucumber = loadImage("assets/food/cucumber.png");
    this.donut = loadImage("assets/food/donut.png");
    this.dumplings = loadImage("assets/food/dumplings.png");
    this.egg = loadImage("assets/food/egg.png");
    this.fish = loadImage("assets/food/fish.png");
    this.fries = loadImage("assets/food/fries.png");
    this.greenApple = loadImage("assets/food/greenApple.png");
    this.greenPeas = loadImage("assets/food/greenPeas.png");
    this.hazelnut = loadImage("assets/food/hazelnut.png");
    this.hotdog = loadImage("assets/food/hotdog.png");
    this.iceCream = loadImage("assets/food/iceCream.png");
    this.insulin = loadImage("assets/food/insulin.png");
    this.lettuce = loadImage("assets/food/lettuce.png");
    this.lollipop = loadImage("assets/food/lollipop.png");
    this.maki = loadImage("assets/food/maki.png");
    this.mushroom = loadImage("assets/food/mushroom.png");
    this.nigiri = loadImage("assets/food/nigiri.png");
    this.noodles = loadImage("assets/food/noodles.png");
    this.orange = loadImage("assets/food/orange.png");
    this.pasta = loadImage("assets/food/pasta.png");
    this.pear = loadImage("assets/food/pear.png");
    this.pineapple = loadImage("assets/food/pineapple.png");
    this.pizza = loadImage("assets/food/pizza.png");
    this.pomegranate = loadImage("assets/food/pomegranate.png");
    this.popcorn = loadImage("assets/food/popcorn.png");
    this.potatoes = loadImage("assets/food/potatoes.png");
    this.pumpkin = loadImage("assets/food/pumpkin.png");
    this.radish = loadImage("assets/food/radish.png");
    this.raspberry = loadImage("assets/food/raspberry.png");
    this.redApple = loadImage("assets/food/redApple.png");
    this.salami = loadImage("assets/food/salami.png");
    this.sandwich = loadImage("assets/food/sandwich.png");
    this.shrimp = loadImage("assets/food/shrimp.png");
    this.steak = loadImage("assets/food/steak.png");
    this.strawberry = loadImage("assets/food/strawberry.png");
    this.toast = loadImage("assets/food/toast.png");
    this.tomato = loadImage("assets/food/tomato.png");
    this.waffle = loadImage("assets/food/waffle.png");
  }
  setup() {
    this.player.setupPlayer();
  }
  drawingGame() {
    clear();
    frameRate(20);
    this.background.drawBg();
    this.player.drawingThePlayer();

    if (frameCount % 20 === 0) {
      let randomNumber = random(0, height - 60);
      this.obstacles.push(new Obstacles(randomNumber));
    }
    this.obstacles.forEach((elem) => {
      elem.drawingObstacles();
      elem.checkCollision(this.player);
    });
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.checkCollision(this.player)) {
        console.log("happening");
        return false;
      } else {
        return true;
      }
    });
  }
}
