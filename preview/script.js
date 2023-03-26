'use strict';
const btns=document.querySelectorAll('button'),
	overlay=document.querySelector('.overlay');
// btn.onclick = function(){
// 	alert('Click');
// };

// btn.onclick = function(){
// 	alert('Second click');
// };
let i=0;
const deleteElement=(e) =>{
	console.log(e.currentTarget);
	console.log(e.type);
	// i++;
	// if(i==1){
	// 	btn.removeEventListener('click', deleteElement);

	// }
};

btns.forEach(btn=>{
	btn.addEventListener('click', deleteElement,{once: true});
});
overlay.addEventListener('click', deleteElement);
overlay.removeEventListener('click', deleteElement);
const link=document.querySelector('a');

link.addEventListener('click',function(event){
	event.preventDefault();
	console.log(event.target);
});

// btn.addEventListener('click', () =>{
// 	alert('Second click');
// });