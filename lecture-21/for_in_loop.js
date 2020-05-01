// Loop statement: for...in

// in this example
// propertyDeclaration: const property
// object: obj
const obj = {
  a: 'b',
  c: 'd',
  'x-y': 1,
  '2': 3
}
for(const property in obj) {
  console.log(property)
}
// 2
// a
// c
// x-y