// Function is a "first-class" citizen in Javascript

// Assign a function to a variable
const myFunc = () => {
  console.log('running statements in myFunc!')
}
myFunc() // running statements in myFunc!

// Pass a function as an Argument
const func1 = () => console.log('running func1')
const func2 = (func1) => {
  func1()
  console.log('running func2')
}
func2(func1)
// running func1
// running func2

// Return a function
const func3 = () => console.log('running func3')
const func4 = () => {
  console.log('running func4')
  return func3
}
const a = func4() // running func4
a() // running func3





// Object function used to create object blueprint
function MySpecialDataStucture() {
  console.log('running blueprint')
  this.property1 = '123'
  this.method1 = function() {
    console.log('running method 1')
  }
}
//
const specialDs = new MySpecialDataStucture() // running blueprint
console.log(specialDs) // MySpecialDataStucture { property1: '123', method1: [Function] }
console.log(specialDs.property1) // 123
specialDs.method1() // running method 1


