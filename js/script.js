'use strict';
const someString = 'This is some strange string';

function reverse(str) {
	if(typeof(str)!=='string') return 'Ошибка!';
	return str.split(' ').reverse().join(' ');
	
}


reverse(someString);
reverse('');
reverse();
reverse(3);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	
	if(arr.length<=0) return 'Нет доступных валют';
	
	for (let j=0 ; j<missingCurr.length; j++) {	
		for (let i=0; i< arr.length; i++) {
			if(arr[i]===missingCurr[j]) delete arr[i];
			
		}
		
	}
	let str='Доступные валюты:';
	for (let i=0; i< arr.length; i++) { 
		if(arr[i]!== undefined){
			str+=`\n${arr[i]}`;
		}
	}
	return str;
}


console.log(availableCurr('',additionalCurrencies));
console.log('!!!!!!!!!!!!');
console.log(availableCurr(baseCurrencies,additionalCurrencies));
console.log('!!!!!!!!!!!!');
console.log(availableCurr(['UAH', 'RUB', 'CNY'],['CNY']));
console.log('!!!!!!!!!!!!');
console.log(availableCurr(['UAH', 'RUB', 'CNY','USD', 'EUR'],['USD', 'EUR','CNY']));