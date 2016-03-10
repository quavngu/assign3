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
			centrisNotify.error("sellers.Messages.MissingName", "sellers.Fail");
			return;
		}
		if($scope.product.price < 1) {
			centrisNotify.error("sellers.Messages.MissingName", "sellers.Fail");
			return;
		}
		if($scope.product.quantitySold < 0) {
			centrisNotify.error("sellers.Messages.MissingName", "sellers.Fail");
			return;
		}
		if($scope.product.quantityInStock < 0) {
			centrisNotify.error("sellers.Messages.MissingName", "sellers.Fail");
			return;
		}
		if($scope.product.imagePath.length === 0) {
			centrisNotify.error("sellers.Messages.MissingName", "sellers.Fail");
			return;
		}

		$scope.$close($scope.product);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
});