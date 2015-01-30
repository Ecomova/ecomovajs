'use strict';

angular.module('ecomovaJsApp')
  .controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 3000;
  	$scope.slides = [{
  		image: 'assets/images/bg1.jpg',
  		text: 'todos os dias',
  		header: 'Caronas para'
  	},
  	{
  		image: 'assets/images/bg2.jpg',
  		text: 'a faculdade',
  		header: 'Caronas para'
  	},
  	{
  		image: 'assets/images/bg3.jpg',
  		text: 'o trabalho',
  		header: 'Caronas para'
  	}];
  });
