'use strict';
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts=document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

const num=100;
box.style.cssText = `background-color: blue;width: ${num}px`;
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// for(let i=0; i<hearts.length; i++){
// 	hearts[i].style.backgroundColor='green';
// }

hearts.forEach(item => {item.style.backgroundColor = 'blue';});


const div = document.createElement('div');
// const text = document.createTextNode('It\'s me');


div.classList.add('black');
wrapper.appendChild(div);
// wrapper.prepend(div);
// wrapper.insertBefore(div,hearts[1]);
// wrapper.removeChild(hearts[1]);
// hearts[0].after(div);

// hearts[0].replaceWith(circles[0]);

div.innerHTML='<h1>Hello World</h1>';

// div.textContent = '<h1>Hello World</h1>';

div.insertAdjacentHTML('afterend','<h2>Hello</h2>');
