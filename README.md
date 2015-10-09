#Hybrid App Navigation Drawer
##Hybrid App Navigation Drawer, for html/js/css mobile app
###This slides to/from the left side of the screen as on android native app
###It works only on smartphones, emulators or chrome f12 device mode

###creating the navigation drawer
#####Put this
        <script type="text/javascript" charset="utf-8" src="lib/jquery-2.1.3.js"></script>
		<script type="text/javascript" charset="utf-8" src="js/navigation_drawer.js"></script>
		<link rel="stylesheet" type="text/css" href="css/navigation_drawer.css">
        //on the code, you'll find more, but it's for the pagination of the example app
       
#####Put this on you body 
	<body>	
		<div id="navigation_drawer" onclick="esconderMenu()"></div>
		<div id="back"></div>
		...
	</body>
	
####On you script ready function:
#####put the screens of you project on array object like this

	var appScreens = [
		{Name:"Screen One", Id:"screen1"},
		{Name:"Screen Two", Id:"screen2"},
		{Name:"Screen Three", Id:"screen3"},
		{Name:"The Last One", Id:"screen4"}
	];
				

#####and the user name and email on object like this

	var info = {Name: "Flavio", Email:"flavio@xxxmail.com"};

######its this way because it may be taken from a database, to control permissions
#####then, call this function, and its done

	StartNavigationDrawer(appScreens, info);

######and remember, it only works on smartphones, emulators or chrome f12 device mode
