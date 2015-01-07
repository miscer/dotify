var template = require('./template.dot');

var output = template({ message: 'It works!' });
document.querySelector('#content').innerHTML = output;
