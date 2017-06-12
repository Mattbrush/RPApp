console.clear();




    /* Establish All Soung Effects Globally First To Declare Them Later  */
    // ~~~ SOUND EFFECTS ~~~ //
    var BirdAmbience = new Audio('./sound/BirdAmbience.mp3');
    var PaperShuffle = new Audio('./sound/PaperShuffle.mp3');
    // ~~~ MUSIC ~~~ //
    var MainTheme = new Audio('./music/MainTheme.mp3');
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var Party = JSON.parse(localStorage.getItem('_Party'));


console.log("~~~~~Jan's Office~~~~~~");
if (Party[0].Triggers.Victoria8 == true){
    JanOffice2();
} else{
    JanOffice();
};




console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


function JanOffice2() {
  //  var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    console.clear();
    console.log("Character :");
    console.log(Party[0]);

        
     
    
    
    
    
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/Office.jpeg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
    $("#Locationtitle").html(" Jan Levingson's Office, Victoria,  B.C");
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/JanAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Jan : ' You two.. '</div>");
      $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
    
    ClickDialog();
    
        
     // Set Dialog Back to Zero !
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
             {
                Name: " Jan "
                , Dialog: " are unbeleivable... "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " Fighting harmless animals at the docks of Victoria !?"
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " Who do you think you are ? "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Ben "
                , Dialog: " Jan! It's not what you think, the animals are infec.. "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " I don't want to hear it Ben, You were on a final warning! I'm sorry but we can't tolerate your behaviour anymore. "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " and you "+Party[0].Name+".. I specifically told you not to do this.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " I don't think you are the person we are looking for to help us with cleaning up this country, I think it's better if you go home.."
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Ben "
                , Dialog: " Shut up! You can talk to me however you want but leave "+Party[0].Name+" out of it. "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Ben "
                , Dialog: " "+Party[0].Name+" has done nothing but care for this place since they got here! It's people like you that are corrupting our land.  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: "How dare you! "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " Come on "+Party[0].Name+", let's get out of here. she isn't worth our time "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Ben "
                , Dialog: " She has clearly given up on trying to help the cause at all "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " Ben.."
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " Let's go "+Party[0].Name+" "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Ben "
                , Dialog: " Let's go "+Party[0].Name+" <div id='DialogOptions'><br><button class='MenuButton animated flipInY' id='Accept4'> Okay.  </button><br><button class='MenuButton animated flipInY' id='Accept3'> But Ben.. </button>"
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
            $("#Accept3").click(function () {
                    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Not Now "+Party[0].Name+" ! We are leaving  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Victoria'> *Back to Victoria* </button>");
                
                  $("#Victoria").click(function () {
                $("#TravelContainer").removeClass("MenuWrapper");
                $("#OverlayContainer").html("<div id='Overlay' class='animated fadeIn'></div>");
                      Party[0].Triggers.Victoria9 = true;
                       localStorage.setItem('_Party', JSON.stringify(Party));
                $("#App").load("./temp/Victoria.html");
                });
                 });
            
            $("#Accept4").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : 'We don't need this  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Victoria'> *Back to Victoria* </button>");
                
                  $("#Victoria").click(function () {
                $("#TravelContainer").removeClass("MenuWrapper");
                $("#OverlayContainer").html("<div id='Overlay' class='animated fadeIn'></div>");
                         Party[0].Triggers.Victoria9 = true;
                       localStorage.setItem('_Party', JSON.stringify(Party));
                $("#App").load("./temp/Victoria.html");
            });
                });
    
            

           
            /* HONEST */
        
            /* CONFUSED */
            
            // End of Global Buttons
        }
    
    
    
    
};

function JanOffice() {
  //  var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    console.clear();
    console.log("Character :");
    console.log(Party[0]);

        
     
    
    
    
    
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/Office.jpeg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
    $("#Locationtitle").html(" Jan Levingson's Office, Victoria,  B.C");
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/JanAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Jan : ' Hi "+Party[0].Name+" ! '</div>");
      $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
    
    
                ClickDialog();
    
    
    
    
     // Set Dialog Back to Zero !
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
             {
                Name: " Jan "
                , Dialog: " So sorry about the wait, this is definitely not how these things normally go down. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " 'Maybe we should just get right down to it then hey?'  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Yes please </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " We have decided to let you stay here in Canada ! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " But I have some concerns.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " Bryan mentioned something about you wanting to fix this country? I couldn't help but notice you talking to Ben outside... "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " 'I just want to make sure you aren't getting in over your head here..'  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest1'> What do you mean? </button> <br> <button class='MenuButton animated flipInY' id='Hostile1'> What does it matter to you ? </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " What's important now is that you are here, take in the sites and enjoy Victoria!"
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " For the time being, we can't really let you go much further than this city but I would say to make the most of your time here "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " While you still can.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " Oh! Before I forget, I need to give you this "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " 'It's a Temporary Passport for you, It includes all of your personal information in case anyone needs it. This should let you go around the city now' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Passport'> *Grab Temporary Passport* </button>"
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Jan "
                , Dialog: " 'Anyways, Thank you for coming in and enjoy th city! Maybe go check out the shopping district? Lots of cool things there !' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> Sounds Great,  thank you. </button>"
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/JanAvatar.png"
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
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Great, so after discussing the situation with Bryan..   '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
            $("#Accept2").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' It was nice meeting you "+Party[0].Name+"  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Victoria'> *Back to Victoria* </button>");
                
                  $("#Victoria").click(function () {
                $("#TravelContainer").removeClass("MenuWrapper");
                $("#OverlayContainer").html("<div id='Overlay' class='animated fadeIn'></div>");
                $("#App").load("./temp/Victoria.html");
            });
                });
            

           
            /* HONEST */
              $("#Honest1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Nothing, I am just trying to keep you safe  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            /* HOSTILE */
              $("#Hostile1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' It isn't me you should be worried about "+Party[0].Name+"   ... '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
        
            /* CONFUSED */
            $("#Passport").click(function () {
                var TemporaryPassport = {
                    Name: "Temporary Passport"
                , IDName: "TemporaryPassport"
                , Avatar: "./img/TemporaryPassport.png"
                , Type: "Key"
                , Index: 0
                    ,Weight: 1
                , Stats: {
                    Health: 0
                , }
                , Worth: 0
                , DropRate: 0.00
                };
                $("#StatusMessageHolder").html("<div class='AlertPlayerText'><div  id='StatusMessage' class='AlertPlayerMessage animated flipInX'><img class='ObtainedItem' src='./img/TemporaryPassport.png'></img><br> Obtained a Temporary Passport</div></div>");
                Party[0].Triggers.Victoria2 = true;
                Party[0].Inventory.push(TemporaryPassport);
             //    localStorage.setItem('_character', JSON.stringify(Character));
                 localStorage.setItem('_Party', JSON.stringify(Party));
                 setTimeout(function () {
                
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' We can give you a permanant passport soon, we just need to give it  a few days first.  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                     
                      }, 3500);
                });
            
            // End of Global Buttons
        }
    
    
    
    
    
    
    
    
   
};