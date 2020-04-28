// Generator function, function can be paused and continued

function* createGenerator() {
  console.log('run to yield 1')
  yield { name: 'Bruce' } // 1st pausable point
  yield // 2nd pausable point
  console.log('run to yield 3')
  yield 3 // 3rd pausable point
  console.log('finish')
  return 'final'
}

// Generator object
const generator = createGenerator() // invoking Generator function will return a Generator object

console.log(generator.next()) // function is paused at the 1st `yield`
// run to yield 1
// { value: { name: 'Bruce' }, done: false }

console.log(generator.throw(new Error('your message'))) // Error: your message
