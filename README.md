## ✌🏻 Promised-for loop [![standard][standard-image]][standard-url] [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url]

[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[travis-image]: https://img.shields.io/travis/harshjv/promised-for/master.svg
[travis-url]: https://travis-ci.org/harshjv/promised-for
[npm-image]: https://img.shields.io/npm/v/promised-for.svg
[npm-url]: https://npmjs.org/package/promised-for

[Promises/A+ 1.1](https://promisesaplus.com) compliant promised-for loop for Browser and Node.js.


## Installation

    npm install promised-for


## API

    promisedFor(initialValue, testCallback, iterationCallback)

> returns `Promise`

### Parameters

* `initialValue`
  * can be `Number|Object`
  * will be passed to `testCallback`
* `testCallback(initialValue)`
  * can be `Function`
  * gets `initialValue`
  * should return `Boolean`
* `iterationCallback(initialValue)`
  * can be `Function`
  * gets `initialValue`
  * should return a `Promise` with updated `initialValue`


## Basic usage

    const pf = require('promised-for')

    pf(0, // loop initialization
      (i) => i < 5, // test condition, gets initial value
      (i) => { // action, return callback with updated initial value
        console.log(i)

        // return promise
        return new Promise((resolve, reject) => {
          // Some async work
          setTimeout(() => resolve(i + 1), 500)
        })
      }).then((i) => {
        console.log('Done!')
      }).catch((e) => console.error(e)) // handle rejection

### Output

    0
    1
    2
    3
    4
    Done!


## Advance usage

    const pf = require('promised-for')

    pf({
      i: 0,
      j: 100,
      sum: 0
    },
      (obj) => obj.i < 100,
      (obj) => {
        const { i, j, sum } = obj

        return new Promise((resolve, reject) => {
          setTimeout(() => resolve({
            i: i + 1,
            j: j - 1,
            sum: sum + i + j
          }), 500)
        })
      }).then((obj) => {
        console.log(obj.sum)
      }).catch((e) => console.error(e)) // handle rejection

### Output

    10000


## Test

    npm test

> `standard` only for now. More to come.


## Promises/A+ 1.1 compliant

[![Promises/A+ 1.1 compliant](https://promisesaplus.com/assets/logo-small.png)](https://promisesaplus.com)


## License

MIT
