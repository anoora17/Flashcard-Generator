var fs = require('fs');





function ClozeCard(text, cloze){

	this.text= text;
	this.cloze= cloze;
	this.partial = function(){
		if(text.includes(cloze)){
		var word=text.replace(cloze,"------");
						 console.log(word);

	} else {
		console.log('Oppes choose diffrent cloze, make sure it is from the sentence')
			}
		};
		};









module.exports = ClozeCard;
