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
			$scope.DisplayAdd = true;
			$scope.DisplayChange = true;
			if (seller !== undefined) {
				AppResource.addSeller(seller).success(function(seller) {
					centrisNotify.success("sellers.Messages.SaveSucceeded", "sellers.Ok");
				}).error(function() {
				centrisNotify.error("sellers.Messages.SaveFailed", "sellers.Fail");
				});
			}
		});
	};

	$scope.onEditSeller = function onEditSeller(selectedUser) {
		$scope.selectedUser = selectedUser;
		$scope.DisplayAdd = false;
		$scope.DisplayChange = false;
		
		SellerDlg.show(selectedUser).then(function(seller) {
			$scope.DisplayAdd = true;
			$scope.DisplayChange = true;
			if (seller !== undefined) {
				AppResource.updateSeller(selectedUser.id, seller).success(function(seller) {
					centrisNotify.success("sellers.Messages.UpdateSucceeded", "sellers.Ok");
				}).error(function() {
				centrisNotify.error("sellers.Messages.UpdateFailed");
				});
			}
		});
	};

});