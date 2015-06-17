var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();
  
  c.outPorts = new noflo.OutPorts({
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

 
  return c;
};