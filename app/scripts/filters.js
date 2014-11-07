'use strict';

angular.module('filters', []).filter('face', function() {
	return function(emotion) {
		var face = document.createElement('P');
		if (emotion === 'happy') {
			return 'fa fa-smile-o fa-2x';
		}
		if (emotion === 'sad') {
			return 'fa fa-frown-o fa-2x';
		}
		return 'fa fa-meh-o fa-2x';
	};
});

