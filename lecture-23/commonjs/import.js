// Reuse (import) your code with CommonJS syntax

const { API_KEY, getUser } = require('./export') // destructure while importing a module
const wholeModule = require('./export.js') // import whole module, ".js" part is optional

;(async () => { // a self-invoking async function
  const user1 = await getUser() 
  const user2 = await wholeModule.getUser()
  console.log('user1:', user1)
  console.log('user2:', user2)
})()

console.log('API_KEY:', API_KEY)
console.log('API_KEY:', wholeModule.API_KEY)

// API_KEY: 123-456
// API_KEY: 123-456
// user1: { name: 'Superman', superpower: 'fly' }
// user2: { name: 'Superman', superpower: 'fly' }