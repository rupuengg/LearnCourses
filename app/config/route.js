;(function(ng){
	ng
	.module('learningHereUi')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider
		.when('/home', {
			templateUrl : 'app/views/home/index.html',
			controller : 'HomeController',
			controllerAs : 'HomeCtrl'
		})
		.when('/courses', {
			templateUrl : 'app/views/courses/index.html',
			controller : 'CoursesController',
			controllerAs : 'CoursesCtrl'
		})
		.when('/about', {
			templateUrl : 'app/views/about/index.html',
			controller : 'AboutController',
			controllerAs : 'AboutCtrl'
		})
		.when('/contact', {
			templateUrl : 'app/views/contact/index.html',
			controller : 'ContactController',
			controllerAs : 'ContactCtrl'
		})
		.when('/course/:id', {
			templateUrl : 'app/views/courses/course-detail.html',
			controller : 'CourseController',
			controllerAs : 'CourseCtrl'
		})
		.when('/courses/find', {
			template : 'Find Course',
			controller : 'CoursesController',
			controllerAs : 'CourseCtrl'
		})
		.otherwise({ redirectTo: '/home' });

		$locationProvider.html5Mode(true);
	}]);

	// var app = angular.module("routing-directive", ["ngRoute"]);

	// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	// 	$routeProvider
	// 	.when("/home", {
	// 		template : 'Home',
	// 		controller : 'HomeController',
	// 		controllerAs : 'HomeCtrl'
	// 	})
	// 	.when('/courses', {
	// 		templateUrl : 'Components/courses.php',
	// 		controller : 'CoursesController',
	// 		controllerAs : 'CoursesCtrl'
	// 	})
	// 	.when('/about', {
	// 		template : 'AboutUs',
	// 		controller : 'AboutController',
	// 		controllerAs : 'AboutCtrl'
	// 	})
	// 	.when('/course/:id', {
	// 		templateUrl : 'Components/course-detail.php',
	// 		controller : 'CourseController',
	// 		controllerAs : 'CourseCtrl'
	// 	})
	// 	.otherwise({ redirectTo: '/home' });

	// 	$locationProvider.html5Mode(true);
	// }]);

	// app.controller("HomeController", function(){
	// 	selectedRequestNav('home');
	// });

	// app.controller("CoursesController", ['$http', function($http){
	// 	selectedRequestNav('courses');
	// 	var obj = this;
	// 	$http.get('list_courses.json').success(function(data){
	// 		obj.courses = data;
	// 	});
	// }]);

	// app.controller("CourseController", ['$http', function($http){
	// 	selectedRequestNav('courses');
	// 	var self = this;
	// 	self.showVideo = -1;
	// 	$http.get('course-details-1.json').success(function(data){
	// 		self.course = data;
	// 	});
	// 	self.videoOpen = function(element, index){
	// 		self.showVideo = index;
	// 	};
	// 	self.isShow = function(index){
	// 		return self.showVideo === -1 ? true : (self.showVideo === index ? true : false);
	// 	};
	// }]);

	// app.controller("AboutController", function(){
	// 	selectedRequestNav('about');
	// });
})(window.angular);