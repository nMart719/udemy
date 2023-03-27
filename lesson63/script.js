const btns=document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');
wrapper.addEventListener('click', (event)=>{
	if(event.target && event.target.matches('button.red')){
		console.log('Hello');
	}
});

// btns.forEach(item=>{
//     item.addEventListener('click', ()=>console.log('Hi'));
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
//console.log(btns[0].classList.length);
// console.log(btns[1].classList.add('red','class'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if(btns[1].classList.contains('red')){
// 	console.log('red'); 
// }


btns[0].addEventListener('click', ()=>{
	// if(!btns[1].classList.contains('red')){
	// 	btns[1].classList.add('red');
	// }else{
	// 	btns[1].classList.remove('red');    
	// }
	btns[1].classList.toggle('red');
});


// console.log(btns[0].className);