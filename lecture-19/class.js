// Create object blueprint with "class"

// create Car blueprint (class)
class Car {
  constructor(make, year) { // "make", "year" are arguments for instantiation
    this.make = make // define class property "make"
    this.year = year // define class property "year"
  }

  powerBy = 'electricity' // another way to define class property "powerBy"
  #mileage = 500000 // define a "private" property (only accessible within class)

  honk() { // define a synchronous method
    console.log('beep beep!')
  }

  getMileage() { // define another synchronous method
    console.log('car mileage:', this.#mileage)
  }

  async charge() { // define a asynchronous method
    console.log('charging...')
    setTimeout(() => {
      console.log('charging complete!')
    }, 1000)
  }
}

// create car1 object based on Car blueprint
const car1 = new Car('Tesla', 2020) // car1 is an instance of "blueprint" Car
console.log(car1.make) // Tesla
console.log(car1.year) // 2020
console.log(car1.powerBy) // electricity
console.log(car1.mileage) // undefined, private property, can't access from outside
car1.getMileage() // car mileage: 500000, inside funciton can access private property
car1.honk() // beep beep!
car1.charge()
// charging...

// create car2 object based on Car blueprint
const car2 = new Car('Bat Mobile', 2051) // car2 is another instance of "blueprint" Car
console.log(car2.make) // Bat Mobile
console.log(car2.year) // 2051

// charging complete!