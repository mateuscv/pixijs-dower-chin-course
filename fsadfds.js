let app;
const NORMAL = 0xffffff;
const OVER = 0x00ff00;
const DOWN = 0xff0000;

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  let rect = new PIXI.Graphics();
  rect.beginFill(NORMAL);
  rect.drawRect(app.view.width / 2 - 100, app.view.height / 2 - 100, 200, 200);
  rect.endFill();
  rect.interactive = true;
  rect.buttonMode = true;
  rect.on("pointerup", doPointerUp);
  rect.on("pointerdown", doPointerDown);
  rect.on("pointerover", doPointerOver);
  rect.on("pointerout", doPointerOut);

  app.stage.addChild(rect);

  app.ticker.add(gameLoop);
};

function gameLoop(delta) {}

function doPointerUp() {
  console.log("up");
}

function doPointerDown() {
  console.log("down");
  this.tint = DOWN;
}

function doPointerOver() {
  console.log("over");
}
function doPointerOut() {
  console.log("out");
}
