# HybridAppNavigationDrawer
Hybrid App Navigation Drawer, for html/js/css mobile app

	creating the navigation drawer,
	it only works on smartphones, emulators or chrome f12 device mode
	put this just for the navigation dreawer
<script type="text/javascript" charset="utf-8" src="lib/jquery-2.1.3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/navigation_drawer.js"></script>
<link rel="stylesheet" type="text/css" href="css/navigation_drawer.css">
	
	put this on you body 
<body>	
	<div id="navigation_dreawer" onclick="esconderMenu()"></div>
	<div id="back"></div>
	...
</body>
	
	put the screens of you project on array object like this
	
        var appScreens = [{Name:"<i class=\'fa fa-home\'></i> Screen One", Id:"screen1"},
					 {Name:"Screen Two", Id:"screen2"},
					 {Name:"Screen Three", Id:"Third Screen"},
					 {Name:"The Last One", Id:"screen4"}
					];
and the user name and email on object like this
	var info = {Name: "Flavio", Email:"flavio@xxxmail.com"};
	
its this way because it may be taken from a database, to control permissions
then, call this function, and its done
StartNavigationDrawer(appScreens, info);
	
and remember, it only works on smartphones, emulators or chrome f12 device mode
