'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: String,
  email: String,
  message: String,
  newsletter: Boolean
});

module.exports = mongoose.model('Contact', ContactSchema);