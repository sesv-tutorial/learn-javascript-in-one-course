// this keyword called within an object function refers itself
function MySpecialDataStucture() {
  console.log(this) // MySpecialDataStucture {}
  this.property1 = '123'
  console.log(this.property1) // 123
  this.method1 = function() {
    console.log('running method 1')
  }
  console.log(this) // MySpecialDataStucture { property1: '123', method1: [Function] }
}
const specialVariable1 = new MySpecialDataStucture()

// specialVariable1 is created based on a "MySpecialDataStucture" blueprint
// so it has everything defined in the blueprint
console.log(specialVariable1) // MySpecialDataStucture { property1: '123', method1: [Function] }


// we can create as many new object based on this blue print as wanted
const specialVariable2 = new MySpecialDataStucture()
console.log(specialVariable2) // MySpecialDataStucture { property1: '123', method1: [Function] }




// DO NOT USE IN PRODUCTION - FOR LEARNING PURPOSE ONLY
// this way of usage exposes a high security threat
// we can call "this" keyword here. it will represent this file
console.log(this) // {}, this file currently has no property nor method

// we can always add property and method for this file
this.property = 456
this.method = () => {
  console.log(`running a method from this_keyword.js`)
}
// and call them right here
console.log(this.property) // 456
this.method() // running a method from this_keyword.js

