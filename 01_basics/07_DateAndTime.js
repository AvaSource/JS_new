// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
//console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 23) // in JS months start from 0
//console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2025, 0, 23, 5, 3)
// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate1.toLocaleDateString());
let myCreatedDate2 = new Date("2025-01-14")
//console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("01-14-2025")
//console.log(myCreatedDate3.toLocaleString());

// Time

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());

//`${newDate.getMonth()} and the month is` // `${}` --> String Interpolation

newDate.toLocaleString('default',{
    weekday: "long",
})
