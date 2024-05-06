//Singleton
//Object.create
// Object literals

const sym = Symbol("key1")  //it is a symbol

const user = {
    name: "dev",
    "fullName": "dev singh",
    [sym]: "k",  //Synyax of accesing symbol in a object
    age: 2,
    mail: "dev@gmail.com",
    loggedIn: ["Monday", "turesday"]
}

// console.log(user.name)      // Use this method
// console.log(user["name"])
// console.log(user["fullName"])
// console.log(user[sym])     // Special case

user.mail = "dev@google.com"
// console.log(user)

// Object.freeze(user)   //freezes to make change in object
user.mail = "dev@mictosoft.com"
// console.log(user)

user.greeting = function(){
    console.log("Hello, how are you")
}
user.greetingTwo = function(){
    console.log(`Hello, how are you, ${this.name}`)
}

console.log(user.greeting())
console.log(user.greetingTwo())