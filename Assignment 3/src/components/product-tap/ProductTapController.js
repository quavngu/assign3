"use strict";

angular.module("project3App").controller("ProductTapController",
function ProductTapController($scope, AppResource, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.sellerProducts = [];
	var sellerID = parseInt($scope.id);
	AppResource.getSellerProducts(sellerID).success(function(sellerProducts) {
		$scope.sellerProducts = sellerProducts;
	});

	$scope.test = function test() {
		for(var i = 0; i < $scope.sellerProducts.length; ++i) {
			var temp = $scope.sellerProducts[i];
			console.log(temp);
		}
		console.log("test");
	};
});