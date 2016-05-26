'use strict';

var infinispan = require('infinispan');

var util = require('util');
module.exports = {
  greet : greet 
};

function greet(req, res) {

  var name = req.swagger.params.name.value || 'stranger';

  var connected = infinispan.client({port: 11222, host: '127.0.0.1'}, {version: '2.2'});
  var resp; 
  connected.then(function (client) {
    client.get(name).then(
          function(value) { 
             if(value == undefined)  {
                  res.json(util.format('Nice to meet you %s!', name))
             } else {
                  res.json(util.format('Welcome back %s! Your last time here was on %s', name, value))
             }
             client.put(name, new Date().toLocaleString())
          })
   })
}

