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


	$scope.onOk = function onOk() {
		// TODO: validation
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