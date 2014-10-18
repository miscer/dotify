var dot = require('dot');
var through = require('through');

function isDot(file) {
  return /\.dot$/.test(file);
}

function compile(data) {
  return 'module.exports = ' + dot.template(data);
}

module.exports = function(file) {
  if (!isDot(file)) return through();

  var data = '';
  return through(write, end);

  function write(buf) {
    data += buf;
  }

  function end() {
    var src;

    try {
      src = compile(data);
    } catch (error) {
      this.emit('error', error);
    }

    this.queue(src);
    this.queue(null);
  }
};
