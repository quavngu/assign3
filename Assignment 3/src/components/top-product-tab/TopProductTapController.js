"use strict";

angular.module("project3App").controller("TopProductTapController",
function TopProductTapController($scope, AppResource, centrisNotify, ProductDlg, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.sellerProducts = [];
	var sellerID = parseInt($scope.id);

	AppResource.getSellerProducts(sellerID).success(function(sellerProducts) {
		$scope.sellerProducts = sellerProducts;
	});

	$scope.sellerProducts = $scope.sellerProducts.slice(0, 10);

	$scope.onAddProduct = function onAddProduct() {
		console.log("top");
	};
});