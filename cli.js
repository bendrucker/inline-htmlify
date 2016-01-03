#! /usr/bin/env node

'use strict'

var minimist = require('minimist')
var htmlify = require('./')

var argv = minimist(process.argv.slice(2))
var document = argv._[0]

process.stdin.pipe(htmlify(document)).pipe(process.stdout)
