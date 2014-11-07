'use strict';

angular.module('softKittyApp')
  .controller('SubmitController', function ($scope, $http) {
  	$scope.master = {};

	$scope.happy = function(text) {
		console.log('Happy', createLogEntry(text, 'happy'));
	}; 	
	$scope.meh = function() {
		console.log('Meh', createLogEntry(text, 'meh'));
	};
	$scope.sad = function() {
		console.log('Sad', createLogEntry(text, 'sad'));
	};

	function createLogEntry(text, rating) {
		var logEntry = {};
		logEntry.message = text;
		logEntry.rating = rating;
		logEntry.tags = getTagsFromText(text);
		return logEntry;
	}

	function getTagsFromText() {

	}

 });
