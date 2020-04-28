// String built-in matching method: match
const str1 = `It's always sunny in Sunnyvale.`
const regex1 = /sunny/i
const regex2 = /sunny/gi
const regex3 = /hola/gi
console.log(str1.match(regex1)) // if modifier `g` not used, details included
// [
//   'sunny', // matched part
//   index: 12, // matched position
//   input: "It's always sunny in Sunnyvale.", // original string
//   groups: undefined
// ]
console.log(str1.match(regex2)) // [ 'sunny', 'Sunny' ]
console.log(str1.match(regex3)) // null
console.log(str1.match('sunny'))
// detail info if there is only 1 match
// [
//   'sunny',
//   index: 12,
//   input: "It's always sunny in Sunnyvale.",
//   groups: undefined
// ]



// // String built-in matching method: matchAll
// let arr = str1.matchAll(regex2) // arr is an iterator
// for(let a of arr) { // a is each element of arr
//   console.log(a) // print all element
// }
// // we have 2 matches
// // [
// //   'sunny', // first match
// //   index: 12,
// //   input: "It's always sunny in Sunnyvale.",
// //   groups: undefined
// // ]
// // [
// //   'Sunny', // second match
// //   index: 21,
// //   input: "It's always sunny in Sunnyvale.",
// //   groups: undefined
// // ]



// // String built-in matching method: replace

// // string pattern
// console.log(str1.replace('sunny', '_rainy_')) // It's always _rainy_ in Sunnyvale.

// // regex pattern
// console.log(str1.replace(/sunny/gi, '_rainy_')) // It's always _rainy_ in _rainy_vale



// // String built-in matching method: search
// console.log(str1.search('sunny')) // 12, string pattern
// console.log(str1.search(/sunny/)) // 12, regex pattern

