'use strict';
const user ={
	name: 'Alex',
	surname: 'Smith',
	birthday: '20/04/2021',
	showMyPublicData: function(){
		console.log(`${this.name} ${this.surname}`);
	}
};



const userMap = new Map(Object.entries(user));
console.log(userMap);


const newUserObj = Object.fromEntries(userMap);

console.log(newUserObj);
const shops = [
	{rice: 500},
	{oil: 200},
	{bread: 50}
];
const budget=[5000,3000,2000];
const map = new Map([
	[{paper : 400},8000]
]);
shops.forEach((shop,i)=>{
	map.set(shop, budget[i]);
});
// console.log(map.get(shops[0]));
// console.log(map);
// for (const [shop, price] of map.entries()) {
// 	console.log(price, shop);
// }


// map.forEach( (value, key, map) => {
// 	console.log(key, value);
// });

// const goods = [];
// for(let shop of map.keys()){
// 	goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);