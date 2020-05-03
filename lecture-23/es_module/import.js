// Reuse (import) your code with ES Module syntax

 // ".js" is required for Node ES Module
import { API_KEY } from './export.js' // destructured import for non-default exported object
import { API_KEY as key } from './export.js' // destructured import and rename
import getUser from './export.js' // import default exported object
import * as wholeModule from './export.js' // import everything and rename as "wholeModule"

;(async () => {
  const user1 = await getUser()
  const user2 = await wholeModule.default()
  console.log('user1:', user1)
  console.log('user2:', user2)
  console.log('wholeModule:', wholeModule)
})()

console.log('API_KEY:', API_KEY)
console.log('key:', key)
// API_KEY: 123-456
// key: 123-456
// user1: { name: 'Superman', superpower: 'fly' }
// user2: { name: 'Superman', superpower: 'fly' }
// wholeModule: [Module] { API_KEY: '123-456', default: [AsyncFunction: getUser] }