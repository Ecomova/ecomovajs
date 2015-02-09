'use strict';

var _ = require('lodash');
var Newsletter = require('./newsletter.model');

// Creates a new newsletter in the DB.
exports.create = function(req, res) {
  Newsletter.create(req.body, function(err, newsletter) {
    if(err) { return handleError(res, err); }
    return res.json(201, newsletter);
  });
};



function handleError(res, err) {
  return res.send(500, err);
}