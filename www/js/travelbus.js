
console.clear();
console.log("~~~~~~~~~~~BUS STARTED~~~~~~~~~~");

    /* Establish All Soung Effects Globally First To Declare Them Later  */
    // ~~~ SOUND EFFECTS ~~~ //
    var BirdAmbience = new Audio('./sound/BirdAmbience.mp3');
    var PaperShuffle = new Audio('./sound/PaperShuffle.mp3');
    // ~~~ MUSIC ~~~ //
    var MainTheme = new Audio('./music/MainTheme.mp3');
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/





 /* Create Scene */

     var Character = JSON.parse(localStorage.getItem('_character'));
    
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/BusStop.jpg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");


///////////////////

StartBus();

function StartBus() {
    $("#LocationTitle").html(" Bus To B.C Ferries ");
    $("#TravelContainer").html("<img id='Bus'></img>");
    
    
    
    
      setTimeout(function () {
            $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BusDriverAvatar.png'><div id='StatusMessageHolder'><br>");
            setTimeout(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Bus Driver : ' That will be a twoonie and a quarter.. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            }, 500);
        }, 1000);
    
    
    
      var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
            {
                Name: " Bus Driver "
                , Dialog: " 'Huh, What's up?'  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest1'> I don't have any money .. </button><br><button class='MenuButton animated flipInY' id='Hostile1'> Are you having a stroke? </button><br><button class='MenuButton animated flipInY' id='Confused1'> What is a twoonie.. </button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BusDriverAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }, {
                Name: " Bus Driver "
                , Dialog: " Alright, everyone ready? Let's get this show on the road! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BusDriverAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Bus Driver "
                , Dialog: " 'Next Stop, B.C Ferry Terminal!'  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Let's Go ! </button></div>"
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BusDriverAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Bus Driver "
                , Dialog: " And You! Next time you are catching a bus, make sure to have some money on you!"
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BusDriverAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             , {
                Name: " Bus Driver "
                , Dialog: " ' Got it ?'  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> Yes sir.. </button></div>"
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BusDriverAvatar.png"
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
                 $("#ContinueMessageHolder").html("");
                  $("#StatusMessageHolder").html("");
                  $("#TravelContainer").addClass("MenuWrapper");
                   $("#CharacterAvatar").html("");
                   $("#TravelContainer").html("<img id='Bus' src='./img/BusMoving.gif'></img>");
                  $("#Overlay").css("background-image", "url(img/road.gif)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
                     setTimeout(function () {
                         $("#TravelContainer").removeClass("MenuWrapper");
                          $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BusDriverAvatar.png'><div id='StatusMessageHolder'><br>");
                        $("#TravelContainer").html("<img id='Bus' src=''></img>"); 
                         $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Alright, We are here. Everyone off the bus! '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                         $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/BCFerryTerminal.jpg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
                ClickDialog();
                          }, 7500);
                });
            
            $("#Accept2").click(function () {
                        $("#TravelContainer").html("<img id='Bus' src=''></img>");  
                         $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Alright, Everyone hurry and catch your ferry! '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Ferry'> *Head to ferry terminal* </button>");
                
                $("#Ferry").click(function () {
                    $("#Overlay").html("");
                    $("#CharacterAvatar").html("");
                    $("#ContinueMessageHolder").html("");
                    $("#Overlay").css("background","white");
                    $("#App").load("/temp/TravelFerry.html");
                });
                });

            

           
            /* HONEST */
              $("#Honest1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Wow, just get on the bus.. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });

            
            /* HOSTILE */
            $("#Hostile1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Think you are funny eh? Get on the bus.. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });

        
            /* CONFUSED */
            $("#Confused1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Look, I don't got all day. Just get on the bus and let other paying customers get on too. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });

            // End of Global Buttons
        }
    };
    
    
    
    
    
