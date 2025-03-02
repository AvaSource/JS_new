const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8245
//console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));

//************************** Maths ****************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 8, 7, 2, 5, 9));
// console.log(Math.max(4, 3, 8, 7, 2, 5, 9));

// console.log(Math.random()); // gives value only b/w 0 & 1
// console.log(Math.random()*10); // so here it is multiplied by 10 to get number between 0 & 9  
// console.log((Math.random()*10) + 1); // to not get 0 as output we added 1 so there will be no number which will be less than 1

// console.log(Math.floor(Math.random()*10) + 1); // this would avoid numbers after the decimal point

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

