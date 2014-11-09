'use strict';

/**
 * @ngdoc overview
 * @name softKittyApp
 * @description
 * # softKittyApp
 *
 * Main module of the application.
 */
angular
  .module('softKittyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mentio',
	  'filters'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
