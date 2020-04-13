// Javascript closure example: memoization

const createGetCodeAndCache = () => { // outer function
  const cache = {} // closure data

  const get = (input) => { // inner function
    console.log(cache) // print cache before each run
    if(cache[input]) { // use cache if available
      console.log('cached output')
      return cache[input]
    } else { // compute if no cache available
      console.log('new input')
      const result = input.charCodeAt(0)
      cache[input] = result // put data to cache
      return result
    }
  }

  return get
}

const getCodeAndCache = createGetCodeAndCache()

console.log(getCodeAndCache('a'))
// {}, empty cache
// new input
// 97

console.log(getCodeAndCache('b'))
// { a: 97 }, cached 'a'
// new input
// 98

console.log(getCodeAndCache('a')) // "seen" input
// { a: 97, b: 98 }, cached 'a' and 'b'
// new input
// 97

