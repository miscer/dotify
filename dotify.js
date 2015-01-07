var dot = require('dot');
var through = require('through');
var merge = require('merge');

function isDot(file) {
  return /\.dot$/.test(file);
}

function compile(data, opts) {
  opts = merge(true, dot.templateSettings, opts);
  return 'module.exports = ' + dot.template(data, opts);
}

module.exports = function(file, opts) {
  if (!isDot(file)) return through();

  var data = '';
  return through(write, end);

  function write(buf) {
    data += buf;
  }

  function end() {
    var src;

    try {
      src = compile(data, opts);
    } catch (error) {
      this.emit('error', error);
    }

    this.queue(src);
    this.queue(null);
  }
};
