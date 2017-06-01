console.clear();
StartApp();

function StartApp() {
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    console.clear();
    console.log("Character :");
    console.log(Party[0]);
    $("#Overlay").css("opacity","0.85");
    $("#Message").html(" Let's Go Shopping ! ");
    $("#Locationtitle").html(" Victoria Shopping District ");
    $("#Overlay").css("background-image","url(img/shoppingdistrictvictoria.jpg)");
    $("#StoreList").html("");
    $("#StoreList").css("border-color",""+Party[0].Color+"");
    
    
    
    /* Check Story Progress */
    if (Party[0].Triggers.Victoria3 == true){
            /* Stores Available */
    $("#StoreList").append("<button id='Tommies' class='MenuButton'> Tommie's </button><br><button id='CanadianTire' class='MenuButton'> Canadian Tire </button><br><br><button id='Leave' class='MenuButton2'> Leave </button><br>");
    ////////////////////
    } else {
        /* FIRST TIME IN SHOPPING DISTRICT VICTORIA, MEETING WITH BEN*/
        
          setTimeout(function () {
    // PLAYER FIRST ENTERS VICTORIA !!
    $("#StoreList").css("display","none");
    $("#MessageHolder").css("display","none");
    $("#Locationtitle").css("display","none");
    $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Whoa ?  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
      ClickDialog();
         }, 2000);
        
        
        
/* DIALOG */

// Set Dialog Back to Zero !
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
             {
                Name: " Ben  "
                , Dialog: " '"+Party[0].Name+" right ?' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest1'> Hey Ben ! </button><br><button class='MenuButton animated flipInY' id='Confused1'> Who are you ? </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },  
            {
                Name: " Ben  "
                , Dialog: " I hope Jan didn't scare you too badly back there  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
            {
                Name: " Ben  "
                , Dialog: " She can be pretty intimidating sometimes.. <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest2'> How do you mean? </button><br><button class='MenuButton animated flipInY' id='Confused2'> She seemed fine to me..</button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            ,  
            {
                Name: " Ben  "
                , Dialog: " Jan has been under a lot of pressure, there are some major financial descions being made lately for Victoria and it has been up to her to Pass or Deny each one.  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },  
            {
                Name: " Ben  "
                , Dialog: " and as the environmental crisis rises, it's getting harder for her.. <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Environmental Crisis? </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben  "
                , Dialog: " Recently, some super intensive black substance has been discovered here in Canada. It creates an energy unlike anything else ever seen...  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
            {
                Name: " Ben  "
                , Dialog: " So naturally, it fetches a high price..  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
            {
                Name: " Ben  "
                , Dialog: " It has been an amazing resource for us to ship out from Canada because of it's value, but unfortunately at a huge cost on our environment.. <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> What is the cost? </button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },   {
                Name: " Ben  "
                , Dialog: "I'm pretty sure it is having an effect on the animals here, they seem to be turing aggressive and attacking people !  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }, 
             {
                Name: " Ben  "
                , Dialog: " I have seen like four seagull attacks just this week on the shore! I can't prove it, but something is wrong with this black goop.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }, 
            {
                Name: " Ben  "
                , Dialog: " ... "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
            {
                Name: " Ben  "
                , Dialog: " I'm sorry! I lost my train of thought again. You are new here! You probably just want to go shopping.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },
            {
                Name: " Ben  "
                , Dialog: " There is Tommie's for a good coffee or you could go to Canadian Wheel for some supplies ?  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept3'> Thank you for your help </button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }, {
                Name: " Ben  "
                , Dialog: " If you want to talk again, just meet me at the pier downtown. I have some things I need to do down there.."
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: " Ben  "
                , Dialog: " Anyways, See ya!'   <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept4'> *Head To Shopping District*</button> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
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
  //
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
             $("#Honest1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' You remembered! Glad I didn't scare you off in the parliament building earlier.  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
             $("#Honest2").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Well, with everything going on lately..  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
           
            /* HONEST */
             $("#Accept1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Yes, the newly discovered substance that keeps popping up here in Canada?  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
            $("#Accept2").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Well, I can't prove it yet, but..  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
            $("#Accept3").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' No problem at all, see you around sometime "+Party[0].Name+" !  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
            $("#Accept4").click(function () {
                Party[0].Triggers.Victoria3 = true;
                localStorage.setItem('_character', JSON.stringify(Character));
                localStorage.setItem('_Party', JSON.stringify(Party));
                  $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterAvatar").html("");
                $("#App").load("./temp/ShoppingDistrictVictoria.html");
                });
            
            /* HOSTILE */


        
            /* CONFUSED */
            
             $("#Confused1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Ben, from the parliament building earlier. Remember? '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
            $("#Confused2").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' She can be good at hiding her true intentions.. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
            // End of Global Buttons
        }


/////////////
        
        
        
    }
    //////////////////////////
    
    

    
    
    $("#CanadianTire").click(function () {
        $("#App").load("./temp/CanadianTireVictoria.html");
    });
    $("#Tommies").click(function () {
        $("#App").load("./temp/TommiesVictoria.html");
    });
    $("#Leave").click(function () {
        $("#App").load("./temp/Victoria.html");
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
            console.log("Character :");
             $("#App").css("display","block")
    
            var Party = JSON.parse(localStorage.getItem('_Party'));
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