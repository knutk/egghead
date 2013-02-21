var app = angular.module('app', []);

// this works when you only return the linking function (but its the same with link:...)
app.directive("enter", function() {
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			element.addClass(attrs.enter)
		})
	};
})

app.directive("leave", function() {
	return function(scope, element, attrs) {
		element.bind("mouseleave", function() {
			element.removeClass(attrs.enter)
		})
	};
})