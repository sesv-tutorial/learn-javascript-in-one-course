// Package (export) your code with CommonJS syntax

const getUser = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'Superman', superpower: 'fly'})
    }, 1000);
  })
}

module.exports = { // export syntax
  API_KEY: '123-456',
  getUser
}