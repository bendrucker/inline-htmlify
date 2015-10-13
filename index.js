'use strict'

var through = require('through2')
var fs = require('fs')
var resolve = require('path').resolve

var prefix = fs.readFileSync(resolve(__dirname, 'prefix.html'))
var suffix = fs.readFileSync(resolve(__dirname, 'suffix.html'))

module.exports = function htmlify () {
  var first = true
  return through(function wrap (chunk, enc, callback) {
    if (first) this.push(prefix)
    first = false
    this.push(chunk)
    callback()
  }, function (callback) {
    this.push(suffix)
    callback()
  })
}
