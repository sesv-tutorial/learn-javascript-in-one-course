// Ways to create a set
const set1 = new Set() // wihout initial value
console.log(set1) // Set {}, empty set

const set2 = new Set([1,2,3, 'a', []]) // with some initial values
console.log(set2) // Set { 1, 2, 3, 'a', [] }



// Get the count of values in Set, property size
console.log(set1.size) // 0, set is empty
console.log(set2.size) // 5




// Add value to Set, method add
const set3 = new Set()
console.log(set3.add(1)) // Set { 1 }
console.log(set3.add(2)) // Set { 1, 2 }




// Check if a value in Set, method has
const set4 = new Set([1,2,'a','b',[], [4]])
console.log(set4.has(1)) // true
console.log(set4.has('b')) // true
console.log(set4.has([])) // false, set does not recognize empty array []
console.log(set4.has([4])) // false, set does not recognize array [4]




// Delete a value in Set, method delete
const set5 = new Set([1,2,'a','b',[], [4]])
console.log(set5.delete(1)) // true
console.log(set5.delete(3)) // false
console.log(set5) // Set { 2, 'a', 'b', [], [ 4 ] }





// Remove all values in Set, method clear
const set6 = new Set([1,2,'a','b',[], [4]])
console.log(set6.clear()) // undefined
console.log(set6) // Set {}





// Remove all values in Set, method clear
const set7 = new Set([1,2,'a','b',[], [4]])
console.log(set7.forEach((e1, e2, e3,) => {
  // console.log(e1, e2, e3)
}))
console.log(set7)





// Loop through all values in Set, method forEach
const set8 = new Set([1,2,'a','b',[], [4]])
const additionalArg = 'hello' // an variable we want to include in loop logic
set7.forEach((value1, value2, originalSet) => {
  console.log(`value1: ${value1}, value2: ${value2}, additionalArg: ${additionalArg}`)
}, additionalArg)
// 6 output on console for set size 6
// value1: 1, value2: 1, additionalArg: hello
// value1: 2, value2: 2, additionalArg: hello
// value1: a, value2: a, additionalArg: hello
// value1: b, value2: b, additionalArg: hello
// value1: , value2: , additionalArg: hello
// value1: 4, value2: 4, additionalArg: hello
console.log(set7) // Set { 1, 2, 'a', 'b', [], [ 4 ] }, original set NOT modified

