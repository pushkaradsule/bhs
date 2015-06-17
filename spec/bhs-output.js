var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

 c.inPorts = new noflo.InPorts({
    path: {
      datatype: 'string'
    },
    schema: {
      datatype: 'object'
    
    }
  });
  return c;
};