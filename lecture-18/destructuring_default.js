// Set default argument value for function

// in this function, the argument passed in is an object, we then:
// 1. destructure it
// 1. give destructured input default values
function print({ a: val1 = 1, b: val2 = {}, c: val3 = false }) {
  console.log(val1)
  console.log(val2)
  console.log(val3)
}

print({}) // no argument present will use default values
// 1
// {}
// false

print({ a: 3, b: { d: 'f'}, c: true}) // no default value used
// 3
// { d: 'f' }
// true