////////////// Table Of Contents////////////
// ~~~~~ 1  Creating Objects
// ~~~~~ 2 Battle Functions
// ~~~~~ 3 Win/Loss Conditions/Functions
// ~~~~~ 4 Misc.
////////////////////////////////////////////
console.clear();
console.log("~~~~~~~~~~~BATTLE STARTED~~~~~~~~~~");
InitializeBattle();

function InitializeBattle() {
    /* ~~~~~~~~~~~~
        
        ELEMETNAL CHART CHECKER :D
        
        8 Biome
        
        Temporary Biome Elements
        
        Basic Attack - Physical
        
        
        
        Mountain  
        STRENGTH: Boreal Forest,Desert---
        WEAKNESS SaltWater,Freshwater----
        
        SaltWater
        STRENGTH: Mountain, Desert---
        WEAKNESS Boreal Forest, Deciduous Forest----
        
        Freshwater
            STRENGTH: Mountain, Deciduous Forest
        WEAKNESS Tundra, Desert----
        
        Deciduous Forest
            STRENGTH: SaltWater, Tundra
        WEAKNESS Grassland   Freshwater
        
        Boreal Forest
            STRENGTH: SaltWater, Tundra------
        WEAKNESS Grassland, Mountain-----
        
        Grassland
            STRENGTH: Boreal Forest, Deciduous Forest-----
        WEAKNESS Tundra,Desert------
        
        Tundra
            STRENGTH: Grasslands Freshwater
        WEAKNESS Boreal Forest, Deciduous Forest
        
        Desert
            STRENGTH: Grasslands , Freshwater-----
        WEAKNESS SaltWater, Mountain ------
        
        
        
        
        
        
        
        
        
        
        
        
           ***** THIS IS A  TUTORIAL BATTLE WITH BEN, BEN WILL BE SHOWING THE PLAYER HOW TO PROPERLY FIGHT AN ENEYM WITH BASIC ATTACKS. THERE WILL BE ANOTHER TUTORIAL LATER ON THAT WILL HANDLE SPELLS AND PARTY MEMBERS BUT THIS ONE IS AS BASIC AS IT GETS. AFTER THE BATTLE FINISHES, THE PLAYER WILL RECEIVE SOME SEAWEED AS WELL AS GAIN A LEVEL. BEN WILL BE EXCITED AND TAKE THE PLAYER TO THE SHOPPING DISTRICT TO SELL THE ITEMS AND SHOW OFF THE ARMOUR AND WEAPONS SECTION OF THE GAME. *******
           
           
           
           
           
        
        
        
        
        */
    //var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    $("#Player").css("background", "" + Party[0].Color + "");
    $("#OverlayContainer").html("<div id='Overlay' class='animated fadeIn'></div>")
    $("#Overlay").css("opacity", "0.65");
    $("#Overlay").css("background-image", "url(img/PierVictoria.jpg)");
    $("#Overlay").css("background-position-x", "770px");
    $("#Overlay").css("background-size", "cover");
    ////// ENEMY CREATOR /////
    var Enemies = [

            {
                Name: 'Seagull'
                , Avatar: "./img/Seagull.png"
                , Type: "Mountain"
                , SpawnRate: 0.99
                , Strength1: "Boreal Forest"
                , Strength2: "Desert"
                , Weakness1: "Saltwater"
                , Weakness2: "Freshwater"
                , Color: "#D7ACAC"
                , Stats: {
                    Health: Math.floor(Math.random() * 4) + 2
                    , Attack: Math.floor(Math.random() * 2) + 1
                    , Defense: Math.floor(Math.random() * 0) + 0
                    , Magic: 0
                    , Vitality: Math.floor(Math.random() * 2) + 0
                    , Accuracy: Math.floor(Math.random() * 0.96) + 0.80
                , }
                , Loot: [{
                    Name: "Seaweed"
                    , IDName: "Seaweed"
                    , Avatar: "./img/Seaweed.png"
                    , Type: "Misc"
                    , Index: 0
                    , Weight: 1
                    , Stats: {}
                    , Worth: 2
                    , DropRate: .01
                }, ]
                , MoveSet: [

                    {
                        Name: "Spray"
                        , Type: "Element"
                        , Index: 0
                        , Stats: {
                            Damage: Math.floor(Math.random() * 2) + 1
                            , Element: "Mountain"
                        , }
                    , }
                    , {
                        Name: "Air Swipe"
                        , Type: "Attack"
                        , Index: 0
                        , Stats: {
                            Damage: Math.floor(Math.random() * 3) + 1
                            , Element: "None"
                        }
                }

            ]
                , Earnings: {
                    Total: Math.floor(Math.random() * 8) + 2
                , }
                , Experience: {
                    ExperienceEarned: Math.floor(Math.random() * 15) + 2
                , }
                , RunStat: 300
            , }

]
        ////////////////// /////
    console.log("Available Enemies : ");
    for (i = 0; i < Enemies.length; i++) {
        console.log(Enemies[i]);
    };
    console.log(Party[0]);
    /* Star tAnimation For Battle ? */
    BattleAnimation();

    function BattleAnimation() {
        $("#App").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
        $("#App").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
        $("#AlertPlayerMessage").html("<div class='animated bounceIn  AlertPlayerText' id='StatusMSG'> Enemy Approaching ! </div>");
        $("#AlertPlayerMessage").append("<img id='Transition' class='width75' src='./img/BattleTransition.gif'></img>");
            StartBattle(Party[0])

    };
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~ Battle Functions    /2/~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function StartBattle() {
       
        /* Randomize The Enemy Encounter */
        EnemyPicker();

        function EnemyPicker() {
            var PickingEnemy = Math.random().toFixed(2);
            var Enemy = Enemies[Math.floor(Math.random() * Enemies.length)];
            console.log(PickingEnemy)
            console.log(Enemy.SpawnRate)
            if (Enemy.SpawnRate > PickingEnemy) {
                Enemy = Enemy;
                CreateBattle(Enemy);
            }
            else {
                console.log("Picking Again")
                EnemyPicker();
            };
        };

        function CreateBattle(Enemy) {
            console.log("Current Enemy :")
            console.log(Enemy)
            Enemy.Stats.Health = Enemy.Stats.Health + Enemy.Stats.Vitality;
            var TempHealth = Enemy.Stats.Health;
            /* Change Status */
            $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>A " + Enemy.Name + " Approaches </div>");
            $("#Transition").css("display:", "none");
            /* Enemy Animation ? */
            /*Create Battle Scene*/
            if (Enemy.Type == 'Saltwater') {
                //    $("#Overlay").css("background-image","url(img/OceanBattleBackground.gif)");
                $("#Enemy").css("background-image", "url(img/OceanBattleBackground.gif)");
            }
            else if (Enemy.Type == 'Mountain') {
                //    $("#Overlay").css("background-image","url(img/MountainBattleBackground.gif)");
                $("#Enemy").css("background-image", "url(img/MountainBattleBackground.gif)");
            };
            $("#Enemy").html("<br><div class='SubMainTitle' id='EnemyName'>" + Enemy.Name + "</div><br><div class='SubSubMainTitle' id='EnemyHealth'>Health : " + TempHealth + " / " + Enemy.Stats.Health + "</div><br><img id='EnemyAvatar'>")
            $("#EnemyAvatar").css("border-color", Enemy.Color);
            $("#EnemyAvatar").attr("src", "" + Enemy.Avatar + "");
            $("#Player").html("<div class='SubMainTitle' id='PlayerName'>" + Party[0].Name + " " + Party[0].FamilyName + "</div><br><div class='HealthMainTitle' id='PlayerHealth'>Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "</div></div><br><div class='ManaMainTitle'  id='PlayerMana'>Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value + "</div><br><div class='XPMainTitle'  id='PlayerXP'>XP : " + Party[0].Experience.Total + " / " + Party[0].Experience.ToNextLevel + "</div>");
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            //Update HealthBars
            $("#HealthBar").css("width", "100%");
            /* Activate Turn Decider */
            setTimeout(function () {
                /* LEAVES initial battle Setup and head into the turn chooser.*/
                //  $("#App").css("opacity",".3");
                // Sets up the Charatcer Talking Environment
                $("#App").prepend("<div class='CharacterMessageContainer' id='CharacterMessageContainer'><div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div></div>")
                // Remove BattleAnimation
                 $("#OverlayBlanket").remove();
                 $("#AlertPlayerMessage").remove();
                
                    // Sets up the character themselves and their dialog
                $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' " + Party[0].Name + " , Are you okay!  That Seagull is trying to fight you !? '</div>");
                // Sets up the continue button and the clikcDialog function to move on to the next conversation spot //
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                // Dialog Functionality to Continue process : //
                // Set Dialog Back to Zero !
                var DialogOrderNumber = 0;

                function ClickDialog() {
                    DialogOrder = [
                        {
                            Name: " Ben "
                            , Dialog: " I knew it! I knew this stuff was making the animals aggressive!  "
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
                            , Dialog: " " + Party[0].Name + ", I know you don't want to hear this...  "
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
                            , Dialog: " .. but you are going to have to fight this Seagull!  "
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
                            , Dialog: "Dont worry! I can show you how !  "
                            , Button: "No"
                            , ChangeCharacter: "No"
                            , Avatar: "./img/BenAvatar.png"
                            , Sound: "No"
                            , SoundControl: "None"
                            , Music: "No"
                            , MusicControl: "None"
                        , }, {
                            Name: " Ben "
                            , Dialog: " ' What do you think ? '  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Let's do this! </button> <br> <button class='MenuButton animated flipInY' id='Decline1'> Are you crazy !? </button>  "
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
                            , Dialog: " It's not like we are going to kill the bird or anything, We just need to fight it off to get this aggression out of it!  "
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
                            , Dialog: " Okay, so when a battle starts like this..  "
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
                            , Dialog: " It will either be You attacking the Enemy first or the Enemy attacking you First. Got it?  "
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
                            , Dialog: " Looks like it surprised you.. so It will be attacking you first.<br> <button class='MenuButton animated flipInY' id='Accept2'> okay.. </button>  "
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
                            , Dialog: "Now it's time for you to show this Seagull who is the boss! "
                            , Button: "No"
                            , ChangeCharacter: "No"
                            , Avatar: "./img/BenAvatar.png"
                            , Sound: "No"
                            , SoundControl: "None"
                            , Music: "No"
                            , MusicControl: "None"
                        , }
        , , ]
                    $("#Next").click(function () {
                        var DialogSelect = DialogOrder[DialogOrderNumber]
                        var Dialog = " " + DialogSelect.Name + " : ' " + DialogSelect.Dialog + "  ' ";
                     //   console.log('Click');
                   //     console.log(Dialog)
                   //     console.log(DialogOrderNumber);
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
                                }, 1000);
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
                        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' No no It's not what you think  '</div>");
                        $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                        ClickDialog();
                    });
                    /* ACCEPT */
                    $("#Accept1").click(function () {
                        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' Yes! I like your spirit " + Party[0].Name + " !  '</div>");
                        $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                        ClickDialog();
                    });
                    $("#Accept2").click(function () {
                        $("#StatusMessageHolder").html("");
                        $("#ContinueMessageHolder").html("");
                        $("#CharacterMessageContainer").remove();
                        EnemyTurn(Enemy,  TempHealth);
                    });
                }
                ////// END OF DIALOG FUNCTIONALITY /////////
            }, 3000);
        }; // End of CreateBattel()
    }; // End of StartBattle()
    /////////////////////////////////////////////
    //////////////////// ENEMY TURN   //////////////////////////
    function EnemyTurn(Enemy, TempHealth) {
        var Character = JSON.parse(localStorage.getItem('_character'));
        var Party = JSON.parse(localStorage.getItem('_Party'));
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button class='MenuButtonDisabled' disabled id='Attack'>Attack</button><button class='MenuButtonDisabled' disabled id='Items'>Items</button><button class='MenuButtonDisabled' id='Status' disabled>Status</button><button class='MenuButtonDisabled' disabled id='SpellsAttack'>Spells</button><br><button class='MenuButtonDisabled' disabled id='Run'>Run Away</button></div>");
        $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='StatusMSG'>It is now " + Enemy.Name + "'s Turn </div>");
        setTimeout(function () {
            EnemyMove(Enemy,  TempHealth);
        }, Party[0].PlayerTextSpeed);
    };

    function EnemyMove(Enemy, TempHealth) {
        var RunChance = Enemy.Stats.Health / 5;
        if (TempHealth < RunChance) {
            var ScaredChecker = Math.random() * 1000;
            console.log("ScaredChecker Need to be lower than " + Enemy.RunStat + " :")
            console.log(ScaredChecker)
            if (ScaredChecker <= Enemy.RunStat) {
                $("#MessageHolder").html("<h4 class='animated shake  Message' id='StatusMSG'>" + Enemy.Name + " is Scared of You! </div>");
                setTimeout(function () {
                    $("#MessageHolder").html("<h4 class='animated hinge  Message' id='StatusMSG'>" + Enemy.Name + " Has Run Away!? </div>");
                    setTimeout(function () {
                        BattleRunAway();
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            }
            else {
                $("#MessageHolder").html("<h4 class='animated shake  Message' id='StatusMSG'>" + Enemy.Name + " is Scared of You! </div>");
                setTimeout(function () {
                    $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'>" + Enemy.Name + " Continues the fight anyway! </div>");
                    setTimeout(function () {
                        EnemyAttack(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            };
        }
        else {
            EnemyAttack(Enemy, TempHealth);
        };

        function EnemyAttack(Enemy,  TempHealth) {
            /* ENEMY ATTACKS */
            EnemyAttackChoice(Enemy, TempHealth);
        };
    };
    //////////////////// PLAYER TURN //////////////////////////
    function PlayerTurn(Enemy, TempHealth) {
        /* Setting Up Party */
        var Party = JSON.parse(localStorage.getItem('_Party'));
        
        console.log(Party[0].Stats[0].Value)
        
        
        //////////////////////////////
        $("#PlayerHealth").html("Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value + "");
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button class='MenuButton' id='Attack'>Attack</button><button class='MenuButtonDisabled' disabled id='Items'>Items</button><button class='MenuButtonDisabled' disabled id='Status'>Status</button><button class='MenuButtonDisabled' disabled id='SpellsAttack'>Spells</button><br><button class='MenuButtonDisabled' disabled id='Run'>Run Away</button></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>It is now " + Party[0].Name + "'s Turn </div>");
        $("#Run").click(function () {
            $("#MessageHolder").html("<div class='animated pulse  Message' id='StatusMSG'>Are You Sure You Want To Run Away? </div>");
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            $("#OptionsHolder").html("<button  class='MenuButton animated bounceIn' id='Run'>Run Away</button><br><button class='MenuButton animated bounceIn'  id='RBack'>Back</button>");
            $("#Run").click(function () {
                /*RunChance Moment*/
                var RunAwayChance = Math.floor(Math.random() * 10) + 1;
                var EnemyStopChance = (Enemy.Stats.Accuracy * 10);
                if (RunAwayChance > EnemyStopChance) {
                    $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Party[0].Name + " Ran Away Safely </div>");
                    setTimeout(function () {
                        BattleRunAway();
                    }, Party[0].PlayerTextSpeed);
                }
                else {
                    $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                    $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='StatusMSG'> " + Party[0].Name + " could not release from the " + Enemy.Name + "'s grasp! </div>");
                    setTimeout(function () {
                        EnemyTurn(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }
            });
            $("#RBack").click(function () {
                PlayerTurn(Enemy,TempHealth);
            });
        });
        $("#SpellsAttack").click(function () {
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            for (i = 0; i < 4; i++) {
                //  console.log(Party[0].Spells[i])
                if (Party[0].Spells[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton' id='" + i + "'>" + Party[0].Spells[i].Name + "</button>");
                }
                else if (Party[0].Spells.length == 0) {
                    $("#OptionsHolder").html("<div class='MenuWrapper' id='" + i + "'> No spells learned, Go learn some spells ! </div>");
                }
                else {
                    $("#OptionsHolder").append("<button class='MenuButtonDisabled' id='" + i + "'> No Spell Available </button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (Party[0].Spells[index].Stats.Cost > Party[0].Stats[7].Value) {
                        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>" + Party[0].Name + " Doesn't Have Enough Mana! </div>");
                    }
                    else {
                        $("#OptionsHolder").html("");
                        $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + Party[0].Spells[index].Name + " will do " + Party[0].Spells[index].Stats.Damage + " damage and cost " + Party[0].Spells[index].Stats.Cost + " MP </div><br>  <button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='SpellBack'> Back </button> ");
                        $("#Accept").click(function () {
                            $("#OptionsHolder").html("");
                            var ElementStrength = 0;
                            if (Party[0].Spells[index].Stats.Element == Enemy.Weakness1 || Party[0].Spells[index].Stats.Element == Enemy.Weakness2) {
                                var ElementStrength = 1.25;
                            }
                            else if (Party[0].Spells[index].Stats.Element == Enemy.Strength1 || Party[0].Spells[index].Stats.Element == Enemy.Strength2) {
                                var ElementStrength = 0.75;
                            }
                            else if (Party[0].Spells[index].Stats.Element == Enemy.Type) {
                                var ElementStrength = 0.65;
                            }
                            else {
                                var ElementStrength = 1;
                            };
                            var CritcalChance = Math.floor((Math.random() * 10) + 1);
                            var DidCriticalHit = false;
                            var UsedMagic = true;
                            var Move = "";
                            Party[0].Stats[7].Value = Party[0].Stats[7].Value - Party[0].Spells[index].Stats.Cost;
                            FullAttack = Math.round(Party[0].Spells[index].Stats.Damage * ElementStrength);
                            if (ElementStrength == 1.25) {
                                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Party[0].Name + " Attacks at " + Enemy.Name + "'s Weakness so " + Party[0].Spells[index].Name + "  did an insane  " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }
                            else if (ElementStrength == 0.75) {
                                $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'> " + Party[0].Name + " Attacks at " + Enemy.Name + "'s Strength so " + Party[0].Spells[index].Name + " only did  " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }
                            else if (ElementStrength == 1) {
                                $("#MessageHolder").html("<h4 class='animated flash  Message' id='StatusMSG'> " + Party[0].Name + " Used " + Party[0].Spells[index].Name + " And Does " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }
                            else if (ElementStrength == 0.65) {
                                $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'> " + Party[0].Name + " Attacks at " + Enemy.Name + "'s same type so " + Party[0].Spells[index].Name + " barely effected it with   " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }

                            function SpellMoveOn() {
                                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                                var Spell = Party[0].Spells[index]
                                    // Move To Universal Damage Function //
                                setTimeout(function () {
                                    EnemyLosesHealth(Enemy,TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
                                }, Party[0].PlayerTextSpeed);
                            }
                        });
                        $("#SpellBack").click(function () {
                            PlayerTurn(Enemy, TempHealth);
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounceIn' id='SBack'> Back </button>");
            $("#SBack").click(function () {
                PlayerTurn(Enemy,  TempHealth);
            });
        });
        $("#Status").click(function () {
            $("#Overlay").css("opacity", "1");
            CheckOverlay();
            ///////* Timer Set to check for changes done on an Overlay Page!!!! VERY IMPORTANTAY ********//////////
            function CheckOverlay() {
                var OverlayChecker = setInterval(function () {
                    OverlayTimer()
                }, Party[0].PlayerTextSpeed);

                function OverlayTimer() {
                    if ($("#Overlay").hasClass("Open")) {}
                    else {
                        clearInterval(OverlayChecker);
                        var Character = JSON.parse(localStorage.getItem('_character'));
                        $("#Overlay").css("opacity", ".5");
                        $("#Player").html("<div class='SubMainTitle' id='PlayerName'>" + Party[0].Name + " " + Party[0].FamilyName + "</div><br><div class='HealthMainTitle' id='PlayerHealth'>Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "</div></div><br><div class='ManaMainTitle'  id='PlayerMana'>Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value + "</div><br><div class='XPMainTitle'  id='PlayerXP'>XP : " + Party[0].Experience.Total + " / " + Party[0].Experience.ToNextLevel + "</div>");
                        console.log("After Character")
                        console.log(Party[0])
                    };
                }
            };
            $("#Overlay").addClass("Open");
            $("#Overlay").css("z-index", "1");
            $("#Overlay").load("./temp/Status.html");
        });
        $("#Items").click(function () {
            $("#MessageHolder").html("<span class'MenuWrapper'> Party Inventory : </span>")
            $("#OptionsHolder").html("");
            $("#OptionsHolder").removeClass("MenuWrapper")
            $("#OptionsHolder").addClass("BattleItemMenuWrapper");
            ListItems();

            function ListItems() {
                for (i = 0; i < Party[0].Inventory.length; i++) {
                    console.log(Party[0].Inventory[i])
                        // ITEM Menu Selection //
                    $("#OptionsHolder").append("<div class='BattleItemSlot'><input class='BattleItem animated bounceIn' type='image' src='" + Party[0].Inventory[i].Avatar + "' id='" + i + "'>" + Party[0].Inventory[i].Name + "</input></div>");
                    $("#" + i + "").click(function () {
                        // Using ITEMS //
                        var index = this.id;
                        console.log(Party[0].Inventory[this.id].Name);
                        var Item = Party[0].Inventory[index]
                        $("#OptionsHolder").html("<div>Do You Want To Use " + Party[0].Inventory[index].Name + " ?</div><br><button class='MenuButton animated bounceIn' id='Accept'> Yes </button><button class='MenuButton animated bounceIn' id='Deny'> No </button>");
                        $("#Accept").click(function () {
                            WhichCharacter(Item, index);
                        });
                        $("#Deny").click(function () {
                            $("#OptionsHolder").html("");
                            ListItems();
                        });

                        function WhichCharacter(Item, index) {
                            console.log(Item);
                            $("#OptionsHolder").html("<span class'animated fadeIn'>Which Character Would You Like To Use " + Party[0].Inventory[index].Name + " On?</span><br><div id='PartyList'></div>");
                            for (e = 0; e < Party.length; e++) {
                                $("#PartyList").append("<button class='MenuButton aniamted bounceIn' id='" + index + e + "'>" + Party[e].Name + "</button>");
                                $("#" + index + e + "").click(function () {
                                    if (Item.Type == "Status") {
                                        // If Item is a STATUS ITEM  i.e Potion or Elixir
                                        // console.log("Healed  By " + Item.Stats.Health + " HP")
                                        // If It Goes OVER AMOUNT NEEDED
                                        if (Party[this.id.substr(1, 1)].Stats[0].Value + Item.Stats.Health > Party[this.id.substr(1, 1)].Stats[6].Value) {
                                            Party[this.id.substr(1, 1)].Stats[0].Value = Party[this.id.substr(1, 1)].Stats[6].Value;
                                        }
                                        // If IT IS ALL NEEDED
                                        else if (Party[this.id.substr(1, 1)].Stats[7].Value + Item.Stats.Mana > Party[this.id.substr(1, 1)].Stats[8].Value) {
                                            Party[this.id.substr(1, 1)].Stats[7].Value = Party[this.id.substr(1, 1)].Stats[8].Value;
                                        }
                                        else {
                                            Party[this.id.substr(1, 1)].Stats[7].Value = Party[this.id.substr(1, 1)].Stats[0].Value + Item.Stats.Mana;
                                        };
                                        $("#OptionsHolder").html("<div class='animated flipInX StatusMessage'><span>Are you sure you want to use a " + Party[0].Inventory[index].Name + " on " + Party[this.id.substr(1, 1)].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
                                        var Name = this.id.substr(1, 1);
                                        localStorage.setItem('_Name', JSON.stringify(Name));
                                        $("#Yes").click(function () {
                                            // Are You Sure Statements...  Allows players to back out form this if need be.
                                            var Name = JSON.parse(localStorage.getItem('_Name'));
                                            if (Item.Stats.Health == 0) {
                                                $("#OptionsHolder").html("<div class='animated tada StatusMessage'>Restored " + Party[Name].Name + "'s Mana by " + Item.Stats.Mana + " MP </div>");
                                            }
                                            else if (Item.Stats.Mana == 0) {
                                                $("#OptionsHolder").html("<div class='animated tada StatusMessage'>Healed Up " + Party[Name].Name + " By " + Item.Stats.Health + " HP </div>");
                                            };
                                            Party[0].Inventory.splice(index, 1);
                                            Character = Party[0];
                                            localStorage.setItem('_character', JSON.stringify(Character));
                                            localStorage.setItem('_Party', JSON.stringify(Party));
                                            setTimeout(function () {
                                                $("#InventoryDialog").html("");
                                                PlayerTurn(Enemy, TempHealth);
                                            }, Party[0].PlayerTextSpeed);
                                        });
                                        $("#No").click(function () {
                                            $("#OptionsHolder").html("");
                                            $("#InventoryContainer").html("");
                                            $("#InventoryDialog").html("");
                                            PlayerTurn(Enemy, TempHealth);
                                        });
                                    }
                                    else if (Item.Type == "Misc") {
                                        $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated rubberBand'>You Can't Use A " + Item.Name + " On " + Party[this.id.substr(1, 1)].Name + " ? What are you even thinking? It has no effect...</div>");
                                        setTimeout(function () {
                                            PlayerTurn(Enemy, TempHealth);
                                        }, Party[0].PlayerTextSpeed );
                                    }
                                    else if (Item.Type == "Spell") {
                                        if (Party[0].Spells.length == 4) {
                                            $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated jello'> " + Party[this.id.substr(1, 1)].Name + " Has no more room for spells, Maybe another party member? </div>");
                                        }
                                        else {
                                            $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated tada'>Taught " + Item.Name + " To " + Party[this.id.substr(1, 1)].Name + " !</div>")
                                            localStorage.setItem('_thisID', JSON.stringify(this.id));
                                            setTimeout(function () {
                                                var ThisId = JSON.parse(localStorage.getItem('_thisID'));
                                                Party[ThisId.substr(1, 1)].Spells.push(Item);
                                                $("#OptionsHolder").html("");
                                                Party[0].Inventory.splice(index, 1);
                                                Character = Party[0];
                                                localStorage.setItem('_character', JSON.stringify(Character));
                                                localStorage.setItem('_Party', JSON.stringify(Party));
                                                PlayerTurn(Enemy,  TempHealth);
                                            }, Party[0].PlayerTextSpeed);
                                        };
                                    }
                                    else if (Item.Type == "Food") {
                                        // If Item is a FOOd Item  i.e Chicken or Seashell
                                        // console.log("Fed" + Item.Name + " To "+Party[this.id.substr(0,1)].Name+" ")
                                        // If It Goes OVER AMOUNT NEEDED
                                        if (Party[this.id.substr(1, 1)].Stats[0].Value + Item.Stats.Health > Party[this.id.substr(1, 1)].Stats[6].Value) {
                                            Party[this.id.substr(1, 1)].Stats[0].Value = Party[this.id.substr(1, 1)].Stats[6].Value;
                                        }
                                        // If IT IS ALL NEEDED
                                        else {
                                            Party[this.id.substr(1, 1)].Stats[0].Value = Party[this.id.substr(1, 1)].Stats[0].Value + Item.Stats.Health;
                                        };
                                        $("#OptionsHolder").html("");
                                        $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated pulse'> Fed " + Item.Name + " To " + Party[this.id.substr(1, 1)].Name + " </div>");
                                        console.log(this.id)
                                        var ThisId = this.id;
                                        localStorage.setItem('_CurrentFood', JSON.stringify(ThisId));
                                        setTimeout(function () {
                                            var ThisId = JSON.parse(localStorage.getItem('_CurrentFood'));
                                            if (Item.Stats.Health < 25) {
                                                $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated swing'>  " + Party[ThisId.substr(1, 1)].Name + " Thought it was just okay... </div>");
                                                setTimeout(function () {
                                                    DoneEating();
                                                }, Party[0].PlayerTextSpeed);
                                            }
                                            else if (Item.Stats.Health < 100) {
                                                $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated jello'>  " + Party[ThisId.substr(1, 1)].Name + " Thought it was not bad! </div>");
                                                setTimeout(function () {
                                                    DoneEating();
                                                }, Party[0].PlayerTextSpeed);
                                            };

                                            function DoneEating() {
                                                $("#OptionsHolder").html("<div id='Options' class=' MenuWrapper animated bounceIn'>  " + Party[ThisId.substr(1, 1)].Name + " Gained " + Item.Stats.Health + " HP </div>");
                                                setTimeout(function () {
                                                    console.log(Party[0].Inventory)
                                                    console.log(index)
                                                    Party[0].Inventory.splice(index, 1);
                                                    console.log(Party[0].Inventory)
                                                    Party[0] = Party[0];
                                                    //Party[0].Inventory.pop(index);
                                                    localStorage.setItem('_character', JSON.stringify(Character));
                                                    localStorage.setItem('_Party', JSON.stringify(Party));
                                                    $("#PartyStatus").load("./temp/Status.html");
                                                    PlayerTurn(Enemy, TempHealth);
                                                }, Party[0].PlayerTextSpeed);
                                            };
                                        }, Party[0].PlayerTextSpeed);
                                    }
                                });
                            };
                        };
                    });
                };
                $("#OptionsHolder").append("<br><button class='MenuButton' id='IBack'> Back </button>");
                $("#IBack").click(function () {
                    $("#OptionsHolder").addClass("MenuWrapper")
                    $("#OptionsHolder").removeClass("BattleItemMenuWrapper");
                    PlayerTurn(Enemy,  TempHealth);
                });
            };
        });
        $("#Attack").click(function () {
            var Party = JSON.parse(localStorage.getItem('_Party'));
          //  var Character = JSON.parse(localStorage.getItem('_character'));
            /* PLAYER ATTACK BUTTON */
            $("#Run").prop('disabled', true);
            $("#Attack").prop('disabled', true);
            $("#Items").prop('disabled', true);
            $("#Status").prop('disabled', true);
            $("#SpellsAttack").prop('disabled', true);
            //    
            $("#OptionsHolder").html("");
            for (i = 0; i < 4; i++) {
                console.log(Party[0].Moves[i])
                if (Party[0].Moves[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton animated bounceIn' id='" + i + "'>" + Party[0].Moves[i].Name + "</button>");
                }
                else {
                    $("#OptionsHolder").append("<button disabled class='animated bounceIn MenuButtonDisabled' id='" + i + "'> No Move Set</button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (Party[0].Moves[index].Cost > Party[0].Stats[1].Value) {
                        $("#MessageHolder").html("<div class='animated rubberBand  MenuWrapper' id='StatusMSG'>" + Party[0].Name + " Doesn't Have Enough Mana! </div>");
                    }
                    else {
                       $("#OptionsHolder").html("");
                        
                        if (Party[0].Moves[index].Cost == 0 ){
                            $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + Party[0].Moves[index].Name + " will add " + Party[0].Moves[index].Damage[0] +" - "+Party[0].Moves[index].Damage[1]+" damage to your attack</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        } else {
                            $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + Party[0].Moves[index].Name + " will add " + Party[0].Moves[index].Damage[0] +" - "+Party[0].Moves[index].Damage[1]+ " damage to your attack and cost " + Party[0].Moves[index].Cost + " HP</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        }
                        
                         $("#Accept").click(function () {
                             var Move = Party[0].Moves[index];
                            console.log(Move)
                            var MoveDamage = Math.floor(Math.random() * Move.Damage[1] - Move.Damage[0]) + Move.Damage[0];
                            PlayerAttack(Enemy, TempHealth, Move );
                             localStorage.setItem('_MoveDamage', JSON.stringify(MoveDamage));
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounceIn' id='AttackBack'> Back </button>");
            $("#AttackBack").click(function () {
                PlayerTurn(Enemy, TempHealth);
            });
        });
        /* PLAYER ATTACK */
        function PlayerAttack(Enemy, TempHealth, Move) {
             var MoveDamage = JSON.parse(localStorage.getItem('_MoveDamage'));
            /* Adding Misses */
            if (Math.random() >= Party[0].Stats[5].Value * 1000) {
               /* $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Party[0].Name + " attacks using " + Move.Name + " </div>");
                setTimeout(function () {
                    $("#MessageHolder").html("<div class='MenuWRapper animated tada  Message' id='StatusMSG'>StatusMSG").html("" + Party[0].Name + " missed! </div>");
                    setTimeout(function () {
                        EnemyTurn(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);*/
            }
            else {
                //*****CRITICAL HIT CHANCE 1/10****//
                var CritcalChance = 0;
                var DidCriticalHit = false;
                var UsedMagic = false;
                if (CritcalChance == 10) {
                    CritcalChance = Math.round((Party[0].Stats[1].Value * 1.25) * (Move.Damage * 1.25));
                    DidCriticalHit = true;
                   // console.log("CRITIAL ATTACK")
                }
                else {
                    CritcalChance = 0
                };
                // Regular Attack //
                var Spell = "";
                var RandomAttack = Math.random() + .75;
                RandomAttack = Math.round(Party[0].Stats[1].Value * RandomAttack);
                FullAttack = RandomAttack + CritcalChance + MoveDamage
                    // Move To Universal Damage Function //
                EnemyLosesHealth(Enemy,TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
            }
        };
    };
    //////////////////////////////////////////////////////
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~ Win/Loss Conditions/Functions Battle COnditions/Functions  /3/~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function EnemyAttackChoice(Enemy, TempHealth) {
        var EnemyAttackOption = Enemy.MoveSet[Math.floor(Math.random() * Enemy.MoveSet.length)];
        $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Enemy.Name + " is using " + EnemyAttackOption.Name + " !! </div>");
        setTimeout(function () {
            /* ENEMY MISSES */
            if (Math.random() >= Enemy.Stats.Accuracy) {
                //var Character = JSON.parse(localStorage.getItem('_character'));
                var Party = JSON.parse(localStorage.getItem('_Party'));
                setTimeout(function () {
                    $("#MessageHolder").html("<h4 class='animated tada  Message' id='StatusMSG'>" + Enemy.Name + " Missed!!!! </div>");
                    setTimeout(function () {
                        // PlayerTurn(Enemy,  TempHealth);
                         localStorage.setItem('_Party', JSON.stringify(Party));
                        SecondDialog(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            }
            else {
                //Check STRENGTH WEAKNES//
                EnemyAttackDamage(EnemyAttackOption, Enemy, TempHealth);
            };
        }, Party[0].PlayerTextSpeed);
    }

    function EnemyAttackDamage(EnemyAttackOption, Enemy, TempHealth) {
        console.log(Enemy)
        var DamageEarned = 0
        var EnemyElementStrength = 0;
        //var Character = JSON.parse(localStorage.getItem('_character'));
         var Party = JSON.parse(localStorage.getItem('_Party'));
        Party[0].Stats[0].Value = Party[0].Stats[0].Value + Party[0].Stats[2].Value;
        if (EnemyAttackOption.Stats.Element == Party[0].Weakness1 || EnemyAttackOption.Stats.Element == Party[0].Weakness2) {
            var EnemyElementStrength = 1.25;
        }
        else if (EnemyAttackOption.Stats.Element == Party[0].Strength1 || EnemyAttackOption.Stats.Element == Party[0].Strength2) {
            var EnemyElementStrength = 0.75;
        }
        else {
            var EnemyElementStrength = 1;
        };
        console.log(EnemyElementStrength)
        if (Party[0].Stats[2].Value < Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength))) {
            Party[0].Stats[0].Value = Party[0].Stats[0].Value - Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength));
            DamageEarned = Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength)) - Party[0].Stats[2].Value;
        }
        else {
            Party[0].Stats[0].Value = Party[0].Stats[0].Value - Party[0].Stats[2].Value;
            Party[0].Stats[0].Value = Party[0].Stats[0].Value - 1;
            DamageEarned = 1 * EnemyElementStrength;
        };
      //  localStorage.setItem('_character', JSON.stringify(Character));
     //   localStorage.setItem('_character', JSON.stringify(Character));
        if (Party[0].Stats[0].Value > 0) {
    //        var Party = JSON.parse(localStorage.getItem('_Party'));
            /* If Player Loses health */
            //    $("#StatusMSG").html("" + Enemy.Name + " did "++" !");
            setTimeout(function () {
                if (EnemyElementStrength == 1.25) {
                    $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'>It attacked " + Party[0].Name + "'s weakness and did " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //    PlayerTurn(Enemy,  TempHealth);
                        $("#PlayerHealth").html("Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value + "");
                          console.log(Party[0].Stats[0].Value )
                           localStorage.setItem('_Party', JSON.stringify(Party));
                        SecondDialog(Enemy,  TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }
                else if (EnemyElementStrength == 0.75) {
                    $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'>It attacked " + Party[0].Name + "'s strength so it only did  " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //    PlayerTurn(Enemy, TempHealth);
                        console.log(Party[0].Stats[0].Value )
                        $("#PlayerHealth").html("Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value + "");
                          console.log(Party[0].Stats[0].Value )
                           localStorage.setItem('_Party', JSON.stringify(Party));
                        SecondDialog(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }
                else {
                      console.log(Party[0].Stats[0].Value )
                    BattleDamage()
                };

                function BattleDamage() {
                      console.log(Party[0].Stats[0].Value )
                    $("#PlayerHealth").html("Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "");
                    $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'>It did " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //  PlayerTurn(Enemy, empHealth);
                          localStorage.setItem('_Party', JSON.stringify(Party));
                        SecondDialog(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                };
            }, Party[0].PlayerTextSpeed);
        }
        else {
      //         var Party = JSON.parse(localStorage.getItem('_Party'));
            /* PLAYER DIES */
            Party[0].Stats[0].Value = 0;
            $("#PlayerHealth").html("Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "");
            $("#MessageHolder").html("<h4 class='animated hinge  Message' id='StatusMSG'> " + Party[0].Name + " passed out ! </div>");
            setTimeout(function () {
                BattleLost(Enemy,  TempHealth);
            }, Party[0].PlayerTextSpeed);
        }
    }

    function EnemyLosesHealth(Enemy,TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move) {
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        //// ENEMY LOSES IT'S HEALTH HERE ////
        FullAttack = FullAttack + CritcalChance;
        TempHealth = TempHealth - FullAttack
        if (TempHealth > 0) {
            /* If ENEMY Loses HEALTH */
            if (DidCriticalHit == true) {
                $("#MessageHolder").html("<h4 class='animated tada  Message' id='StatusMSG'>Critical Hit!</div>");
            }
            else if (UsedMagic == true) {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Spell.Name + " costed " + Spell.Stats.Cost + " Mana </div>")
            }
            else {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Party[0].Name + " attacks using " + Move.Name + " </div>");
            }
            setTimeout(function () {
                console.log(TempHealth)
                console.log( Enemy.Stats.Health)
                $("#EnemyHealth").html("Health : " + TempHealth + " / " + Enemy.Stats.Health);
                $("#PlayerMana").html("Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value);
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Party[0].Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage </div>");
                setTimeout(function () {
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    EnemyTurn(Enemy, TempHealth);
                }, Party[0].PlayerTextSpeed);
            }, Party[0].PlayerTextSpeed);
        }
        else {
            /* If ENEMY DIES */
            if (DidCriticalHit == true) {
                $("#MessageHolder").html("<h4 class='animated tada  Message' id='StatusMSG'>Critical Finisher!! </div>");
                AttackInfo()
            }
            else if (UsedMagic == true) {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Spell.Name + " costed " + Spell.Stats.Cost + " Mana </div>")
                AttackInfo()
            }
            else {
                $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'>" + Party[0].Name + " destroys " + Enemy.Name + " using " + Move.Name + " </div>");
                setTimeout(function () {
                    $("#EnemyHealth").html("Health : " + 0 + " / " + Enemy.Stats.Health);
               //     localStorage.setItem('_character', JSON.stringify(Character));
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    BattleWon(Enemy,  TempHealth);
                }, Party[0].PlayerTextSpeed);
            }

            function AttackInfo() {
                setTimeout(function () {
                    console.log("Enemy Died")
                    
                    $("#EnemyHealth").html("Health : " + 0 + " / " + Enemy.Stats.Health);
                    $("#PlayerMana").html("Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value);
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Party[0].Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage</div>");
                    setTimeout(function () {
                        $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Enemy.Name + " died </div>");
                        setTimeout(function () {
                            $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'> " + Party[0].Name + " won the fight! </div>");
                            setTimeout(function () {
                                localStorage.setItem('_Party[0]', JSON.stringify(Party[0]));
                                BattleWon(Enemy, TempHealth);
                            }, Party[0].PlayerTextSpeed);
                        }, Party[0].PlayerTextSpeed);
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            };
        }
    };

    function BattleWon(Enemy, TempHealth) {
        var Character = JSON.parse(localStorage.getItem('_character'));
        console.log('Player Won Battle!');
        $("#Run").prop('disabled', true);
        $("#Attack").prop('disabled', true);
        $("#Status").prop('disabled', true);
        $("#Items").prop('disabled', true);
        if (Enemy.Loot.length != 0) {
            var Loot = Enemy.Loot[Math.floor(Math.random() * Enemy.Loot.length)];
            var LootName = "";
            if (Math.random() >= Loot.DropRate) {
                Party[0].Inventory.push(Loot);
                //  console.log("Party[0]");
                //  console.log(Party[0]);
                LootName = " Also " + Party[0].Name + " obtained a " + Loot.Name + " !";
            }
        }
        Party[0].Wallet.Total = Party[0].Wallet.Total + Enemy.Earnings.Total;
        Party[0].Experience.Total = Party[0].Experience.Total + Enemy.Experience.ExperienceEarned;
        $("#PlayerXP").html("XP : " + Party[0].Experience.Total + " / " + Party[0].Experience.ToNextLevel + "");
        localStorage.setItem('_character', JSON.stringify(Character));
        CheckLevel(Party[0]);

        function CheckLevel() {
            var GainedLevel = 0;
            var DidGainLevel = false;
            console.log("Configuring Character Experience and Level");
            var Character = JSON.parse(localStorage.getItem('_character'));
            var Party = JSON.parse(localStorage.getItem('_Party'));
            console.log(Party[0].Experience);
            console.log("Level : " + Party[0].Level);
            /* Experience System WHILE Statements //// Make More Concise Later! /////// */
            while (Party[0].Experience.Total >= Party[0].Experience.ToNextLevel) {
                Party[0].Experience.Total = Party[0].Experience.ToNextLevel - Party[0].Experience.Total;
                Party[0].Experience.Total = Math.abs(Party[0].Experience.Total);
                Party[0].Experience.ToNextLevel = Math.round(Party[0].Experience.ToNextLevel * 1.45);
                Party[0].Level = Party[0].Level + 1;
                Party[0].Experience.SkillPoints = Party[0].Experience.SkillPoints + 3;
                Party[0].Stats[0].Value = Party[0].Stats[6].Value;
                Party[0].Stats[7].Value = Party[0].Stats[8].Value;
                DidGainLevel = true;
                GainedLevel++
                console.log(Party[0])
                $("#PlayerXP").html("XP : " + Party[0].Experience.Total + " / " + Party[0].Experience.ToNextLevel + "");
            }
            if (DidGainLevel == true) {
                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + Party[0].Name + "  Earned " + Enemy.Earnings.Total + " Coins and Gained " + Enemy.Experience.ExperienceEarned + " XP " + LootName + " and gained " + GainedLevel + " level!</span><br></div>");
                localStorage.setItem('_character', JSON.stringify(Character));
                setTimeout(function () {
                    ThirdDialog()
                }, 2500);
            }
            else {
                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + Party[0].Name + "  Earned " + Enemy.Earnings.Total + " Coins and Gained " + Enemy.Experience.ExperienceEarned + " XP " + LootName + "</span><br> </div>");
                localStorage.setItem('_character', JSON.stringify(Character));
                setTimeout(function () {
                    ThirdDialog()
                }, 2500);
            };
        };
        //localStorage.setItem('_character', JSON.stringify(Character));
        $("#Finish").click(function () {
            $("#App").load("./temp/Victoria.html")
        });
    }

    function BattleLost(Enemy,TempHealth) {
        $("#Run").prop('disabled', true);
        $("#Attack").prop('disabled', true);
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span> Game Over </span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
        //localStorage.clear();
        $("#Finish").click(function () {
            $("#App").load("./index.html")
        });
    };

    function BattleRunAway(Enemy,TempHealth) {
        var Character = JSON.parse(localStorage.getItem('_character'));
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span>" + Party[0].Name + "  Did not earn anything from this battle.</span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
        localStorage.setItem('_character', JSON.stringify(Character));
        $("#Finish").click(function () {
            $("#App").load("./temp/Victoria.html")
        });
    };

    function SecondDialog(Enemy, TempHealth) {
        var Party = JSON.parse(localStorage.getItem('_Party'));
        console.log("Second Dialog")
        console.log(Party[0].Stats[0].Value);
        $("#App").prepend("<div class='CharacterMessageContainer' id='CharacterMessageContainer'><div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div></div>")
            // Sets up the character themselves and their dialog
        $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Wow! Are you alright " + Party[0].Name + "  ? '</div>");
        // Sets up the continue button and the clikcDialog function to move on to the next conversation spot //
        $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
        ClickDialog(Enemy,TempHealth);
        // Dialog Functionality to Continue process : //
        // Set Dialog Back to Zero !
        var DialogOrderNumber = 0;

        function ClickDialog(Enemy, TempHealth) {
            DialogOrder = [
                {
                    Name: " Ben "
                    , Dialog: "Now it's time for you to show this Seagull who can deal a punch! "
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
                    , Dialog: " If you select 'Attack' then you will able to pick a move to use against the seagull! "
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
                    , Dialog: " Think you can handle this ? <br> <button class='MenuButton animated flipInY' id='Accept3'> Let's Attack ! </button> "
                    , Button: "Yes"
                    , ChangeCharacter: "No"
                    , Avatar: "./img/BenAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , }
        , , ]
            $("#Next").click(function () {
                var DialogSelect = DialogOrder[DialogOrderNumber]
                var Dialog = " " + DialogSelect.Name + " : ' " + DialogSelect.Dialog + "  ' ";
        //        console.log('Click');
         //       console.log(Dialog)
         //       console.log(DialogOrderNumber);
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
                        }, 1000);
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
                 //           console.log("Playing " + DialogSelect.Music);
                            DialogSelect.Music.play();
                        }
                        else if (DialogSelect.SoundControl == "Play") {
                 //           console.log("Playing " + DialogSelect.Sound);
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
                $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterMessageContainer").remove();
                   console.log(Party[0].Stats[0].Value);
                PlayerTurn(Enemy, TempHealth);
            });
        }
    };

    function ThirdDialog() {
        $("#App").prepend("<div class='CharacterMessageContainer' id='CharacterMessageContainer'><div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div></div>")
            // Sets up the character themselves and their dialog
        $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' You Did It!  '</div>");
      
        // Sets up the continue button and the clikcDialog function to move on to the next conversation spot //
        $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
        ClickDialog();
        // Dialog Functionality to Continue process : //
        // Set Dialog Back to Zero !
        var DialogOrderNumber = 0;

        function ClickDialog() {
            DialogOrder = [
                {
                    Name: " Ben "
                    , Dialog: " That was amazing " + Party[0].Name + " ! "
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
                    , Dialog: "There is a lot more to battling then just attacking, you could have used an item if you wanted to or even a spell! "
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
                    , Dialog: " We can go into that later though, for now.. "
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
                    , Dialog: " I think we better head on over to Tommie's to celebrate! "
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
                    , Dialog: " I also have some questions for the locals here about these attacks, if we could prevent this one...then maybe.. "
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
                    , Dialog: " uh, nevermind.. I don't want to rush you into anything " + Party[0].Name + ", I'm just excited! "
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
                    , Dialog: " Let's head to the shopping district, I want to buy you an <strong>Icebergg</strong> at Tommie's ! <br> <button id='Accept4' class='MenuButton'> Great! </button> "
                    , Button: "Yes"
                    , ChangeCharacter: "No"
                    , Avatar: "./img/BenAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , }
        , , ]
            $("#Next").click(function () {
                var DialogSelect = DialogOrder[DialogOrderNumber]
                var Dialog = " " + DialogSelect.Name + " : ' " + DialogSelect.Dialog + "  ' ";
         //       console.log('Click');
         //       console.log(Dialog)
         //       console.log(DialogOrderNumber);
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
                        }, 1000);
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
            $("#Accept4").click(function () {
                  Party[0].Triggers.Victoria4 = true;
                console.log(Party[0].Triggers)
                console.log(Party[0]);
                console.log(Party);
          localStorage.setItem('_Party', JSON.stringify(Party));
                $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterMessageContainer").remove();
                 $("#App").load("./temp/Victoria.html");
                // inform player that Party has a new member ! //
                

             
            });
        }
    };
   
    
};