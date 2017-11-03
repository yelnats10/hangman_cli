var letterArray = require('./letter.js');
var inquirer = require('inquirer');

// var callLetter = new letterArray();


console.log(letterArray);

var replaceMe = [];


for (var i = 0; i < letterArray.length; i++) {
    replaceMe.push("_ ");
  }

  console.log(replaceMe);

  var wrong = [];
  
  //starting point to count down from every mistake
  var counter = 10;
  
//   //starts your win and loses at 0
//   var wins = 0;
//   var loses = 0;
  
  //used to loop through correct answers to help with duplicate letters
  var empty = replaceMe.length;

  var guessWord = function(count){
      if(counter > 0){
          inquirer.prompt({
              name: "name",
              message: "Guess a letter!"
          }).then(function(answers){
            if (letterArray.indexOf(answers) < 0 && wrong.length != 10) {
                if (wrong.indexOf(answers) < 0) {
                 
                wrong.push(answers);
                counter--;
                console.log(replaceMe.join(""));
                console.log(answers);
                }
            }
          });
      }
  };
