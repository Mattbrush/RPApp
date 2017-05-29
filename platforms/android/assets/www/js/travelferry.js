
console.clear();
console.log("~~~~~~~~~~~FERRY STARTED~~~~~~~~~~");

    /* Establish All Soung Effects Globally First To Declare Them Later  */
    // ~~~ SOUND EFFECTS ~~~ //
    var BirdAmbience = new Audio('./sound/BirdAmbience.mp3');
    var PaperShuffle = new Audio('./sound/PaperShuffle.mp3');
    // ~~~ MUSIC ~~~ //
    var MainTheme = new Audio('./music/MainTheme.mp3');
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


// PP Ferries, Province Pixie


 /* Create Scene */

     var Character = JSON.parse(localStorage.getItem('_character'));
    
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/BCFerryTerminal.jpg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");


///////////////////

StartBus();

function StartBus() {
    $("#LocationTitle").html("B.C Ferry Terminal ");
    $("#TravelContainer").html("<img id='Ferry'></img>");
    
    
    
    
      setTimeout(function () {
            $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BCFerryAttendantAvatar.png'><div id='StatusMessageHolder'><br>");
            setTimeout(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> BC Ferry Administrator : ' Welcome to the B.C Ferries ! '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            }, 500);
        }, 1000);
    
    
    // Set Dialog Back to Zero !
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
             {
                Name: " BC Ferry Administrator "
                , Dialog: " How can I help you today ? "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BCFerryAttendantAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
               {
                Name: " BC Ferry Administrator "
                , Dialog: "'Huh, you seem lost..' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest1'> I don't have any money..  </button><br><button class='MenuButton animated flipInY' id='Hostile1'> Where do I go ? I need to get to Victoria right away! </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BCFerryAttendantAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
            {
                Name: " BC Ferry Administrator "
                , Dialog: " Well, you seem like you have no money. Normally I wouldn't let someone like you on the BC Ferries.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BCFerryAttendantAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }, {
                Name: " BC Ferry Administrator "
                , Dialog: " But.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BCFerryAttendantAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }, {
                Name: " BC Ferry Administrator "
                , Dialog: " 'I'm feeling generous today, I'm going to let you ride it for free today. Just don't tell anybody okay?' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Thank you very much!  </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BCFerryAttendantAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }, {
                Name: " BC Ferry Administrator "
                , Dialog: "' Enjoy your stay in Victoria, thank you for using the BC Ferries'  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> Thanks again! </button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BCFerryAttendantAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            
            
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
                                      
                    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Alright, There goes the ferry now! Hurry up and get on it before it's gone! </div>");
                    $("#ContinueMessageHolder").html("<button class='DialogNextButton animated flipInX' id='FerryGo'> *Get On Ferry* </button>");
                    $("#FerryGo").click(function (){
                         $("#ContinueMessageHolder").html("");
                  $("#StatusMessageHolder").html("");
                  $("#TravelContainer").addClass("MenuWrapper");
                   $("#CharacterAvatar").html("");
                   $("#TravelContainer").html("<img id='Ferry' src='./img/FerryMoving.gif'></img>");
                    $("#Overlay").css("background-image", "url(img/OceanBattleBackground.gif)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
                     setTimeout(function () {
                         $("#TravelContainer").removeClass("MenuWrapper");
                          $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BCFerryAttendantAvatar.png'><div id='StatusMessageHolder'><br>");
                        $("#TravelContainer").html("<img id='Ferry' src=''></img>"); 
                         $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Alright, We are here. Everyone off the boat! '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                         $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/BritishColumbiaVictoria.jpg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
                ClickDialog();
                          }, 7500);
                   })  
                    

                });
            
            
            $("#Accept2").click(function () {
                $("#TravelContainer").removeClass("MenuWrapper");
                $("#OverlayContainer").html("<div id='Overlay' class='animated fadeIn'></div>");
                $("#App").load("./temp/Victoria.html");
                });
           
            /* HONEST */
              $("#Honest1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : '  Well, that is a shame, usually this ferry requires money.. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });

            
            /* HOSTILE */
            $("#Hostile1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Calm down, I'm sure we can arrange that.. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });

        
            /* CONFUSED */
            
            
            // End of Global Buttons
        }
    };
    
    
    
    
    
