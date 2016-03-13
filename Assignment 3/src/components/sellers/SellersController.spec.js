"use strict";

describe("SellersController", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	var mockToastr = {
		success: function success(message, title, options) {

		},
		error: function error(message, title, options) {

		}
	};

	var mockTranslate = function mockTranslate(str, param) {
	return {
		then: function(fn) {
			var msg = str;
			if (param !== undefined) {
				str = str + " " + param.value;
			}
			fn(str);
			}
		};
	};

	mockTranslate.instant = function instant(str) {
		return str;
	};

	beforeEach(module("project3App"));

	beforeEach(module(function($provide) {
		$provide.value("toastr", mockToastr);
		$provide.value("$translate", mockTranslate);
	}));

	it("should be correctly defined", inject(function(SellersController) {
		expect(SellersController).toBeDefined();
	}));
/*
	var createSellerTest = {
		var obj = createSeller(1337, "name", "category", "img")
		return obj;
	};

	describe("SellersController", function() {
		beforeEach(inject(function($controller, $rootScope) {
			spyOn(mockLocation, )
		}));
	});*/
});