# Dotify

Browserify transform plugin for [doT.js](http://olado.github.io/doT/).

## Installation

`npm install dotify`

## Usage

In main.js:

```js
var tpl = require('./template.dot');

var output = tpl({ message: 'Hello World!' });
console.log(output);
```

Then compile the scripts:

`$ browserify -t dotify main.js`

## License

MIT
