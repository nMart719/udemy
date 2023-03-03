'use strict';

const num = '50';
// if( num<49 ){
// 	console.log('error');
// }else if (num>100){
// 	console.log('Too much');
// }else{
// 	console.log('ok');
// }

// ( num === 50 ) ? console.log('ok') : console.log('error');

//switch is a ===
switch(num){
case '49':
	console.log('no');
	break;
case '100':
	console.log('too much');
	break;
case '50':
	console.log('close');
	break;
default:
	console.log('maybe');
	break;

}