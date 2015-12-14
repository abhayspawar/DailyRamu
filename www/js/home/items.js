angular.module('starter.home')

.controller('ItemsCtrl', ['$scope', '$location', 'Category', '$stateParams',
	
	function ($scope, $location, Category, $stateParams) {
		
		$scope.category = Category.find($stateParams.categoryId);

	}
])

.controller('ItemCtrl', ['$scope', '$location', 'Category', '$stateParams', 'Order', '$ionicHistory',
	
	function ($scope, $location, Category, $stateParams, Order, $ionicHistory) {

		$scope.from = new Date();
		$scope.to = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
		
		$scope.item = Category.findItem($stateParams.categoryId, $stateParams.itemId);
		$scope.quantity = 1;
		$scope.obj = {};
		$scope.obj.everyday = true;
		$scope.obj.alternate_days = false;
		$scope.obj.just_tomorrow = false;

		$scope.setType = function (key) {
			angular.forEach($scope.obj, function (value, key) {
				$scope.obj[key] = false;
			});

			$scope.obj[key] = true;
			return false;
		};

		$scope.placeOrder = function () {
			var item = $scope.item;
			var order = {
				id: (new Date()).getTime(),
				name: item.name,
				quantity: $scope.quantity,
				item_type: $scope.item.type,
				price: $scope.quantity * item.price,
				type: getType()
			};

			Order.add(order);

			$ionicHistory.nextViewOptions({
  			disableBack: true
			});

			$location.path('/tab/home');
		}

		$scope.increment = function () {
			$scope.quantity = $scope.quantity + 1;
		};

		$scope.decrement = function () {
			if ($scope.quantity <= 1) return;
			$scope.quantity = $scope.quantity - 1;
		};

		$scope.formOpen = function () {
			angular.element('#fromDate').trigger('focus');
		};

		$scope.toOpen = function () {
			angular.element('#toDate').trigger('click');
		};

		function getType () {
			for (key in $scope.obj) {
				if ($scope.obj[key]) {
					return key;
				}
			}
		}

	}
]);