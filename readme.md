# inline-htmlify [![Build Status](https://travis-ci.org/bendrucker/inline-htmlify.svg?branch=master)](https://travis-ci.org/bendrucker/inline-htmlify)

> Stream JS code in and get an HTML document out


## Install

```
$ npm install --save inline-htmlify
```


## Usage

```js
var htmlify = require('inline-htmlify')

browserify('app.js')
  .pipe(htmlify())
  .pipe(fs.createWriteStream('index.html'))
```

```sh
browserify app.js | htmlify > index.html
```

## API

#### `htmlify(document)` -> `stream`

Returns a stream that takes in JavaScript and wraps it in an HTML document.

##### document

A path to an HTML document to use as a template. The script will be inserted inside a `<script inline-htmlify></script>` tag. The attribute is used to locate the insertion point and is removed from the final output.

Type: `string`  
Default: [`document.html`](document.html)


## License

MIT © [Ben Drucker](http://bendrucker.me)
