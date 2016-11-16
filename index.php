<!DOCTYPE html>
<html ng-app="learningHereUi">
	<head>
		<base href="/LearnCourses/">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
	    <meta name="description" content="My Test App With Angular">
	    <meta name="keywords" content="Todo,myAwesomeApp,App">
	    <meta name="author" content="Rupendra Kumar Dhiman">
		<title>Learning Here</title>
		
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="assets/css/style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	</head>
	<body>
		<header-bar></header-bar>

		<div class="container">
			<div ng-view></div>
		</div>

		<div class="footer">
			<div class="container">
				<p class="text-muted">&copy; Copyright 2016</p>
			</div>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
		<script src="app/js/common.js"></script>
		<script src="app/app.js"></script>
		<script src="app/factories/auth.js"></script>
		<script src="app/factories/page.js"></script>
		<script src="app/directives/shared/header.js"></script>
		<script src="app/controllers/header-controller.js"></script>
		<script src="app/directives/shared/login-form.js"></script>
		<script src="app/directives/shared/signup-form.js"></script>
		<script src="app/config/route.js"></script>
		<script src="app/controllers/home-controller.js"></script>
		<script src="app/controllers/courses-controller.js"></script>
		<script src="app/controllers/course-controller.js"></script>
		<script src="app/controllers/about-controller.js"></script>
		<script src="app/controllers/contact-controller.js"></script>
	</body>
</html>