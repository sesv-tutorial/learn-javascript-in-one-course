// String built-in matching method: match
const str1 = `It's always sunny in Sunnyvale.`

// without modifier `g`, `exec` method always return first match
const regex1 = /sunny/i
console.log(regex1.exec(str1)) // always return first match, that's it
// 1st call
// [
//   'sunny',
//   index: 12,
//   input: "It's always sunny in Sunnyvale.",
//   groups: undefined
// ]
console.log(regex1.exec(str1)) // call `exec` again, get same result as above
// 2nd call, same as 1st call
// [
//   'sunny',
//   index: 12,
//   input: "It's always sunny in Sunnyvale.",
//   groups: undefined
// ]

// with modifier `g`, regex "remembers" its last match and continue from there
const regex2 = /sunny/ig
console.log(regex2.exec(str1))
// 1st call, 
// [
//   'sunny',
//   index: 12, // 1s match
//   input: "It's always sunny in Sunnyvale.",
//   groups: undefined
// ]
console.log(regex2.lastIndex) // 17, 2nd call will start from index 18
console.log(regex2.exec(str1))
// 2nd call, continue to look from the 1st match
// [
//   'Sunny',
//   index: 21, // 2nd match
//   input: "It's always sunny in Sunnyvale.",
//   groups: undefined
// ]
console.log(regex2.exec(str1)) // null, 3rd call, because no more match




// Regex built-in matching method: test
const regex3 = /always/
const regex4 = /never/
// str1 = `It's always sunny in Sunnyvale.`
console.log(regex3.test(str1)) // true
console.log(regex4.test(str1)) // false

