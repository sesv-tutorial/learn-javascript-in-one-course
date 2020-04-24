// Promise

console.log('first line') // (I)

const fetchUserInfo = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: 'Tony' }) , 1000)
  setTimeout(() => reject('nah') , 2000)
})

fetchUserInfo
.then(resolveVal => console.log(resolveVal)) // (II)
.catch(err => console.log(err))


console.log('beetween promises') // (III)

// Promise is chainable, you can have as many "then" as wanted

fetchUserInfo
.then(resolveVal => 'Hello ' + resolveVal.name + '!') // value returned by this "then"
.then(greet => console.log(greet)) // (IV), is input of next "then"
.then() // you can chain as many "then"
.then() // as needed
.then() // even with empty ones
.then(() => fetchUserInfo) // you can aslo return a promise
.then(val => console.log(val)) // (V), this is how we "flatten" the callback hell
.catch(err => console.log(err))

console.log('last line') // (VI)

// first line (I)
// beetween promises (III)
// last line (VI)
// { name: 'Tony' } (II)
// Hello Tony! (IV)
// { name: 'Tony' } (V)