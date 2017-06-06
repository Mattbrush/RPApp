console.clear();
console.log('~~~~~~~~~~~Options~~~~~~~~~~~~~')
StartOptions();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')

function StartOptions() {

    var Party = JSON.parse(localStorage.getItem('_Party'));
    console.log(Party[0]);
    
    /////////// Which Options Do You Want? //////////
    $("#Message").html(" Which options would you like to change?");
    $("#OptionsList").append(`<span class='animated fadeInDown Option'>Game Text Speed : </span><select class='Input animated fadeInDown' id='TextSpeed'><option  value='4000'>Slow</option><option selected value='2000'>Medium</option><option  value='1500'>Fast</option></select>`);
    
    
    
    
    // Debug Menu Options..
   
    $("#OptionsList").append("<h3 id='Triggers' class='animated fadeInDown' > Debug Options</h3>");

    $("#Triggers").append("<br><span id='1' class='animated fadeInDown' > Victoria 1 : </span><button id='1On' class='MenuButton'> True </button><button id='1Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='2' class='animated fadeInDown' > Victoria 2 : </span><button id='2On' class='MenuButton'> True </button><button id='2Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='3' class='animated fadeInDown' > Victoria 3 : </span><button id='3On' class='MenuButton'> True </button><button id='3Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='4' class='animated fadeInDown' > Victoria 4 : </span><button id='4On' class='MenuButton'> True </button><button id='4Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='5' class='animated fadeInDown' > Victoria 5 : </span><button id='5On' class='MenuButton'> True </button><button id='5Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='6' class='animated fadeInDown' > Victoria 6 : </span><button id='6On' class='MenuButton'> True </button><button id='6Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='7' class='animated fadeInDown' > Victoria 7 : </span><button id='7On' class='MenuButton'> True </button><button id='7Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='8' class='animated fadeInDown' > Victoria 8 : </span><button id='8On' class='MenuButton'> True </button><button id='8Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='9' class='animated fadeInDown' > Victoria 9 : </span><button id='9On' class='MenuButton'> True </button><button id='9Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='10' class='animated fadeInDown' > Victoria 10 : </span><button id='10On' class='MenuButton'> True </button><button id='10Off' class='MenuButton'> False </button>");

         TriggerOnOff()
          
          function TriggerOnOff(){
                var Party = JSON.parse(localStorage.getItem('_Party'));
              console.log(Party[0].Triggers)
      for (i = 1; i <11; i++) {
             
              
               
          if (Party[0].Triggers["Victoria"+i] == true){
              $("#"+i+"Off").removeClass("MenuButton")
              $("#"+i+"Off").addClass("MenuButtonDisabled")
          } else{
              $("#"+i+"On").removeClass("MenuButton")
              $("#"+i+"On").addClass("MenuButtonDisabled")
          }
          
 };     
        
              for (i = 1; i < 11; i++) {  
          $("#"+i+"On").click(function(){
              if (Party[0].Triggers["Victoria"+this.id.substr(0,1)] == true){
                  Party[0].Triggers["Victoria"+this.id.substr(0,1)] = true
                  
                  localStorage.setItem('_Party', JSON.stringify(Party));
                  TriggerOnOff()
              }else if (Party[0].Triggers["Victoria"+this.id.substr(0,1)] == false){
                  Party[0].Triggers["Victoria"+this.id.substr(0,1)] = true
                 $(this).removeClass("MenuButtonDisabled");
                 $(this).addClass("MenuButton");
                  $("#"+this.id.substr(0,1)+"Off").removeClass("MenuButton");
                  $("#"+this.id.substr(0,1)+"Off").addClass("MenuButtonDisabled");
                  localStorage.setItem('_Party', JSON.stringify(Party));
                  TriggerOnOff()
              }
          });
          
          $("#"+i+"Off").click(function(){
              var Party = JSON.parse(localStorage.getItem('_Party'));
              if (Party[0].Triggers["Victoria"+this.id.substr(0,1)] == true){
                  Party[0].Triggers["Victoria"+this.id.substr(0,1)] = false;
                     $(this).removeClass("MenuButtonDisabled");
                 $(this).addClass("MenuButton");
                  $("#"+this.id.substr(0,1)+"On").removeClass("MenuButton");
                  $("#"+this.id.substr(0,1)+"On").addClass("MenuButtonDisabled");
                  
                  localStorage.setItem('_Party', JSON.stringify(Party));
                  TriggerOnOff()
              }else if (Party[0].Triggers["Victoria"+this.id.substr(0,1)] == false){
                  Party[0].Triggers["Victoria"+this.id.substr(0,1)] = false;
             
              localStorage.setItem('_Party', JSON.stringify(Party));
                   TriggerOnOff()
              }

          });
              };
      };
    
    
    // End of Triggers
    
    
    
    
    $("#OptionsList").append("<h4> Party </h4><div id='PartyList'></div>");
    PlaceParty();
    function PlaceParty(){
        var Party = JSON.parse(localStorage.getItem('_Party'));
        $("#PartyList").html("");
    
    for (i = 0; i < Party.length; i++) {  
        $("#PartyList").append("<br><button id='"+i+"Party' class='MenuButton'>"+Party[i].Name+"</button>");
        $("#"+i+"Party").click(function(){
           $("#OptionsList").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>"); 
           $("#OptionsList").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'> Are you sure you want to remove <strong>"+Party[this.id.substr(0,1)].Name+"</strong> From The Party? <br><button class='MenuButton' id='Yes'> Yes </button><button class='MenuButton' id='No'> No </button></div>"); 
            var index = this.id.substr(0,1);
           
             $("#Yes").click(function(){
                  
                 Party.splice(index, 1);
                $("#OverlayBlanket").remove();
                $("#AlertPlayerMessage").remove();
                  localStorage.setItem('_Party', JSON.stringify(Party));
                PlaceParty();
            });
            
            $("#No").click(function(){
                $("#OverlayBlanket").remove();
                $("#AlertPlayerMessage").remove();
                 localStorage.setItem('_Party', JSON.stringify(Party));
                PlaceParty();
            });
        });
    };
};
          
    
    
    
    
    
    
    
    $("#Confirm").click(function () {
        var Party = JSON.parse(localStorage.getItem('_Party'));
            Party[0].PlayerTextSpeed = $("#TextSpeed").val();
            $("#MessageHolder").html("<h4 class='Message animated pulse ' id='Message'></h4>");
            $("#Message").html(" Changes saved.");
        console.log(Party[0].Triggers)
            localStorage.setItem('_Party', JSON.stringify(Party));
            setTimeout(function () {
                $("#App").load("./index.html");
            }, 1000);
      
    });
    $("#Back").click(function () {
        $("#App").load("./index.html");
    });
}