let app;
let player;
let keys = {};
let keysDiv;
let playerSheet = {};

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  app.loader.add("viking", "images/viking.png");
  app.loader.load(doneLoading);

  keysDiv = document.querySelector("#keys");

  //kb event handlers
  window.addEventListener("keydown", keysDown);
  window.addEventListener("keyup", keysUp);

  /*app.stage.interactive = true;
        app.stage.on("pointermove", movePlayer);*/
};

function doneLoading(e) {
  createPlayerSheet();
  createPlayer();
  app.ticker.add(gameLoop);
}

function createPlayerSheet() {
  let ssheet = new PIXI.BaseTexture.from(app.loader.resources["viking"].url);
  let w = 26;
  let h = 36;

  playerSheet["standSouth"] = [
    new PIXI.Texture(ssheet, new PIXI.Rectangle(1 * w, 0, w, h)),
  ];

  playerSheet["standWest"] = [
    new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w, 0, w, h)),
  ];
  playerSheet["standEast"] = [
    new PIXI.Texture(ssheet, new PIXI.Rectangle(7 * w, 0, w, h)),
  ];
  playerSheet["standNorth"] = [
    new PIXI.Texture(ssheet, new PIXI.Rectangle(10 * w, 0, w, h)),
  ];

  playerSheet["walkSouth"] = [
    new PIXI.Texture(ssheet, new PIXI.Rectangle(0 * w, 0, w, h)),
    new PIXI.Texture(ssheet, new PIXI.Rectangle(1 * w, 0, w, h)),
    new PIXI.Texture(ssheet, new PIXI.Rectangle(2 * w, 0, w, h)),
  ];
  playerSheet["walkWest"] = [
    new PIXI.Texture(ssheet, new PIXI.Rectangle(3 * w, 0, w, h)),
    new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w, 0, w, h)),
    new PIXI.Texture(ssheet, new PIXI.Rectangle(5 * w, 0, w, h)),
  ];
  playerSheet["walkEast"] = [
    new PIXI.Texture(ssheet, new PIXI.Rectangle(6 * w, 0, w, h)),
    new PIXI.Texture(ssheet, new PIXI.Rectangle(7 * w, 0, w, h)),
    new PIXI.Texture(ssheet, new PIXI.Rectangle(8 * w, 0, w, h)),
  ];
  playerSheet["walkNorth"] = [
    new PIXI.Texture(ssheet, new PIXI.Rectangle(9 * w, 0, w, h)),
    new PIXI.Texture(ssheet, new PIXI.Rectangle(10 * w, 0, w, h)),
    new PIXI.Texture(ssheet, new PIXI.Rectangle(11 * w, 0, w, h)),
  ];
}

function createPlayer() {
  player = new PIXI.AnimatedSprite(playerSheet.walkSouth);
  player.anchor.set(0.5);
  player.animationSpeed = 0.1;
  player.loop = true;
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;
  app.stage.addChild(player);
  player.play();
}
// kb interactivity
function keysDown(e) {
  keys[e.keyCode] = true;
}

function keysUp(e) {
  keys[e.keyCode] = false;
}

function gameLoop() {
  keysDiv.innerHTML = JSON.stringify(keys);

  //w
  if (keys["87"]) {
    player.y -= 5;
  }
  //a
  if (keys["65"]) {
    player.x -= 5;
  }
  //s
  if (keys["83"]) {
    player.y += 5;
  }
  //d
  if (keys["68"]) {
    player.x += 5;
  }
}
//mouse interactions:
/*function movePlayer(event) {
        let pos = event.data.global; // get mouse position
        player.x = pos.x;
        player.y = pos.y;
      }*/
