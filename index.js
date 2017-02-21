const words = require('an-array-of-english-words')
const packages = require('all-the-package-names')
const difference = require('lodash.difference')

module.exports = difference(words, packages)
