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
        $scope.isLimitReached = function () {
            if($scope.selectedProducts && $scope.selectedProducts.products)
                return $scope.selectedProducts.products.length > 3;
            return false;
        };

        $scope.selectedProducts = {
            products: []
        };

        $scope.cameras = camerasService.cameras;
    });
;
