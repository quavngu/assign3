"use strict";

angular.module("project3App").controller("SellerDetailsController", ["$scope", "AppResource", "$routeParams",
function SellerDetailsController($scope, AppResource, $routeParams, ngMaterial) {
	$scope.id = $routeParams.id;
	$scope.seller = {};
	var sellerID = parseInt($scope.id);

	AppResource.getSellerDetails(sellerID).success(function(seller) {
		$scope.seller = seller;
		console.log(seller);
	});
}]);