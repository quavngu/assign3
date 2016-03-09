"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	$scope.DisplayAdd = true;
	$scope.DisplayChange = true;
	$scope.selectedUser = {
		name: 		"",
		category: 	"",
		imagePath: 	""
	};

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	});

	function getSelectedUser() {
		return $scope.selectedUser;
	}

	$scope.onAddSeller = function onAddSeller() {
		$scope.DisplayAdd = false;
		$scope.DisplayChange = false;
		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
				$scope.DisplayAdd = true;
				$scope.DisplayChange = true;
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};

	$scope.onEditSeller = function onEditSeller(selectedUser) {
		$scope.selectedUser = selectedUser;
		$scope.DisplayChange = false;
		
		console.log(selectedUser.name);
		console.log(selectedUser.category);

		SellerDlg.show().then(function(seller) {
			AppResource.updateSeller(selectedUser.id, seller).success(function(seller) {
				$scope.DisplayChange = true;
			}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};
});