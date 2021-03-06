/**
*
*	@class Action
*
*/

Class.Action = function(game){
	this.game = game;

	this.currentAction = 'use';
}

Class.Action.prototype = {

	use : function(entity){
		if(entity.type === 'item'){
			//If it's collectable, place it in your inventory
			if(Data.Items[entity.id].collectable){
				_com.inventory.acquire(entity);
			}else{
				this.see(entity);
			}
		}
	},

	talk : function(entity){
		if(entity.type === 'item'){
			var x = entity.x;
			var y = entity.y - 100;

			if(Data.Items[entity.id].dialog !== null && Data.Items[entity.id].dialog !== undefined){
				_com.dialog.show(Data.Items[entity.id].dialog, x, y);
			}else{
				_com.dialog.show(entity.id + " has nothing to say.", x, y);
			}
		}
	},

	see : function(entity){
		if(entity.type === 'item'){
			if(Data.Items[entity.id].description !== null && Data.Items[entity.id].description !== undefined){
				_com.dialog.show(Data.Items[entity.id].description);
			}
			else{
				_com.dialog.show("Nothing to see here.");
			}
		}
	},

	spell : function(entity){

	},

	item : function(entity){
		//If there's a currently selected item
		if(_com.inventory.currentlySelected !== null){
			var returnFun = _com.items.checkPairing(entity);

			if(returnFun !== null){
				GFN.exec(returnFun, _com.actionFunctions);
			}else{
				_com.dialog.show("This does nothing.");
			}
		}
	},

	toggleUse : function(){
		this.currentAction = 'use';
	},

	toggleTalk : function(){
		this.currentAction = 'talk';
	},

	toggleSee : function(){
		this.currentAction = 'see';
	},

	toggleSpell : function(){
		this.currentAction = 'spell';
	},

	toggleItem : function(){
		this.currentAction = 'item';
	}
}