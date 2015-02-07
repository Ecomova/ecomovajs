'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,  
  ContactSchema = new Schema({
    name: String,
    email: { 
      type: String, 
      lowercase: true 
    },
    message: { 
      type: String, 
      lowercase: true 
    },
    newsletter: Boolean
  });

/**
 * Validations
 */

// Validate empty email
ContactSchema
  .path('email')
  .validate(function(email) {
    return email.length;
  }, 'Email cannot be blank');

// Validate empty password
ContactSchema
  .path('name')
  .validate(function(name) {
    return name.length;
  }, 'Password cannot be blank');

ContactSchema
  .path('message')
  .validate(function(name) {
    return name.length;
  }, 'Message cannot be blank');


module.exports = mongoose.model('Contact', ContactSchema);
