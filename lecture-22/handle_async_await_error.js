// Use "try...catch" to catch and handle "async/await" error

const login = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(`can't login`) // we emulate and error will be thrown
  }, 1000); // after 1 second
})

const getUser = async () => {
  try {
    const user = await login() // async/await syntax makes it easy to read code
  } catch(err) { // we catch the error here
    console.log('handle error logic goes here')
    console.log(err)
  }
}

getUser()
console.log('program continue to run without crashing')
// program continue to run without crashing
// handle error logic goes here
// can't login