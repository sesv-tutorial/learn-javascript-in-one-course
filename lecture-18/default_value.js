// Set default argument value for function

// in this function, the default values for a is 1,
// default b is false
// default c is 'abc'
function print(a = 1, b = false, c = 'abc') {
  console.log(a)
  console.log(b)
  console.log(c)
}

print() // no argument present will use default values
// 1
// false
// abc

print(2,2,2) // no default value used
// 2
// 2
// 2