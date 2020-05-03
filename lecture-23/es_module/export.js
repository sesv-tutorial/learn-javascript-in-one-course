// Package (export) your code with ES Module syntax

const getUser = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'Superman', superpower: 'fly'})
    }, 1000);
  })
}

export const API_KEY = '123-456' // import needs to destructure to get this constant

export default getUser // default object recieved when import