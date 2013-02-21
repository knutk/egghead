'use strict'

var myApp = angular.module('myApp', [])

myApp.factory('Data', function() {
	return {message: 'Im data from a service'}
});


function FirstCtrl ($scope, Data) {
	$scope.data = Data	
}

function SecondCtrl ($scope, Data) {
		$scope.data = Data;

		$scope.reversedMessage = function(message) {
			return message.split("").reverse().join("")
			// return $scope.data.message.split("").reverse().join("") <-- Could also do this, but above is better. Need to pass in data from the view though
		};
}