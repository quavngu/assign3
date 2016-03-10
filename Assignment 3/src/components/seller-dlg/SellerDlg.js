 "use strict";

angular.module("project3App").factory("SellerDlg",
function SellerDlg($uibModal) {
	return {
		/*show: function() {
			var modalInstance = $uibModal.open({
				templateUrl: "components/seller-dlg/seller-dlg.html",
				controller: "SellerDlgController"
			});*/

		show: function show(seller) {
			var result = $uibModal.open({
				templateUrl: "components/seller-dlg/seller-dlg.html",
				controller: "SellerDlgController",
				resolve: {
					modalParam: function () {
						return {
							seller: seller
						};
					}
				}
			});
			
			return result.result;
		}
	};
});