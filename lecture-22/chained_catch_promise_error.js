// chained ".catch(error)" to catch and handle error for a promise

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error from promise')
  }, 1000)
}).then().catch(err => {
  console.log('handle promise error here')
  console.log(err)
})
console.log('program continue to run without crashing')
// program continue to run without crashing
// handle promise error here, 1 second later
// error from promise