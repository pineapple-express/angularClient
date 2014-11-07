'use strict';

angular.module('softKittyApp')
  .controller('SubmitController', function ($scope, $http) {
  	$scope.master = ''

	$scope.happy = function(text) {
		console.log('Happy', createLogEntry(text, 'happy'));
		$scope.text = angular.copy($scope.master);
	} 	
	$scope.meh = function(text) {
		console.log('Meh', createLogEntry(text, 'meh'));
		$scope.text = angular.copy($scope.master);
	}
	$scope.sad = function(text) {
		console.log('Sad', createLogEntry(text, 'sad'));
		$scope.text = angular.copy($scope.master);
	}

	function createLogEntry(text, rating) {
		var logEntry = {};
		logEntry.message = text;
		logEntry.rating = rating;
		logEntry.tags = getTagsFromText(text);
		return logEntry;
	}

	function getTagsFromText(text) {
		var tags = [];
		if (text === undefined) {
			return tags;
		}
		var list = text.split(' ');

		for (var i = 0; i < list.length; i++) {
			var s = list[i];
			if (s.indexOf('#') == 0) {
				tags.push(s.substring(1));
			}
		}
		return tags;
	}

 });
