// array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktiman", "Naagraj"]
const myArray2 = new Array (1, 2, 3, 4)

//console.log(myArray[1]);

// Array methods 

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
//myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(2));

// const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);

// Slice & Splice

// console.log("A ", myArray);

// const myn1 = myArray.slice(1,3)
// console.log(myn1);

// console.log("B ", myArray);

// const myn2 = myArray.splice(1,3)
// console.log("C ", myArray);
// console.log(myn2);

const marvel_heroes = ["Thor", "IronMan", "SpiderMan"]
const dc_heroes = ["SuperMan", "Flash", "BatMan"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// const allNewHeroes = [...marvel_heroes, ...dc_heroes] // more preferable
// console.log(allNewHeroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Kaavya"))
console.log(Array.from("Kaavya"))
console.log(Array.from({name: "Kaavya"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
