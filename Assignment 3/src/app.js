"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) { 
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/sellers.html"
	});

	$translateProvider.useStaticFilesLoader({
		prefix: "lang_",
		suffix: ".json"
	});

	// Default language: IS
	$translateProvider.use("is");
});