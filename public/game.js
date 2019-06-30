var Game = {};

Game.init = function(){
  console.log("init");
};

Game.preload = function() {
  console.log("preload");
  game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
};

Game.create = function(){
  console.log("create");
  game.stage.backgroundColor = '#182d3b';

  button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

  button.onInputOver.add(over, this);
  button.onInputOut.add(out, this);
  button.onInputUp.add(up, this);
};

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

  socket.emit('soccer', "match started");

}

var game = new Phaser.Game(24*32, 17*32, Phaser.AUTO, document.getElementById('game'));
game.state.add('Game',Game);
game.state.start('Game');
