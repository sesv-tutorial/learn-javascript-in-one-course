// Arithmetic Operators: + - * / ** % ++ --

// + Addition
let x = 1 + 2
console.log(x) // 3

// - Subtraction
let y = 3 - 1
console.log(y) // 2

//* Multiplication
let z = 2 * 2
console.log(z) // 4

// / Division
let w = 6 / 2
console.log(w) // 3

// ** Exponentiation
let t = 3 ** 2
console.log(t) // 9

// % Modulus (Division Remainder)
let a = 3 % 2
console.log(a) // 1

// ++ Increment
let b = 1
b++
console.log(b) // 2

// -- Decrement
let c = 1
c--
console.log(c) // 0

// Difference on using Increment and Decrement operators with
// pre-fix and post-fix on function
const print = x => console.log(x)
let d = 2
let e = 2

// d is passed into function BEFORE incremented
print(d++) // 2
console.log(d) // 3

// d is incremented BEFORE passed into function 
print(++d) // 4
console.log(d) // 4

// e is passed into function BEFORE decremented
print(e--) // 2
console.log(e) // 1

// e is decremented BEFORE passed into function 
print(--e) // 0
console.log(e) // 0