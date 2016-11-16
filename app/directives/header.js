;(function(ng){
	ng
	.module('learningHereUi')
	.directive('headerBar', function(){
		return {
			restrict : 'E',
			templateUrl : 'app/views/shared/header-bar.html',
			controller : 'HeaderController',
			controllerAs : 'HeaderCtrl'
		}
	});
})(window.angular);