"use strict";

angular.module("project3App").controller("ProductTapController",
function ProductTapController($scope, AppResource, centrisNotify, ProductDlg, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.sellerProducts = [];
	var sellerID = parseInt($scope.id);

	AppResource.getSellerProducts(sellerID).success(function(sellerProducts) {
		$scope.sellerProducts = sellerProducts;
	});

	$scope.onAddProduct = function onAddProduct() {
		ProductDlg.show().then(function(product) {
			AppResource.addSellerProduct(sellerID, product).success(function() {
				AppResource.getSellerProducts(sellerID).success(function(sellerProducts) {
					$scope.sellerProducts = sellerProducts;
				});
				centrisNotify.success("sellers.Messages.SaveSucceeded", "sellers.Ok");
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed", "sellers.Fail");
			});
		});
	};
});