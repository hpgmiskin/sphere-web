'use strict';

/**
 * @ngdoc overview
 * @name sphereApp
 * @description
 * # sphereApp
 *
 * Main module of the application.
 */
angular
  .module('sphereApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
