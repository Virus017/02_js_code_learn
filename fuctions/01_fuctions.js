

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

// console.log(logginMessage())

// function priceCalculate (...num1) {    // used for multiple value
//     return num1
// }

// console.log(priceCalculate(23, 53, 3, 2))

function priceCalculate (val1, val2, ...num1) {    
    return num1
}

console.log(priceCalculate(23, 53, 3, 2))  // herre 3 & 2 goes to num1

const user = {
    product: "bag",
    price: 299
}

function objectData(randomObject) {
    console.log(`Purchsed is ${randomObject.product} and price is ${randomObject.price}`)
}

objectData(user)

const newArray = [200, 300, 500]

function getArray(item) {
    return item[1]
}

console.log(getArray(newArray))