"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope) {
	$scope.seller = {
		name: 		"",
		category: 	"",
		imagePath: 	""
	};

	$scope.onOk = function onOK() {
		// TODO: validation
		if($scope.seller.name.length === 0) {
			// Birta validation skilaboð
			return;
		}

		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
});