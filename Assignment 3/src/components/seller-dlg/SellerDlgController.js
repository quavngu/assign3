"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope) {
	$scope.seller = {
		name: 		"",//$scope.selectedUser.name,
		category: 	"",//$scope.selectedUser.category,
		imagePath: 	""//$scope.selectedUser.imagePath
	};
	$scope.errorMessage = "";
	//console.log(SellersController.getSelectedUser);

	$scope.setSellerInfo = function setSellerInfo(n, c, i) {
		$scope.seller.name = n;
		$scope.seller.category = c;
		$scope.seller.imagePath = i;
	};

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