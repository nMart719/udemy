'use strict';


let numberOfFilms=+prompt('How many films did you watch?', '');

let personalMovieDB={
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



for (let i = 0; i < 2; i++) {
	let watchedFilm=prompt('Name of the random film watched?');
	while(watchedFilm === '' || watchedFilm === null || watchedFilm.length>=50){	
		watchedFilm=prompt('Name of the random film watched?');
	}
	let rate=prompt('Your rate for this film?');

	personalMovieDB.movies[watchedFilm]=rate;
	
}

// let i=0;
// do {
// 	let watchedFilm=prompt('Name of the random film watched?');
// 	while(watchedFilm === '' || watchedFilm === null || watchedFilm.length>=50){	
// 		watchedFilm=prompt('Name of the random film watched?');
// 	}
// 	let rate=prompt('Your rate for this film?');
// 	personalMovieDB.movies[watchedFilm]=rate;
// 	i++;
// }while(i<1);

// let i=0;
// while (i < 2 ) {
// 	let watchedFilm=prompt('Name of the random film watched?');
// 	while(watchedFilm === '' || watchedFilm === null || watchedFilm.length>=50){	
// 		watchedFilm=prompt('Name of the random film watched?');
// 	}
// 	let rate=prompt('Your rate for this film?');
// 	personalMovieDB.movies[watchedFilm]=rate;
// 	i++;
// }


if(personalMovieDB['count']<10) console.log('You\'ve watched pretty poor number of films');
else if(10<=personalMovieDB['count'] && personalMovieDB['count']<=30) console.log('You are classic viewer');
else if(personalMovieDB['count']>30) console.log('You are a cinephile');
else console.log('Error');

console.log(personalMovieDB);