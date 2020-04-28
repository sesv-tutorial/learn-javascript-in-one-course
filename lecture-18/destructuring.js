// Destructuring assignment syntax to unpack values into distinct variables

// unpack and assign from array
const arr = [1,2,3,'a']
const [,val1,, val3] = arr // destructuring
console.log(val1) // 2
console.log(val3) // a

// unpack and assign from object properties
const obj = {
  a: 'b',
  'x-y': 1,
  c: 'd'
}
const { a, c } = obj // destructuring and assign variable the same names with object key
console.log(a) // b
console.log(c) // d

const { 
  a:val5,
  c: val6,
  'x-y': xy,
} = obj // destructuring and assign variable the DIFFERENT names with object key
console.log(val5) // b
console.log(val6) // d
console.log(xy) // 1