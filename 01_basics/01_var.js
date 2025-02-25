const accId = "114525"

let accEmail = "kay@gmail.com"
var accPwd = "123456789"
accCity = "Surat"

//accId = "458741" //not allowed

console.log(accId);

accEmail = "kaavya@gmail.com"
accPwd = "145878"
accCity = "Vadodara"

let accState

console.table([accCity, accEmail, accId, accPwd, accState])

/*
Prefer not to use var because of issue in block scope and functional scope 
*/ 