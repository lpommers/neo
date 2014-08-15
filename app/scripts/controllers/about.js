'use strict';

/**
 * @ngdoc function
 * @name neoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the neoApp
 */
angular.module('neoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
