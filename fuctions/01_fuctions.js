

function myName() {
    console.log("d");
    console.log("e");
    console.log("v");
}

// myName()

// function addNum (num1, num2) {   //here num1 & num2 are Parameters
//     console.log(num1 + num2);
// }

function addNum (num1, num2) {   //here num1 & num2 are Parameters
    // let result = num1 + num2
    // return result;            // return use krne k badd kuch execute nhi hota

    return num1 + num2
}

const add = addNum(3, 5)
console.log(add)

function logginMessage (username) {
    if (!username) {
        console.log("Please enter the username")
        return
    }
    return `${username}, just logged in`
}

console.log(logginMessage())