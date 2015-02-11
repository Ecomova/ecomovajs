'use strict';

ecomova.controller('CarouselCtrl', [ '$scope', function ($scope) {
    $scope.interval = 2000;
  	$scope.slides = [{
  		image: 'assets/images/iphone.png',
      background: 'assets/images/bg1.jpg',
  		text: 'todos os dias',
  		header: 'Caronas para'
  	},
  	{
  		image: 'assets/images/student.png',
      background: 'assets/images/bg2.jpg',
  		text: 'a faculdade',
  		header: 'Caronas para'
  	},
  	{
  		image: 'assets/images/businessman.png',
      background: 'assets/images/bg3.jpg',
  		text: 'o trabalho',
  		header: 'Caronas para'
  	}];
  }]);
