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
  .filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
     }
    })
    .controller('MainCtrl', function ($scope, camerasService, $log) {
        $scope.currentPage = 1; //current page
        $scope.maxSize = 5; //pagination max size
        $scope.entryLimit = 5; //max rows for data table

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
