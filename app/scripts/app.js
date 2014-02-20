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
    .controller('MainCtrl', function ($scope, camerasService, $log) {
        var selectedProducts = [];

        $scope.addForComparison = function(productId) {
            if(selectedProducts != null && selectedProducts.length > 2) {
                $scope.compareLimitReached = true;
                return;
            }
            selectedProducts.push(productId);
        }

        $scope.changed = function() {
            $log.debug("I have changed !");
        }
        $scope.selected = selectedProducts;
        $scope.cameras = camerasService.cameras;
    });
;
