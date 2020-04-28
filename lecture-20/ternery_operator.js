// ? Ternery operator
// Ternery operator with assignment usage
let x
x = (1 > 2) ? 3 : 4
console.log(x) // 4

// Ternery  operator with expression usage
let y
(1 > 2) ? y = 3 : y = 4
console.log(y) // 4


// If shorthand with "&&" operator
true && console.log('hello') // hello
1 < 2 && (y = 5)
1 > 2 && (y = 6)
console.log(y) // 5