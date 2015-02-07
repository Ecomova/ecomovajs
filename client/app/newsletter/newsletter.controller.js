'use strict';

ecomova.controller('NewsletterCtrl', ['$scope', 'NewsletterService',  function ($scope, NewsletterService) {	
    $scope.newsletterForm = {};
    
  	$scope.showForm = function(){
  		return !$scope.newsletterForm.$submitted && !$scope.newsletterForm.$error;
  	};
  	
    $scope.showSuccessfullMessage = function(){
  		return $scope.newsletterForm.$submitted && !$scope.newsletterForm.$error;
  	};
  	
    $scope.showErrorMessage = function(){
  		return $scope.newsletterForm.$submitted && $scope.newsletterForm.$error;
  	};
    
    $scope.validateForm = function(){

    };

  	$scope.register = function(){
      debugger;
      if ($scope.newsletterForm.$valid) {
        NewsletterService.registerEmail($scope.user.email).$promise.then(function(data) {
          debugger;           
        });
      }      
  	};
  }]);
