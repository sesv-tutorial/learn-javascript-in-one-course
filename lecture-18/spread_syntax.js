// Handy syntax: spread syntax ..., spead given value into list

// spread array to list of arguments: ...array
const arr = [1,2,3, 'd']
console.log(arr) // [ 1, 2, 3, 'd' ]

console.log(...arr) // spread syntax
// 1 2 3 d
// equals to: console.log(arr[0], arr[1], arr[2], arr[3])
// hence "spread"

const arr2 = [...arr, 'a', 'b']
console.log(arr2) // [ 1, 2, 3, 'd', 'a', 'b' ]

function print(a, b, c, d) {
  console.log(d)
}
print(...arr) // d


// spread string, ...string
const str = 'abc'
console.log(...str) // a b c
// equals to: console.log(str[0], str[1], str[2])


// spread object, ...object
const obj = {
  a: 'b',
  c: 1
}
const obj2 = {
  ...obj, // spread syntax
  d: 2
}
console.log(obj2) // { a: 'b', c: 1, d: 2 }