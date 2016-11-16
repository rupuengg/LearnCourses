;(function(ng){
	ng
	.module('learningHereUi')
	.directive('signupForm', function(){
		return {
			restrict : 'E',
			templateUrl : 'app/views/shared/signup-form.html'
			// ,
			// controller : 'SignupController'
		};
	});
})(window.angular);