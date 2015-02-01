'use strict';

angular.module('ecomovaJsApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Como funciona',
      'link': '#jumbotron-container'
    },{
      'title': 'Características',
      'link': '#services-container'
    },{
      'title': 'Contato',
      'link': '#contact-container'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.collapse = function(collapse) {
       $scope.isCollapsed = collapse;
    };



    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      var path = $location.hash();
      return (path === '' && route === '/') || (route === ('#'+ path));
    };
  });