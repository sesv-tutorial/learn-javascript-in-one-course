// Get to know the type of your variable: operator `typeof`

const myFunc = () => {}

console.log(typeof 123) // number
console.log(typeof 'abc') // string
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof myFunc) // function
console.log(typeof {}) // object
console.log(typeof []) // object, wrong, DO NOT use
console.log(Array.isArray([])) // true, correct
console.log(typeof null) // object, wrong DO NOT use
