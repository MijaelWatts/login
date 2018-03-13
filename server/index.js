'use strict';

const express = require('express');
const parser  = require('body-parser');
const configs  = require('./configs');
const xprs    = express();

xprs.use(parser.urlencoded({extended : true}));
xprs.use(parser.json({type : 'application/json'}));

xprs.set('hostname', configs.hostname);
xprs.set('port', configs.port);

xprs.get('/', (req, res) => {
  res.json({
    msg: 'Welcome to the express-firebase-login project.'
  });
});

xprs.post('/login', (req, res) => {
  let response = validateUserAndPassword(req);
  res.json(response);
});

xprs.listen(configs.port, () => {
  console.info("... Server listening on http://" + xprs.get('hostname') + ":" + xprs.get('port'));
});

function validateUserAndPassword(req) {
  let user = req.body.user === 'mw' ? true : false;
  let pass = req.body.pass === 'mijaelwatts' ? true : false;

  if (user && pass) {
      return {msg : 'access granted.'};
  } else {
      return {msg : 'access not granted.'};
  }
}

module.exports = xprs;





// Below is another way of exporting... Not yet sure which one is best.
/*
let create = function(config) {
  console.log("Into create, config file: " + config);
};

let start = function() {
  console.info("Starting the server...");
}

let object = {
  create: create,
  start: start
}

module.exports = object;
*/
