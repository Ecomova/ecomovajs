'use strict';

ecomova.controller('CarouselCtrl', [ '$scope', function ($scope) {
    $scope.interval = 3300;
  	$scope.slides = [{
      animatedCssClass: 'zoomIn',
  		image: 'assets/images/iphone.png',
      background: 'assets/images/bg1.jpg',
  		text: 'todos os dias',
  		header: 'Caronas'
  	},
  	{
      animatedCssClass: 'zoomIn',
  		image: 'assets/images/student.png',
      background: 'assets/images/bg2.jpg',
  		text: 'a faculdade',
  		header: 'Caronas para'
  	},
  	{
      animatedCssClass: 'zoomIn',
  		image: 'assets/images/businessman.png',
      background: 'assets/images/bg3.jpg',
  		text: 'o trabalho',
  		header: 'Caronas para'
  	}];
  }]);
