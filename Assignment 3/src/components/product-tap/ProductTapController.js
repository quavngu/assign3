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
				centrisNotify.success("products.Messages.SaveSucceeded", "products.Ok");
			}).error(function() {
				centrisNotify.error("products.Messages.SaveFailed", "products.Fail");
			});
		});
	};

	$scope.onEditProduct = function onEditProduct(selectedProduct) {
		$scope.selectedProduct = selectedProduct;

		ProductDlg.show(selectedProduct).then(function(product) {
			if (product !== undefined) {
				AppResource.updateSellerProduct(selectedProduct.id, product).success(function(product) {
					centrisNotify.success("products.Messages.UpdateSucceeded", "products.Ok");
				}).error(function() {
					centrisNotify.error("products.Messages.UpdateFailed", "products.Fail");
				});
			}
		});
	};
});