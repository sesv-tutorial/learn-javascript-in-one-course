// Check if a variable is an instance of a class or object function

class Car {}
function Supercar() {}

const car1 = new Car()
const car2 = new Supercar()
console.log(car1 instanceof Car) // true
console.log(car1 instanceof Supercar) // false
console.log(car2 instanceof Supercar) // true