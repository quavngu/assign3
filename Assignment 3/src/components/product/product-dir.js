"use strict";

angular.module("project3App").directive('myProduct', function () {
	return {
		restrict: "A",
		scope: {
			id: "@",
			name: "@",
			price: "@",
			quantitysold: "@",
			imagepath: "@",
			quantityinstock: "@"
		},
		templateUrl: 'components/product/product.html'
		//template: '<div><span><img src="{{product.imagePath}}" alt="img for id:{{product.id}}" height="100" width="100"/></span><span>{{product.name}}</span><span>Price: {{product.Price}}</span><span></span></div>'	
	};
});