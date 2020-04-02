// both myVar1 and myVar2 has no value
let myVar1 = null
let myVar2
console.log(myVar1) // null, I intentionally put it as null
console.log(myVar2) // undefined, system default

const myFunction = () => { } // a empty function, returns nothing
console.log(myFunction()) // undefined, default returned value of function does not return anything
