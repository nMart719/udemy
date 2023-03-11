'use strict';







let personalMovieDB={
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function(){
		personalMovieDB.count=+prompt('How many films did you watch?', '0');
		while(personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)){	
			personalMovieDB.count=+prompt('How many films did you watch?', '');
		}
	},
	remeberMyFilms:function(){
		let result = '';
	
		const logger = function(){
			return(7);
		};
	
		console.log(typeof(logger()));
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
	},
	detectPersonalLevel: function(){

		if(personalMovieDB['count']<10) console.log('You\'ve watched pretty poor number of films');
		else if(10<=personalMovieDB['count'] && personalMovieDB['count']<=30) console.log('You are classic viewer');
		else if(personalMovieDB['count']>30) console.log('You are a cinephile');
		else console.log('Error');
	
	
	},
	showMyDB : function (){
		if (!personalMovieDB['privat']) console.log(personalMovieDB);
	
	},
	writeYourGenres: function(){

		for (let i = 0; i < 3; i++) {
			let genre=prompt(`Your favourite genre of film by number ${i+1}?`);
			while(genre === '' || genre === null || genre.length>=40 || !genre){	
				genre=prompt(`Your favourite genre of film by number ${i+1}?`);
			}
	
			personalMovieDB.genres[i]=genre;
			
		}

		personalMovieDB.genres.forEach(item => {
			console.log(`Favourite genre by number #${personalMovieDB.genres.indexOf(item)+1} - this is ${item}`);
		});
	},
	toggleVisibleMyDB: function(){
		!personalMovieDB.privat ? personalMovieDB.privat=true : personalMovieDB.privat=false;
	}
};


// personalMovieDB.start();
// personalMovieDB.remeberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();



personalMovieDB.writeYourGenres();