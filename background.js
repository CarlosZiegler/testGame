class Background {
  constructor() {}
  drawBg() {
    game.bgImgs.forEach(function (bg) {
      bg.x -= bg.speed;
      image(bg.src, bg.x, 0, width, height);
      image(bg.src, bg.x + width, 0, width, height);
      if (bg.x <= -width) {
        bg.x = 0;
      }
    });
  }
}
