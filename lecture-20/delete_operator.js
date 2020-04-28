// Delete an object property: operator delete

const obj = {
  a: 'b',
  c: 1
}
console.log(delete obj.a) // true
console.log(obj) // { c: 1 }