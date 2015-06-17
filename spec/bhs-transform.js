var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts = new noflo.InPorts({
    in: {
      datatype: 'string'
    },
    inputfield: {
      datatype: 'array'
    },
    operation: {
      datatype: 'string'
    
    },
    properties: {
      datatype: 'object'
      
    }
  });
  
  c.outPorts.add('out');
  return c;
};