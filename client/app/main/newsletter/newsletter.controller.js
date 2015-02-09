'use strict';

ecomova.controller('NewsletterCtrl', ['$scope', 'NewsletterService',  function ($scope, NewsletterService) {	
    $scope.showForm = function(){
  		return !$scope.isFormSubmitted();
  	};
  	
    $scope.showSuccessfullMessage = function(){
  		return $scope.isFormSubmitted() && 
      ( $scope.newsletterForm.$error.message !== '' ||
        typeof $scope.newsletterForm.$error.message  !== 'undefined');
  	};
  	
    $scope.showErrorMessage = function(){
  		return $scope.isFormSubmitted()  && !$scope.showSuccessfullMessage();
  	};
    
    $scope.enableSubmitButton = function(){
      $scope.setDisableButton($scope.newsletterForm.$invalid);
    };

    $scope.isFormSubmitted = function(){
      return $scope.newsletterForm.$submitted;
    };

    $scope.setDisableButton = function(bool){
      $scope.submitButtonDisabled = bool;
    };


  	$scope.register = function(){
      if ($scope.newsletterForm.$valid) {
        $scope.newsletterForm.$error = { };
        NewsletterService.registerEmail({ 'email': $scope.user.email })
          .$promise.then(function(greeting) {
            $scope.newsletterForm.$error = {};
          }, function(reason) {
            console.log(reason);
            $scope.newsletterForm.$error = { 
              'message' : 'Ocorreu um erro ao processar a solicitacação. Por favor, tente mais tarde.',
            };
          }
        );
      }  
  	};

    $scope.user = {
      'email': ''
    };
    $scope.setDisableButton(true);
    
  }]);
