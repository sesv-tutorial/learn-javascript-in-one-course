// synchronous function
// next line of code executed after previous one finished
console.log('1st line')
let name = 'Tony Stark'
function greet(name) {
  console.log('Hello ' + name + '!')
}
greet(name)
console.log('last line')

// 1st line
// Hello Tony Stark!
// last line