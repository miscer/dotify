# Dotify

Browserify transform plugin for [doT.js](http://olado.github.io/doT/).

## Installation

`npm install dotify`

## Usage

In main.js:

```js
require('dotify/lib');
var tpl = require('./template.dot');

var output = tpl({ message: 'Hello World!' });
console.log(output);
```

The `require('dotify/lib')` line has to be present for the templates to work correctly. It just includes function `String.prototype.encodeHTML` that doT uses for escaping HTML.

Then compile the scripts:

`$ browserify -t dotify main.js`

## License

MIT
