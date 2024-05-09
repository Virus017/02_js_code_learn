let a = 544  // Global scope

if (true) {
    let a = 20  // Local scope
    const b = 32
    var c = 4
    console.log("Inner:", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const name= "dev"

    function two(){
        const website = "Youtube"
        console.log(name)
    }
    two()
}

// one()

if (true){
    const user = "dev"

    if (user == "dev"){
        const website = "youtube"
        console.log(user + website)
    }
    // console.log(website)
}

// *********************Instresting**************************

function addOne (num1) {
    return num1 +1
}

console.log(addOne(2)) 

const addTwo = function(num1){
    return num1 + 2
}