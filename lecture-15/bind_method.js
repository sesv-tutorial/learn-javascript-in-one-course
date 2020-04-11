// Bind given variable to function's "this", method bind()

const obj = { // we will pass this "obj" to "this"
  prop1: 'hello',
  method1: () => console.log('running method 1'),
}

function myFunc() {
  console.log('running myFunc')
  console.log(this) // "this" will be "obj" after bind()
}

const myFunc2 = myFunc.bind(obj) // myFunc2's "this" is now "obj"

myFunc2()
// running myFunc
// { prop1: 'hello', method1: [Function: method1] }