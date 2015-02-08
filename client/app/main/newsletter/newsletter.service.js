'use strict';

ecomova.service('NewsletterService', ['$resource',
	function NewsletterService($resource) {
		return $resource('/newsletter', null, {
			'registerEmail': {
				method: 'POST'
			}	
      });
  	}]);
