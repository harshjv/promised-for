var Promise = require('bluebird')

var promisedFor = Promise.method(function (initialValue, testCallback, iterationCallback) {
  if (!(typeof initialValue === 'number' || typeof initialValue === 'object')) {
    throw new Error('Initial value should be either a number or an object')
  }

  if (typeof testCallback !== 'function') {
    throw new Error('Test callback should be a function')
  }

  if (typeof iterationCallback !== 'function') {
    throw new Error('Iteration callback should be a function')
  }

  if (!testCallback(initialValue)) return initialValue

  return iterationCallback(initialValue)
          .then((updatedValue) => promisedFor(updatedValue, testCallback, iterationCallback))
})

module.exports = promisedFor
