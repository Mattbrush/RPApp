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
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    $("#Player").css("background", "" + Character.Color + "");
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
                , SpawnRate: 0.35
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
                    , Accuracy: Math.floor(Math.random() * 0.96) + 0.60
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
                    Bronze: Math.floor(Math.random() * 8) + 2
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
    console.log(Character);
    /* Star tAnimation For Battle ? */
    BattleAnimation();

    function BattleAnimation() {
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'> Enemy Approaching ! </div>");
        $("#MessageHolder").append("<img id='Transition' class='width75' src='./img/BattleTransition.gif'></img>");
        setTimeout(function () {
            StartBattle(Character)
        }, 2000);
    };
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~ Battle Functions    /2/~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function StartBattle(Character) {
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
            $("#Player").html("<div class='SubMainTitle' id='PlayerName'>" + Character.Name + " " + Character.FamilyName + "</div><br><div class='HealthMainTitle' id='PlayerHealth'>Health : " + Character.Stats[0].Value + " / " + Character.Stats[6].Value + "</div></div><br><div class='ManaMainTitle'  id='PlayerMana'>Mana : " + Character.Stats[7].Value + " / " + Character.Stats[8].Value + "</div><br><div class='XPMainTitle'  id='PlayerXP'>XP : " + Character.Experience.Total + " / " + Character.Experience.ToNextLevel + "</div>");
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            //Update HealthBars
            $("#HealthBar").css("width", "100%");
            /* Activate Turn Decider */
            setTimeout(function () {
                /* LEAVES initial battle Setup and head into the turn chooser.*/
                //  $("#App").css("opacity",".3");
                // Sets up the Charatcer Talking Environment
                $("#App").prepend("<div class='CharacterMessageContainer' id='CharacterMessageContainer'><div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div></div>")
                    // Sets up the character themselves and their dialog
                $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' " + Character.Name + " , Are you okay!  That Seagull is trying to fight you !? '</div>");
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
                            , Dialog: " " + Character.Name + ", I know you don't want to hear this...  "
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
                        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> " + DialogSelect.Name + " : ' Yes! I like your spirit " + Character.Name + " !  '</div>");
                        $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                        ClickDialog();
                    });
                    $("#Accept2").click(function () {
                        $("#StatusMessageHolder").html("");
                        $("#ContinueMessageHolder").html("");
                        $("#CharacterMessageContainer").remove();
                        EnemyTurn(Enemy, Character, TempHealth);
                    });
                }
                ////// END OF DIALOG FUNCTIONALITY /////////
            }, Character.PlayerTextSpeed);
        }; // End of CreateBattel()
    }; // End of StartBattle()
    /////////////////////////////////////////////
    //////////////////// ENEMY TURN   //////////////////////////
    function EnemyTurn(Enemy, Character, TempHealth) {
        var Character = JSON.parse(localStorage.getItem('_character'));
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button class='MenuButtonDisabled' disabled id='Attack'>Attack</button><button class='MenuButtonDisabled' disabled id='Items'>Items</button><button class='MenuButtonDisabled' id='Status' disabled>Status</button><button class='MenuButtonDisabled' disabled id='SpellsAttack'>Spells</button><br><button class='MenuButtonDisabled' disabled id='Run'>Run Away</button></div>");
        $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='StatusMSG'>It is now " + Enemy.Name + "'s Turn </div>");
        setTimeout(function () {
            EnemyMove(Enemy, Character, TempHealth);
        }, Character.PlayerTextSpeed);
    };

    function EnemyMove(Enemy, Character, TempHealth) {
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
                    }, Character.PlayerTextSpeed);
                }, Character.PlayerTextSpeed);
            }
            else {
                $("#MessageHolder").html("<h4 class='animated shake  Message' id='StatusMSG'>" + Enemy.Name + " is Scared of You! </div>");
                setTimeout(function () {
                    $("#MessageHolder").html("<h4 class='animated bounce  Message' id='StatusMSG'>" + Enemy.Name + " Continues the fight anyway! </div>");
                    setTimeout(function () {
                        EnemyAttack(Enemy, Character, TempHealth);
                    }, Character.PlayerTextSpeed);
                }, Character.PlayerTextSpeed);
            };
        }
        else {
            EnemyAttack(Enemy, Character, TempHealth);
        };

        function EnemyAttack(Enemy, Character, TempHealth) {
            /* ENEMY ATTACKS */
            EnemyAttackChoice(Enemy, TempHealth);
        };
    };
    //////////////////// PLAYER TURN //////////////////////////
    function PlayerTurn(Enemy, Character, TempHealth) {
        /* Setting Up Party */
        var Party = JSON.parse(localStorage.getItem('_Party'));
        Party[0] = Character;
        localStorage.setItem('_Party', JSON.stringify(Party));
        var Party = JSON.parse(localStorage.getItem('_Party'));
        //////////////////////////////
        $("#PlayerHealth").html("Health : " + Character.Stats[0].Value + " / " + Character.Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + Character.Stats[7].Value + " / " + Character.Stats[8].Value + "");
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button class='MenuButton' id='Attack'>Attack</button><button class='MenuButtonDisabled' disabled id='Items'>Items</button><button class='MenuButtonDisabled' disabled id='Status'>Status</button><button class='MenuButtonDisabled' disabled id='SpellsAttack'>Spells</button><br><button class='MenuButtonDisabled' disabled id='Run'>Run Away</button></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>It is now " + Character.Name + "'s Turn </div>");
        $("#Run").click(function () {
            $("#MessageHolder").html("<div class='animated pulse  Message' id='StatusMSG'>Are You Sure You Want To Run Away? </div>");
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            $("#OptionsHolder").html("<button  class='MenuButton animated bounce' id='Run'>Run Away</button><br><button class='MenuButton animated bounce'  id='RBack'>Back</button>");
            $("#Run").click(function () {
                /*RunChance Moment*/
                var RunAwayChance = Math.floor(Math.random() * 10) + 1;
                var EnemyStopChance = (Enemy.Stats.Accuracy * 10);
                if (RunAwayChance > EnemyStopChance) {
                    $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Character.Name + " Ran Away Safely </div>");
                    setTimeout(function () {
                        BattleRunAway();
                    }, Character.PlayerTextSpeed);
                }
                else {
                    $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                    $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='StatusMSG'> " + Character.Name + " could not release from the " + Enemy.Name + "'s grasp! </div>");
                    setTimeout(function () {
                        EnemyTurn(Enemy, Character, TempHealth);
                    }, Character.PlayerTextSpeed + 1000);
                }
            });
            $("#RBack").click(function () {
                PlayerTurn(Enemy, Character, TempHealth);
            });
        });
        $("#SpellsAttack").click(function () {
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            for (i = 0; i < 4; i++) {
                //  console.log(Character.Spells[i])
                if (Character.Spells[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton' id='" + i + "'>" + Character.Spells[i].Name + "</button>");
                }
                else if (Character.Spells.length == 0) {
                    $("#OptionsHolder").html("<div class='MenuWrapper' id='" + i + "'> No spells learned, Go learn some spells ! </div>");
                }
                else {
                    $("#OptionsHolder").append("<button class='MenuButtonDisabled' id='" + i + "'> No Spell Available </button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (Character.Spells[index].Stats.Cost > Character.Stats[7].Value) {
                        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>" + Character.Name + " Doesn't Have Enough Mana! </div>");
                    }
                    else {
                        $("#OptionsHolder").html("");
                        $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + Character.Spells[index].Name + " will do " + Character.Spells[index].Stats.Damage + " damage and cost " + Character.Spells[index].Stats.Cost + " MP </div><br>  <button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='SpellBack'> Back </button> ");
                        $("#Accept").click(function () {
                            $("#OptionsHolder").html("");
                            var ElementStrength = 0;
                            if (Character.Spells[index].Stats.Element == Enemy.Weakness1 || Character.Spells[index].Stats.Element == Enemy.Weakness2) {
                                var ElementStrength = 1.25;
                            }
                            else if (Character.Spells[index].Stats.Element == Enemy.Strength1 || Character.Spells[index].Stats.Element == Enemy.Strength2) {
                                var ElementStrength = 0.75;
                            }
                            else if (Character.Spells[index].Stats.Element == Enemy.Type) {
                                var ElementStrength = 0.65;
                            }
                            else {
                                var ElementStrength = 1;
                            };
                            var CritcalChance = Math.floor((Math.random() * 10) + 1);
                            var DidCriticalHit = false;
                            var UsedMagic = true;
                            var Move = "";
                            Character.Stats[7].Value = Character.Stats[7].Value - Character.Spells[index].Stats.Cost;
                            FullAttack = Math.round(Character.Spells[index].Stats.Damage * ElementStrength);
                            if (ElementStrength == 1.25) {
                                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Character.Name + " Attacks at " + Enemy.Name + "'s Weakness so " + Character.Spells[index].Name + "  did an insane  " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Character.PlayerTextSpeed + 1500);
                            }
                            else if (ElementStrength == 0.75) {
                                $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'> " + Character.Name + " Attacks at " + Enemy.Name + "'s Strength so " + Character.Spells[index].Name + " only did  " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Character.PlayerTextSpeed + 1500);
                            }
                            else if (ElementStrength == 1) {
                                $("#MessageHolder").html("<h4 class='animated flash  Message' id='StatusMSG'> " + Character.Name + " Used " + Character.Spells[index].Name + " And Does " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Character.PlayerTextSpeed + 1500);
                            }
                            else if (ElementStrength == 0.65) {
                                $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'> " + Character.Name + " Attacks at " + Enemy.Name + "'s same type so " + Character.Spells[index].Name + " barely effected it with   " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Character.PlayerTextSpeed + 1500);
                            }

                            function SpellMoveOn() {
                                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                                var Spell = Character.Spells[index]
                                    // Move To Universal Damage Function //
                                setTimeout(function () {
                                    EnemyLosesHealth(Enemy, Character, TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
                                }, Character.PlayerTextSpeed);
                            }
                        });
                        $("#SpellBack").click(function () {
                            PlayerTurn(Enemy, Character, TempHealth);
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='SBack'> Back </button>");
            $("#SBack").click(function () {
                PlayerTurn(Enemy, Character, TempHealth);
            });
        });
        $("#Status").click(function () {
            $("#Overlay").css("opacity", "1");
            CheckOverlay();
            ///////* Timer Set to check for changes done on an Overlay Page!!!! VERY IMPORTANTAY ********//////////
            function CheckOverlay() {
                var OverlayChecker = setInterval(function () {
                    OverlayTimer()
                }, Character.PlayerTextSpeed);

                function OverlayTimer() {
                    if ($("#Overlay").hasClass("Open")) {}
                    else {
                        clearInterval(OverlayChecker);
                        var Character = JSON.parse(localStorage.getItem('_character'));
                        $("#Overlay").css("opacity", ".5");
                        $("#Player").html("<div class='SubMainTitle' id='PlayerName'>" + Character.Name + " " + Character.FamilyName + "</div><br><div class='HealthMainTitle' id='PlayerHealth'>Health : " + Character.Stats[0].Value + " / " + Character.Stats[6].Value + "</div></div><br><div class='ManaMainTitle'  id='PlayerMana'>Mana : " + Character.Stats[7].Value + " / " + Character.Stats[8].Value + "</div><br><div class='XPMainTitle'  id='PlayerXP'>XP : " + Character.Experience.Total + " / " + Character.Experience.ToNextLevel + "</div>");
                        console.log("After Character")
                        console.log(Character)
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
                for (i = 0; i < Character.Inventory.length; i++) {
                    console.log(Character.Inventory[i])
                        // ITEM Menu Selection //
                    $("#OptionsHolder").append("<div class='BattleItemSlot'><input class='BattleItem animated bounce' type='image' src='" + Character.Inventory[i].Avatar + "' id='" + i + "'>" + Character.Inventory[i].Name + "</input></div>");
                    $("#" + i + "").click(function () {
                        // Using ITEMS //
                        var index = this.id;
                        console.log(Character.Inventory[this.id].Name);
                        var Item = Character.Inventory[index]
                        $("#OptionsHolder").html("<div>Do You Want To Use " + Character.Inventory[index].Name + " ?</div><br><button class='MenuButton animated bounce' id='Accept'> Yes </button><button class='MenuButton animated bounce' id='Deny'> No </button>");
                        $("#Accept").click(function () {
                            WhichCharacter(Item, index);
                        });
                        $("#Deny").click(function () {
                            $("#OptionsHolder").html("");
                            ListItems();
                        });

                        function WhichCharacter(Item, index) {
                            console.log(Item);
                            $("#OptionsHolder").html("<span class'animated fadeIn'>Which Character Would You Like To Use " + Character.Inventory[index].Name + " On?</span><br><div id='PartyList'></div>");
                            for (e = 0; e < Party.length; e++) {
                                $("#PartyList").append("<button class='MenuButton aniamted bounce' id='" + index + e + "'>" + Party[e].Name + "</button>");
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
                                        $("#OptionsHolder").html("<div class='animated flipInX StatusMessage'><span>Are you sure you want to use a " + Character.Inventory[index].Name + " on " + Party[this.id.substr(1, 1)].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
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
                                                PlayerTurn(Enemy, Character, TempHealth);
                                            }, Character.PlayerTextSpeed);
                                        });
                                        $("#No").click(function () {
                                            $("#OptionsHolder").html("");
                                            $("#InventoryContainer").html("");
                                            $("#InventoryDialog").html("");
                                            PlayerTurn(Enemy, Character, TempHealth);
                                        });
                                    }
                                    else if (Item.Type == "Misc") {
                                        $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated rubberBand'>You Can't Use A " + Item.Name + " On " + Party[this.id.substr(1, 1)].Name + " ? What are you even thinking? It has no effect...</div>");
                                        setTimeout(function () {
                                            PlayerTurn(Enemy, Character, TempHealth);
                                        }, Character.PlayerTextSpeed + 2000);
                                    }
                                    else if (Item.Type == "Spell") {
                                        if (Character.Spells.length == 4) {
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
                                                PlayerTurn(Enemy, Character, TempHealth);
                                            }, Character.PlayerTextSpeed);
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
                                                }, Character.PlayerTextSpeed + 1000);
                                            }
                                            else if (Item.Stats.Health < 100) {
                                                $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated jello'>  " + Party[ThisId.substr(1, 1)].Name + " Thought it was not bad! </div>");
                                                setTimeout(function () {
                                                    DoneEating();
                                                }, Character.PlayerTextSpeed + 1000);
                                            };

                                            function DoneEating() {
                                                $("#OptionsHolder").html("<div id='Options' class=' MenuWrapper animated bounce'>  " + Party[ThisId.substr(1, 1)].Name + " Gained " + Item.Stats.Health + " HP </div>");
                                                setTimeout(function () {
                                                    console.log(Party[0].Inventory)
                                                    console.log(index)
                                                    Party[0].Inventory.splice(index, 1);
                                                    console.log(Party[0].Inventory)
                                                    Character = Party[0];
                                                    //Character.Inventory.pop(index);
                                                    localStorage.setItem('_character', JSON.stringify(Character));
                                                    localStorage.setItem('_Party', JSON.stringify(Party));
                                                    $("#PartyStatus").load("./temp/Status.html");
                                                    PlayerTurn(Enemy, Character, TempHealth);
                                                }, Character.PlayerTextSpeed + 1000);
                                            };
                                        }, Character.PlayerTextSpeed + 1000);
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
                    PlayerTurn(Enemy, Character, TempHealth);
                });
            };
        });
        $("#Attack").click(function () {
            var Character = JSON.parse(localStorage.getItem('_character'));
            /* PLAYER ATTACK BUTTON */
            $("#Run").prop('disabled', true);
            $("#Attack").prop('disabled', true);
            $("#Items").prop('disabled', true);
            $("#Status").prop('disabled', true);
            $("#SpellsAttack").prop('disabled', true);
            //    
            $("#OptionsHolder").html("");
            for (i = 0; i < 4; i++) {
                console.log(Character.Moves[i])
                if (Character.Moves[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='" + i + "'>" + Character.Moves[i].Name + "</button>");
                }
                else {
                    $("#OptionsHolder").append("<button disabled class='animated bounce MenuButtonDisabled' id='" + i + "'> No Move Set</button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (Character.Moves[index].Cost > Character.Stats[1].Value) {
                        $("#MessageHolder").html("<div class='animated rubberBand  MenuWrapper' id='StatusMSG'>" + Character.Name + " Doesn't Have Enough Mana! </div>");
                    }
                    else {
                        $("#OptionsHolder").html("");
                        $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + Character.Moves[index].Name + " will add " + Character.Moves[index].Damage + " damage to attack and cost " + Character.Moves[index].Cost + " HP</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        $("#Accept").click(function () {
                            var Move = Character.Moves[index];
                            PlayerAttack(Enemy, Character, TempHealth, Move);
                        });
                        $("#AttackBack").click(function () {
                            PlayerTurn(Enemy, Character, TempHealth);
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='AttackBack'> Back </button>");
            $("#AttackBack").click(function () {
                PlayerTurn(Enemy, Character, TempHealth);
            });
        });
        /* PLAYER ATTACK */
        function PlayerAttack(Enemy, Character, TempHealth, Move) {
            /* Adding Misses */
            if (Math.random() >= Character.Stats[5].Value) {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Character.Name + " attacks using " + Move.Name + " </div>");
                setTimeout(function () {
                    $("#MessageHolder").html("<div class='MenuWRapper animated tada  Message' id='StatusMSG'>StatusMSG").html("" + Character.Name + " missed! </div>");
                    setTimeout(function () {
                        EnemyTurn(Enemy, Character, TempHealth);
                    }, Character.PlayerTextSpeed);
                }, Character.PlayerTextSpeed);
            }
            else {
                //*****CRITICAL HIT CHANCE 1/10****//
                var CritcalChance = Math.floor((Math.random() * 10) + 1);
                var DidCriticalHit = false;
                var UsedMagic = false;
                if (CritcalChance == 10) {
                    CritcalChance = Math.round((Character.Stats[1].Value * 1.25) * (Move.Damage * 1.25));
                    DidCriticalHit = true;
                    console.log("CRITIAL ATTACK")
                }
                else {
                    CritcalChance = 0
                };
                // Regular Attack //
                var Spell = "";
                var RandomAttack = Math.random() + .75;
                RandomAttack = Math.round(Character.Stats[1].Value * RandomAttack);
                FullAttack = RandomAttack + CritcalChance + Move.Damage
                    // Move To Universal Damage Function //
                EnemyLosesHealth(Enemy, Character, TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
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
                var Character = JSON.parse(localStorage.getItem('_character'));
                setTimeout(function () {
                    $("#MessageHolder").html("<h4 class='animated tada  Message' id='StatusMSG'>" + Enemy.Name + " Missed!!!! </div>");
                    setTimeout(function () {
                        // PlayerTurn(Enemy, Character, TempHealth);
                        SecondDialog(Enemy, Character, TempHealth);
                    }, Character.PlayerTextSpeed);
                }, Character.PlayerTextSpeed);
            }
            else {
                //Check STRENGTH WEAKNES//
                EnemyAttackDamage(EnemyAttackOption, Enemy, TempHealth);
            };
        }, Character.PlayerTextSpeed);
    }

    function EnemyAttackDamage(EnemyAttackOption, Enemy, TempHealth) {
        console.log(Enemy)
        var DamageEarned = 0
        var EnemyElementStrength = 0;
        var Character = JSON.parse(localStorage.getItem('_character'));
        Character.Stats[0].Value = Character.Stats[0].Value + Character.Stats[2].Value;
        if (EnemyAttackOption.Stats.Element == Character.Weakness1 || EnemyAttackOption.Stats.Element == Character.Weakness2) {
            var EnemyElementStrength = 1.25;
        }
        else if (EnemyAttackOption.Stats.Element == Character.Strength1 || EnemyAttackOption.Stats.Element == Character.Strength2) {
            var EnemyElementStrength = 0.75;
        }
        else {
            var EnemyElementStrength = 1;
        };
        console.log(EnemyElementStrength)
        if (Character.Stats[2].Value < Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength))) {
            Character.Stats[0].Value = Character.Stats[0].Value - Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength));
            DamageEarned = Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength));
        }
        else {
            Character.Stats[0].Value = Character.Stats[0].Value - Character.Stats[2].Value;
            Character.Stats[0].Value = Character.Stats[0].Value - 1;
            DamageEarned = 1 * EnemyElementStrength;
        };
        localStorage.setItem('_character', JSON.stringify(Character));
        if (Character.Stats[0].Value > 0) {
            var Character = JSON.parse(localStorage.getItem('_character'));
            /* If Player Loses health */
            //    $("#StatusMSG").html("" + Enemy.Name + " did "++" !");
            setTimeout(function () {
                if (EnemyElementStrength == 1.25) {
                    $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'>It attacked " + Character.Name + "'s weakness and did " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //    PlayerTurn(Enemy, Character, TempHealth);
                        SecondDialog(Enemy, Character, TempHealth);
                    }, Character.PlayerTextSpeed + 1500);
                }
                else if (EnemyElementStrength == 0.75) {
                    $("#MessageHolder").html("<h4 class='animated bounce  Message' id='StatusMSG'>It attacked " + Character.Name + "'s strength so it only did  " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //    PlayerTurn(Enemy, Character, TempHealth);
                        SecondDialog(Enemy, Character, TempHealth);
                    }, Character.PlayerTextSpeed + 1500);
                }
                else {
                    BattleDamage()
                };

                function BattleDamage() {
                    $("#PlayerHealth").html("Health : " + Character.Stats[0].Value + " / " + Character.Stats[6].Value + "");
                    $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'>It did " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //  PlayerTurn(Enemy, Character, TempHealth);
                        SecondDialog(Enemy, Character, TempHealth);
                    }, Character.PlayerTextSpeed);
                };
            }, Character.PlayerTextSpeed);
        }
        else {
            var Character = JSON.parse(localStorage.getItem('_character'));
            /* PLAYER DIES */
            Character.Stats[0].Value = 0;
            $("#PlayerHealth").html("Health : " + Character.Stats[0].Value + " / " + Character.Stats[6].Value + "");
            $("#MessageHolder").html("<h4 class='animated hinge  Message' id='StatusMSG'> " + Character.Name + " passed out ! </div>");
            setTimeout(function () {
                BattleLost(Enemy, Character, TempHealth);
            }, Character.PlayerTextSpeed);
        }
    }

    function EnemyLosesHealth(Enemy, Character, TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move) {
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
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Character.Name + " attacks using " + Move.Name + " </div>");
            }
            setTimeout(function () {
                $("#EnemyHealth").html("Health : " + TempHealth + " / " + Enemy.Stats.Health);
                $("#PlayerMana").html("Mana : " + Character.Stats[7].Value + " / " + Character.Stats[8].Value);
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Character.Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage </div>");
                setTimeout(function () {
                    localStorage.setItem('_character', JSON.stringify(Character));
                    EnemyTurn(Enemy, Character, TempHealth);
                }, Character.PlayerTextSpeed);
            }, Character.PlayerTextSpeed);
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
                $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'>" + Character.Name + " destroys " + Enemy.Name + " using " + Move.Name + " </div>");
                setTimeout(function () {
                    localStorage.setItem('_character', JSON.stringify(Character));
                    BattleWon(Enemy, Character, TempHealth);
                }, Character.PlayerTextSpeed + 1000);
            }

            function AttackInfo() {
                setTimeout(function () {
                    $("#EnemyHealth").html("Health : " + 0 + " / " + Enemy.Stats.Health);
                    $("#PlayerMana").html("Mana : " + Character.Stats[7].Value + " / " + Character.Stats[8].Value);
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Character.Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage</div>");
                    setTimeout(function () {
                        $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Enemy.Name + " died </div>");
                        setTimeout(function () {
                            $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'> " + Character.Name + " won the fight! </div>");
                            setTimeout(function () {
                                localStorage.setItem('_character', JSON.stringify(Character));
                                BattleWon(Enemy, Character, TempHealth);
                            }, Character.PlayerTextSpeed);
                        }, Character.PlayerTextSpeed + 1000);
                    }, Character.PlayerTextSpeed);
                }, Character.PlayerTextSpeed);
            };
        }
    };

    function BattleWon(Enemy, Character, TempHealth) {
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
                Character.Inventory.push(Loot);
                //  console.log("Character");
                //  console.log(Character);
                LootName = " Also " + Character.Name + " obtained a " + Loot.Name + " !";
            }
        }
        Character.Wallet.Bronze = Character.Wallet.Bronze + Enemy.Earnings.Bronze;
        Character.Experience.Total = Character.Experience.Total + Enemy.Experience.ExperienceEarned;
        $("#PlayerXP").html("XP : " + Character.Experience.Total + " / " + Character.Experience.ToNextLevel + "");
        localStorage.setItem('_character', JSON.stringify(Character));
        CheckLevel(Character);

        function CheckLevel(Character) {
            var GainedLevel = 0;
            var DidGainLevel = false;
            console.log("Configuring Character Experience and Level");
            var Character = JSON.parse(localStorage.getItem('_character'));
            console.log(Character.Experience);
            console.log("Level : " + Character.Level);
            /* Experience System WHILE Statements //// Make More Concise Later! /////// */
            while (Character.Experience.Total >= Character.Experience.ToNextLevel) {
                Character.Experience.Total = Character.Experience.ToNextLevel - Character.Experience.Total;
                Character.Experience.Total = Math.abs(Character.Experience.Total);
                Character.Experience.ToNextLevel = Math.round(Character.Experience.ToNextLevel * 1.45);
                Character.Level = Character.Level + 1;
                Character.Experience.SkillPoints = Character.Experience.SkillPoints + 3;
                Character.Stats[0].Value = Character.Stats[6].Value;
                Character.Stats[7].Value = Character.Stats[8].Value;
                DidGainLevel = true;
                GainedLevel++
                console.log(Character)
                $("#PlayerXP").html("XP : " + Character.Experience.Total + " / " + Character.Experience.ToNextLevel + "");
            }
            if (DidGainLevel == true) {
                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + Character.Name + "  Earned " + Enemy.Earnings.Bronze + " Coins and Gained " + Enemy.Experience.ExperienceEarned + " XP " + LootName + " and gained " + GainedLevel + " level!</span><br></div>");
                localStorage.setItem('_character', JSON.stringify(Character));
                setTimeout(function () {
                    ThirdDialog()
                }, 2500);
            }
            else {
                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + Character.Name + "  Earned " + Enemy.Earnings.Bronze + " Coins and Gained " + Enemy.Experience.ExperienceEarned + " XP " + LootName + "</span><br> </div>");
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

    function BattleLost(Enemy, Character, TempHealth) {
        $("#Run").prop('disabled', true);
        $("#Attack").prop('disabled', true);
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span> Game Over </span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
        localStorage.clear();
        $("#Finish").click(function () {
            $("#App").load("./index.html")
        });
    };

    function BattleRunAway(Enemy, Character, TempHealth) {
        var Character = JSON.parse(localStorage.getItem('_character'));
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span>" + Character.Name + "  Did not earn anything from this battle.</span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
        localStorage.setItem('_character', JSON.stringify(Character));
        $("#Finish").click(function () {
            $("#App").load("./temp/Victoria.html")
        });
    };

    function SecondDialog(Enemy, Character, TempHealth) {
        $("#App").prepend("<div class='CharacterMessageContainer' id='CharacterMessageContainer'><div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div></div>")
            // Sets up the character themselves and their dialog
        $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Wow! Are you alright " + Character.Name + "  ? '</div>");
        // Sets up the continue button and the clikcDialog function to move on to the next conversation spot //
        $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
        ClickDialog(Enemy, Character, TempHealth);
        // Dialog Functionality to Continue process : //
        // Set Dialog Back to Zero !
        var DialogOrderNumber = 0;

        function ClickDialog(Enemy, Character, TempHealth) {
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
            $("#Accept3").click(function () {
                $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterMessageContainer").remove();
                PlayerTurn(Enemy, Character, TempHealth);
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
                    , Dialog: " That was amazing " + Character.Name + " ! "
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
                    , Dialog: " uh, nevermind.. I don't want to rush you into anything " + Character.Name + ", I'm just excited! "
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
                    , Dialog: " Let's head to the shopping district, I want to buy you an <strong>Avalanche</strong> ! Also,  I'm going to travel with you from now on. <br> <button id='Accept4' class='MenuButton'> Great! </button> "
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
                $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterMessageContainer").remove();
                // inform player that Party has a new member ! //
                
                /* TODO LATER 
                MAKE THIS MOMENT WHERE A PLAYER JOIN YOUR PARTY HAVE THE SAME LOOK AND DESIGN AS WHEN ASKING TO UNEQUIP AN ITEM IN THE EQUIPMENT SECTION OF THE MENUS. i LIKE HOW THE BLACK OVERLAY APPEARS AND DROWNS EVERYTHING ELSE OUT, THIS WOULD ALLOW US TO FOCUS BETTER ON THIS CHARACTER PORTRAIT, ALO IT WOULD CENTER IT EASIER INTO THE SCREEN
                */
                $("#App").prepend("<div  id='StatusMessage' class='DialogWrapper animated flipInX'><img class='ObtainedItem' src='./img/BenAvatar.png'></img><br> Ben has joined your party ! </div>");
                var Party = JSON.parse(localStorage.getItem('_Party'));
                var Character = JSON.parse(localStorage.getItem('_character'));
                var Ben = {
                    Name: "Ben"
                    , FamilyName: "Wengel"
                    , Sex: "Male"
                    , Color: "Green"
                    , Level: 1
                    , Strength1: "Saltwater"
                    , Strength2: "Tundra"
                    , Weakness1: "Grassland"
                    , Weakness2: "Mountain"
                    , Stats: [{
                            Name: "Health"
                            , Value: 15
        }
            , {
                            Name: "Attack"
                            , Value: 2
            }
            , {
                            Name: "Defense"
                            , Value: 1
            }
            , {
                            Name: "Wisdom"
                            , Value: 0
            }
            , {
                            Name: "Vitality"
                            , Value: 0
            }
            , {
                            Name: "Accuracy"
                            , Value: 0.85
            }
        , {
                            Name: "FullHealth"
                            , Value: 15
                        , }
                   , {
                            Name: "Mana"
                            , Value: 5
                        , }
                  , {
                            Name: "FullMana"
                            , Value: 5
                        , }
                 ]
                    , Weight: Math.round((2 / 2) * 25)
                    , Equipment: {
                        Head: ""
                        , Torso: ""
                        , Legs: ""
                        , Belt: ""
                        , LeftHand: ""
                        , RightHand: ""
                        , Ring1: ""
                        , Ring2: ""
                    , }
                    , Spells: [
                        {
                            Name: " Leafy Wind"
                            , IDName: "LeafyWind"
                            , Avatar: "./img/LeafyWind.png"
                            , Type: "Spell"
                            , Index: 0
                            , Weight: 1
                            , Stats: {
                                Cost: 5
                                , Damage: 10
                                , Element: "Boreal Forest"
                            }
                            , Worth: 5
                            , DropRate: 0.00
    }
        ]
                    , Moves: [
                        {
                            Name: "Chop"
                            , Damage: 4
                            , Cost: 0
                            , Type: "Physical"
                        }
                        , {
                            Name: "Slice"
                            , Damage: 7
                            , Cost: 2
                            , Type: "Physical"
                        }
        , ]
                    , BattleStats: {
                        AttackStrength: ""
                        , DefenseStrength: ""
                    }
                    , Experience: {
                        Total: 0
                        , ToNextLevel: 25
                        , SkillPoints: 0
                    , }
                };
                /* Add in BattleStats */
                PartyMember = Ben;
                var AttackStrength = 0;
                var DefenseStrength = 0
                if (PartyMember.Equipment.Head.Stats == undefined) {
                    console.log("No Headwear On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Head.Stats.Defense
                };
                if (PartyMember.Equipment.Torso.Stats == undefined) {
                    console.log("No Torso On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Torso.Stats.Defense
                }
                if (PartyMember.Equipment.Belt.Stats == undefined) {
                    console.log("No Belt On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Belt.Stats.Defense
                }
                if (PartyMember.Equipment.Legs.Stats == undefined) {
                    console.log("No Legs On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Legs.Stats.Defense
                }
                if (PartyMember.Equipment.Ring1.Stats == undefined) {
                    console.log("No Ring1 On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Ring1.Stats.Defense
                }
                if (PartyMember.Equipment.Ring2.Stats == undefined) {
                    console.log("No Ring2 On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Ring2.Stats.Defense
                }
                if (PartyMember.Equipment.RightHand.Stats == undefined) {
                    console.log(" No Item Equipped In Right Hand")
                }
                else {
                    if (PartyMember.Equipment.RightHand.Stats.Attack != undefined) {
                        console.log("No RightHand Defense For  Character");
                        AttackStrength = AttackStrength + PartyMember.Equipment.RightHand.Stats.Attack
                    }
                    else if (PartyMember.Equipment.RightHand.Stats.Defense != undefined) {
                        console.log("No RightHand Attack For  Character");
                        DefenseStrength = DefenseStrength + PartyMember.Equipment.RightHand.Stats.Defense
                    }
                }
                if (PartyMember.Equipment.LeftHand.Stats == undefined) {
                    console.log(" No Item Equipped In LeftHand ")
                }
                else {
                    if (PartyMember.Equipment.LeftHand.Stats.Attack != undefined) {
                        console.log("No LeftHand Defense For  Character");
                        AttackStrength = AttackStrength + PartyMember.Equipment.LeftHand.Stats.Attack
                    }
                    else if (PartyMember.Equipment.LeftHand.Stats.Defense != undefined) {
                        console.log("No LeftHand Attack For  Character");
                        DefenseStrength = DefenseStrength + PartyMember.Equipment.LeftHand.Stats.Defense
                    }
                }
                if (DefenseStrength == 0) {
                    DefenseStrength = 1;
                }
                if (AttackStrength == 0) {
                    AttackStrength = 1;
                }
                if (PartyMember.Stats[2].Value < 1) {
                    DefenseStrength = Math.round((1) * DefenseStrength);
                }
                else {
                    DefenseStrength = Math.round((PartyMember.Stats[2].Value + .45) * DefenseStrength);
                };
                if (PartyMember.Stats[1].Value < 1) {
                    AttackStrength = Math.round((1) * AttackStrength);
                }
                else {
                    AttackStrength = Math.round((PartyMember.Stats[1].Value + .25) * AttackStrength);
                };
                Ben.BattleStats.AttackStrength = AttackStrength;
                Ben.BattleStats.DefenseStrength = DefenseStrength;
                //////////////////////
                /* finished With Character Creation MOVING ON IN STORY */
                Character.Triggers.Victoria4 = true;
                Party = [];
                Party[0] = Character;
                Party.push(Ben);
                localStorage.setItem('_character', JSON.stringify(Character));
                localStorage.setItem('_Party', JSON.stringify(Party));
            });
            setTimeout(function () {
                $("#App").load("./temp/Victoria.html");
            }, 5000);
        }
    };
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~MISC  /4/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*
    TODO:




    */
};