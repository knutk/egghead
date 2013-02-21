var app = angular.module('superhero', []);

app.directive('superman', function() {
	return {
		restrict: 'A',
		link: function() {
			alert('Im working');
		}
	}
});