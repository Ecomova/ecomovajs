'use strict';

ecomova.service('NewsletterService', ['$resource',
	function NewsletterService($resource) {
		return $resource('/api/newsletters', null, {
			'registerEmail': {
				method: 'POST'
			}	
      });
  	}]);
