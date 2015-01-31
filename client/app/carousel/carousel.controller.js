'use strict';

angular.module('ecomovaJsApp')
  .controller('CarouselCtrl', function ($scope) {
    $scope.interval = 100000;
  	$scope.slides = [{
  		backgroundImage: 'assets/images/bg1.jpg',
      image: 'assets/images/iphone.png',
  		text: 'todos os dias',
  		header: 'Caronas para'
  	},
  	{
  		backgroundImage: 'assets/images/bg2.jpg',
      image: 'assets/images/student.png',
  		text: 'a faculdade',
  		header: 'Caronas para'
  	},
  	{
  		backgroundImage: 'assets/images/bg3.jpg',
      image: 'assets/images/businessman.png',
  		text: 'o trabalho',
  		header: 'Caronas para'
  	}];
  });
