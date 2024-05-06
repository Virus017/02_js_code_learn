// const insta = new Object() //Singelton object
const insta = {}    // Non Singleton object

insta.id = 2134
insta.name = "shy"
insta.loggedIn = true
// console.log(insta)

const userTwo = {
    email: "dev@42.in",
    fullname: {
        userfullname: {
            firstname: "dev",
            sirname: "singh",
        }
    }
}

// console.log(userTwo.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)  // Using {} will result in adding obj1 & 2 to {}

const obj3 = {...obj1, ...obj2}    //Most used
// console.log(obj3);

const user = [
    {
        name: "dev",
        fullName: "dev singh",
        age: 2,
        mail: "dev@gmail.com",
        loggedIn: ["Monday", "turesday"]
    },
    {1:"a", 2:"b"},
    {3: "c", 4: "d"},
]

console.log(user[0].mail);
console.log(insta);

console.log(Object.keys(insta))
console.log(Object.values(insta))
console.log(Object.entries(insta))

