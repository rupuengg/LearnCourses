;(function(ng){
	ng
	.module('learningHereUi')
	.controller('CoursesController', ['$http', '$scope', function($http, $scope){
		selectedRequestNav('courses');

		var self = this;
		self.courses = [];

		$http
		.get('data/list_courses.json')
		.then(function(resp){
			self.courses = resp.data;
		}, function(resp){
			console.log('Error occured');
		});
	}]);
})(window.angular);