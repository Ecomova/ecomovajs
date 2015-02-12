'use strict';

var _ = require('lodash');
var Contact = require('./contact.model');
var app = require('express')();
var mailer = require('express-mailer');

 
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

// Get list of contacts
exports.index = function(req, res) {
  Contact.find(function (err, contacts) {
    if(err) { return handleError(res, err); }
    return res.json(200, contacts);
  });
};

// Get a single contact
exports.show = function(req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if(err) { return handleError(res, err); }
    if(!contact) { return res.send(404); }
    return res.json(contact);
  });
};

// Creates a new contact in the DB.
exports.create = function(req, res) {
  Contact.create(req.body, function(err, contact) {
    if(err) { return handleError(res, err); }
    if(contact.newsletter){
      var Newsletter = require('./../newsletter/newsletter.model');
      Newsletter.create({'email': contact.email});
    }
 

    return res.json(201, contact);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}