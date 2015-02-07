'use strict';

var express = require('express'),
	controller = require('./user.controller'),
	router = express.Router();
	
router.post('/newsletter', controller.register);

module.exports = router;


