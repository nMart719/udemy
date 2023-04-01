'use strict';
const birthday = Symbol('birthday');
const user ={
	name: 'Alex',
	surname: 'Smith',
	[birthday]: '20/04/2021',
	showMyPublicData: function(){
		console.log(`${this.name} ${this.surname}`);
	}
};

// Object.defineProperty(user,'birthday', {value: prompt('Date?',''),enumerable: true, configurable: false});
// console.log(Object.getOwnPropertyDescriptor(user,'birthday'));
// Object.defineProperty(user,'name', {writable: false});
console.log(Object.getOwnPropertyDescriptor(Math,'PI'));
Object.defineProperty(user,'showMyPublicData',{enumerable: false, configurable: false});

for (const key in user) {
	console.log(key);
}
console.log(Object.getOwnPropertyDescriptor(user, birthday));
Object.defineProperties(user, {
	name: {value: 'John',writable: false},
	surname: {writable:false}
});
//writable
//enumerable
//configurable