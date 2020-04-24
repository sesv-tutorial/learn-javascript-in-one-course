// Promise.all() run all promise in parallel and
// get the result when all of them finish

console.time('top_to_bottom')
console.time('start_to_finish_all_promise')
console.time('start_to_finish_promise_2')
console.time('start_to_finish_promise_3')

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('foo')
    console.timeEnd('start_to_finish_promise_2')
  }, 900)
})
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('bar')
    console.timeEnd('start_to_finish_promise_3')
  }, 300)
})

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
  console.timeEnd('start_to_finish_all_promise')
});
console.timeEnd('top_to_bottom')

// top_to_bottom: 0.594ms
// start_to_finish_promise_3: 305.773ms
// start_to_finish_promise_2: 906.264ms
// [ 3, 'foo', 'bar' ]
// start_to_finish_all_promise: 908.998ms
