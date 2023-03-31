'use strict';

const box = document.querySelector('.box');

const block = document.querySelector('.block');

console.log(block);
// if(block)console.log(block.textContent);
// console.log(block?.textContent);// operator ? checks left side first and returns undefined if it's false
//block?.textContent='123';// here we trying to initiate undefined as 123, but that's impossible
console.log(1+2);

const userData = {
	name: 'Ivan',
	age: null,
	say: function(){
		console.log('Hello');
	}
};
userData.say();
userData.hey?.();
console.log(userData?.skills?.js);// = if(userData && userData.skills && userData.skills.js)