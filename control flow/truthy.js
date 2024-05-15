// Falsy value =>

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// Other are Truthy values

// Truthy value =>
// "0", 'flase', [], "Any value is string", {}, function(){}

const mail = []

if (mail){
    console.log("mail exist");
}
else {
    console.log("Main not exist");
}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 3 ?? 4
val1 = null ?? 20

console.log(val1);

// Terniary Operator =>
//  conditon ? true : false

const price = 300
price >= 400 ? console.log("Greater than 400") : console.log("Less than 400");
