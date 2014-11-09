'use strict';

angular.module('softKittyApp')
  .controller('SubmitController', function ($rootScope, $scope, $http, $q) {
  	$scope.master = '';

	$scope.happy = function(text) {
		submit(createLogEntry(text, 'happy'));
	};
	$scope.meh = function(text) {
		submit(createLogEntry(text, 'meh'));
	};
	$scope.sad = function(text) {
		submit(createLogEntry(text, 'sad'));
	};

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
			if (s.indexOf('#') === 0) {
				tags.push(s.substring(1));
			}
		}
		return tags;
	}

	function submit(logEntry) {
		$http.post('http://localhost:8080/api/logEntry', angular.toJson(logEntry))
			.success(function (data, status, headers, config) {
				$scope.text = angular.copy($scope.master);
				$rootScope.$broadcast('logEntryCreated')
			})
			.error(function(data, status, headers, config) {
				console.log('Unable to post', data);
				console.log('status', status);
				console.log('headers', headers);
			});
	}

	$scope.getTags = function (term) {
		var matches = [];

		return $http.get('http://localhost:8080/api/tags').
			then(function(response) {
			angular.forEach(response.data, function(item) {
				if(item.label.toUpperCase().indexOf(term.toUpperCase()) >= 0) {
					matches.push(item);
				}
			})

			$scope.tags = matches;
			return $q.when(matches);
		});
  	};

 });
