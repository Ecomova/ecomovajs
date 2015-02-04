'use strict';

var _ = require('lodash');
var Thing = require('./thing.model');

// Get list of things
exports.sendEmail = function(req, res) {
  Thing.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}