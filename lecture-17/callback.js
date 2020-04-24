// use callback functions to handle post asynchronous operation
// (after login)

console.log('1st line')
const username = 'myusername'
const password = 'myPassword'

const successCallback = () => { // a callback function
  console.log('login success, I am doing the next thing')
}

const failureCallback = () => { // a callback function
  console.log('login failed, reporting failure')
}


function login(username, password, successCb, failureCb) {
  setTimeout(() => {
    console.log('credentials:', username, password)
    let ok = true // we assumme login success
    if(ok) {
      successCb() // call success cb when login success
    } else {
      failureCb() // call failure cb if login failed
    }
  }, 1500) // we emulate login result returns after 1.5 second
}

login(username, password, successCallback, failureCallback)
console.log('last line')

// 1st line
// last line
// credentials: myusername myPassword
// login success, I am doing the next thing

