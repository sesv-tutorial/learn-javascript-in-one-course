// ways to declare string variables in Javascript
let str1 = 'hello world' // put text between single quote '
let str2 = "hello world in double quotes" // double quotes ok "
let str3 = `hello world in backticks` // backticks ok `



// string templating
let name1 = 'John' // put text between single quote
let name2 = "Linda" // double quotes ok

const greet = (name) => console.log(`Hello, ${name}`) // print out greeting

greet(name1) // Hello, John
greet(name2) // Hello, Linda



// string length
let myStr = 'hello John!'
console.log('myStr length is:', myStr.length) // myStr length is: 11



// Get a character with index
// in this example, the string is 'hello John!'
// variableName -> myStr
// indexNumber -> 6
console.log('character at index 6 is:', myStr[6]) // character at index 6 is: J
console.log('character at index 6 is:', myStr.charAt(6)) // same output: character at index 6 is: J



// by using built-in 'charCodeAt' method
const indexNum = 0
console.log(`character at index '${indexNum}' is: '${myStr.charAt(0)}', UTF16 code number is: ${myStr.charCodeAt(0)}`)
// character at index '0' is: 'h', UTF16 code number is: 104



// split string to array of shorter strings
// in this example
// 'string separator' is character comma ','
const longStr = 'hello world, from SESV!'
console.log(longStr.split(',')) // [ 'hello world', ' from SESV!' ]
// 'string separator' is empty space character ' '
console.log(longStr.split(' ')) // [ 'hello', 'world,', 'from', 'SESV!' ]
console.log(longStr) // hello world, from SESV!, original string is not modified



// Get a substring with 2 indices
// in this example
// start index = 6 (included)
// end index = 11 (excluded)
console.log(longStr.substring(6, 11)) // world, include 6, exclude 11
console.log(longStr.slice(6, 11)) // world



// Lower case all character in string
let sentence = `It's always sunny in Sunnyvale.`
console.log(sentence.toLowerCase()) // 'it's always sunny in sunnyvale.'
console.log(sentence) // 'It's always sunny in Sunnyvale.', un-modified



// Upper case all character in string
console.log(sentence.toUpperCase()) // 'IT'S ALWAYS SUNNY IN SUNNYVALE.'
console.log(sentence) // 'It's always sunny in Sunnyvale.', un-modified
