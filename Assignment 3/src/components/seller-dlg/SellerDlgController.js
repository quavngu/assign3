"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, centrisNotify, modalParam) {
	var sellerObj = modalParam.seller;
	if (sellerObj !== undefined) {
		$scope.seller = {
			name: 		sellerObj.name,
			category: 	sellerObj.category,
			imagePath: 	sellerObj.imagePath
		};
	} else {
		$scope.seller = {
			name: 		"",
			category: 	"",
			imagePath: 	""
		};
	}
	//console.log(SellersController.getSelectedUser);

	$scope.onOk = function onOk() {
		// validations
		if($scope.seller.name.length === 0) {
			centrisNotify.error("sellers.Messages.MissingName", "sellers.Fail");
			return;
		}
		if($scope.seller.category.length === 0) {
			centrisNotify.error("sellers.Messages.MissingCategory", "sellers.Fail");
			return;
		}
		if($scope.seller.imagePath.length === 0){
        	centrisNotify.error("sellers.Messages.MissingImage", "sellers.Fail");
        	return;
    	}

		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
});