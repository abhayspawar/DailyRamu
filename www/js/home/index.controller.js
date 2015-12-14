angular.module('starter.home', [])

.controller('home.IndexCtrl', ['$scope', '$location', 'Order',
	
	function ($scope, $location, Order) {

		var date = new Date();

		var monthNames = [
        	"January", "February", "March",
        	"April", "May", "June", "July",
        	"August", "September", "October",
        	"November", "December"
    	];

		$scope.today = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

		$scope.productAdd = function () {
			$location.path('/tab/categories')
		}

		$scope.$on('$ionicView.enter', function(e) {
			refreshData();  	
  		});

	  	$scope.remove = function (order) {
	  		Order.remove(order);
	  		refreshData();
	  	}

		refreshData();

		function refreshData () {
			var orders = Order.all();
			$scope.subscriptions = [];
			$scope.adhocs = [];
			$scope.orders = {};

			angular.forEach(orders, function (order) {
				if (order.type != 'just_tomorrow') {
					$scope.subscriptions.push(order);
				}

				if (order.type == 'just_tomorrow') {
					$scope.adhocs.push(order);
				}
			});

			var _orders = angular.copy(orders);
			angular.forEach(_orders, function (order) {
				if (! $scope.orders[order.name]) {
					$scope.orders[order.name] = order;
				} else {
					$scope.orders[order.name]['price'] += order.price; 
					$scope.orders[order.name]['quantity'] += order.quantity; 
				}
			});
		}
		
	}
]);