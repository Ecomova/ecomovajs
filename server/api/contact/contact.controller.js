'use strict';

var _ = require('lodash'),
	Contact = require('./contact.model'),
	express = require('express'),
	app = express();

// Get list of things
exports.sendEmail = function(req, res) {
  app.mailer.send('email', {
      to: 'gustavo.peconick@ecomova.com, henrique.elias@ecomova.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.  
      subject: 'Contact Website Ecomova' // REQUIRED. 
    }, function (err) {

      debugger;
      if (err) {
        // handle error 
        console.log(err);
        res.send('There was an error sending the email');
        return;
      }
      res.send('Email Sent');
      return;
    });
};


function handleError(res, err) {
  return res.send(500, err);
}