// Primitive DataTypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);
const bigNumber = 775555851254698715465646765n

// Reference type (Non Primitive)
// Arrays, objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"]
let myObj= {
    name: "Kaavya",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof heroes);

/* 
Type Of Val   Result
undefined --> undefined
Null -->      object
Boolean -->   boolean
Number --> number
String --> string
Object (native and does not implement[Call]) --> object
Object (native or host and does not implement[Call]) --> function
Object (host and does not implement[Call]) --> implementation defined
                        except may not be undefined, boolean, number,
                        or a string
*/

// *******************************************************************
// Stack (Primitive)
let myName = "KaavyaDesai"
let anotherName = myName
anotherName = "Ava Desai"

console.log(myName);
console.log(anotherName);


// Heap(Non-Primitive)
let user1 = {
    email : "ava@gmail.com",
    upi : "ava02desai"
}

let user2 = user1

user2.email = "kaavya@gmail.com"

console.log(user1.email);
console.log(user2.email);



