const marvel = ["ironman", "hulk", "spiderman"]
const dc = ["flash", "superman", "batman"]

// marvel.push(dc)
// console.log(marvel)

// marvel.concat(dc)
// console.log(marvel)

// const heros = marvel.concat(dc)
// console.log(heros)

const new_heros = [...marvel, ...dc]  //spreading 
// console.log(new_heros)

const arr = [2, 4, [3, 5, 3], 56, 3,[6,5, [3]]]
const new_arr = arr.flat(Infinity)
console.log(new_arr)

console.log(Array.isArray("hello"))
console.log(Array.from("hello"))
console.log(Array.from({name: "dev"}))  //intresting

let score1 = 300
let score2 = 400
let score3 = 40

console.log(Array.of(score1, score2, score3))
