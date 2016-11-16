;(function(ng){
	ng
	.module('learningHereUi')
	.factory('Auth', function($rootScope){
		return {
			setUser : function(aUser){
				$rootScope.user = aUser;
			},
			isLoggedIn : function(){
				return ($rootScope.user) ? $rootScope.user : false;
			}
		};
	});
})(window.angular);