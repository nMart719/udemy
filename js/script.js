'use strict';

console.log(calc(1,2));
function calc(a,b){
	return a+b;
}



const logger = function(){
	return(7);
};

console.log(typeof(logger()));

let calcArrow = (a,b) =>{return a+b;};
let calcArrowShort = (a,b) =>a+b;


console.log((calcArrow(1,2)));
console.log(typeof(calcArrow(1,2)));