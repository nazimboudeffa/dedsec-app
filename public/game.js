var Game = {};

Game.init = function(){

  console.log("init");
  if (!game.device.desktop) {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }

};

Game.preload = function() {

  console.log("preload");
  game.load.image('welcome', 'assets/sprites/dedsec-logo.png');
  game.load.image('joinus', 'assets/buttons/join-us.png');
  game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);

};

Game.create = function(){

  console.log("create");
  game.stage.backgroundColor = '#000000';

  var welcome = game.add.image(game.world.centerX, game.world.centerX, 'welcome');
  welcome.anchor.setTo(0.5);

  var joinus = game.add.button(game.world.centerX, game.world.centerY + 50, 'joinus', actionOnClick, this);
  joinus.anchor.setTo(0.5);

};

function actionOnClick () {

  socket.emit('iamdedsec', "Game Started");

}

var game = new Phaser.Game(360, 640, Phaser.AUTO, document.getElementById('game'));
game.state.add('Game', Game);
game.state.start('Game');
