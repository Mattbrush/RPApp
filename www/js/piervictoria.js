console.clear();




    /* Establish All Soung Effects Globally First To Declare Them Later  */
    // ~~~ SOUND EFFECTS ~~~ //
    var BirdAmbience = new Audio('./sound/BirdAmbience.mp3');
    var PaperShuffle = new Audio('./sound/PaperShuffle.mp3');
    // ~~~ MUSIC ~~~ //
    var MainTheme = new Audio('./music/MainTheme.mp3');
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/



 //var Character = JSON.parse(localStorage.getItem('_character'));
 var Party = JSON.parse(localStorage.getItem('_Party'));
console.log("~~~~~Victoria Pier~~~~~~");
if (Party[0].Triggers.Victoria7 == true){
  $("#App").load("./temp/TutorialBattle3.html");
}else if (Party[0].Triggers.Victoria6 == true){
PierVictoria3();
}else if (Party[0].Triggers.Victoria4 == true){
PierVictoria2();
}else {
PierVictoria();
};
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function PierVictoria3() {
         var Party = JSON.parse(localStorage.getItem('_Party'));
    
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/PierVictoria.jpg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
    $("#Locationtitle").html(" The Pier, Victoria,  B.C");
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Alright! I'm feeling ready for a fight, We can do this "+Party[0].Name+" !  '</div>");
      $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
       ClickDialog();

     
     // Set Dialog Back to Zero !
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
             {
                Name: " Ben "
                , Dialog: " Remember, This is going to be our first time actually battling. We should probably take it a little bit easy at first right? Then we can recover at tommie's afterwards !  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
             {
                Name: " Ben "
                , Dialog: " 'Are you ready to find some infected animals "+Party[0].Name+" ?'    <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept4'> Let's do this ! </button> <br> <button class='MenuButton animated flipInY' id='Decline1'> Not yet.. </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
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
                $("#Decline4").click(function () {
                 $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterAvatar").html("");
                $("#App").load("./temp/Victoria.html");
                });
            /* ACCEPT */       
                 $("#Accept4").click(function () {
                 $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterAvatar").html("");
             var Party = JSON.parse(localStorage.getItem('_Party'));
                localStorage.setItem('_Party', JSON.stringify(Party));
                $("#App").load("./temp/TutorialBattle2.html");
                    
                });
            

           
            /* HONEST */

            /* HOSTILE */

            /* CONFUSED */
       
            
            // End of Global Buttons
        }
    
    
    
};






function PierVictoria2() {
        
    
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/PierVictoria.jpg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
    $("#Locationtitle").html(" The Pier, Victoria,  B.C");
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' I think it's a little too dangerous to come back here right now. Maybe we should go to the Shopping District ?  '</div>");
      $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Accept3'> Okay. </button>");
    
    
     $("#Accept3").click(function () {
                 $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterAvatar").html("");
                $("#App").load("./temp/Victoria.html");
                    
                });
    
    
    
    
};


function PierVictoria() {
   
    console.clear();
    console.log("Character :");
    console.log(Party[0]);

        
     
    
    
    
    
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/PierVictoria.jpg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
    $("#Locationtitle").html(" The Pier, Victoria,  B.C");
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' "+Party[0].Name+" , You made it! '</div>");
      $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
    
    
                ClickDialog();
    
    
    
    
     // Set Dialog Back to Zero !
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
             {
                Name: " Ben "
                , Dialog: " ' Do you think you can help me for a second? '  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Yeah sure </button> <br> <button class='MenuButton animated flipInY' id='Decline1'> Not right now </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " I found this bird yesterday and it is acting strange, I was thinking you could take a look at it maybe? "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
            {
                Name: " Ben "
                , Dialog: " It seems to be effected by that black goop I was telling you about, this is exactly what people like Jan don't want anyone to know about..  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Seagull "
                , Dialog: " ..  "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/Seagull.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " It looks aggresive, It's coming right for you "+Party[0].Name+" !  "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " Look out!  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Seagull "
                , Dialog: " ...Cree!.. "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/Seagull.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Seagull "
                , Dialog: " ...Cree!..<div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> *Fight Seagull* </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/Seagull.png"
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
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Awe dang, okay.. Next time then.. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Leave'> Leave </button>");
               $("#Leave").click(function () {
                    $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterAvatar").html("");
                $("#App").load("./temp/Victoria.html");
               });
                });
            /* ACCEPT */       
            $("#Accept1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Great! Come over here for a second..   '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
                $("#Accept2").click(function () {
                 $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterAvatar").html("");
             var Party = JSON.parse(localStorage.getItem('_Party'));
                localStorage.setItem('_Party', JSON.stringify(Party));
                $("#App").load("./temp/TutorialBattle.html");
                    
                });
            
            

           
            /* HONEST */

            /* HOSTILE */

            /* CONFUSED */
       
            
            // End of Global Buttons
        }
    
    
    
    
    
    
    
    
   
};