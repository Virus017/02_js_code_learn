// if
// <, >, <=, =>, ==, !=, ===, !==(check the type also)

const loggedIn = true
const temp = 30

// if (2 === "2") {
//     console.log("executed")
// }

// if (temp === 30) {
//     console.log("temperatur is less than 40");
// }

// else {
//     console.log("temp is greater tha 40");
// }

const score = 300

// if (score === 300){
//     let power = 200
//     console.log(`The power is ${power}`);
// }

// console.log(`The power is ${power}`);

const balance = 3050

// if (balance === 3000){
//     console.log("It is 3000");
// }
// else if (balance < 3000){
//     console.log("Less than 3000");
// }
// else if(balance > 3000){
//     console.log("Greater than 3000");
// }
// else {
//     console.log("undefined");
// }


const card = true
const loggedInGoogle = true
const loggedInEmail = false

if (loggedIn && card) {
    console.log("Allow shopping");
}

if (loggedInEmail || loggedInGoogle) {
    console.log("User logged in");
}