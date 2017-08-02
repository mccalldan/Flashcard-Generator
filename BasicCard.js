var fs = require("fs");
var inquirer = require("inquirer");

var userGuess = process.argv[2]

var BasicCard = function(front,back){
	this.front = front;
	this.back = back;
	this.answer = function(){
		if(userGuess === this.back){
			console.log("Correct!")
		}
		else{
			console.log("Actually it is " + this.back)
		}
	}
}

var nflTeam = new BasicCard("This team is located in Charlotte,NC", "the panthers");

// console.log(nflTeam.front);
nflTeam.answer();

inquirer
.prompt([



	])




module.exports = BasicCard;