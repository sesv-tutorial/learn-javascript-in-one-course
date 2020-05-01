// Loop statement: for...of

// in this example
// elementDeclaration: const property
// array: arr
const arr = [1,2,3,'a','b']
for(const element of arr) {
  console.log(element)
}
// 1
// 2
// 3
// a
// b


// loop through object with "for...of" and "Object.entries()"

// in this example,
// myObject is: obj
// Object.entries(obj) returns: [['1',2], ['a','b'], ['c','d']]
// let [key, val] = ['1',2] (destructuring) -> key = '1', val = 2
const obj = {
  a: 'b',
  c: 'd',
  '1': 2
}
for (let [key, val] of Object.entries(obj)) {
  console.log(`key: ${key}, value: ${val}`)
}
// key: 1, value: 2
// key: a, value: b
// key: c, value: d