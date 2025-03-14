// Objects


//Object.create
// Object Literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Kaavya",
    "full Name": "Kaavya Desai",
    [mySym]: "myKey1",
    age: 20,
    location: "Surat",
    email: "Kay@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(typeof (jsUser.mySym));// when it is initialised like this then the type is of it is returned as string to make it symbol [] notation should be used
// console.log(jsUser[mySym]);

jsUser.email = "K@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "k@firefox.com"
//console.log(jsUser);

jsUser.greeting = function(){
    //console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    //console.log(`Hello JS user, ${this.name}` );
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//generally . is used to access the values in the object but sometimes [] can be used in some special case


// Singleton
//const aiHelper = new Object()
const aiHelper = {}

aiHelper.id = "123abc"
aiHelper.name = "Sam"
aiHelper.isLoggedIn = false

//console.log(aiHelper);

const regularUser ={
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstname: "kaavya",
            lastname: "Desai"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} // more preffered way
//console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "k@gmail.com"
//     },

//     {
//         id: 2,
//         email: "kay@gmail.com"
//     },
    
//     {
//         id: 3,
//         email: "ava@gmail.com"
//     },
    
//     {
//         id: 4,
//         email: "kaavya@gmail.com"
//     }
// ]
//console.log(users[0].email);

// console.log(aiHelper);
// console.log(Object.keys(aiHelper));
// console.log(Object.values(aiHelper));
// console.log(Object.entries(aiHelper));
// console.log(aiHelper.hasOwnProperty('isLoggedIn')); // true
// console.log(aiHelper.hasOwnProperty('isLogged')); // false



