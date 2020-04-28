let num1 = 1 // declare variable name `num1` and assign value 1 to it
let num2 = 2 // integer number
let floatNum = 3.4 // floating point number
let expNum1 = 5.6e+4 // exponential notation, equals 5.6e4 or 56000
let expNum2 = 5.6e-4 // exponential notation, equals 0.00056

// declare variable name `num3` and assign its value to be sume of `num1` and `num2`
let num3 = num1 + num2

// print them out in console
console.log('num1:', num1) // num1: 1
console.log('num2:', num2) // num2: 2
console.log('num3:', num3) // num3: 3
console.log('expNum1:', expNum1) // expNum1: 56000
console.log('expNum2:', expNum2) // expNum2: 0.00056

// convert num1 to a string and assign that value to strNum1 variable
let strNum1 = num1.toString() 
console.log('strNum1:', strNum1) // strNum1: 1, this `1` is a string
console.log('num1:', num1) // num1: 1, this `1` is a number
console.log('typeof num1:', typeof num1) // typeof num1: number
console.log('typeof strNum1:', typeof strNum1) // typeof strNum1: string


Number // global Number object, ready to use anywhere, anywhen

// The smallest interval between two representable numbers.
console.log(Number.EPSILON) // 2.220446049250313e-16

// Integer bigger than this value will result inaccuracy in calculation.
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// Integer smaller than this value will result inaccuracy in calculation.
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// Max number can be presented in Javascript
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

// Min number can be presented in Javascript (without actually being zero)
console.log(Number.MIN_VALUE) // 5e-324

// "Not a Number" value. You will see this a lot actually.
// This usually tells that calculation can't be done with given inputs
console.log(Number.NaN) // NaN
console.log('a'/ 2) // NaN, a tring devide by 2 is not a number

// "-Infinity" represent the negative infinity number
console.log(Number.NEGATIVE_INFINITY) // -Infinity
console.log(-1 / 0) // -Infinity, -1 divide by 0 result -Infinity

// "Infinity" represent the positive infinity number
console.log(Number.POSITIVE_INFINITY) // -Infinity
console.log(1 / 0) // Infinity, 1 divide by 0 result Infinity


// convert string to integer number
// parseInt() and Number.parseInt() are the identical and global
let str = '3'
let num = parseInt(str) // convert `str` to number and assign it to num variable
let num4 = Number.parseInt(str) // convert `str` to number and assign it to num variable
console.log(typeof str, str) // string 3
console.log(typeof num, num) // number 3
console.log(typeof num4, num4) // number 3

// convert string to float (decimal) number
// parseInt() and Number.parseInt() are the identical and global
let str2 = '3.456'
let num5 = parseFloat(str2) // convert `str` to number and assign it to num variable
let num6 = Number.parseFloat(str2) // convert `str` to number and assign it to num variable
console.log(typeof str2, str2) // string 3
console.log(typeof num5, num5) // number 3
console.log(typeof num6, num6) // number 3