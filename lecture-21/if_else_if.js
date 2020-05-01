// Conditional statement: if, if else, if else if

// if
if (1 > 2) {
  console.log('not supposed to be seen on console.')
}

if (1 < 2) {
  console.log('running if logic!')
}
// running if logic!


// if else
if (2 <= 2) {
  console.log('running if else logic')
} else {
  console.log(`condition is true, this line won't show`)
}
//running if else logic


// if else if
if (2 < 2) {
  console.log(`this if block won't run`)
} else if (3 < 2) {
  console.log(`this else if block won't run`)
// you can have as many else if block as needed
} else if( 4 <= 4) {
  console.log(`this else if block will run`)
} else {
  console.log(`this else block won't run`)
}
// this else if block will run