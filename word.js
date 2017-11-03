
var PickMovie = function(){
    this.movieArray = [];
    
};

PickMovie.prototype.addMovie = function(movie) {
    this.movieArray.push(movie);
};

module.exports = PickMovie;