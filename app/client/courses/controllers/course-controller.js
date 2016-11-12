;(function(ng){
	ng
	.module('learningHereUi')
	.controller('CourseController', ['$http', function($http){
		var self = this;
		self.course = [];

		$http
		.get('data/course-details-1.json')
		.then(function(resp){
			self.course = resp.data;
		}, function(resp){
			console.log('Error occured');
		});
	}]);
})(window.angular);