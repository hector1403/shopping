'use strict';

angular.module('shoppingApp', [
  'ngCookies',
  'ngRoute',
  'ui.bootstrap',
  'cameras',
   'checklist-model'
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
    .controller('MainCtrl', function ($scope, camerasService, $log) {

        $scope.selectedProducts = {
            products: []
        };

        $scope.$watch('selectedProducts.products', function(newValue, oldValue) {
           $log.debug("newValue:" + newValue);
        });
        $scope.cameras = camerasService.cameras;
    });
;
