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

Or using a custom document (`doc.html`):


```js
browserify('app.js')
  .pipe(htmlify(fs.createReadStream('doc.html')))
  .pipe(fs.createWriteStream('index.html'))
```

```sh
cat script.js | htmlify doc.html > index.html
```

The html file `doc.html` should have a `<script>` tag with the attribute `inline-htmlify`:

```html
<script inline-htmlify></script>
```

## API

#### `htmlify(document)` -> `stream`

Returns a stream that takes in JavaScript and wraps it in an HTML document.

##### document

A streaming HTML document. The script will be inserted inside a `<script inline-htmlify></script>` tag. The attribute is used to locate the insertion point and is removed from the final output.

Type: `stream`  
Default: stream of [`document.html`](document.html)


## License

MIT © [Ben Drucker](http://bendrucker.me)
