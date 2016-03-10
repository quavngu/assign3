"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, centrisNotify) {
	$scope.product = {
		name: 				"",
		price: 				0,
		quantitySold: 		0,
		quantityInStock: 	0,
		imagePath: 			""
	};

	$scope.errorMessage = "";

	$scope.onOk = function onOk() {
		if($scope.product.name.length === 0) {
			centrisNotify.error("products.Messages.MissingName", "products.Fail");
			return;
		}
		if($scope.product.price < 0) {
			centrisNotify.error("products.Messages.MissingPrice", "products.Fail");
			return;
		}
		if($scope.product.quantitySold < 0) {
			centrisNotify.error("products.Messages.QuantitySold", "products.Fail");
			return;
		}
		if($scope.product.quantityInStock < 0) {
			centrisNotify.error("products.Messages.QuantityInStock", "products.Fail");
			return;
		}
		if($scope.product.imagePath.length === 0) {
			centrisNotify.error("products.Messages.ImagePath", "products.Fail");
			return;
		}

		$scope.$close($scope.product);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
});