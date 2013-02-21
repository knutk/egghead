var app = angular.module('superApp', []);

app.directive('superhero', function () {
	return {
		restrict: 'E',
		scope: {},x

		controller: function ($scope) {
			$scope.ability = []

			this.addStrength = function () {
				$scope.ability.push('strength')
			}

			this.addSpeed = function () {
				$scope.ability.push('speed')
			}

			this.addFlight = function () {
				$scope.ability.push('Flight')
			}
		},

		link: function (scope, element) {
			element.bind('mouseenter', function () {
				console.log(scope.ability);
			})
		}
	}
})

app.directive('strength', function () {
	return {
		require:"superhero",
		link: function (scope, element, attrs, superheroCtrl) {
			superheroCtrl.addStrength();
		}
	}
})

app.directive('speed', function () {
	return {
		require:"superhero",
		link: function (scope, element, attrs, superheroCtrl) {
			superheroCtrl.addSpeed();
		}
	}
})

app.directive('flight', function () {
	return {
		require:"superhero",
		link: function (scope, element, attrs, superheroCtrl) {
			superheroCtrl.addFlight();
		}
	}
})