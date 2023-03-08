function fib(num) {
	if(isNaN(num) || !Number.isInteger(num) || num<=0){
		return '';
	}
	let result='0 1 ';
	let reallyBefore;
	let before;
	let temp;
	if(num===0) return '';
	else if (num===1) return '0';
	for (var i = 0; i < num; i++) {
		if(i>1){
        
			reallyBefore=parseInt(result[result.length-4]);
			before=parseInt(result[result.length-2]);
			temp=reallyBefore+before;
			console.log(`${reallyBefore}[${result[result.length-4]}]+${before}[${result.length-2}]=${temp}`);
			result += `${temp} `;
			console.log('result: '+result);
		}
	}
	return result.substring(0,result.length-1);
}

// console.log(fib(0));
// console.log(fib());
//  console.log(fib(''));
// console.log(fib('s'));
console.log(fib(1));
console.log(fib(5));