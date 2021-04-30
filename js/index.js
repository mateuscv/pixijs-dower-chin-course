let app;
let titleScreen;
let mainScreen;
let endScreen;

app = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0xaaaaaa,
});

document.body.appendChild(app.view);

window.addEventListener("keyup", switchContainer);

// Create our screens;
titleScreen = new PIXI.Container();
mainScreen = new PIXI.Container();
endScreen = new PIXI.Container();

mainScreen.visible = false;
endScreen.visible = false;

app.stage.addChild(titleScreen);
app.stage.addChild(mainScreen);
app.stage.addChild(endScreen);

// setup title screen
let redRect = new PIXI.Graphics();
redRect.beginFill(0xff0000);
redRect.drawRect(0, 0, app.view.width, app.view.height);
titleScreen.addChild(redRect);

// setup main screen
let greenRect = new PIXI.Graphics();
greenRect.beginFill(0x00ff00);
greenRect.drawRect(0, 0, app.view.width, app.view.height);
mainScreen.addChild(greenRect);

// setup end screen
let blueRect = new PIXI.Graphics();
blueRect.beginFill(0x0000ff);
blueRect.drawRect(0, 0, app.view.width, app.view.height);
endScreen.addChild(blueRect);

function switchContainer(e) {}
