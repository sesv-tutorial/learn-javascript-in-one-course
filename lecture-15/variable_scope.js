// Two variable scopes: global scope and function scope

// global scope variable example
const str = 'Hello' // "str" can be used anywhere hence "global scope"

function greet(name) {
  console.log(str + ' ' + name) // note that "str" is used here
}
greet('Mr. Stark') // "Hello Mr. Stark"



// function scope variable example

const greet2 = (name) => {
  const str2 = 'hello' // "str2" only available to use in "greet2" function
  console.log(str2 + ' ' + name)
}
greet2('Captain America') // "hello Captain America"


// print out global scope "str" ok
console.log(str) // Hello

// un-comment to see error
// str2 only known to function greet2
// so it will give an error if we try to access it here

// console.log(str2) // ReferenceError: str2 is not defined
