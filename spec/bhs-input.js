var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();
  c.inPorts = new noflo.OutPorts({
    path: {
      datatype: 'string',
      default :"a"
    },
    schema: {
      datatype: 'array',
       default :"[1,2,3]"
    },
    delimeter: {
      datatype: 'string',
       default :","
    }
  });
  
  c.outPorts = new noflo.OutPorts({
    output: {
      datatype: 'string',
      default :"a"
    }
  });

 
  return c;
};