// Create object blueprint using "object function"

// this blueprint is equivalent to the one create with "class" above
function Car(make, year) {
  this.make = make
  this.year = year
  this.powerBy = 'electricity'

  const mileage = 500000

  this.honk = () => console.log('beep beep!')

  this.getMileage = () => console.log('car mileage:', mileage)

  this.charge = async () => {
    console.log('charging...')
    setTimeout(() => {
      console.log('charging complete!')
    }, 1000)
  }

}

const car1 = new Car('Tesla', 2020) // car1 is an instance of "blueprint" Car
console.log(car1.make) // Tesla
console.log(car1.year) // 2020
console.log(car1.powerBy) // electricity
console.log(car1.mileage) // undefined, private property, can't access from outside
car1.getMileage() // car mileage: 500000, inside funciton can access private property
car1.honk() // beep beep!
car1.charge() // charging...
// charging complete!

// add more property to Car blueprint
Car.prototype.type = 'Green Vehicle'
console.log(car1.type) // Green Vehicle

const car2 = new Car() // "prototype" applies to existing and newly created object
console.log(car2.type) // Green Vehicle

// add more method to Car blueprint
Car.prototype.selfDrive = () => console.log('self driving activated')
car1.selfDrive() // self driving activated
car2.selfDrive() // self driving activated