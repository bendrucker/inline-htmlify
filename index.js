'use strict'

var trumpet = require('trumpet')
var duplex = require('duplex-combination')
var fs = require('fs')
var path = require('path')

var defaultDocument = path.resolve(__dirname, 'document.html')

module.exports = function htmlify (document) {
  document = document || defaultDocument

  var tr = trumpet()
  fs.createReadStream(document).pipe(tr)

  var inline = tr.select('script[inline-htmlify]')
  inline.removeAttribute('inline-htmlify')

  return duplex(tr, inline.createWriteStream())
}
