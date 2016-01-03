'use strict'

var test = require('tape')
var read = require('read-all-stream')
var toStream = require('string-to-stream')
var child = require('child_process')
var htmlify = require('./')

test('api', function (t) {
  t.plan(3)

  var html = toStream('var foo = "bar"').pipe(htmlify())

  read(html, 'utf8', function (err, html) {
    if (err) return t.end(err)
    t.ok(/<html>/.test(html))
    t.ok(~html.indexOf('var foo = "bar"'))
    t.notOk(~html.indexOf('inline'))
  })
})

test('custom document api', function (t) {
  t.plan(2)

  var document = toStream('<foo/><script inline-htmlify></script>')
  var html = toStream('var foo = "bar"').pipe(htmlify(document))

  read(html, 'utf8', function (err, html) {
    if (err) return t.end(err)
    t.ok(~html.indexOf('<foo/>'))
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

test('cli with custom document', function (t) {
  t.plan(2)

  child.exec('echo "THESCRIPT" | node cli.js custom.html', function (err, stdout) {
    if (err) return t.end(err)
    t.ok(~stdout.indexOf('THESCRIPT'))
    t.ok(~stdout.indexOf('<foo/>'))
  })
})

