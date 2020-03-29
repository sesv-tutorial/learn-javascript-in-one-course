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
/*
const screen1 = 
[255, 0, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255]
 ^            ^  ^            ^  ^            ^  ^            ^
 |            |  |            |  |            |  |            |
 |            |  |            |  |            |  |____________|
 |            |  |            |  |            |        |
 |            |  |            |  |____________|     4th pixel
 |            |  |            |        |
 |            |  |____________|     3rd pixel
 |            |         |
 |            |     2nd pixel
 |            | 
 |____________| 
      |
   1st pixel
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





