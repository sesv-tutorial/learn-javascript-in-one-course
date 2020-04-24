// async/await syntax to improve code readability of async logic

// 3 different styles of handling returned data from 
// fetchUser asynchronous operation

console.time('top_to_bottom')
console.time('top_to_callback')
console.time('top_to_promise')
console.time('top_to_async_await')

// callback style
const handleUserDataCallback = (val) => {
  console.log('handle user data, callback style:', val)
  console.timeEnd('top_to_callback')
}

function fetchUserCallbackStyle(callback) {
  setTimeout(() => {
    callback({ user: 'Superman', superpower: 'fly' })
  }, 1000)
}

fetchUserCallbackStyle(handleUserDataCallback)

// promise style
const fetchUserPromiseStyle = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: 'Aquaman', superpower: 'dive' })
  }, 2000)
})

fetchUserPromiseStyle
.then(val => {
  console.log('handle user data, promise style:', val)
  console.timeEnd('top_to_promise')
})
.catch(err => console.log(err))


// async/await style
const fetchUserAsyncFunctionStyle = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ user: 'Deadpool', superpower: 'indestructible' })
    }, 3000)
  })
}

const handleUserDataAsyncFunctionStyle = async () => {
  const val = await fetchUserAsyncFunctionStyle() // also see the difference of
  const val2 = await fetchUserPromiseStyle // calling promise and function here
  console.log('handle user data, async function style:', val)
  console.log('handle user data, async function style:', val2)
  console.timeEnd('top_to_async_await')
}

handleUserDataAsyncFunctionStyle()

console.timeEnd('top_to_bottom')

// top_to_bottom: 0.759ms
// handle user data, callback style: { user: 'Superman', superpower: 'fly' }
// top_to_callback: 1006.114ms
// handle user data, promise style: { user: 'Aquaman', superpower: 'dive' }
// top_to_promise: 2006.171ms
// handle user data, async function style: { user: 'Deadpool', superpower: 'indestructible' }
// handle user data, async function style: { user: 'Aquaman', superpower: 'dive' }
// top_to_async_await: 3002.161ms