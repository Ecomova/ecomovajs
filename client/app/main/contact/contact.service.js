'use strict';

ecomova.service('ContactService', ['$resource',
	function NewsletterService($resource) {
		return $resource('/api/contacts', null, {
			'sendMessage': {
				method: 'POST'
		}});
  	}]);
