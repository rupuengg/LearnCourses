;(function(ng){
	ng
	.module('learningHereUi')
	.controller('HeaderController', function($http, $scope, $rootScope){
		var self = this;

		$scope.isShowLogin = true;
		$scope.isShowSignup = false;
		$scope.loginUser = {};

		this.isLoggedIn = $rootScope.isLoggedIn;
		
		// Login Process
		$scope.LoginOpen = function(){
			$scope.isShowLogin = true;
			$scope.isShowSignup = false;
			console.log('Login Open');
		};

		$scope.LoginProcess = function(user){
			console.log(user);
			// $scope.loginUser = ng.copy(user);
			// $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;';
			// $http.post('server/auth/login.php', {user});
			$http({
				method : 'post',
				url : 'server/auth/login.php',
				data : user
			}).then(function(resp){
				console.log(resp)
			}, function(){
				console.log(error);
			})
		};

		// Signup Process
		$scope.SignupOpen = function(){
			$scope.isShowLogin = false;
			$scope.isShowSignup = true;
		};

		$scope.SignupProcess = function(user){
			console.log(user);
			// $scope.loginUser = ng.copy(user);
			// $http.post('app/server/login', {user});
		};

		$scope.ResetForm = function(){
			$scope.user = ng.copy($scope.loginUser);
		};

		// Logout Logged In User
		self.LogoutUser = function(){
			console.log('Logout');
		};
	});
})(window.angular);