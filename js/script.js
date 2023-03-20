'use strict';
// console.log(document.head);	
// console.log(document.body.childNodes);	
// console.log(document.head.childNodes);	
// console.log(document.head.firstChild);	
console.log(document.body.childNodes);	
// console.log(document.head.lastChild);	
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentNode.parentElement);
// console.log(document.querySelector('[data-current="3"').nextElementSibling);

//same as childElements
for (const node of document.body.childNodes) {
	if (node.nodeName=='#text') continue;
	console.log(node);
}