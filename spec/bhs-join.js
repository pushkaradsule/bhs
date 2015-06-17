var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();
c.description="BHS Join Component";
c.inPorts = new noflo.InPorts({
    in01: {
      datatype: 'object'
    },
    in02: {
      datatype: 'object'
    }
   
  });
  
  c.outPorts.add('out');
  return c;
};