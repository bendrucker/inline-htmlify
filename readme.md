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

#### `htmlify()` -> `stream`

Returns a stream that takes in JavaScript and wraps it in an HTML document.


## License

MIT © [Ben Drucker](http://bendrucker.me)
