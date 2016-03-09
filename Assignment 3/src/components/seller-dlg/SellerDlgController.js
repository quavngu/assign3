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
	$scope.testVar = "hiii";

	$scope.setSellerInfo = function setSellerInfo(n, c, i) {
		$scope.seller.name = n;
		$scope.seller.category = c;
		$scope.seller.imagePath = i;
	};

	$scope.onOk = function onOk() {
		// validations
		if($scope.seller.name.length === 0) {
			$scope.errorMessage = "Missing name!";
			return;
		}
		if($scope.seller.category.length === 0) {
			$scope.errorMessage = "Missing category!";
			return;
		}
		if($scope.seller.imagePath.length === 0){
        	$scope.errorMessage = "Invalid image!";
        	return;
    	}

		$scope.$close($scope.seller);
	};

	$scope.onCancel = function onCancel() {
		$scope.$dismiss();
	};
});