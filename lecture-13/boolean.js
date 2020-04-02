console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('a')) // true
console.log(Boolean('')) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

console.log(Boolean(![].length)) // true, empty array
console.log(Boolean([])) // true, empty array, but logic is wrong! DO NOT USE
console.log(Boolean([1,2]), 'lala') // true, array not empty, DO NOT USE

console.log(Boolean(!Object.keys({}).length)) // true, empty object
console.log(Boolean({})) // true, empty object, but logic is wrong! DO NOT USE
console.log(Boolean({'a': 1})) // true, object not empty, DO NOT USE

// logical operator
console.log(1 > 2) // false
console.log(1 < 2) // true

const myBool1 = true // no "quote" needed
const myBool2 = false // no "quote" needed
console.log(myBool1) // true
console.log(myBool2) // false
