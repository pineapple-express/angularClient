'use strict';

/**
 * @ngdoc function
 * @name softKittyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the softKittyApp
 */
angular.module('softKittyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
