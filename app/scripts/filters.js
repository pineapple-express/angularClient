'use strict';

angular.module('filters', []).filter('face', function() {
	return function(emotion) {
		if (emotion === 'happy') {
			return '<i class="fa fa-smile-o fa-2x"></i>';
		}
		if (emotion === 'sad') {
			return '<i class="fa fa-frown-o fa-2x"></i>';
		}
		return '<i class="fa fa-meh-o fa-2x"></i>';
	};
});

