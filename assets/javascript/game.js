// Goal is a random number between 19 and 120
// Each crystal is a random number between 1 and 12
// Add "You won!!" or "You lost!!" div after game ends / generate new number / give crystals new random numbers
//
//

// jQuery: CrystalsCollector Game | By Juliette Rapala
// =====================================================================================

$(document).ready(function(){


// Global Variables 
// =====================================================================================

		var crystalsApp = {

			wins : 0,
			losses : 0,
			score : 0,
			randomNum : 0,
			gemValues : [0,0,0,0],
			$gemOne : $('#gemOne'),


			// Update total score 
			updateScore : function() {
				$('#score').html(this.score);
			},

			// Find random number between 1 and 12 (inclusive).
			generateGemValues : function() {
				for (var i = 0; i < this.gemValues.length; i++) {
					var randomGemValue = Math.floor(Math.random()* 12) + 1;	
					this.gemValues[i] = randomGemValue;
				}
			},

			// Find random number between 19 and 120 (inclusive).
			generateWinValue : function() {
				random = Math.floor(Math.random()* 102) + 19;
				this.randomNum = random;
				$('#randomNum').html(random);	
			},

			clickGem : function() {
				var self = this;
				$('#gemOne').on('click', function() {			
					console.log(self.score);
					self.score += self.gemValues[0];
					console.log("Gem one was clicked!");
					console.log("Gem one has a value of " + self.score);
					self.updateScore();
				});
			},

			newGame : function() {
				this.generateGemValues();
				this.generateWinValue();
				this.clickGem();

			}


		

			// Functions
			// =====================================================================================	
	

		}




// Gameplay
// =====================================================================================

crystalsApp.updateScore();
crystalsApp.newGame();

});


