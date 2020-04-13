// Javascript closure example: delay calling a function

const TOP_BOTTOM = 'TOP_BOTTOM'
const LABEL = 'FIRST_CALL'

console.time(TOP_BOTTOM) // timer TOP_BOTTOM start
console.time(LABEL) // timer FIRST_CALL start 

const createGetSuggestion = () => { // outer function
  let ok = false // closure data, true for go fetch suggestion data
  let pending = false // closure data
  let keyword = '' // closure data

  const get = (word) => { // inner function
    keyword = word
    if(ok) {
      console.log(`now get suggestions with keyword '${keyword}'`) // make call to server and get suggestion
      console.timeEnd(LABEL); // timer FIRST_CALL end
      pending = false
      ok = false
    } else {
      console.log('please wait')
      if(!pending) {
        pending = true
        setTimeout(() => {
          ok = true
          get(keyword)
        }, 1000); // timeout in 1 second
      }
    }
  }

  return get // inner function returned
}

const getSuggestion = createGetSuggestion()

// each keystroke will call "getSuggestion()" once
getSuggestion('i') // please wait (1st keystroke)
getSuggestion('ir') // please wait (2nd keystroke)
getSuggestion('iro') // please wait (3rd keystroke)
getSuggestion('iron') // please wait (4th keystroke)
getSuggestion('iron ') // please wait (5th keystroke)
getSuggestion('iron m') // please wait (6th keystroke)
console.timeEnd(TOP_BOTTOM); // TOP_BOTTOM: 6.192ms
// now get suggestions with keyword 'iron m'
// FIRST_CALL: 1008.117ms
