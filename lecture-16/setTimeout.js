// setTimeout()to run a function after specified time

const printAfter500ms = () => {
  console.log('this message is printed after 500 ms')
}

setTimeout(printAfter500ms, 500)
setTimeout(() => console.log('this message is printed after 100 ms'), 100)

// this message is printed after 100 ms
// this message is printed after 500 ms 