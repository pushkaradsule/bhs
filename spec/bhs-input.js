var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();
  
  c.outPorts = new noflo.OutPorts({
    path: {
      datatype: 'string'
    },
    schema: {
      datatype: 'array'
    },
    delimeter: {
      datatype: 'string'
    }
  });

 
  return c;
};