console.clear();
StartApp();

function StartApp() {
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    var JournalNotification = 0;
    console.clear();
    console.log("Character :");
    console.log(Party[0]);
    console.log("Party : ");
     for (i = 0; i < Party.length; i++) {
    console.log(Party[i].Name);
     };
    $("#Overlay").css("opacity","0.85");
    $("#Message").html(" Welcome To Victoria ! ");
    $("#Locationtitle").html(" Victoria, B.C");
    $("#Overlay").css("background-image","url(img/BritishColumbiaVictoria.jpg)");
    $("#ProvinceList").html("<div>Player Name : "  + Party[0].Name + " " + Party[0].FamilyName+"</div><br><div id='Level'>Level :  " + Party[0].Level + "</div>"/*"<br><button class='MenuButton animated flipInY ' id='StatusPage'>Menu</button><br><button class='MenuButton animated flipInY'  id='Battle'>Battle</button><br>"*/+"");
    $("#ProvinceList").css("border-color",""+Party[0].Color+"");
    
    
    
    // Check Item's Viewed in Journal
    
    // Counts all Notifications of New Journal Entries!
            for (i = 0; i < Party[0].Journal.length; i++) {
                for (e = 0; e < Party[0].Journal[i].Entries.length; e++) {
                   if (Party[0].Journal[i].Entries[e].Hidden == false){
                       if (Party[0].Journal[i].Entries[e].Viewed == false){
                           JournalNotification++; 
                       };   
                   };
                };
            };
    
    
    function AppendJournal(){
        if (JournalNotification == 0){
          $("#ProvinceList").append("<br><br><button id='StatusPage' class='MenuButton'> <img class='Icon' src='./img/MenuIcon.png'></img> </button><button id='Journal' class='MenuButton'> <img class='Icon' src='./img/JournalIcon.png'></img></button>");
        } else {
              $("#ProvinceList").append("<br><br><button id='StatusPage' class='MenuButton'> Menu </button><button id='Journal' class='MenuButton'> Journal ( "+JournalNotification+" ) </button>");
        }
    };
    
    
    
    ///////////////
    
    
    
    
    
    
    
    /* Check Story Progress */
    
     if(Party[0].Triggers.Victoria10 == true){
    $("#ProvinceList").append("<br><button class='MenuButton animated flipInY' id='Pier'>Victoria Pier</button>");
          $("#ProvinceList").append("<br><button class='MenuButton animated flipInY' id='ShoppingDistrict'>Shopping District</button>");
  $("#ProvinceList").append("<br><button class='MenuButton animated flipInY' id='VictoriaParliamentBuilding'>Victoria Parliament Building</button>  ");
      AppendJournal();
               
    }
    else if(Party[0].Triggers.Victoria9 == true){
          $("#ProvinceList").css("display","none");
    $("#MessageHolder").css("display","none");
    $("#Locationtitle").css("display","none");
           $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
             $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : '... Mind if we head to Tommie's? '</div>");
               setTimeout(function () {
      $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Accept'> Sure </button>");

         
         $("#Accept").click(function(){
                 $("#ContinueMessageHolder").html("");
                 $("#CharacterAvatar").html("");
                  $("#App").load("./temp/TommiesVictoria.html");
             
         });
                   }, 500);
               
    }
    else if(Party[0].Triggers.Victoria3 == true){
          $("#ProvinceList").append("<br><button class='MenuButton animated flipInY' id='Pier'>Victoria Pier</button>");
          $("#ProvinceList").append("<br><button class='MenuButton animated flipInY' id='ShoppingDistrict'>Shopping District</button>");
  $("#ProvinceList").append("<br><button class='MenuButton animated flipInY' id='VictoriaParliamentBuilding'>Victoria Parliament Building</button>  ");
      AppendJournal();
    }
    else if (Party[0].Triggers.Victoria2 == true){
    // PLAYER AFTER GETTING PASSPORT
  $("#ProvinceList").append("<br><button class='MenuButton animated flipInY' id='ShoppingDistrict'>Shopping District</button>");
  $("#ProvinceList").append("<br><button class='MenuButton animated flipInY' id='VictoriaParliamentBuilding'>Victoria Parliament Building</button>  ");
  AppendJournal();
} else {
Victoria1();
};
   function  Victoria1(){
if (Party[0].Triggers.Victoria1 == true){
  setTimeout(function () {
    // PLAYER FIRST ENTERS VICTORIA !!
    $("#ProvinceList").css("display","none");
    $("#MessageHolder").css("display","none");
    $("#Locationtitle").css("display","none");
    $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/OldLadyAvatar.png'><div id='StatusMessageHolder'><br>");
    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Old Lady : ' Oh! are you lost?  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
      ClickDialog();
      
      
         }, 2500);
};
               
                };

    
    
    
    
    
    
    //////////////////////////
    
    
    
    
   $("#Journal").click(function () {
        $("#App").load("./temp/Journal.html");
    });
    $("#Battle").click(function () {
        $("#App").load("./temp/Battle.html");
    });
    $("#Pier").click(function () {
        $("#App").load("./temp/PierVictoria.html");
    });
    $("#ShoppingDistrict").click(function () {
        $("#App").load("./temp/ShoppingDistrictVictoria.html");
    });
    
    $("#VictoriaParliamentBuilding").click(function () {
        $("#App").load("./temp/VictoriaParliamentBuilding.html");
    });
    $("#StatusPage").click(function () {
        $("#App").css("display","none")
        CheckOverlay();
        function CheckOverlay(){
            var OverlayChecker = setInterval(function(){ OverlayTimer() }, 100);
            function OverlayTimer(){
        if($("#Overlay").hasClass("Open")){
          //console.log('Open');
        }else{
            clearInterval(OverlayChecker);
            console.clear();
            console.log("Character : ");
             $("#App").css("display","block")
    
            var Character = JSON.parse(localStorage.getItem('_character'));
            console.log(Party[0]);
        };
            }
        };
        $("#Overlay").addClass("Open");
        $("#Overlay").css("z-index","1");
        $("#Overlay").load("./temp/Status.html");
    });
};
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/





/* DIALOG */

// Set Dialog Back to Zero !
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
             {
                Name: " Old Lady  "
                , Dialog: " You seem lost.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/OldLadyAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },             {
                Name: " Old Lady  "
                , Dialog: " 'Where are you trying to get to?'  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest1'> The Parliament Building ? </button><br><button class='MenuButton animated flipInY' id='Confused1'> I don't remember ... </button>   "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/OldLadyAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Old Lady  "
                , Dialog: " Just head down this road a little bit more and the parliament building is on the left! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/OldLadyAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
            {
                Name: " Old Lady  "
                , Dialog: " 'Good Luck !' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Thank you! </button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/OldLadyAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
     
            
            
        , ]
        $("#Next").click(function () {
            var DialogSelect = DialogOrder[DialogOrderNumber]
            var Dialog = " " + DialogSelect.Name + " : ' " + DialogSelect.Dialog + "  ' ";
            console.log('Click');
            console.log(Dialog)
            console.log(DialogOrderNumber);
            DialogOrderNumber++
            if (DialogSelect.Button == "No") {
  
                if (DialogSelect.ChangeCharacter == "No") {
                    $("#Avatar").attr("src", " " + DialogSelect.Avatar + " ")
                    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'>" + Dialog + "<br></div>");
                }
                else {
                     $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='" + DialogSelect.Avatar + "'><div id='StatusMessageHolder'><br>");
                     $("#ContinueMessageHolder").html("");
                    setTimeout(function () {
                        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'>" + Dialog + "<br></div>");
                        $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                         ClickDialog();
                    }, 1500);
                }
                if (DialogSelect.Music != "No" || DialogSelect.Sound != "No") {
                    if (DialogSelect.MusicControl == "Stop") {
                        DialogSelect.Music.pause();
                        DialogSelect.Music.currentTime = 0;
                    }
                    else if (DialogSelect.SoundControl == "Stop") {
                        DialogSelect.Sound.pause();
                        DialogSelect.Sound.currentTime = 0;
                    };
                    if (DialogSelect.MusicControl == "Play") {
                        console.log("Playing " + DialogSelect.Music);
                        DialogSelect.Music.play();
                    }
                    else if (DialogSelect.SoundControl == "Play") {
                        console.log("Playing " + DialogSelect.Sound);
                        DialogSelect.Sound.play();
                    }
                };
            }
            else {

                Dialog = " " + DialogSelect.Name + " :  " + DialogSelect.Dialog + "   ";
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper '>" + Dialog + "</div>");
                DialogOption(DialogSelect);
                $("#ContinueMessageHolder").html("");
            }
        });
    };



        function DialogOption(DialogSelect) {
  
          
            /* DECLINE */
            
            /* ACCEPT */       
          $("#Accept1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : '  No problem at all  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Parliament'> *Head To Parliament Building* </button>");
             $("#Parliament").click(function () {
                 $("#ContinueMessageHolder").html("");
                 $("#CharacterAvatar").html("");
                  $("#App").load("./temp/VictoriaParliamentBuilding.html");
             });
                });
           
            /* HONEST */
          $("#Honest1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : '  Official government business eh ?  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });

            
            /* HOSTILE */


        
            /* CONFUSED */
                 $("#Confused1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : '  Hmm, Well If I was lost then I would go ot the parliament building. They have a lot of information there !  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
            // End of Global Buttons
        }


/////////////