'use strict'

var through = require('through2')
var fs = require('fs')
var resolve = require('path').resolve

var prefix = fs.readFileSync(resolve(__dirname, 'prefix.html'))
var suffix = fs.readFileSync(resolve(__dirname, 'suffix.html'))

module.exports = function htmlify () {
  return through(function wrap (chunk, enc, callback) {
    this.push(prefix)
    this.push(chunk)
    this.push(suffix)
    callback()
  })
}
