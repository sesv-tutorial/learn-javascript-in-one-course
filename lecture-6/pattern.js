// Pattern matching for string
// in this example
// the string to to look for the pattern is: `It's always sunny in Sunnyvale`
// the pattern is `sunny*.+`
// `sunny*.+` means `sunny` and whatever comes after it
// `replace` method will replace the found part
// '***': is the replacement
let sentence = `It's always sunny in Sunnyvale`
console.log(sentence.replace(/sunny*.+/, '***')) // It's always ***
console.log(sentence.replace('always', '_never_')) // It's _never_ sunny in Sunnyvale



// Creating a pattern (a regular expression object)
// two ways of creation, identical results
// 'pattern' is `sunny*.+`
// 'modifiers' is 'g'
// regex1 and regex2 are Regular Expression in Javascript
let regex1 = /sunny*.+/g
let regex2 = new RegExp('sunny*.+', 'g') // we will talk more about this syntax later
console.log('regex1:', regex1) // regex1: /sunny*.+/g
console.log('regex2:', regex2) // regex2: /sunny*.+/g



// Modifiers in Regular Expression
// 'pattern' is `sunny`
// 'modifiers' are 'gi', both `global` and `case-insensitive` are applied
console.log(sentence.replace(/sunny/gi, '***')) // It's always *** in ***vale



// Create pattern with literal character
console.log(sentence.replace(/sunny/, '***')) // It's always *** in Sunnyvale
console.log('this is a 	 character'.replace(/\t/, '_tab_')) // this is a _tab_ character


// Create pattern with character classes
// `.` can match any character, we can use it as many times as needed
console.log(sentence.replace(/sunny./, '***')) // It's always ***in Sunnyvale
console.log(sentence.replace(/sunny.../, '***')) // It's always *** Sunnyvale

// `\d` can match one any digit
console.log('1917 is a movie about war'.replace(/\d/, '***')) // ***917 is a movie about war

// `\D` can match one any non-digit
console.log('1917 is a movie about war'.replace(/\D/, '***')) // 1917***is a movie about war



// Create pattern with position specifiers
let str = 'hello, look at you!'

// '\b' match at word starts
console.log(str.replace(/\blo/, '**')) // hello, **ok at you!

// '\b' match at the end of word
console.log(str.replace(/lo\b/, '**')) // hel**, look at you!

// `\B` NOT match at the beginning of the word
console.log(str.replace(/\Blo/, '**')) // hel**, look at you!

// `\B` NOT match at the end of the word
console.log(str.replace(/lo\B/, '**')) // hello, **ok at you!

// `^` beginning of the string
console.log(str.replace(/^lo/, '**')) // hello, look at you!, replace nothing because string does not start with 'lo'
console.log(str.replace(/^he/, '**')) // **llo, look at you!, replaced with '**' because string starts with 'he'

// `$` end of the string
console.log(str.replace(/lo$/, '**')) // hello, look at you!, replace nothing because string does not end with 'lo'
console.log(str.replace(/u!$/, '**')) // hello, look at yo**, replaced with '**' because string starts with 'u!'

// `(?=ok)` match `lo`, following character must match `ok`
console.log(str.replace(/lo(?=ok)/, '**')) // hello, **ok at you!

// `(?!ok)` match `lo`, where `lo` must NOT be followed by `ok`
console.log(str.replace(/lo(?!ok)/, '**')) // hel**, look at you!




// Create pattern to match a range of characters with brackets
// [abc] matches any character a, b or c
console.log(str.replace(/[abc]/, '*')) // hello, look *t you!

// (look|stare) matches 'look' or 'stare'
console.log(str.replace(/(look|stare)/, '****')) // hello, **** at you!
console.log('stare at you!'.replace(/(look|stare)/, '****')) // **** at you!



// Create pattern with quantifiers
const loud = 'Annnnnnddd the winner is...'
console.log(loud.replace(/n{3}/, '***')) // A***nnnddd the winner is...
console.log(loud.replace(/n{3,}/, '***')) // A***ddd the winner is...
console.log(loud.replace(/n{3,5}/, '***')) // A***nddd the winner is...
console.log(loud.replace(/h?/, '*')) // *Annnnnnddd the winner is...
console.log(loud.replace(/n+/, '*')) // A*ddd the winner is...
console.log(loud.replace(/An*/, '*')) // *ddd the winner is...



// Create pattern with alternation, grouping, and references

// alternation
const look = 'I am looking at you.'
const see = 'I see you.'
const watch = 'Someone is watching.'
console.log(look.replace(/(look|see|watch)/, '***')) // I am ***ing at you.
console.log(see.replace(/(look|see|watch)/, '***')) // I *** you.
console.log(watch.replace(/(look|see|watch)/, '***')) // Someone is ***ing.

// grouping and references
const js = `javascript is funjavascriptfun, isn't it?`
console.log(js.replace(/([Jj]ava([Ss]cript)?)\sis\s(fun)/, '***')) // ***javascriptfun, isn't it?
console.log(js.replace(/([Jj]ava([Ss]cript)?)\sis\s(fun)\1/, '***')) // ***fun, isn't it?
console.log(js.replace(/([Jj]ava([Ss]cript)?)\sis\s(fun)\1\3/, '***')) // ***, isn't it?



// Create pattern with preserved characters
const str2 = 'I am a ^spe(ial $tring.'
console.log(str2.replace(/\^sp/, '***')) // I am a ***e(ial $tring.
console.log(str2.replace(/\(ial/, '****')) // I am a ^spe**** $tring.
console.log(str2.replace(/\$tr/, '***')) // I am a ^spe(ial ***ing.
console.log(str2.replace(/ing\./, '****')) // I am a ^spe(ial $tr****
