var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

 c.inPorts = new noflo.InPorts({
    in: {
      datatype: 'string'
    },
    path: {
      datatype: 'string'
    },
    schema: {
      datatype: 'object'
    
    }
  });
  return c;
};