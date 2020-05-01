// try...catch will not be able to catch an error from Promise
try {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error from promise')
    }, 1000)
  })
} catch(err) {
  console.log(err) // nothing
}