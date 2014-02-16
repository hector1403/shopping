'use strict';

angular.module('shoppingApp', [
  'ngCookies',
  'ngRoute',
  'ui.bootstrap',
  'cameras'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .controller('MainCtrl', function ($scope, camerasService) {

        $scope.cameras = camerasService.cameras;

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
;
