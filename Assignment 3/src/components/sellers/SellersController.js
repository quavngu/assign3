"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, centrisNotify, SellerDlg) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

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
		SellerDlg.show().then(function(seller) {
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
		
		SellerDlg.show(selectedUser).then(function(seller) {
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