Screen.ActionTest = function(game){
	this.game = game;

	this.backBtn = null;
}

Screen.ActionTest.prototype = {
	create : function(){
		_com.player.init(300, 300);

		_com.actionMenu.drawMenu();

		_com.items.placeItems();

		this.placeBackButton();
	},

	update : function(){
		_com.player.update();
	},

	render : function(){},

	placeBackButton : function(){
		this.backBtn = this.game.add.button(
			Data.Common.back.x+40, 
			Data.Common.back.y+70, 
			Data.Common.back.sprite,
			GFN.switchScreen, 
			this, 
			0, 0, 1
		);
		this.backBtn.screen = 'MainMenu';
		this.backBtn.anchor.setTo(0.5, 0.5);
		this.backBtn.scale.setTo(0.5, 0.5);
		this.backBtn.fixedToCamera = true;

		var backBtnTxt = this.game.add.text(0, 0, 'Main Menu', {font: '22px Consolas'});
		backBtnTxt.anchor.setTo(0.5, 0.5);
		this.backBtn.addChild(backBtnTxt);
	},

	destroy : function(){
		_com.player.destroy();
		_com.actionMenu.hideMenu();
		_com.items.destroy();
		this.backBtn.destroy();
	}
}