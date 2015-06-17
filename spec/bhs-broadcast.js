var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();
 c.inPorts = new noflo.InPorts({
    in: {
      datatype: 'object'
    },
    
  });
  
 c.outPorts = new noflo.InPorts({
    out01: {
      datatype: 'object'
    },
    out02: {
      datatype: 'object'
     
    }
  });
  
  return c;
};