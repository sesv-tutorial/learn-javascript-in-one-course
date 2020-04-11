// What is Javascript object?
const myObject = { 'a': 1 , 'b': 'c', 'd-e': [1, 2] } // an literal object
/*               ^  ^   ^ ^  ^    ^    ^          ^ ^
                 |  |   | |  |    |    |          | |
                 |  |   | |  |    |    ------------ |
                 |  |   | |  key  |         |       |
                 |  |   | |  'b'  |       3rd key:value pair
                 |  |   | |       |                 |
                 |  |   | |       value             |
                 |  |   | |       'c'               |
                 |  |   | |                         |
                 |  |   | comma separates pairs     |
                 |  |   |                           |
                 |  -----                           |
                 |    |                             |
                 |  1st key:value pair              |
                 |                                  |
                 open curly bracket                 close curly bracket
*/
console.log(myObject) // { a: 1, b: 'c', 'd-e': [ 1, 2 ] }




// Object is a powerful way to represent real life object
// example of a car represented by Javascript object
const car1 = {
  make: 'Tesla',
  model: 'Model X',
  year: 2020,
  isElectric: true,
  rangeMiles: 351,
  honk: () => 'beep beep!',
  selfIntroduce: () => {
    console.log(car1.honk())
    return `Hi, I am a ${car1.year} ${car1.make} ${car1.model}!`
  },
}
console.log(car1.isElectric) // true
console.log(car1.rangeMiles) // 351
console.log(car1.selfIntroduce())
// beep beep!
// Hi, I am a 2020 Tesla Model X!

// nested object
const car2 = {
  make: 'Tesla',
  parts: {
    headlight: {
      price: '$530'
    },
    'front-bumper': {
      price: '$270'
    },
  }
}
console.log(car2)
// {
//   make: 'Tesla',
//   parts: { headlight: { price: '$530' }, 'front-bumper': { price: '$270' } }
// }



// Read object property
const car3 = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  parts: {
    headlight: {
      price: '$530'
    },
    'front-bumper': {
      price: '$270'
    },
  },
  selfDrive: () => 'Self driving activated!'
}
console.log(car3.model) // Model 3
console.log(car3.parts) // { headlight: { price: '$530' }, 'front-bumper': { price: '$270' } }
console.log(car3.parts.headlight.price) // $530, nested object property
console.log(car3.parts['front-bumper'].price) // $270, notice the second way to access property

// Run object method
console.log(car3.selfDrive()) // Self driving activated!


// access undefined property will return undefined
console.log(car3.color) // undefined

// access undefined method will crash the program
// un-comment following line will crash the program
// console.log(car3.honk()) // TypeError: car3.honk is not a function




const car4 = {
  name: 'Bumblebee',
  honk: () => console.log(`it's Bumblebee`)
}

// Update object property
car4.name = 'Optimus Prime'
console.log(car4) // { name: 'Optimus Prime' }

// Update object method
car4.honk = () => console.log(`it's Optimus Prime`)
car4.honk() // it's Optimus Prime

// Add new object property
car4.heightFeet = 4
console.log(car4) // { name: 'Optimus Prime', honk: [Function], heightFeet: 4 }

// Add new object method
car4.transform = () => console.log(`blink, I've turned to humanoid form`)
car4.transform() // blink, I've turned to humanoid form





const car5 = {
  name: 'Bumblebee',
  honk: () => console.log(`it's Bumblebee`)
}

// delete object property
console.log(car5) // { name: 'Bumblebee', honk: [Function: honk] }
console.log(delete car5.name) // true, return true if successful
console.log(car5) // { honk: [Function: honk] }

// delete object method
console.log(delete car5.honk) // true
console.log(car5) // {}, empty object




// Check if object has a property or method
const car6 = {
  name: 'Bumblebee',
  honk: () => console.log(`it's Bumblebee`)
}
console.log(car6.model) // undefined, object does not have property or method called model




// Check if object has a property or method
const car7 = {
  name: 'Bumblebee',
  honk: () => console.log(`it's Bumblebee`)
}
console.log(car6.model) // undefined, object does not have property or method called model




// Method chaining means running method of returned object
const myObj = {
  method1: () => {
    console.log('running method1')
    return { // return an object which has method2
      method2: () => console.log('running nested object method2')
    }
  }
}
// the two following lines
const myObj2 = myObj.method1() // running method1
myObj2.method2() // running nested object method2
// are equivalent to
myObj.method1().method2() // method chaining
// running method1
// running nested object method2




// Convert object to string, JSON.stringify()
const car8 = {
  name: 'Bumblebee',
  age: 201,
}
console.log(JSON.stringify(car8)) // '{"name":"Bumblebee","age":201}'
console.log(car8.toString()) // [object Object], wrong! do not use




// Convert object to string, JSON.stringify()
const strObject = '{"name":"Bumblebee","age":201}'
const convertedStr = JSON.parse(strObject)
console.log(convertedStr) // { name: 'Bumblebee', age: 201 }
console.log(JSON.parse('{"name":"Bumblebee","age":201}')) // { name: 'Bumblebee', age: 201 }

// if object string is malformed, JSON.parse() will crash the program
// un-comment to see error
// console.log(JSON.parse('{"name":"Bumblebee","age":201,f}')) // SyntaxError: Unexpected token f in JSON at position 30