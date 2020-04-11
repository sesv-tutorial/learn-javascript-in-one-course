// define an object blueprint "MyCustomDataStructure"
function MyCustomDataStructure() {
  this.property1 = 123
  this.property2 = 'abc'
  this.method1 = () => {
    console.log('running method1')
  }
  this.method2 = () => {
    console.log('running method2')
  }
}

// you can create as many object based on blueprint as wanted
const customDs1 = new MyCustomDataStructure()
const customDs2 = new MyCustomDataStructure()

// they have the same property(ies) and method(s)
console.log(customDs1)
// MyCustomDataStructure {
//   property1: 123,
//   property2: 'abc',
//   method1: [Function],
//   method2: [Function]
// }
console.log(customDs2)
// MyCustomDataStructure {
//   property1: 123,
//   property2: 'abc',
//   method1: [Function],
//   method2: [Function]
// }