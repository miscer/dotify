var template = require('./template.dot');

require('dotify/lib');

var output = template({ message: 'It works!' });
document.querySelector('#content').innerHTML = output;
