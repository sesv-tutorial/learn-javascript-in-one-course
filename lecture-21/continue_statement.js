// Jump statement: continue, continue the loop from the beginning

// continue in "for" loop
for(let i = 0; i < 3; i++) {
  if(i != 1) continue
  console.log('current i:', i)
}
// current i: 1

// continue in "while" loop
let counter = 0
while(counter < 3) {
  counter++
  if(counter != 1) {
    continue
  }
  console.log('current counter:', counter)
}
// current counter: 1