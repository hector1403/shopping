'use strict';

angular.module('cameras', [])
    .factory('camerasService', function($http, $log) {

        var cameras = [];
        cameras  = $http.get('/service/products/cameras.json')
                .success(function (data) {
                    angular.copy(data, cameras);
                })
                .error(function (data) {
                    $log.error("Error Retrieving Cameras !!");
                });

        return {
            cameras : cameras
        };
    });
