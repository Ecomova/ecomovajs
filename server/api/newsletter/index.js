'use strict';

var express = require('express'),
	controller = require('./newsletter.controller'),
	router = express.Router();
	
router.post('/', controller.create);

module.exports = router;


