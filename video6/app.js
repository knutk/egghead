'use strict'

var myApp = angular.module('myApp', [])

myApp.factory('Data', function() {
	return {message: 'Im data from a service'}
});

myApp.filter('reverse', function() {
	return function(text) {
		return text.split("").reverse().join("");
	};
});

function FirstCtrl ($scope, Data) {
	$scope.data = Data	
}

function SecondCtrl ($scope, Data) {
		$scope.data = Data;
}