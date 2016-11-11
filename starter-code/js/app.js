console.log('app.js loaded!');

var app = angular.module("hangmanApp", []);
app.controller("hangmanCtrl", hangmanCtrl )
// initialize the application

// defines the controller, we do the "view/model" pattern
function hangmanCtrl(){
  var vm = this;
  vm.game = new HmGame("obfuscated", 10);
  vm.guessLetter = function() {
    vm.game.guess(vm.input)
    vm.input = "";
  }

}
