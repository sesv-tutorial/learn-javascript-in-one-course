// The "arguments" object in function holds all of its arguments

function printAllArguments(a, b, c, d) {
  console.log(arguments) // (i)
  console.log(arguments[0]) // (ii)
  console.log(arguments[1]) // (iii)
  console.log(arguments[2]) // (iv)
  console.log(arguments.length) // (v)
  console.log(a,b,c) // (vi)
}

printAllArguments(1,2,3, 'd')
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 'd' }, (i)
// 1, (ii)
// 2, (ii)
// 3, (iv)
// 4, (v)
// 1 2 3, (vi)