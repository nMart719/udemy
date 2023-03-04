'use strict';
// let str='';
// for (let i = 0; i < 7; i++) {	
// 	for (let j = 0; j < i; j++) {
// 		str=str+'*';		
// 	}
// 	str=str +'\n';
// }
// console.log(str);
// let str='';
// for (let i = 0; i < 7; i++) {	
// 	for (let j = 0; ; j++) {
// 		if (j>=i) break;
// 		str=str+'*';		
// 	}
// 	str=str +'\n';
// }
// console.log(str);


// f:for (let i = 0; i < 3; i++) {	
// 	console.log('First: '+ i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log('\tSecond: '+ j);
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) continue f;
// 			console.log('\t\tThird: '+ k);
// 		}
// 	}
// }



const lines = 5;
let result = '';
let stars=-1;
for (let i = 0; i <= lines; i++) {
	stars+=2;	
	for (let j = 6+i; j > 0; j--) {
		if(j>stars) result+='-';
		else result+='*';
	}
	result+='\n';
}
console.log(result);