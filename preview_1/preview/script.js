'use strict';

// const obj ={
// 	name: 'Test',
// 	[Symbol('id')]: 1,
// 	getId: function(){
// 		return this[id];
// 	}

// };


// // console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// obj[id]=1;

const myAwesomeDB={
	movies: [],
	actors: [],
	[Symbol.for('id')]: 123
};

myAwesomeDB.id='1233333333';


console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);
