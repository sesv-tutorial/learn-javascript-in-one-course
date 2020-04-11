// Self invoking function, declare and run function right away

// we can replace this
function myFunc1 () {
  console.log('running myFunc1...')
}
myFunc1() // running myFunc1...


// with this self invoking "object" function
// notice the semi-colon ";", because we are not using it at every line end,
// we need to put it in front of any self-invoking function
;(function myFunc2() {
  console.log('running myFunc2...')
})() // running myFunc2...


// with this self invoking "arrow" function
  ;(() => console.log('running myFunc3...'))() // running myFunc3...
/* ^                                       ^^^
   |                                       |||
   |                                       | - pair of open-close
   |                                       |   parenthesis means "invoke"
   |                                       |
   -----------------------------------------
                     |
            wrap declaration in parenthesises ()
*/