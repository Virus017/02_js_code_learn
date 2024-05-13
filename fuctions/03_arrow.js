const user = {
    username: "devv",
    price: 399,

    message: function(){
        console.log(`${this.username}` , "Welcome to website")  //this works with object
        console.log(this)   
    }
}

// user.message()
// user.username = "singh"
// user.message()

// console.log(this)

// function chai() {
//     let username = "dev"
//     console.log(this.username)   //this does not work here
// }
// chai()

// const chai = function() {
//     let username = "dev"
//     console.log(this.username)
// }

const chai = () => {        //arrow function
    let username = "dev"
    console.log(this.username)
}

// chai()

// const add = (num1, num2) => {
//     return num1 + num2
// }
// const add = (num1, num2) =>  num1 + num2
// const add = (num1, num2) =>  (num1 + num2)
const add = (num1, num2) =>  num1 + num2


console.log(add(2,4));