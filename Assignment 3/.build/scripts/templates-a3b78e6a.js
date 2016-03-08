angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n	<!--<link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\">-->\r\n</head>\r\n	<main class=\"container-fluid\">\r\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n\r\n	<toaster-container></toaster-container>\r\n	<!-- inject:vendor:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:app:js -->\r\n	<script src=\"app.js\"></script>\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n	<!-- endinject -->\r\n</body>\r\n</html>");
$templateCache.put("components/seller-dlg/seller-dlg.html","<div>\n	Name\n	<input types=\"text\" ng-model=\"seller.name\" />\\\n	Category\n	<input types=\"text\" ng-model=\"seller.category\" />\n	Image URL\n	<input types=\"text\" ng-model=\"seller.imagePath\" />\n</div>");
$templateCache.put("components/sellers/sellers.html","<div>\r\n	<button class=\"btn btn-primary\" ng-click=\"onAddSeller()\">\r\n		<span translate=\"sellers.Add\"></span>\r\n	</button>\r\n	<table>\r\n		<thead>\r\n			<tr>\r\n				<th>\r\n					<span translate=\"sellers.Name\"></span>\r\n				</th>\r\n				<th>\r\n					<span translate=\"sellers.Category\"></span	>\r\n				</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n			<tr ng-repeat=\"s in sellers\">\r\n				<td>{{s.name}}</td>\r\n				<td>{{s.category}}</td>\r\n			</tr>\r\n		</tbody>\r\n	</table>\r\n</div>");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");}]);