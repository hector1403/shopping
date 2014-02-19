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
                $log.error("Total limit of comparison reached !!");
                return;
            }

            selectedProducts.push(productId);
        }

        $scope.changed = function() {
            $log.debug("I have changed !");
        }
        $scope.selected = selectedProducts;

        $scope.cameras = camerasService.cameras;

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
;
