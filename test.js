'use strict'

var test = require('tape')
var Readable = require('readable-stream')
var child = require('child_process')
var htmlify = require('./')

test('api', function (t) {
  t.plan(2)

  var stream = new Readable()
  stream.push('var foo = "bar"')
  stream.push(null)

  var buffers = []
  stream.pipe(htmlify())
    .on('data', buffers.push.bind(buffers))
    .on('end', function () {
      var html = String(Buffer.concat(buffers))
      t.ok(/<html>/.test(html))
      t.ok(~html.indexOf('var foo = "bar"'))
    })
})

test('cli', function (t) {
  t.plan(1)

  child.exec('echo "THESCRIPT" | node cli.js', function (err, stdout) {
    if (err) return t.end(err)
    t.ok(~stdout.indexOf('THESCRIPT'))
  })
})

