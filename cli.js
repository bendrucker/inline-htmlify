#! /usr/bin/env node

'use strict'

var htmlify = require('./')

process.stdin.pipe(htmlify()).pipe(process.stdout)
