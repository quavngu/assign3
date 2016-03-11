"use strict";

angular.module("project3App").controller("TopProductTapController",
function TopProductTapController($scope, AppResource, centrisNotify, ProductDlg, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.sellerProducts = [];
	var sellerID = parseInt($scope.id);

	AppResource.getSellerProducts(sellerID).success(function(sellerProducts) {
		sellerProducts.sort(compare);
		$scope.sellerProducts = sellerProducts.slice(0, 10);
	});

	//For sort by quantities sold
	function compare(a,b) {
  		if (a.quantitySold > b.quantitySold) {
    		return -1;
  		}
  		else if (a.quantitySold  < b.quantitySold) {
    		return 1;
  		}
  		else {
    		return 0;
  		}
	}

	$scope.onAddProduct = function onAddProduct() {
		ProductDlg.show().then(function(product) {
			AppResource.addSellerProduct(sellerID, product).success(function() {
				AppResource.getSellerProducts(sellerID).success(function(sellerProducts) {
					sellerProducts.sort(compare);
					$scope.sellerProducts = sellerProducts.slice(0, 10);
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