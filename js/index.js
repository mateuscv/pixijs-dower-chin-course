let app;
let player;
let keys = {};
let keysDiv;

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  // player object
  player = new PIXI.Sprite.from("images/player.png");
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;

  app.stage.addChild(player);

  app.ticker.add(gameLoop);

  keysDiv = document.querySelector("#keys");

  //kb event handlers
  window.addEventListener("keydown", keysDown);
  window.addEventListener("keyup", keysUp);

  /*app.stage.interactive = true;
        app.stage.on("pointermove", movePlayer);*/
};

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
