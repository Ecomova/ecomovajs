

var express = require('express'),
  controller = require('./contact.controller'),
  router = express.Router(),
  mailer = require('express-mailer'),
  app = require('express')();


mailer.extend(app, {
  from: 'no-reply@ecomova.com',
  host: 'smtp.gmail.com', // hostname 
  secureConnection: true, // use SSL 
  port: 465, // port for secure SMTP 
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
  auth: {
    user: 'ecomovaapp@gmail.com',
    pass: 'poioiu098'
  }
});


router.get('/', controller.send);

module.exports = router;
 