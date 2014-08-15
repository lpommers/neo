'use strict';

/**
 * @ngdoc function
 * @name neoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the neoApp
 */
angular.module('neoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/scripts/reviews.json')
        .success(function(data){
            $scope.reviews = data;
        });
  });

