var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.outPorts.add('out');
  return c;
};