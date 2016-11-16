function selectedRequestNav(sel){
	$('.nav.navbar-nav li').removeClass('active');
	$('.nav.navbar-nav li a.' + sel).parent().addClass('active');
}