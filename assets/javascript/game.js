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

			
			// Pick random number between 1 and 12 (inclusive) for gem values.
			generateGemValues : function() {
				for (var i = 0; i < this.gemValues.length; i++) {
					var randomGemValue = Math.floor(Math.random()* 12) + 1;	
					this.gemValues[i] = randomGemValue;
				}
			},

			// Pick random number between 19 and 120 (inclusive) for the number to match.
			generateWinValue : function() {
				random = Math.floor(Math.random()* 102) + 19;
				this.randomNum = random;
				$('#randomNum').html(random);	
			},

			// Run two randomizing functions.
			randomizer : function () {
				this.generateGemValues();
				this.generateWinValue();
				console.log("New gem values: " + this.gemValues);
				console.log("New win value: " + this.randomNum);
			},

			// Initialize game. Display variables and pick random numbers for number to guess and gem values.
			init : function () {
				this.score = 0;
				$('#wins').html(this.wins);
				$('#losses').html(this.losses);
				$('#score').html(this.score);
				this.randomizer();
			},

			// Play game. Can be done without?
			play : function () {
				// If score is less than the number to match, allow user to click gem.
				if (this.score < this.randomNum) {
					this.clickGem();
				// If score is equal to or greater than the number to match, check for a win or loss.
				} else {
					this.checkwin();
				};
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

			// Check if player has won or lost.
			checkWin : function() {				
				// If score is equal to the number to match, the player has won.
				if (this.score == this.randomNum) {
					// Increment wins
					this.wins++;
					// Change message
					$('#message').html("You win!");
					// Update win total
					$('#wins').html(this.wins);
					// Initialize new game
					this.init();
				} else if (this.score > this.randomNum) {
					// Increment losses
					this.losses++;
					// Change message
					$('#message').html("You lose!");
					// Update loss total
					$('#losses').html(this.losses);
					// Initialize new game
					this.init();
				};
			},





			// Update total score 
			updateScore : function() {
				$('#score').html(this.score);
			},





			




//$("#gemOne").click(function(){
//	$(this).data('clicked',true);
//});
//
//if($('#gemOne').data('clicked')) {

//				newGame : function() {
//				this.generateGemValues();
//				this.generateWinValue();
//				this.clickGem();
//			},


			//clearScore : function() {
			//	this.score = 0;
			//	$('#score').html(this.score);				
			//},


			// Functions
			// =====================================================================================	
	

		}




// Gameplay
// =====================================================================================

crystalsApp.init();
crystalsApp.play();

});


