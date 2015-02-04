

var express = require('express'),
  controller = require('./email.controller'),
  router = express.Router(),
  app = require('express')();

router.get('/',  function (req, res, next) {
  app.mailer.send('email', {
      to: 'example@example.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.  
      subject: 'Contact Website Ecomova' // REQUIRED. 
    }, function (err) {
      debugger;
      if (err) {
        // handle error 
        console.log(err);
        res.send('There was an error sending the email');
        return;
      }
      returns.send('Email Sent');
    });
  });

module.exports = router;
 