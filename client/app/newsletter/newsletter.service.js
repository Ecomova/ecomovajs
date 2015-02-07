'use strict';

ecomova.service('NewsletterService', ['$resource',
	function NewsletterService($resource) {
		return $resource('/newsletter', {
			'registerEmail': {
				method: 'POST'
			}		
		});
  	}]);
