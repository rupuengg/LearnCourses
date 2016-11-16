;(function(ng){
	ng
	.module('learningHereUi')
	.factory('Page', function($rootScope){
		return {
			setPageTitle : function(pTitle){
				$rootScope.pageTitle = pTitle;
			},
			setBodyClass : function(bClass){
				$rootScope.bodyClass = bClass;
			}
		};
	});
})(window.angular);