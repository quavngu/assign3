"use strict";

angular.module("project3App").controller("ProductTapController",
function ProductTapController($scope, AppResource, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.sellerProducts = {};
	var sellerID = parseInt($scope.id);
	AppResource.getSellerProducts(sellerID).success(function(sellerProducts) {
		$scope.sellerProducts = sellerProducts;
	});

	$scope.test = function test() {
		console.log("test");
	};
});