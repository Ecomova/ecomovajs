'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NewsletterSchema = new Schema({
  email: String
});

module.exports = mongoose.model('Newsletter', NewsletterSchema);