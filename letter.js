var PickMovie = require('./word.js');

var call = new PickMovie();

call.addMovie("spaceballs");
call.addMovie("cars");
call.addMovie("frozen");
call.addMovie("rocky");
call.addMovie("superbad");

var randomValue = Math.floor(Math.random() * 5);

var randomMovie = call.movieArray[randomValue];

console.log(randomMovie);


var letterArray = [];

var addLetter = function(randomMovie) {
        for (var i = 0; i < randomMovie.length; i++) {
            letterArray.push(randomMovie.charAt(i));
             console.log(letterArray);
        }
    };


addLetter(randomMovie);

module.exports = letterArray;