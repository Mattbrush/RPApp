/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
console.log("~~~~~~~~~~~~~~~~~~~MAIN MENU~~~~~~~~~~~~~~~~~~~")
StartScene();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    /*~~~~~~~~~~~~~~~~~~~~ --------------------- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function StartScene() {
    /* Establish All Soung Effects Globally First To Declare Them Later  */
    // ~~~ SOUND EFFECTS ~~~ //
    var BirdAmbience = new Audio('./sound/BirdAmbience.mp3');
    var PaperShuffle = new Audio('./sound/PaperShuffle.mp3');
    // ~~~ MUSIC ~~~ //
    var MainTheme = new Audio('./music/MainTheme.mp3');
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
       //////// *    ///// Returning after Creating your charatcer profile  *//////
     var Character = JSON.parse(localStorage.getItem('_character'));
    
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/PeaceArch.jpeg)");
        $("#Overlay").css("background-position-x", "770px");
        $("#Overlay").css("background-size", "cover");
        setTimeout(function () {
            $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BorderGuardAvatar.png'><div id='StatusMessageHolder'><br>");
            setTimeout(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Border Guard : ' ... ''</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            }, 500);
        }, 1000);
    
   
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
            {
                Name: " Border Guard "
                , Dialog: " So it says here that your name is "+Character.Name+" eh?"
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: BirdAmbience
                , SoundControl: "Play"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Border Guard "
                , Dialog: " 'Is this correct ?' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Yes. </button><br><button class='MenuButton animated flipInY' id='Decline1'> No, Can I please change that? </button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             ,{
                Name: " Border Guard - Bryan "
                , Dialog: " Now that I know your name, My name is Bryan! "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Border Guard - Bryan "
                , Dialog: "' Alright "+Character.Name+" , Now that we know a little bit about you. What is your purpose into Canada today?' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest1'> To be honest, I think I just want to help in any way I can. </button><br><button class='MenuButton animated flipInY' id='Hostile1'> Does it matter? </button><br><button class='MenuButton animated flipInY' id='Confused1'> I have no idea.. </button>"
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: "Border Guard - Bryan "
                , Dialog: " Well I have to be really careful what I say here. I trust you, I really do, but I can't just let anyone into Canada. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             ,{
                Name: " Border Guard - Bryan "
                , Dialog: " Hmmm, what to do, what to do... "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             ,{
                Name: " Border Guard - Bryan "
                , Dialog: " I know! Let me make a quick phone call to a friend of mine in Victoria "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             ,{
                Name: " Border Guard - Bryan "
                , Dialog: "Hello? Yes,It's Bryan calling. I have a favor to ask you...  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
              ,{
                Name: " Border Guard - Bryan "
                , Dialog: " Well I have a person here named "+Character.Name+" who has no identification but just wants to come into Canada. I figure we should go through the process to confirm of any criminal history or anything..  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
              ,{
                Name: " Border Guard - Bryan "
                , Dialog: " Oh really? Yeah? "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
              ,{
                Name: " Border Guard - Bryan "
                , Dialog: " Well, that works for me! Thanks Jan, I will let "+Character.Name+" know right away  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
              ,{
                Name: " Border Guard - Bryan "
                , Dialog: " Thank you, bye now "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
              ,{
                Name: " Border Guard - Bryan "
                , Dialog: " Okay "+Character.Name+" , You are in luck!  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
              ,{
                Name: " Border Guard - Bryan "
                , Dialog: " It looks like Jan Levingson in Victoria can help you with this, she will just have to go through a quick verification process with you. Shouldn't take too long.  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
              ,{
                Name: " Border Guard - Bryan "
                , Dialog: " You are just going to have to hop on the next BC Ferry over to Vancouver Island and then head to the Victoria Parliament Building ! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             , {
                Name: " Border Guard - Bryan "
                , Dialog: "' How does this all sound to you? ' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest2'> It sounds amazing, thank you so much!  </button><br><button class='MenuButton animated flipInY' id='Hostile2'> What!? I have to go somewhere else? Can't you just let me in? </button><br><button class='MenuButton animated flipInY' id='Confused2'> Where do I go? </button>"
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,{
                Name: " Border Guard - Bryan "
                , Dialog: "Okay, the next boat is leaving soon. If you hurry onto this bus then you can catch it and be in Victoria before lunchtime! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             ,{
                Name: " Border Guard - Bryan "
                , Dialog: " Go now "+Character.Name+" before it is too late! Have fun and give my best to Jan  !"
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             ,{
                Name: " Border Guard - Bryan "
                , Dialog: " 'NEXT!'  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> *Off to the bus* </button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: BirdAmbience
                , SoundControl: "Stop"
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
            $("#Decline1").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Sure thing. Here, take another form and try again.. '</div>");
                $("#ContinueMessageHolder").html("<button class='DialogNextButton animated flipInX' id='Form'> Identification Registration Form </button>");
                $("#Form").click(function () {
                    $("#Overlay").html("");
                    $("#CharacterAvatar").html("");
                    $("#ContinueMessageHolder").html("");
                    $("#Overlay").css("background","white");
                    $("#App").load("/temp/CharacterCreator.html");
                });
                 });
          
            /* ACCEPT */
                $("#Accept1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Great! "+Character.Name+" "+Character.FamilyName+" it is then ! '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
                
                $("#Accept2").click(function () {
                    $("#Overlay").html("");
                    $("#CharacterAvatar").html("");
                    $("#ContinueMessageHolder").html("");
                    $("#Overlay").css("background","white");
                    Character.Triggers.Victoria1 = true;
                     localStorage.setItem('_character', JSON.stringify(Character));
                    $("#App").load("/temp/TravelBus.html");
                });
           
            /* HONEST */
                $("#Honest1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Well there is a good attitude! '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
                $("#Honest2").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Great! I'm glad we have it all sorted then. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
            /* HOSTILE */
                $("#Hostile1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Well, I'm just making sure you aren't a criminal..., Can't be too careul these days! '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
                 $("#Hostile2").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' No, this is the only way. You do want to come into Canada don't you? '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
        
            /* CONFUSED */
          $("#Confused1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Well, that isn't good... '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            $("#Confused2").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Well, I will tell you.. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            // End of Global Buttons
        };
    };
