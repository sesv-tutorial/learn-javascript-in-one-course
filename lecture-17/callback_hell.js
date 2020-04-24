// callback shorthand: declare callback function at passing in

// this style - separate callback declaration

const cb = () => {
  console.log('running callback')
}
login(cb)

// and this style - declare callback at passing in
// are equivalent

login(() => {
  console.log('running callback')
})





// callback hell
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult)
    }, failureCallback)
  }, failureCallback)
}, failureCallback)