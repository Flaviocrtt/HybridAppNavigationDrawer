	//simply editable, it means you can change this value to customize.
	var appArea=/*when i pull from the left of the screen, the first touch has to be from  0 to */15/* px of the margin left to pull the menu*/;
	//that's all for now
	//-----------------------------------------------------------------------------------------------------------------------
    var iniXposicao = 0;    //posicao do primeiro toque
    var jQueryMenu;         //sendo atribuido no ready $(document).function(){}
    var jQueryBackMenu;     //sendo atribuido no ready $(document).function(){}
    var MenuMargem;         //margem atual do menu
    var podeAbrir;          //bool
    var Aberto = false;
    

    function menu(){
        
        var atual = $("#navigation_dreawer").css("marginLeft");
        var marg = (atual == '-202px')?'0':'-202';
        jQueryMenu.animate({'marginLeft':marg}, 'fast');
        
        if(marg=='0'){
            jQueryBackMenu.show();
            jQueryBackMenu.fadeTo( "slow", 0.5 );
            Aberto = true;
        }else{
            jQueryBackMenu.fadeTo( "slow", 0 );
            jQueryBackMenu.hide();
            Aberto = false;
        }
    }

    function TelaSelecionada(id){
        
		$("#navigation_dreawer ul li").css("background-color","#272727");
        $("#navigation_dreawer ul #nd_"+id).css("background-color","#444242");
    }

    function esconderMenu(){
        jQueryMenu.css({'marginLeft':'-202'});      
    }

    function Start(event){
        iniXposicao = event.originalEvent.changedTouches[0].clientX;
        podeAbrir = (iniXposicao <= appArea)?true:false;
        if(podeAbrir){
            jQueryBackMenu.show();
        }
    }

    function BodyMoveOpen(event){
        if(podeAbrir){
            BackMove(event);
        }
    }

    function BodyEndOpen(){
        
        if(podeAbrir){
            End();
        }
    }

    function BackMove(event){
        event.preventDefault();
        var posicao = event.originalEvent.changedTouches[0].clientX;
        iniXposicao = posicao;
        MenuMargem = event.originalEvent.changedTouches[0].clientX-202;
        MenuMargem = (MenuMargem>0)? 0: MenuMargem;
        jQueryMenu.css({'marginLeft':MenuMargem});
        BackMenu((MenuMargem+200)/400);
    }

    function Move(event){
        event.preventDefault();
        var posicao = event.originalEvent.changedTouches[0].clientX;
        //$("h3").html(event.changedTouches[0].clientX+" - "+iniXposicao);
        MenuMargem = posicao-iniXposicao;
        MenuMargem = (MenuMargem>0)? 0: MenuMargem;
        jQueryMenu.css({'marginLeft':MenuMargem});
        BackMenu((MenuMargem+200)/400);
    }

    function BackMenu(opac){
        
        jQueryBackMenu.css({ opacity: opac });
    }

    function End(){
        
        var mnuMarg = MenuMargem;//.substr(0, MenuMargem.length-2)//px;
        if(mnuMarg <= -100){
            jQueryMenu.animate({'marginLeft':'-202'}, 'fast');
            jQueryBackMenu.hide();
            Aberto = false;
        }else if(mnuMarg > -100){
            jQueryMenu.animate({'marginLeft':'0'}, 'fast');
            Aberto = true;
            BackMenu(0.5);
        }
    }  

    function StartNavigationDrawer(telas, info) {
		
        var itens = '';
		for(var i in telas){
			itens += '<li onclick="GoToScreen(\''+telas[i].Id+'\')" id="nd_'+telas[i].Id+'"><a><span>'+telas[i].Name+'</span></a></li>';
		}
        
        
        var menulateral = document.getElementById('navigation_dreawer');
        menulateral.innerHTML = '<div id=InfoUsuario><p>'+info.Name+'</p>'+
								'<p class="email">'+info.Email+'</p></div> <ul>'+
            					'<ul>'+itens+'</ul>';
    }

    $(document).ready(function(){
		
//        let's start on the app.js ready function, 
		
        jQueryMenu = $("#navigation_dreawer");
        jQueryBackMenu = $("#back");
        var corpo = $("body");
		
        corpo.bind("touchstart", Start); 
        corpo.bind("touchmove", BodyMoveOpen); 
        corpo.bind("touchend", BodyEndOpen); 
        jQueryBackMenu.bind("touchstart", Start); 
        jQueryBackMenu.bind("touchmove", BackMove); 
        jQueryBackMenu.bind("touchend", End);  
        jQueryMenu.bind("touchstart", Start); 
        jQueryMenu.bind("touchmove", Move);
        jQueryMenu.bind("touchend", End);
        jQueryBackMenu.click(function(){
            jQueryBackMenu.hide();
            jQueryMenu.animate({'marginLeft':"-202"}, 'fast');
            jQueryBackMenu.css({opacity: 0});
            Aberto = false;
        });
		jQueryMenu.click(function(){
			menu();	
		});
    });
