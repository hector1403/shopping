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
        $scope.isLimitReached = false;

        $scope.selectedProducts = {
            products: []
        };

        $scope.$watch('selectedProducts.products', function(newVal, oldVal){

            if(newVal == oldVal) return;

            if($scope.selectedProducts.products.length < 3) {
                $scope.isLimitReached = false;
            }

            if(newVal.length > 3) {
                $scope.isLimitReached = true;
                var popped = $scope.selectedProducts.products.pop();
                $log.debug("Popped: "+ popped);
            }

        }, true);

        $scope.cameras = camerasService.cameras;
    });
;
