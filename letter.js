var PickMovie = require('./word.js');

var call = new PickMovie();

call.addMovie("spaceballs");
call.addMovie("cars");
call.addMovie("frozen");
call.addMovie("rocky");
call.addMovie("superbad");
call.addMovie("taken");
call.addMovie("twins");
call.addMovie("watchmen");
call.addMovie("scream");



var randomValue = Math.floor(Math.random() * call.movieArray.length);

var randomMovie = call.movieArray[randomValue];




var letterArray = [];

var addLetter = function(randomMovie) {
        for (var i = 0; i < randomMovie.length; i++) {
            letterArray.push(randomMovie.charAt(i));
           
        }
    };


addLetter(randomMovie);

module.exports = letterArray;