
var actual_screen = 'screen1';
var last_screen = '';

function GoToScreen(id, func){
	
	last_screen = actual_screen;
	actual_screen = id;
	location.href = "#"+id;
	//when open the screen, call the function if told
	if(func != undefined){
		if((typeof func)=='string'){
			eval(func+"()");
		}else{
			func();
		}
	}
	TelaSelecionada(id);	
}


function BackToLastScreen(){
	
	if(navigator.app){//if on phone/cordova
		navigator.app.backHistory();
        TelaSelecionada(last_screen);
	}else{//needed on navigator
		GoToScreen(last_screen);
	}
}

$(document).ready(function(){
	
//	creating the navigation drawer,
//	put the screens of you project, and the user name and email
	
        var appScreens = [{Name:"<i class=\'fa fa-home\'></i> Screen One", Id:"screen1"},
					 {Name:"Screen Two", Id:"screen2"},
					 {Name:"Screen Three", Id:"Third Screen"},
					 {Name:"The Last One", Id:"screen4"}
					];
		var info = {Name: "Flavio", Email:"flavio@xxxmail.com"};
	
//	its this way because it may be taken from a database, to control permissions
//	then, call this function, and its done
	StartNavigationDrawer(appScreens, info);
	
//	dont forget this divs
//	<div id="navigation_dreawer" onclick="esconderMenu()"></div>
//	<div id="back"></div>
	
//	and remember, it only works on smartphones, emulators or chrome f12 device mode
	
});