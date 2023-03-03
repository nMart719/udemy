'use strict';

let numberOfFilms=+prompt('How many films did you watch?', '');

let personalMovieDB={
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


let watchedFilm=prompt('Name of the random film watched?');
let rate=prompt('Your rate for this film?');

let watchedFilm1=prompt('Name of the random film watched?');
let rate1=prompt('Your rate for this film?');
personalMovieDB.movies[watchedFilm]=rate;
personalMovieDB.movies[watchedFilm1]=rate1;
console.log(personalMovieDB);