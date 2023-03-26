

'use strict';
const p = document.querySelectorAll('p');
console.log(p); 


function loadScript(src){
	const script = document.createElement('script');
	script.src =src;
	script.async=false;
	document.body.append(script);
}
loadScript('test.js');
loadScript('some.js');
// const box=document.querySelector('.box');
// box.addEventListener('touchstart', (e) =>{
// 	e.preventDefault();
// 	console.log('Start');
// 	console.log(e.changedTouches);
// });
// box.addEventListener('touchmove', (e) =>{
// 	e.preventDefault();
// 	console.log(e.targetTouches[0].pageX);
// });
// box.addEventListener('touchend', (e) =>{
// 	e.preventDefault();
// 	console.log('End');
// });



// Возьмите свой код из предыдущей практики