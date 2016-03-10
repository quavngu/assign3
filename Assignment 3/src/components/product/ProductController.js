"use strict";

angular.module("project3App").controller("ProductController",
function ProductController($scope, AppResource, centrisNotify, ProductDlg, $routeParams) {
	$scope.id = $routeParams.id;
	var sellerID = parseInt($scope.id);

	
});