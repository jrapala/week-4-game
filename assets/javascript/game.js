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
			gemIds : ['#gemOne', '#gemTwo', '#gemThree', '#gemFour'],
			gemValues : [0,0,0,0],

			init : function () {
				$('#wins').html(this.wins);
				$('#losses').html(this.losses);
			},

			clearScore : function() {
				this.score = 0;
				$('#score').html(this.score);				
			},

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
					self.score += self.gemValues[0];
					self.updateScore();
					self.checkWin();
				});
				$('#gemTwo').on('click', function() {			
					self.score += self.gemValues[1];
					self.updateScore();
					self.checkWin();
				});
				$('#gemThree').on('click', function() {			
					self.score += self.gemValues[2];
					self.updateScore();
					self.checkWin();
				});
				$('#gemFour').on('click', function() {			
					self.score += self.gemValues[3];
					self.updateScore();
					self.checkWin();
				});
			},

			checkWin : function() {
				console.log(this.score);
				console.log(this.randomNum);				
				if (this.score == this.randomNum) {
					this.wins++;
					$('#message').html("You win!");
					$('#wins').html(this.wins);
					this.clearScore();
				} else if (this.score > this.randomNum) {
					this.losses++;
					$('#message').html("You lose!");
					$('#losses').html(this.losses);
					this.clearScore();
				};
			},

			newGame : function() {
				this.generateGemValues();
				this.generateWinValue();
				this.clickGem();
			}

//$("#gemOne").click(function(){
//	$(this).data('clicked',true);
//});
//
//if($('#gemOne').data('clicked')) {



			// Functions
			// =====================================================================================	
	

		}




// Gameplay
// =====================================================================================

crystalsApp.init();
crystalsApp.updateScore();
crystalsApp.newGame();

});


