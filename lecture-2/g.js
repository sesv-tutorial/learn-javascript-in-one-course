// simple function but no one understand what it does
function g(s, n) {
  let b = 0
  for(let i = 0; i < s.length; i++) {
    b = b + n[i] - s[i]
  }
  return b
}

// If we add the following note, it makes a lot of sense:
// Function g calculate and output current gain/lost of your stock values.
// First input is an array of stock values at buying price, second input is an array of current value of same stocks.

// you can imagine it get more complicated quickly as number of lines of code grow and bad variable naming.

// Always document your code, for your future self and colleagues.

console.log('g:', g([3.5, 7],[5, 6])) // g: 0.5, current gain is 0.5 usd