'use strict';

ecomova.controller('CarouselCtrl', [ '$scope', function ($scope) {
    $scope.interval = 1800;
  	$scope.slides = [{
      animatedCssClass: 'zoomIn',
  		image: 'assets/images/iphone.png',
      background: 'assets/images/bg1.jpg',
  		text: 'todos os dias',
  		header: 'Caronas'
  	},
  	{
      animatedCssClass: 'fadeInUp',
  		image: 'assets/images/student.png',
      background: 'assets/images/bg2.jpg',
  		text: 'a faculdade',
  		header: 'Caronas para'
  	},
  	{
      animatedCssClass: 'fadeInRightBig',
  		image: 'assets/images/businessman.png',
      background: 'assets/images/bg3.jpg',
  		text: 'o trabalho',
  		header: 'Caronas para'
  	}];
  }]);
