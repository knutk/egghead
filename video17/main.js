var app = angular.module('drinkApp', []);

app.controller('AppCtrl', function ($scope) {
	$scope.CtrlFlavor = "Blackberry";
})

app.directive('drink', function () {
	return {
		scope: {
			flavor: '@'
		},
		template: '<div>{{flavor}}<div>',
		// link: function (scope, element, attrs) {
		// 	scope.flavor = attrs.flavor;
		// }
	}
})