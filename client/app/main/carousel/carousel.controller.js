'use strict';

ecomova.controller('CarouselCtrl', [ '$scope', function ($scope) {
    $scope.interval = 100000;
  	$scope.slides = [{
  		backgroundClass: 'background-cover-everyday',
      image: 'assets/images/iphone.png',
  		text: 'todos os dias',
  		header: 'Caronas para'
  	},
  	{
  		backgroundClass: 'background-cover-college',
      image: 'assets/images/student.png',
  		text: 'a faculdade',
  		header: 'Caronas para'
  	},
  	{
  		backgroundClass: 'background-cover-work',
      image: 'assets/images/businessman.png',
  		text: 'o trabalho',
  		header: 'Caronas para'
  	}];
  }]);
