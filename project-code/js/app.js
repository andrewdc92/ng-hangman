console.log('app.js loaded!');

var app = angular.module("hangmanApp", []);
app.controller("hangmanCtrl", hangmanCtrl )
// initialize the application

// defines the controller, following "view/model" pattern as opposed to $scope
function hangmanCtrl(){
  var vm = this;
  var allWords = ['obfuscated','prudent', 'lexicon', 'pernicious', 'fraudulent', 'disintegration' ]

  var randomWord = allWords[Math.floor(Math.random() * allWords.length)];


  vm.game = new HmGame(randomWord, 10);
  vm.guessLetter = function() {
    vm.game.guess(vm.input)
    vm.input = "";
  }

}
