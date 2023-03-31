// function func(){
// 	window.smth='string';
// }


// const someRes=getData();
// const node=document.querySelector('.class');

// setInterval(function(){
// 	if(node){
// 		node.innerHTML=someRes;
// 	}
// },1000);

// function outer(){
// 	const potentiallyHugArray=[];
// 	return function inner(){
// 		potentiallyHugArray.push('Hello');
// 		console.log('Hello');
// 	} ;
// }

// const sayHello=outer();


function createElement(){
	const div =document.createElement('div');
	div.id='test';
	return div;
}

const testDiv=createElement();

document.body.append(testDiv);
function deleteElement(){
	document.body.removeChild(document.getElementsById('tets'));
}

deleteElement();