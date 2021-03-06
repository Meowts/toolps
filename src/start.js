
//Global variables
var Global = {
	initWidth : 1024,
	initHeight : 780,

	//Current Screen - default 'MainMenu'
	CS : 'MainMenu',

	//Switch used to signal a screen switch
	switchScreen : false,
};

//Container to hold independant objects that can be accessed globally.
//Assignment of _com objects happens in /states/main.js
var _com = {};

//Initialize Phaser game object
var game = new Phaser.Game(Global.initWidth, Global.initHeight, Phaser.AUTO, 'main');

//Add available states to game
game.state.add('Load', Tools.Load);
game.state.add('Main', Tools.Main);

//Share the loooooad
game.state.start('Load');