"use strict";

angular.module("project3App").controller("TranslateController",
function TranslateController($scope, $translate) {
	$scope.changeToIS = function changeToIS() {
		$translate.use("is");
	};

	$scope.changeToEN = function changeToEN() {
		$translate.use("en");
	};
});