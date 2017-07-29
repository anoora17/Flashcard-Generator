
var fs = require('fs');
var inquirer = require('inquirer');

function BasicCard(front, back){
	this.front= front;
	this.back=back;

	};


BasicCard.prototype.createCard =function(){
	  var card = {
			 front: BasicCard.front,
			 	back: BasicCard.back,
			  
		};


}



module.exports = BasicCard;
