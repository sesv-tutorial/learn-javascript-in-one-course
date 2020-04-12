// What is closure?

function createCounter() { // outer function
  let count = 0 // is "remember" and "can be used" by inner function
  return { // an object with 3 methods is returned
    increase: () => count = count + 1, // inner function
    decrease: () => count = count - 1, // inner function
    print: () => console.log(count), // inner function
  }
}

const counter = createCounter()

counter.print() // 0
counter.increase()
counter.print() // 1
counter.decrease()
counter.decrease()
counter.print() // -1
