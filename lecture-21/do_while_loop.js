// Loop statement: do... while
let i = 0
do {
  console.log(i)
  i++
} while(i <= 3)
// 0
// 1
// 2
// 3

// we can use "break" statement to get out of a loop anytime
let j = 0
do {
  console.log(j)
  j++
  break
} while(j <= 3)
// 0