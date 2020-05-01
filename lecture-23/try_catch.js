// Use "try...catch" to catch error and handle it
try {
  throw new Error('this exception is intentional') // Error: this exception is intentional
} catch(err) {
  console.log('now we can do error handling logic here') // now we can do error handling logic here
  console.log(err) // Error: this exception is intentional
}
console.log('program continue to run without crashing')
// program continue to run without crashing