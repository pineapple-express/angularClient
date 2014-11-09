'use strict';

angular.module('softKittyApp')
  .controller('TagController', function ($scope, $http, $q) {
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
