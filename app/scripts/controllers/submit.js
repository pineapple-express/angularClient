angular.module('softKittyApp')
  .controller('SubmitController', function ($scope, $http) {
	$scope.happy = function() {
		alert("I am happy");
	} 	
	$scope.meh = function() {
		alert("I am meh");
	}
	$scope.sad = function() {
		alert("I am sad");
	}
 }