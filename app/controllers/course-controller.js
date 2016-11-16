;(function(ng){
	ng
	.module('learningHereUi')
	.controller('CourseController', [
		'$http', 
		'$scope', 
		'$compile', 
		'$routeParams', 
		function($http, $scope, $compile, $routeParams){
			selectedRequestNav('courses');

			var self = this;
			self.course = [];

			$scope.showVideo = true;
			$scope.video = [];

			$http
			.get('data/course-details-'+$routeParams.id+'.json')
			.then(function(resp){
				$scope.course = resp.data;
			}, function(resp){
				console.log('Error occured');
			});

			$scope.showCurrentVideo = function(index){
				$scope.showVideo = false;
				$scope.video = $scope.course.video_list[index];
				var childNode = $compile('<show-current-video></show-current-video>')($scope);
				ng.element(document.querySelector('#show-large-videos div')).html('');
				ng.element(document.querySelector('#show-large-videos div')).append(childNode);
			};

			$scope.toggle = function(){
				$scope.showVideo = !$scope.showVideo;
			};
		}
	])
	.directive('showVideoList', function($compile){
		return {
			restrict : 'E',
			templateUrl : 'app/client/courses/views/video-list.html',
			// link : function(scope, element){
				// element.bind('click', function(){
	// 				var childNode = element.clone();
	// 				childNode.find('video').addAttr('controls');
	// 				childNode = $compile(childNode)(scope)
	// 				ng.element(document.getElementById('show-current-video')).html('');
	// 				ng.element(document.getElementById('show-current-video')).append(childNode);
				// });
			// }
		}
	})
	.directive('showCurrentVideo', function(){
		return {
			restrict : 'E',
			templateUrl : 'app/client/courses/views/video-list.html',
			link : function(scope, element){
				scope.BacktoVideo = function(){
					scope.toggle();
				};
			}
		}
	});
})(window.angular);