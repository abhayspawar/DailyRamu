angular.module('starter.settings', [])

.controller('settings.IndexCtrl', ['$scope',
	
	function ($scope) {
		$scope.settings = {};
		$scope.settings.sms = true;
		$scope.settings.email = false;
	}
]);