'use strict';

angular.module('softKittyApp')
  .controller('ListController', function ($scope, $http) {
    $scope.logEntries = []
    $http.get('http://localhost:8080/api/logEntry').
  		success(function(data, status, headers, config) {
  			$scope.logEntries = data
  		}).
  		error(function(data, status, headers, config) {
  			console.log("Unable to get logEntries: ", data);
  		});
});
