'use strict';

/**
 * @ngdoc overview
 * @name neoApp
 * @description
 * # neoApp
 *
 * Main module of the application.
 */
angular
  .module('neoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
  });
