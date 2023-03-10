'use strict';
let options={
	name: 'name',
	width: 1024,
	height:1024,
	colors: {
		border: 'black',
		bg:'red'
	},
	makeTest: function(){
		console.log('Test');
	}
};
// options.makeTest();
// console.log(Object.keys(options).length);
// console.log(options.length);

// for (const key in options) {
// 	if(typeof(options[key])==='object'){
// 		for (const i in options[key]) {
// 			console.log(`Property ${i} has value ${options[key][i]}`);
// 		}
// 	} else{
// 		console.log(`Property ${key} has value ${options[key]}`);
// 	}
// }

const {border,bg}=options.colors;
console.log(border);