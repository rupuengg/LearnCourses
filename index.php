<!DOCTYPE html>
<html ng-app="learningHereUi">
	<head>
		<base href="/LearnAngular/">
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
		<nav class="navbar navbar-default navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
						<span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="/home">
						LearningHere
					</a>
				</div>
				<div class="collapse navbar-collapse" id="myNavbar">
					<ul class="nav navbar-nav">
						<li class="active"><a class="home" href="home">Home</a></li>
						<li><a class="about" href="about">About Us</a></li>
						<li><a class="courses" href="courses">Courses</a></li>
						<li><a class="contact" href="contact">Contact Us</a></li>
						<!-- <li class="dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" href="javascript:;">Contact Us<span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href>About Us</a></li>
								<li><a href>Carrer</a></li>
							</ul>
						</li> -->
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li><a href ><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
						<li><a href="javascript:;" ng-click="login.LoginProcess()"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>

						<!-- <li><p class="navbar-text">Signed in as Mark Otto</p></li>
						<li><a href><span class="glyphicon glyphicon-log-out"></span> Logout</a></li> -->
					</ul>
				</div>
			</div>
		</nav>

		<div class="container">
			<div ng-view></div>
		</div>

		<div class="footer">
			<div class="container">
				<p class="text-muted">&copy; Copyright 2016</p>
			</div>
		</div>

		<!-- <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#dv_modal">Open Modal</button>

		<div id="dv_modal" class="modal fade" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&nbsp;</button>
						<h4 class="modal-title">Modal Header</h4>
					</div>
					<div class="modal-body">
						<p>Some text</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal"></button>
					</div>
				</div>
			</div>
		</div> -->

		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
		<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
		<script src="assets/js/common.js"></script>
		<script src="app/client/app.js"></script>
		<script src="app/client/config/route.js"></script>
		<script src="app/client/home/controllers/home-controller.js"></script>
		<script src="app/client/courses/controllers/courses-controller.js"></script>
		<script src="app/client/courses/controllers/course-controller.js"></script>
		<script src="app/client/about/controllers/about-controller.js"></script>
		<script src="app/client/contact/controllers/contact-controller.js"></script>
	</body>
</html>