// Create new blueprint based on another blueprint with "extends"

// create Car blueprint (class)
class Car {
  constructor(make, year) { // "make", "year" are arguments accepted at instantiation
    this.make = make // define class property "make"
    this.year = year // define class property "year"
  }

  powerBy = 'electricity' // another way to define class property "powerBy"
  #mileage = 500000 // define a "private" property "mileage" (only accessible within class)

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

// create new blueprint "Supercar" based on blueprint "Car"
class Supercar extends Car {
  constructor() {
    super(...arguments) // calls "Car" constructor method
    super.getMileage() // call "Car" getMileage method
    // here we can extend class Car further
    // with any setup we want
  }

  topSpeed = '250 mph' // add new property for "Supercar" class

  race() { // new method for Supercar
    console.log('racing with top speed', this.topSpeed)
  }
}

const sup1 = new Supercar('Bugatti', 2020) // car mileage: 500000
console.log(sup1.make) // Bugatti, parent's property
console.log(sup1.year) // 2020, parent's property
sup1.honk() // beep beep!, parent's method
console.log(sup1.topSpeed) // 250 mph, Supercar's property
sup1.race() // racing with top speed 250 mph, Supercar's method