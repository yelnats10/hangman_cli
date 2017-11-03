var letterArray = require('./letter.js');
var inquirer = require('inquirer');

// var callLetter = new letterArray();


console.log(letterArray);

var replaceMe = [];


for (var i = 0; i < letterArray.length; i++) {
    replaceMe.push("_ ");
  }

  console.log(replaceMe.join(" "));

  var wrong = [];
  var right = [];
  
  //starting point to count down from every mistake
  var counter = 10;
  
//   //starts your win and loses at 0
//   var wins = 0;
//   var loses = 0;
  
  //used to loop through correct answers to help with duplicate letters
  var empty = replaceMe.length;

  var guessWord = function(counter){
      if(counter > 0){
          inquirer.prompt({
              name: "name",
              message: "Guess a letter!"
          }).then(function(answers){
            if (letterArray.indexOf(answers.name) < 0 && wrong.length != 10) {
                if (wrong.indexOf(answers.name) < 0) {
                 
                wrong.push(answers.name);
                counter--;
                console.log("you were wrong you have " + counter + " guesses left.");
                
                console.log(wrong);
                console.log(replaceMe.join(" "));
                guessWord(counter);
                }
            } else {
              
              
                for(var i = 0; i <letterArray.length; i++){
                    if(answers.name === letterArray[i]){
                        replaceMe[i] =  answers.name;
                    }
                    
                    // right.push(answers.name);
                    
                }
                console.log(replaceMe.join(" "));
                guessWord(counter);
            }
          });
      }
  };

  guessWord(counter);
