console.clear();
/* Establish All Soung Effects Globally First To Declare Them Later  */
// ~~~ SOUND EFFECTS ~~~ //
var BirdAmbience = new Audio('./sound/BirdAmbience.mp3');
var PaperShuffle = new Audio('./sound/PaperShuffle.mp3');
// ~~~ MUSIC ~~~ //
var MainTheme = new Audio('./music/MainTheme.mp3');
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var ReturningParliament = false;
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));

/* Check Story Progress */
if (Party[0].Triggers.Victoria2 == true){
ReturningParliament = true;
};
console.log("~~~~~Victoria Parliament Building~~~~~~");
if (ReturningParliament == false) {
    VictoriaParliament();
}
else {
    ReturningVictoriaParliament();
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function VictoriaParliament() {
    console.clear();
    console.log("Character :");
    console.log(Party[0]);
    $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
    $("#Overlay").css("opacity", "0.65");
    $("#Overlay").css("background-image", "url(img/VictoriaParliament.jpg)");
    $("#Overlay").css("background-position-x", "770px");
    $("#Overlay").css("background-size", "cover");
    $("#Locationtitle").html(" Victoria Parliament Building, Victoria,  B.C");
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/SecretaryAvatar.png'><div id='StatusMessageHolder'><br>");
    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Secretary : ' Hi! '</div>");
    $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
    ClickDialog();
    // Set Dialog Back to Zero !
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
            {
                Name: " Secretary "
                , Dialog: " 'How can I help you today ?' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest1'> Hi there, I have a meeting with a Jan Levingson? </button><br><button class='MenuButton animated flipInY' id='Hostile1'> Quick! I need to speak to Jan! </button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/SecretaryAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Secretary "
                , Dialog: " Okay, looking here I see that Jan Levingson has an appointment with a " + Party[0].Name + " " + Party[0].FamilyName + "  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/SecretaryAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Secretary "
                , Dialog: "' Are you " + Party[0].Name + " " + Party[0].FamilyName + " ?  ' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'>Yes that is me! </button><br><button class='MenuButton animated flipInY' id='Decline1'> I don't know who that is.. </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/SecretaryAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Stranger "
                , Dialog: " Hey! You new here? "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Stranger "
                , Dialog: " Sorry, I didn't mean to startle you, You just seemed like you were lost.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Ben "
                , Dialog: " My name is Ben  "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Ben "
                , Dialog: " 'My name is Ben' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest2'> Hi Ben, My name is " + Party[0].Name + "  </button><br><button class='MenuButton animated flipInY' id='Hostile2'> Please don't talk to me.. </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Ben "
                , Dialog: " I'm trying to change the way things are done around here, this city needs to be fixed..  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Ben "
                , Dialog: " Sorry.. I didn't mean to get so dramatic. It just pisses me off how these people think they can treat the environment!  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Ben "
                , Dialog: " Did you know.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Secretary "
                , Dialog: " " + Party[0].Name + " ?   "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/SecretaryAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Secretary "
                , Dialog: " Jan will see you now, just right down the hall   "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/SecretaryAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Secretary "
                , Dialog: " 'If you have any questions for me, just let me know! ' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> Thank you ! </button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/SecretaryAvatar.png"
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
                    }, 750);
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
        $("#Decline1").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : '  ..Umm okay let me take a look at some things..  '</div>");
            $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
            ClickDialog();
        });
        /* ACCEPT */
        $("#Accept1").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' Great, why don't you just take a seat over there and I will go and get Jan for you.   '</div>");
            $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
            ClickDialog();
        });
        $("#Accept2").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' No Problem, Good luck " + Party[0].Name + " !   '</div>");
            $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='JanRoom'> *Go To Jan's Room* </button>");
            $("#JanRoom").click(function () {
                $("#ContinueMessageHolder").html("");
                $("#Overlay").css("background-image", "url(img/Office.jpeg)");
                $("#Overlay").css("background-position-x", "770px");
                $("#Overlay").css("background-size", "cover");
                $("#App").load("./temp/JanOffice.html");
            });
        });
        /* HONEST */
        $("#Honest1").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : '  No problem ! Let me see what she has scheduled for today. '</div>");
            $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
            ClickDialog();
        });
        $("#Honest2").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' Nice to meet you " + Party[0].Name + " ! '</div>");
            $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
            ClickDialog();
        });
        /* HOSTILE */
        $("#Hostile1").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' Alright, Let's take a look  '</div>");
            $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
            ClickDialog();
        });
        $("#Hostile2").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' oh, sorry.. I didn't mean to bother you  '</div>");
            $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
            ClickDialog();
        });
        /* CONFUSED */
        // End of Global Buttons
    }
};






function ReturningVictoriaParliament() {
    
    
    
     var Character = JSON.parse(localStorage.getItem('_character'));
    console.clear();
    console.log("Character :");
    console.log(Party[0]);
    $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
    $("#Overlay").css("opacity", "0.65");
    $("#Overlay").css("background-image", "url(img/VictoriaParliament.jpg)");
    $("#Overlay").css("background-position-x", "770px");
    $("#Overlay").css("background-size", "cover");
    $("#Locationtitle").html(" Victoria Parliament Building, Victoria,  B.C");
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/SecretaryAvatar.png'><div id='StatusMessageHolder'><br>");
    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Secretary : ' Hi! '</div>");
    $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
    ClickDialog();
    // Set Dialog Back to Zero !
    var DialogOrderNumber = 0;
    
    
    
    function ClickDialog() {
        DialogOrder = [
             {
                Name: " Secretary "
                , Dialog: " How can I help you "+Party[0].Name+" ? ' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Question11'> What is there to do around here? </button><br><button class='MenuButton animated flipInY' id='Question21'> Can I talk to Jan? </button><br><button class='MenuButton2 animated flipInY' id='Exit'> Leave </button><br></div> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/SecretaryAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
        ]
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
                    }, 750);
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
        $("#Question11").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' Well, There is plenty of stuff to do here in Victoria! . '</div>");
            $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
            $("#Next").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' GO OUTSIDE !!  '</div>");
                 $("#ContinueMessageHolder").html("<button class='DialogNextButton animated flipInX' id='Back'> Back </button>");
                $("#Back").click(function () {
               DialogOrderNumber = 0;
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Secretary : ' Hi! '</div>");
    $("#ContinueMessageHolder").html("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
              
          });
            });
        });
        
        
        
          $("#Question21").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' No I'm sorry "+Party[0].Name+" , Jan is busy right now.. '</div>");
            $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Back'> Back </button>");
          $("#Back").click(function () {
               DialogOrderNumber = 0;
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Secretary : ' Hi! '</div>");
    $("#ContinueMessageHolder").html("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
              
          });
        });
        /* ACCEPT */
  
        /* HONEST */

        /* HOSTILE */
$("#Exit").click(function () {
$("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Goodbye "+Party[0].Name+" ! '</div>");
                $("#ContinueMessageHolder").html("");
                $("#TravelContainer").removeClass("MenuWrapper");
                $("#OverlayContainer").html("<div id='Overlay' class='animated fadeIn'></div>");
                $("#App").load("./temp/Victoria.html");

    
});
        
        
        
        /* CONFUSED */
        // End of Global Buttons
    }
    
    
    
    
};