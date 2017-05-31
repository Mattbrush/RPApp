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
    if (localStorage.getItem('_character')) {
        ///// Returning after Creating your charatcer profile /////////
        var Character = JSON.parse(localStorage.getItem('_character'));
        var BirdAmbience = new Audio('./sound/BirdAmbience.mp3');
        BirdAmbience.play();
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/PeaceArch.jpeg)");
        $("#Overlay").css("background-position-x", "770px");
        console.log("Character Introduction Cutscene");
        $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BorderGuardAvatar.png'><div id='StatusMessageHolder'></div><br>");
        setTimeout(function () {
            $("#StatusMessageHolder").html("<div class='MenuWrapper animated fadeIn'> Border Guard: ' Ok Friend, so it looks like your name is " + Character.Name + " " + Character.FamilyName + " eh? ' </div>");
            setTimeout(function () {
                $("#StatusMessageHolder").html("<div class='MenuWrapper animated fadeIn'> Border Guard Mark: ' Well my name is Mark and I am the Border Guard here at the Peace Arch in beautful British Columbia !'</div>");
                setTimeout(function () {
                    $("#StatusMessageHolder").html("<div class='MenuWrapper animated fadeIn'> Border Guard Mark: ' We don't seem to have you on record, which is highly strange.. '<br> <div id='DialogOptions'></div></div>");
                    setTimeout(function () {
                        $("#DialogOptions").append("<button class='MenuButton animated flipInY' id='honest'> I don't know how I got here, Isn't there something you can do to help me?</button>")
                        $("#DialogOptions").append("<button class='MenuButton animated flipInY' id='rude'> This is an outrage! I am a Canadian citizen !</button>")
                        $("#DialogOptions").append("<button class='MenuButton animated flipInY' id='apologize'> I'm sorry, I guess I should be going now.. </button>")
                        $("#honest").click(function () {
                            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : ' Hmm, that seems odd. Why wouldn't you know how you got here? Well, anyways, let's see if we can figure something out for you. </div>");
                            setTimeout(function () {
                                TravelOnwards();
                            }, 6000);
                        });
                        $("#rude").click(function () {
                            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : ' Well hey now! That is no way to treat a fellow neighbour " + Chracter.Name + " ! I'm trying to help you out from the goodness of my own heart, cut me some slack! ' </div>");
                            setTimeout(function () {
                                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : ' now you seem like a decent..enough person so I'm going to help you out.' </div>");
                                setTimeout(function () {
                                    TravelOnwards();
                                }, 6000);
                            }, 6000);
                        });
                        $("#apologize").click(function () {
                            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : ' Now don't you worry " + Character.Name + ". We are going to straighten this all out for you. ' </div>");
                            setTimeout(function () {
                                TravelOnwards();
                            }, 6000);
                        });
                    }, 6000);
                }, 6000);
            }, 5500);
        }, 1000);

        function TravelOnwards() {
            var PaperShuffle = new Audio('./sound/PaperShuffle.mp3');
            PaperShuffle.play();
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : ' Give me a few seconds while I look over some documents.. ' </div>");
            setTimeout(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : 'Alright, Good news! Everything seems in order for you " + Character.Name + " ! ' </div>");
                PaperShuffle.pause();
                PaperShuffle.currentTime = 0;
                setTimeout(function () {
                    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : 'We just need you to hop on a ferry and head on over to a city called Victoria. One you get there, you need to go to the Victoria Parliament Building. ' </div>");
                    setTimeout(function () {
                        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : ' I have set up an appointment there with you and a Mrs.Levingson, once you get there she can help you out. ' </div>");
                        setTimeout(function () {
                            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : 'Need anything else from me?' <br> <div id='DialogOptions'></div></div>");
                            setTimeout(function () {
                                $("#DialogOptions").append("<button class='MenuButton animated flipInY' id='honest'> No, thank you for all of your help. I will head to Victoria now! </button>")
                                $("#DialogOptions").append("<button class='MenuButton animated flipInY' id='confused'> How do I get to victoria? I don't know my way around very well.</button>")
                                $("#honest").click(function () {
                                    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : ' Great! Have an amazing time in Victora " + Character.Name + " and I hope I see you again soon!' </div>");
                                    setTimeout(function () {
                                        Victoria();
                                    }, 6000);
                                });
                                $("#confused").click(function () {
                                    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='MenuWrapper animated fadeIn'> Border Guard Mike : ' Don't you worry " + Character.Name + " you will be fine. Just catch the bus from down the street here and the bus driver can get you there. If you get lost on the way just ask someone, people here are very willing to help! Have fun " + Character.Name + " I hope I see you again soon.' </div>");
                                    setTimeout(function () {
                                        Victoria();
                                    }, 15000);
                                });
                            }, 6000);
                        }, 9000);
                    }, 9000);
                }, 6000);
            }, 10000);
        }

        function Victoria() {
            BirdAmbience.pause();
            BirdAmbience.currentTime = 0;
            $("#OverlayContainer").html("<div id='Overlay' class='animated fadeIn'></div>");
            $("#App").load("./temp/App.html");
        }
    }
    else {
        //////// *   FIRST TIME STARTING UP GAME */////////////////
        $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
        $("#Overlay").css("opacity", "0.65");
        $("#Overlay").css("background-image", "url(img/PeaceArch.jpeg)");
        $("#Overlay").css("background-position-x", "770px");
        console.log("Intro Cutscene");
        setTimeout(function () {
            $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/GodAvatar.png'><div id='StatusMessageHolder'><br>");
            setTimeout(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Mysterious Person: ' ... ''</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            }, 500);
        }, 1000);
    };

    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
            {
                Name: "Mysterious Person"
                , Dialog: "Welcome..."
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: MainTheme
                , MusicControl: "Play"
            , }
            , {
                Name: "Mysterious Person"
                , Dialog: "We have been expecting you.."
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Mysterious Person"
                , Dialog: "Canada is in serious trouble and needs a hero like you to help it !"
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Mysterious Person"
                , Dialog: "Pollution, Greed and Corruption at the highest level are swiftly killing the lands, I'm afraid we are running out of time..."
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Mysterious Person"
                , Dialog: "  If we could get you to round up as many followers as possible, we just might have a fighting chance against this plague that has been unleashed to our beautiful country !"
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Mysterious Person"
                , Dialog: "  After all, we are the country that has brought many delights to the world! Poutine, Maple Syrup and even Justin Bieber ! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Mysterious Person"
                , Dialog: "' Will you please help us? ' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'>Let's Go ! </button><br><button class='MenuButton animated flipInY' id='Decline1'> No way!</button></div>"
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }, {
                Name: "Mysterious Person"
                , Dialog: "The others told me that this would never work, we were beginning to have very little faith in humanity..."
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Mysterious Person"
                , Dialog: " I don't have much more time to explain things, I need to get going soon. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Mysterious Person"
                , Dialog: " ' I'm going to leave you alone here with the Border Guard okay? ' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> Alright, I can handle that </button><br><button class='MenuButton animated flipInY' id='Decline2'> You can't leave me here! </button></div> "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             , {
                Name: "Mysterious Person"
                , Dialog: " Alright, I am off! Enjoy your Adventure in Canada, I will be speaking with you again very soon I'm sure. Now go, have fun ! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/GodAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " ...  "
                , Button: "No"
                , ChangeCharacter: "Yes"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: BirdAmbience
                , SoundControl: "Play"
                , Music: MainTheme
                , MusicControl: "Stop"
            , }
             , {
                Name: "Border Guard"
                , Dialog: " So..  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " You are from Canada eh?  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " ...  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             , {
                Name: "Border Guard"
                , Dialog: "But where is your passport?" 
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
             , {
                Name: "Border Guard"
                , Dialog: " 'But where is your passport?' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Honest1'> I'm very sorry, I don't have a passport on me! </button><button class='MenuButton animated flipInY' id='Hostile1'> Where is YOUR passport? How do I even know you are a real border guard? </button><button class='MenuButton animated flipInY' id='Confused1'> Umm, what? </button></div>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " hmm, there has to be a way to identify you...  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " Wait! I know! hold on one second while I look over something..  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: PaperShuffle
                , SoundControl: "Play"
                , Music: "No"
                , MusicControl: "None"
            , }
             , {
                Name: "Border Guard"
                , Dialog: " Hmm, I know it is here somewhere.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " Just a few more papers.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " Almost there..  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " Aha! Here it is, an identification registration form! this will work for now! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: PaperShuffle
                , SoundControl: "Stop"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " Now we just need you to fill this form out as best as you can for now, don't worry if the questions are too hard, we will find out who you are soon enough! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " .. What's wrong? "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BorderGuardAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
            , {
                Name: "Border Guard"
                , Dialog: " 'Oh! You can borrow my pen, here!'  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept3'> Great, thank you. </button> "
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
                console.log("No");
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
                console.log("Yes");
                Dialog = " " + DialogSelect.Name + " :  " + DialogSelect.Dialog + "   ";
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper '>" + Dialog + "</div>");
                DialogOption(DialogSelect);
            }
        });



        function DialogOption(DialogSelect) {
            $("#ContinueMessageHolder").html("");
            // Global Button Commands
            /* DECLINE */
            $("#Decline1").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Mysterious Person : 'Really? Wow, alright then. We will find someone more worthy..' </div>");
                MainTheme.pause();
                MainTheme.currentTime = 0;
                setTimeout(function () {
                    $("#OverlayContainer").html("<div id='CharacterAvatar' class='CharacterAvatar animated fadeOut'<img class='Avatar ' id='Avatar' src='./img/BorderGuardAvatar.png'>></div>")
                    setTimeout(function () {
                        localStorage.clear();
                        location.href = './index.html';
                    }, 2000);
                }, 2000);
            });
            $("#Decline2").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Since when did you become so nervous? Are you sure you are right person for this job? Have no fear, we have very polite Border Guards. Just answer any of the questiosn they ask honestly and you will do great!   '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            });
            /* ACCEPT */
            $("#Accept1").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Really!? You will actually help us? I knew I could count on you. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            });
            $("#Accept2").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Good, I thought you could. Have no fear, we have very polite Border Guards. Just answer any of the questiosn they ask honestly and you will do great! '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            });
            $("#Accept3").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' No worries, just let me know when you are all done! '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Form'> Identification Registration Form </button>");
                $("#Form").click(function () {
                    $("#Overlay").html("");
                    $("#CharacterAvatar").html("");
                    $("#ContinueMessageHolder").html("");
                    $("#Overlay").css("background","white");
                    $("#App").load("/temp/CharacterCreator.html");
                });
                
               
            });
            /* HONEST */
            $("#Honest1").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' That's...unsual. How do we know you are a Canadian Citizen if you do not have a passport? '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            });
            /* HOSTILE */
            $("#Hostile1").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Whoa! No need to get snippy now , I'm only trying to help. Now, how can we prove that you are a Canadian Citizen?  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            });
            /* CONFUSED */
            $("#Confused1").click(function () {
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Are you lost? Here, we need some sort of identification. If you do not have a passport then we must find some other way.. '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
            });
            // End of Global Buttons
        }
    };
}