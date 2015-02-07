'use strict';

var Newsletter = require('./newsletter.model')

var validationError = function(res, err) {
  return res.json(422, err);
};

exports.register = function (req, res, next) {
  var newRegister = new Newsletter(req.body);
  debugger;
  newRegister.save(function(err, user) {
    if (err) return validationError(res, err);
    res.send(200);
  });
};
