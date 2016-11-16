;(function(ng){
	ng
	.module('learningHereUi')
	.directive('loginForm', function(){
		return {
			restrict : 'E',
			templateUrl : 'app/views/shared/login-form.html'
		};
	});
})(window.angular);