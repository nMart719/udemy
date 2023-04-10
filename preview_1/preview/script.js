'use strict';
const now = new Date('2023-04-11');
now.setHours(48);

let start = new Date();

for (let i=0; i< 100000; i++){
	let some =i**3;
}
let end=new Date();
alert(end-start);
// console.log(now);


