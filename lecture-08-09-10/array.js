// Ways to create an array
const arr0 = [] // literal, empty array
console.log(arr0) // []

const arr1 = ['a', 'b', 'c', 1 ,2 , 3] // literal, with values
console.log(arr1) // [ 'a', 'b', 'c', 1, 2, 3 ]

const arr2 = new Array(3) // with constructor, specify length 3
console.log(arr2) // [ <3 empty items> ]

const arr3 = new Array('a', 'b', 'c', 1 ,2 , 3) // with constructor and values
console.log(arr3) // [ 'a', 'b', 'c', 1, 2, 3 ]

const arr4 = new Array(4).fill(0) // length 4, pre-filled with 0
console.log(arr4) // [ 0, 0, 0, 0 ]



// Array global object and its creating a variable using constructor
const myArray = new Array(1,2,3)
console.log(myArray) // [ 1, 2, 3 ]



// Check if a variable is an array, method isArray
console.log(Array.isArray('abc')) // false
console.log(Array.isArray([])) // true



// Fill array with given value, method fill
const arr5 = new Array(5)
console.log(arr5.fill(0)) // [ 0, 0, 0, 0, 0 ]
console.log(arr5.fill(1, 1)) // [ 0, 1, 1, 1, 1 ]
console.log(arr5.fill(2, 2, 5)) // [ 0, 1, 2, 2, 2 ]



// Presentation of matrix with array
// 2 dimentions nxn matrix
const matrix3x3 = [ [1,2,3],
                    [4,5,6],
                    [7,8,9] ] // 3x3 matrix
console.log(matrix3x3) // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
/*
  row 0 -->    [ [ 1, 2, 3 ],
  row 1 -->      [ 4, 5, 6 ],
  row 2 -->      [ 7, 8, 9 ] ]
                   ^  ^  ^
                   |  |  |
                   |  |  |
                   |  |  column 2
                   |  column 1
                   column 0
*/
// access to row 1, column 2 element
console.log(matrix3x3[1][2]) // 6,



// Use array to contain information of screen display

// 2x2 screen information represented by an array of consecutive 4 elements

const screen1 = [255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255]
/*               ^            ^  ^            ^  ^            ^  ^            ^
                 |            |  |            |  |            |  |            |
                 |            |  |            |  |            |  |____________|
                 |            |  |            |  |            |        |
                 |            |  |            |  |____________|     4th pixel
                 |            |  |            |        |
                 |            |  |____________|     3rd pixel
                 |            |         |
                 |            |     2nd pixel, next 4 elements and so on...
                 |            | 
                 |____________| 
                       |
                   1st pixel, first 4 elements
*/


// 2x2 screen information represented by a 2x2x4 matrix
const creen2x2x4 = [ [[255, 0, 0, 255], [255, 0, 0, 255]], 
                     [[255, 0, 0, 255], [255, 0, 0, 255]] ] // 2x2x3 matrix
console.log(creen2x2x4)
/*
  row 0 -->    [ [[255, 0, 0, 255], [255, 0, 0, 255]], 
  row 0 -->      [[255, 0, 0, 255], [255, 0, 0, 255]] ]
                  ^                 ^
                  |                 |
                  |                 |
                  |                 |
                  |                 column 1
                  column 0
*/
// access to pixel at row 0, column 0
console.log(creen2x2x4[0][0]) // [ 255, 0, 0, 255 ]
/*
RED: 255
GREEN: 0
BLUE: 0
OPACITY: 255
=> this pixel display pure RED
*/



// Get an element in array using index
const arr6 = [1,2, [3, 'a', ['b', 'c', 4]]] // mixed array
console.log(arr6[1]) // 2
console.log(arr6[2][1]) // a
// explanation: `arr6[2]` = [3, 'a', ['b', 'c', 4]]
//              `arr6[2][1]` = [3, 'a', ['b', 'c', 4]][1] = 'a'
console.log(arr6[2][2][2]) // 4
// explanation: `arr6[2]` = [3, 'a', ['b', 'c', 4]]
//              `arr6[2][2]` = ['b', 'c', 4]
//              `arr6[2][2][2]` = ['b', 'c', 4][2] = 4



// Modify an element in array
const arr7 = [1, 2, 'a', 'b']
arr7[1] = arr7[1] + 1
console.log(arr7) // [ 1, 3, 'a', 'b' ]
arr7[2] = arr7[2] + ' and c'
console.log(arr7) // [ 1, 3, 'a and c', 'b' ]



// Get length of an array, property length
console.log([1,2,3, 'a'].length) // 4, length 4



// Empty array is different from sparse array
console.log([]) // [], empty array
console.log([].length) // 0, empty array length 0
console.log(new Array(3)) // [ <3 empty items> ], sparse array, empty element
console.log([,,,]) // [ <3 empty items> ], sparse array, empty element
console.log([,,,].length) // 3, sparse array length 3



// Removes the last element from an array, method pop
const arr8 = [2,3,4]
console.log(arr8.pop()) // 4, popped element
console.log(arr8) // [ 2, 3 ], original array modified



// Removes the first element from an array, method shift
const arr9 = ['a', 'b', 'c']
console.log(arr9.shift()) // a, 'shifted' element
console.log(arr9) // [ 'b', 'c' ], original array modified
console.log(arr8) // [ 2, 3 ], original array modified



// Adds element(s) to the end of an array, method push
const arr10 = [1, 'b', 3]
console.log(arr10.push(4)) // 4, 'pushed' element
console.log(arr10) // [ 1, 'b', 3, 4 ], original array modified
console.log(arr10.push(5,6)) // 6, last 'pushed' element
console.log(arr10) // [ 1, 'b', 3, 4, 5, 6 ], original array modified



// Adds element(s) to the beginning of an array, method unshift
const arr101 = [1, 'b', 3]
console.log(arr101.unshift(4)) // 4, 'unshifted' element
console.log(arr101) // [ 4, 1, 'b', 3 ], original array modified
console.log(arr101.unshift(5,6)) // 6, last 'unshifted' element
console.log(arr101) // [ 5, 6, 4, 1, 'b', 3 ], original array modified



// Adds and/or removes elements from an array, method splice
const arr11 = [1,2,3,4,5]
console.log(arr11.splice(1)) // [ 2, 3, 4, 5 ], removed elements
console.log(arr11) // [ 1 ], modified original array

const arr12 = [1,2,3,4,5]
console.log(arr12.splice(1,2)) // [ 2, 3 ], removed elements
console.log(arr12) // [ 1, 4, 5 ], modified original array

const arr13 = [1,2,3,4,5]
console.log(arr13.splice(1,2, 'a', 'b', 'c')) // [ 2, 3 ], removed elements
console.log(arr13) // [ 1, 'a', 'b', 'c', 4, 5 ], modified original array



// Sorts the elements of an array, method sort
const arr14 = [4,3,9,7]
console.log(arr14.sort()) // [ 3, 4, 7, 9 ], sorted array
console.log(arr14) // [ 3, 4, 7, 9 ], original array modified

const arr15 = [['c', 5], ['b', 4], ['a', 7]]
console.log(arr15.sort((a,b) => a[1] - b[1]))
// sort by the number
// [ [ 'b', 4 ], [ 'c', 5 ], [ 'a', 7 ] ]

console.log(arr15.sort((a,b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)))
// sort by the character
// [ [ 'a', 7 ], [ 'b', 4 ], [ 'c', 5 ] ]



// Reverses the order of the elements of an array, method reverse
const arr16 = ['a', 'b', 'c']
console.log(arr16.reverse()) // [ 'c', 'b', 'a' ], reversed array
console.log(arr16) // [ 'c', 'b', 'a' ], original array modified



// Concatenate array with other array(s) and/or value(s), method concat
const arr17 = [1,2]
console.log(arr17.concat([4,5], [6], 7)) // [ 1, 2, 4, 5, 6, 7 ]
console.log(arr17.concat('a', 'b')) // [ 1, 2, 'a', 'b' ]
console.log(arr17.concat('c')) // [ 1, 2, 'c' ]
console.log(arr17) // [ 1, 2 ], original array NOT modified



// Filter array values with given condition, method filter
const arr18 = ['a', 'd', 'c', ['k', 6], ['g', 0], ['h', 1]]
console.log(arr18.filter((el) => typeof el === 'string')) // only return string element
// [ 'a', 'd', 'c' ]
console.log(arr18.filter((el) => Array.isArray(el))) // only return array element
// [ [ 'k', 6 ], [ 'g', 0 ], [ 'h', 1 ] ]
console.log(arr18.filter((el) => el[1] > 0)) // only return array element has second element greater than 0
// [ [ 'k', 6 ], [ 'h', 1 ] ]

// with additional bar variable
const bar = 2
const filtered = arr18.filter((el) => {
  return Array.isArray(el) && el[1] >= bar // only return array element has second element greater than `bar`
}, bar) 
console.log(filtered) // [ [ 'k', 6 ] ]



// Determines if the array contains a value, method includes
const arr19 = [1,2,3, 'a', 'b', 'c']
console.log(arr19.includes(1)) // true
console.log(arr19.includes('a')) // true
console.log(arr19.includes('a', 4)) // false, start comparing from index 4
console.log(arr19.includes('d')) // false
console.log(arr19) // [ 1, 2, 3, 'a', 'b', 'c' ], original array NOT modified



// Search the first index of a value in an array, method indexOf
const arr20 = [1,2,3, 'a', 'b', 1, 'b']
console.log(arr20.indexOf(1)) // 0
console.log(arr20.indexOf('b')) // 4
console.log(arr20.indexOf('b', 5)) // 6, start search from index 5
console.log(arr20.indexOf('d')) // -1
console.log(arr20) // [ 1, 2, 3, 'a', 'b', 1, 'b' ], original array NOT modified



// Search the last index of a value in an array, method lastIndexOf
const arr21 = [1,2,3, 'a', 'b', 1, 'b']
console.log(arr21.lastIndexOf(1)) // 5
console.log(arr21.lastIndexOf('b')) // 6
console.log(arr21.lastIndexOf('b', 5)) // 4, start search from index 5
console.log(arr21.lastIndexOf('d')) // -1
console.log(arr21) // [ 1, 2, 3, 'a', 'b', 1, 'b' ], original array NOT modified



// Joins all elements of an array into a string, method join
const arr22 = [1,2,3, 'a', 'b','c']
console.log(arr22.join()) // 1,2,3,a,b,c
console.log(arr22.join('')) // 123abc
console.log(arr22.join(' _ ')) // 1 _ 2 _ 3 _ a _ b _ c



// Joins all elements of an array into a string, method join
const arr23 = [1,2,3, 'a', 'b','c']
console.log(arr23.slice()) // [ 1, 2, 3, 'a', 'b', 'c' ], same with original
console.log(arr23.slice(2)) // [ 3, 'a', 'b', 'c' ]
console.log(arr23.slice(2,4)) // [ 3, 'a' ]



// Joins all elements of an array into a string, method join
const arr24 = [1,2,3]
const extra = 1
const squared = arr24.forEach((el) => {
  console.log(el * el + extra)
}, extra)
// 2
// 5
// 10
console.log(squared) // undefined
console.log(arr24) // [ 1, 2, 3 ], original array NOT modified



// Mapping array to a new array, method map
const arr25 = [['a', 1], ['b', 2], ['c', 3]]
const year = 2020
// this mapping creates a sentence for each element with name age information
const p = arr25.map((el) => `The year is ${year} and '${el[0]}' is ${el[1]} year(s)old.`, year)
console.log(p) // 
// [
//   "The year is 2020 and 'a' is 1 year(s)old.",
//   "The year is 2020 and 'b' is 2 year(s)old.",
//   "The year is 2020 and 'c' is 3 year(s)old."
// ]
console.log(arr25) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ], original array NOT modified



// Loop through all element and reduce, method reduce
const arr26 = [1,2,3]
const init = 4
// this mapping creates a sentence for each element with name age information
const r = arr26.reduce((acc, cur) => {
  return acc + cur // return value here will be `acc` for next reduceFunction call
}, 4)
console.log(r) // 10



// Check if at least one element satisifies given condition, method some
const arr27 = [1,2,3]
console.log(arr27.some((el) => el > 2)) // true
console.log(arr27.some((el) => el < 0)) // false
