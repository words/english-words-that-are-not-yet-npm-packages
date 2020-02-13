'use strict'

var test = require('tape')
var free = require('.')

test('english-words-that-are-not-yet-npm-packages', function(t) {
  t.ok(Array.isArray(free), 'should be an array')
  t.notOk(free.includes('request'), 'should not include taken names')
  t.ok(free.includes('wholefoods'), 'should include non-taken names')

  t.end()
})
