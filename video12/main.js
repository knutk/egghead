var app = angular.module('app', []);

// this works when you only return the linking function (but its the same with link:...)
app.directive("enter", function() {
	return function(scope, element) {
		element.bind("mouseenter", function() {
			console.log("Im inside of you")
		})
	};
})

app.directive("leave", function() {
	return function(scope, element) {
		element.bind("mouseleave", function() {
			console.log("Im leaving on a jetplate")
		})
	};
})