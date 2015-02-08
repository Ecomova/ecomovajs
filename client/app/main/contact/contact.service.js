'use strict';

ecomova.service('ContactService', ['$resource',
	function NewsletterService($resource) {
		return $resource('/contact', null, {
			'sendMessage': {
				method: 'POST'
			}	
      });
  	}]);
