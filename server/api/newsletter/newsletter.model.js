'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsletterSchema = new Schema({
  email: { type: String, lowercase: true }
});


/**
 * Validations
 */

// Validate empty email
NewsletterSchema
  .path('email')
  .validate(function(email) {
    return email.length;
  }, 'Email cannot be blank');

module.exports = mongoose.model('Newsletter', NewsletterSchema);
