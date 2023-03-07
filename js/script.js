'use strict';

let numberOfFilms;

function start(){
	numberOfFilms=+prompt('How many films did you watch?', '');
	while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)){	
		numberOfFilms=+prompt('How many films did you watch?', '');
	}
}
start();

let personalMovieDB={
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function remeberMyFilms(){
	let result = '';


	for (let i = 0; i < 2; i++) {
		let watchedFilm=prompt('Name of the random film watched?');
		while(watchedFilm === '' || watchedFilm === null || watchedFilm.length>=50){	
			watchedFilm=prompt('Name of the random film watched?');
		}
		result+='\n';
		let rate=prompt('Your rate for this film?');
	
		personalMovieDB.movies[watchedFilm]=rate;
	
	}
	console.log(result);
}
 
remeberMyFilms();
function detectPersonalLevel(){

	if(personalMovieDB['count']<10) console.log('You\'ve watched pretty poor number of films');
	else if(10<=personalMovieDB['count'] && personalMovieDB['count']<=30) console.log('You are classic viewer');
	else if(personalMovieDB['count']>30) console.log('You are a cinephile');
	else console.log('Error');


}
detectPersonalLevel();


function showMyDB(){
	if (!personalMovieDB['privat']) console.log(personalMovieDB);

}
showMyDB();

function writeYourGenres(){

	for (let i = 0; i < 3; i++) {
		let genre=prompt(`Your favourite genre of film by number ${i+1}?`);
		while(genre === '' || genre === null || genre.length>=40){	
			genre=prompt(`Your favourite genre of film by number ${i+1}?`);
		}
	
		personalMovieDB.genres[i]=genre;
		console.log(personalMovieDB.genres);
	}
}

writeYourGenres();