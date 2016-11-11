console.log('game loaded');

var HmGame = function(secretWord, tries) {
  this.secretWord = secretWord;
  this.input = "";
  this.guesses = [];
  this.triesRemaining = tries;
  this.completedWord = this.wordSoFar();
  this.gameWon = null;
};


// user can guess a letter
HmGame.prototype.guess = function(guess) {
  if (this.gameWon !== null) {
    console.log("the game is over");
    return false;
  }
  // check if the letter has already been guessed, indexOf returns first index of target el in array, otherwise returns negative 1 (-1)
  var alreadyGuessed = this.guesses.indexOf(guess) !== -1;
  if (!alreadyGuessed) {
    // default to
    this.guesses.push(guess);
    // can't add letter if game is over
  } else if (this.gameWon === false) {
    }
    else {
      return this.isWinner();
    }
  //  is letter in word?
  if (this.isLetterInWord(guess, this.secretWord)) {
    console.log('found ' + guess + ' in the word: ', this.secretWord);
  } else {
    this.triesRemaining--;
  }
  this.completedWord = this.wordSoFar();
  return this.isWinner();
};

// Helper functions //
//////////////////////

// wordSoFar returns the word completed up till now
HmGame.prototype.wordSoFar = function() {
  var newSecretWord = '';
  for (var index in this.secretWord) {
    var currentLetter = this.secretWord[index];
    if(this.guesses.indexOf(currentLetter) > -1) {
      newSecretWord += currentLetter;
    } else {
      newSecretWord += '_';
    }
  }
  this.completedWord = newSecretWord;
  return newSecretWord;
};

//win or lose
HmGame.prototype.isWinner = function() {
  if(this.triesRemaining === 0) {
    console.log("Sorry, you loose.")
    this.gameWon = false;
  // user wins if there are no more underscores in word
} else if( !this.isLetterInWord("_", this.completedWord) ) {
    console.log("Yay, you win!")
    this.gameWon = true;
  } else {
    this.gameWon = null;
  }
};

// returns true if the letter is in the word, false if not
HmGame.prototype.isLetterInWord = function(guess, word) {
  // determine if the letter is in the word
  return word.split('').indexOf(guess) > -1;
};
