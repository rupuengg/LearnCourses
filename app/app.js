;(function(ng){
	ng
	.module('learningHereUi', ['ngRoute'])
	.run(['$rootScope', '$location', 'Auth', function($rootScope, $location, Auth){
		$rootScope.isLoggedIn = Auth.isLoggedIn();
	}]);
})(window.angular);