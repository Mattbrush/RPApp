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

        !!  ELEMENTAL CHART CHECKER !!

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




           ***** THIS IS THE SECOND TUTORIAL BATTLE WITH BEN, IN THIS TUTORIAL THE PLAYER WILL BE LEARNING HOW TO USE SPELLS AND HOW TO SWITCH BETWEEN PARTY MEMBERS DURING BATTLE. ALSO AS A SIDE, THE PLAYER WILL BE LEARNING THE EFFECTS OF THE NEW WEAPONS/ARMOUR THAT THEY MAY OR MAY NOT HAVE EQUIPPED IN THE LAST SECTION OF THE GAME    *******
           
           
           
           
           
        
        
        
        
        */
    var Party = JSON.parse(localStorage.getItem('_Party'));
   
    $("#OverlayContainer").html("<div id='Overlay' class='animated fadeIn'></div>")
    $("#Overlay").css("opacity", "0.65");
    $("#Overlay").css("background-image", "url(img/PierVictoria.jpg)");
    $("#Overlay").css("background-position-x", "770px");
    $("#Overlay").css("background-size", "cover");
     /* For a real Battle, This would be the Player first and then the party members once it is their turn.. For now it will just be Ben since he is the one fighting this fight! */
        var PartyMember = Party[0];
     $("#Player").css("background", "" +PartyMember.Color + "");
    Party[0].Stats[7].Value = Party[0].Stats[8].Value;
    Party[1].Stats[7].Value =  Party[1].Stats[8].Value;
    Party[0].Stats[0].Value = Party[0].Stats[6].Value;
    Party[1].Stats[0].Value =  Party[1].Stats[6].Value;
    
    ////// ENEMY CREATOR /////
    var Enemies = [

            {
                Name: 'Sea Lion'
                , Avatar: "./img/SeaLion.png"
                , Type: "Saltwater"
                , SpawnRate: 0.99
                , Strength1: "Boreal Forest"
                , Strength2: "Desert"
                , Weakness1: "Saltwater"
                , Weakness2: "Freshwater"
                , Color: "#D7ACAC"
                , Stats: {
                    Health: Math.floor(Math.random() * 20) + 25
                    , Attack: Math.floor(Math.random() * 4) + 1
                    , Defense: Math.floor(Math.random() * 0) + 0
                    , Magic: 0
                    , Vitality: Math.floor(Math.random() * 5) + 0
                    , Accuracy: Math.floor(Math.random() * 0.96) + 0.85
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
                , RunStat: 1
            , }

]
        ////////////////// /////
   /* console.log("Available Enemies : ");
    for (i = 0; i < Enemies.length; i++) {
        console.log(Enemies[i]);
    };*/
    console.log(PartyMember);
    /* Star tAnimation For Battle ? */
    BattleAnimation();

    function BattleAnimation() {
        $("#App").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
        $("#App").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
        $("#AlertPlayerMessage").html("<div class='animated bounceIn  AlertPlayerText' id='StatusMSG'> Enemy Approaching ! </div>");
        $("#AlertPlayerMessage").append("<img id='Transition' class='width75' src='./img/BattleTransition.gif'></img>");
        localStorage.setItem('_Party', JSON.stringify(Party));
            StartBattle(PartyMember)

    };
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~ Battle Functions    /2/~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function StartBattle() {
        
         var Party = JSON.parse(localStorage.getItem('_Party'));
       
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
            $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'>A " + Enemy.Name + " Approaches </div>");
            $("#Transition").css("display:", "none");
            /* Enemy Animation ? */
            /*Create Battle Scene*/
            if (Enemy.Type == 'Saltwater') {
                $("#Enemy").css("background-image", "url(img/OceanBattleBackground.gif)");
            }
            else if (Enemy.Type == 'Mountain') {
                $("#Enemy").css("background-image", "url(img/MountainBattleBackground.gif)");
            };
            $("#Enemy").html("<br><div class='SubMainTitle' id='EnemyName'>" + Enemy.Name + "</div><br><div class='SubSubMainTitle' id='EnemyHealth'>Health : " + TempHealth + " / " + Enemy.Stats.Health + "</div><br><img id='EnemyAvatar'>")
            $("#EnemyAvatar").css("border-color", Enemy.Color);
            $("#EnemyAvatar").attr("src", "" + Enemy.Avatar + "");
            $("#Player").html("<div class='SubMainTitle' id='PlayerName'>" + PartyMember.Name + " " + PartyMember.FamilyName + "</div><br><div class='HealthMainTitle' id='PlayerHealth'>Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "</div></div><br><div class='ManaMainTitle'  id='PlayerMana'>Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "</div><br><div class='XPMainTitle'  id='PlayerXP'>XP : " + PartyMember.Experience.Total + " / " + PartyMember.Experience.ToNextLevel + "</div>");
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            //Update HealthBars
            $("#HealthBar").css("width", "100%");
            /* Activate Turn Decider */
            setTimeout(function () {
                /* LEAVES initial battle Setup and head into the turn chooser.*/
                // Sets up the Charatcer Talking Environment
                $("#App").prepend("<div class='CharacterMessageContainer' id='CharacterMessageContainer'><div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div></div>")
                // Remove BattleAnimation
                 $("#OverlayBlanket").remove();
                 $("#AlertPlayerMessage").remove();
                
                    // Sets up the character themselves and their dialog
                $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated bounceIn'> Ben : ' Oh no! It's a Sea Lion! I can't do this alone.. I will need your help "+Party[0].Name+" !  '</div>");
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
                            , Dialog: " We are going to have to battle it together "
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
                            , Dialog: " Why don't you go first?"
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
                            , Dialog: " ' You know what you are doing right ? '  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Leave it to me ! </button>   "
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
                   //     console.log('Click');
                //        console.log(Dialog)
               //         console.log(DialogOrderNumber);
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
                    $("#Accept1").click(function () {
                        $("#StatusMessageHolder").html("");
                        $("#ContinueMessageHolder").html("");
                        $("#CharacterMessageContainer").remove();
                        PlayerTurn(Enemy,  TempHealth);
                    });
                }
                ////// END OF DIALOG FUNCTIONALITY /////////
            }, 3000);
        }; // End of CreateBattle()
    }; // End of StartBattle()
    //////////////////// ENEMY TURN   //////////////////////////
    function EnemyTurn(Enemy, TempHealth) {
       
        var Party = JSON.parse(localStorage.getItem('_Party'));
            if (localStorage.getItem('_Enemy')) {
        var Enemy = JSON.parse(localStorage.getItem('_Enemy'));
                  var TempHealth = JSON.parse(localStorage.getItem('_TempHealth'));
            };
      
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
            console.log(" ScaredChecker Need to be lower than " + Enemy.RunStat + " :")
            console.log(" Scared Checker : "+ScaredChecker)
            if (ScaredChecker <= Enemy.RunStat) {
                $("#MessageHolder").html("<h4 class='animated shake  Message' id='StatusMSG'>" + Enemy.Name + " is Scared of You! </div>");
                setTimeout(function () {
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Enemy.Name + " Has Run Away!? </div>");
                    setTimeout(function () {
                        BattleRunAway();
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            }
            else {
                $("#MessageHolder").html("<h4 class='animated shake  Message' id='StatusMSG'>" + Enemy.Name + " is Scared of You! </div>");
                setTimeout(function () {
                    $("#MessageHolder").html("<h4 class='animated bounce  Message' id='StatusMSG'>" + Enemy.Name + " Continues the fight anyway! </div>");
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
        
       
        
        
        //////////////////////////////
        $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "");
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button class='MenuButton' id='Attack'>Attack</button><button class='MenuButtonDisabled' disabled id='Items'>Items</button><button class='MenuButtonDisabled' disabled id='Status'>Status</button><button class='MenuButtonDisabled' disabled id='SpellsAttack'>Spells</button><br><button class='MenuButtonDisabled' disabled id='Run'>Run Away</button></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>It is now " + PartyMember.Name + "'s Turn </div>");
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
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + PartyMember.Name + " Ran Away Safely </div>");
                    setTimeout(function () {
                        BattleRunAway();
                    }, Party[0].PlayerTextSpeed);
                }
                else {
                    $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                    $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='StatusMSG'> " + PartyMember.Name + " could not release from the " + Enemy.Name + "'s grasp! </div>");
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
            $("#OptionsHolder").html("<div id='Options' class=''></div>");
            for (i = 0; i < 4; i++) {
                //  console.log(PartyMember.Spells[i])
                if (PartyMember.Spells[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton animated bounceIn' id='" + i + "'>" + PartyMember.Spells[i].Name + "</button>");
                }
                else if (PartyMember.Spells.length == 0) {
                    $("#OptionsHolder").html("<div class='MenuWrapper animated bounceIn' id='" + i + "'> No spells learned, Go learn some spells ! </div>");
                }
                else {
                    $("#OptionsHolder").append("<button class='MenuButtonDisabled animated bounceIn' id='" + i + "'> No Spell Available </button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (PartyMember.Spells[index].Stats.Cost > PartyMember.Stats[7].Value) {
                        $("#MessageHolder").html("<h4 class='animated  bounceIn  Message' id='StatusMSG'>" + PartyMember.Name + " Doesn't Have Enough Mana! </div>");
                    }
                    else {
                        $("#OptionsHolder").html("");
                        $("#OptionsHolder").html("<div class=' animated bounceIn  MenuWrapper' id='StatusMSG'>" + PartyMember.Spells[index].Name + " will do " + PartyMember.Spells[index].Stats.Damage + " damage and cost " + PartyMember.Spells[index].Stats.Cost + " MP </div><br>  <button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='SpellBack'> Back </button> ");
                        $("#Accept").click(function () {
                            $("#OptionsHolder").html("");
                            var ElementStrength = 0;
                            if (PartyMember.Spells[index].Stats.Element == Enemy.Weakness1 || PartyMember.Spells[index].Stats.Element == Enemy.Weakness2) {
                                var ElementStrength = 1.25;
                            }
                            else if (PartyMember.Spells[index].Stats.Element == Enemy.Strength1 || PartyMember.Spells[index].Stats.Element == Enemy.Strength2) {
                                var ElementStrength = 0.75;
                            }
                            else if (PartyMember.Spells[index].Stats.Element == Enemy.Type) {
                                var ElementStrength = 0.65;
                            }
                            else {
                                var ElementStrength = 1;
                            };
                            var CritcalChance = Math.floor((Math.random() * 10) + 1);
                            var DidCriticalHit = false;
                            var UsedMagic = true;
                            var Move = "";
                            PartyMember.Stats[7].Value = PartyMember.Stats[7].Value - PartyMember.Spells[index].Stats.Cost;
                            FullAttack = Math.round(PartyMember.Spells[index].Stats.Damage * ElementStrength);
                            if (ElementStrength == 1.25) {
                                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + PartyMember.Name + " Attacks at " + Enemy.Name + "'s Weakness so " + PartyMember.Spells[index].Name + "  did an insane  " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }
                            else if (ElementStrength == 0.75) {
                                $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'> " + PartyMember.Name + " Attacks at " + Enemy.Name + "'s Strength so " + PartyMember.Spells[index].Name + " only did  " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }
                            else if (ElementStrength == 1) {
                                $("#MessageHolder").html("<h4 class='animated flash  Message' id='StatusMSG'> " + PartyMember.Name + " Used " + PartyMember.Spells[index].Name + " And Does " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }
                            else if (ElementStrength == 0.65) {
                                $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'> " + PartyMember.Name + " Attacks at " + Enemy.Name + "'s same type so " + PartyMember.Spells[index].Name + " barely effected it with   " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }

                            function SpellMoveOn() {
                                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                                var Spell = PartyMember.Spells[index]
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
            $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='SBack'> Back </button>");
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
                        $("#Player").html("<div class='SubMainTitle' id='PlayerName'>" + PartyMember.Name + " " + PartyMember.FamilyName + "</div><br><div class='HealthMainTitle' id='PlayerHealth'>Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "</div></div><br><div class='ManaMainTitle'  id='PlayerMana'>Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "</div><br><div class='XPMainTitle'  id='PlayerXP'>XP : " + PartyMember.Experience.Total + " / " + PartyMember.Experience.ToNextLevel + "</div>");
                        console.log("After Character")
                        console.log(PartyMember)
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
                for (i = 0; i < PartyMember.Inventory.length; i++) {
                    console.log(PartyMember.Inventory[i])
                        // ITEM Menu Selection //
                    $("#OptionsHolder").append("<div class='BattleItemSlot'><input class='BattleItem animated bounce' type='image' src='" + PartyMember.Inventory[i].Avatar + "' id='" + i + "'>" + PartyMember.Inventory[i].Name + "</input></div>");
                    $("#" + i + "").click(function () {
                        // Using ITEMS //
                        var index = this.id;
                        console.log(PartyMember.Inventory[this.id].Name);
                        var Item = PartyMember.Inventory[index]
                        $("#OptionsHolder").html("<div>Do You Want To Use " + PartyMember.Inventory[index].Name + " ?</div><br><button class='MenuButton animated bounce' id='Accept'> Yes </button><button class='MenuButton animated bounce' id='Deny'> No </button>");
                        $("#Accept").click(function () {
                            WhichCharacter(Item, index);
                        });
                        $("#Deny").click(function () {
                            $("#OptionsHolder").html("");
                            ListItems();
                        });

                        function WhichCharacter(Item, index) {
                            console.log(Item);
                            $("#OptionsHolder").html("<span class'animated fadeIn'>Which Character Would You Like To Use " + PartyMember.Inventory[index].Name + " On?</span><br><div id='PartyList'></div>");
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
                                        $("#OptionsHolder").html("<div class='animated flipInX StatusMessage'><span>Are you sure you want to use a " + PartyMember.Inventory[index].Name + " on " + Party[this.id.substr(1, 1)].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
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
                                            PartyMember.Inventory.splice(index, 1);
                                            Character = PartyMember;
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
                                        if (PartyMember.Spells.length == 4) {
                                            $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated jello'> " + Party[this.id.substr(1, 1)].Name + " Has no more room for spells, Maybe another party member? </div>");
                                        }
                                        else {
                                            $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated tada'>Taught " + Item.Name + " To " + Party[this.id.substr(1, 1)].Name + " !</div>")
                                            localStorage.setItem('_thisID', JSON.stringify(this.id));
                                            setTimeout(function () {
                                                var ThisId = JSON.parse(localStorage.getItem('_thisID'));
                                                Party[ThisId.substr(1, 1)].Spells.push(Item);
                                                $("#OptionsHolder").html("");
                                                PartyMember.Inventory.splice(index, 1);
                                                Character = PartyMember;
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
                                                $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated jello'>  " + Party[ThisId.substr(1, 1)].Name + " Thought it was just okay... </div>");
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
                                                $("#OptionsHolder").html("<div id='Options' class=' MenuWrapper animated bounce'>  " + Party[ThisId.substr(1, 1)].Name + " Gained " + Item.Stats.Health + " HP </div>");
                                                setTimeout(function () {
                                                    console.log(PartyMember.Inventory)
                                                    console.log(index)
                                                    PartyMember.Inventory.splice(index, 1);
                                                    console.log(PartyMember.Inventory)
                                                    PartyMember = PartyMember;
                                                    //PartyMember.Inventory.pop(index);
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
            
            /* PLAYER ATTACK BUTTON */
            $("#Run").prop('disabled', true);
            $("#Attack").prop('disabled', true);
            $("#Items").prop('disabled', true);
            $("#Status").prop('disabled', true);
            $("#SpellsAttack").prop('disabled', true);
            //    
            $("#OptionsHolder").html("");
            for (i = 0; i < 4; i++) {
                console.log(PartyMember.Moves[i])
                if (PartyMember.Moves[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='" + i + "'>" + PartyMember.Moves[i].Name + "</button>");
                }
                else {
                    $("#OptionsHolder").append("<button disabled class='animated bounce MenuButtonDisabled' id='" + i + "'> No Move Set</button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (PartyMember.Moves[index].Cost > PartyMember.Stats[1].Value) {
                        $("#MessageHolder").html("<div class='animated rubberBand  MenuWrapper' id='StatusMSG'>" + PartyMember.Name + " Doesn't Have Enough Health! </div>");
                    }
                    else {
                        $("#OptionsHolder").html("");
                        
                        if (PartyMember.Moves[index].Cost == 0 ){
                            $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + PartyMember.Moves[index].Name + " will add " + PartyMember.Moves[index].Damage[0] +" - "+PartyMember.Moves[index].Damage[1]+ " damage to your attack</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        } else {
                            $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + PartyMember.Moves[index].Name + " will add " + PartyMember.Moves[index].Damage[0] +" - "+PartyMember.Moves[index].Damage[1]+" damage to your attack and cost " + PartyMember.Moves[index].Cost + " HP</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        }
                        
                        
                        
                        $("#Accept").click(function () {
                            var Move = PartyMember.Moves[index];
                            var MoveDamage = Math.floor(Math.random() * Move.Damage[1] - Move.Damage[0]) + Move.Damage[0];
                            console.log(Move.Damage);
                            PlayerAttack(Enemy, TempHealth, Move);
                        });
                        $("#AttackBack").click(function () {
                            PlayerTurn(Enemy,TempHealth);
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='AttackBack'> Back </button>");
            $("#AttackBack").click(function () {
                PlayerTurn(Enemy, TempHealth);
            });
        });
        /* PLAYER ATTACK */
        function PlayerAttack(Enemy, TempHealth, Move) {
               var MoveDamage = JSON.parse(localStorage.getItem('_MoveDamage'));
                // Regular Attack //
                var Spell = "";
                var CritcalChance = 0;
                var DidCriticalHit = false;
                var UsedMagic = false;
                var RandomAttack = Math.random() + .75;
                // Remove Cost from PLayer's HP if needed
                PartyMember.Stats[0].Value = PartyMember.Stats[0].Value - Move.Cost;
             $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
             localStorage.setItem('_Party', JSON.stringify(Party));
                /////
                RandomAttack = Math.round(PartyMember.Stats[1].Value * RandomAttack);
                FullAttack = RandomAttack + CritcalChance + MoveDamage;
            
                    // Move To Universal Damage Function //
                EnemyLosesHealthCheat(Enemy,TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
            
        };
    };
    
       //////////////////// PLAYER TURN //////////////////////////
    function PlayerTurn2(Enemy, TempHealth) {
        /* Setting Up Party */
        var Party = JSON.parse(localStorage.getItem('_Party'));
        var Enemy = JSON.parse(localStorage.getItem('_Enemy'));
        var TempHealth = JSON.parse(localStorage.getItem('_TempHealth'));
        PartyMember = Party[1];  
        
        //////////////////////////////
        $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "");
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button  class='MenuButton' id='Attack'>Attack</button><button class='MenuButtonDisabled' disabled id='Items'>Items</button><button class='MenuButtonDisabled' disabled id='Status'>Status</button><button class='MenuButton'  id='SpellsAttack'>Spells</button><br><button class='MenuButtonDisabled' disabled id='Run'>Run Away</button></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>It is now " + PartyMember.Name + "'s Turn </div>");
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
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + PartyMember.Name + " Ran Away Safely </div>");
                    setTimeout(function () {
                        BattleRunAway();
                    }, Party[0].PlayerTextSpeed);
                }
                else {
                    $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                    $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='StatusMSG'> " + PartyMember.Name + " could not release from the " + Enemy.Name + "'s grasp! </div>");
                    setTimeout(function () {
                        EnemyTurn(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }
            });
            $("#RBack").click(function () {
                PlayerTurn2(Enemy,TempHealth);
            });
        });
        $("#SpellsAttack").click(function () {
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            for (i = 0; i < 4; i++) {
                //  console.log(PartyMember.Spells[i])
                if (PartyMember.Spells[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton' id='" + i + "'>" + PartyMember.Spells[i].Name + "</button>");
                }
                else if (PartyMember.Spells.length == 0) {
                    $("#OptionsHolder").html("<div class='MenuWrapper' id='" + i + "'> No spells learned, Go learn some spells ! </div>");
                }
                else {
                    $("#OptionsHolder").append("<button class='MenuButtonDisabled' id='" + i + "'> No Spell Available </button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (PartyMember.Spells[index].Stats.Cost > PartyMember.Stats[7].Value) {
                        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>" + PartyMember.Name + " Doesn't Have Enough Mana! </div>");
                    }
                    else {
                        $("#OptionsHolder").html("");
                        $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + PartyMember.Spells[index].Name + " will do " + PartyMember.Spells[index].Stats.Damage + " damage and cost " + PartyMember.Spells[index].Stats.Cost + " MP </div><br>  <button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='SpellBack'> Back </button> ");
                        console.log(Enemy);
                        $("#Accept").click(function () {
                              console.log(Enemy);
                            $("#OptionsHolder").html("");
                            var ElementStrength = 0;
                            if (PartyMember.Spells[index].Stats.Element == Enemy.Weakness1 || PartyMember.Spells[index].Stats.Element == Enemy.Weakness2) {
                                var ElementStrength = 1.25;
                            }
                            else if (PartyMember.Spells[index].Stats.Element == Enemy.Strength1 || PartyMember.Spells[index].Stats.Element == Enemy.Strength2) {
                                var ElementStrength = 0.75;
                            }
                            else if (PartyMember.Spells[index].Stats.Element == Enemy.Type) {
                                var ElementStrength = 0.65;
                            }
                            else {
                                var ElementStrength = 1;
                            };
                            var CritcalChance = Math.floor((Math.random() * 10) + 1);
                            var DidCriticalHit = false;
                            var UsedMagic = true;
                            var Move = "";
                            PartyMember.Stats[7].Value = PartyMember.Stats[7].Value - PartyMember.Spells[index].Stats.Cost;
                            FullAttack = Math.round(PartyMember.Spells[index].Stats.Damage * ElementStrength);
                            console.log(FullAttack)
                            if (ElementStrength == 1.25) {
                                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + PartyMember.Name + " Attacks at " + Enemy.Name + "'s Weakness so " + PartyMember.Spells[index].Name + "  did an insane  " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                     console.log(FullAttack)
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }
                            else if (ElementStrength == 0.75) {
                                $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'> " + PartyMember.Name + " Attacks at " + Enemy.Name + "'s Strength so " + PartyMember.Spells[index].Name + " only did  " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                     console.log(FullAttack)
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }
                            else if (ElementStrength == 1) {
                                $("#MessageHolder").html("<h4 class='animated flash  Message' id='StatusMSG'> " + PartyMember.Name + " Used " + PartyMember.Spells[index].Name + " And Does " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                     console.log(FullAttack)
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }
                            else if (ElementStrength == 0.65) {
                                $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'> " + PartyMember.Name + " Attacks at " + Enemy.Name + "'s same type so " + PartyMember.Spells[index].Name + " barely effected it with   " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                     console.log(FullAttack)
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed);
                            }

                            function SpellMoveOn() {
                                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                                var Spell = PartyMember.Spells[index]
                                    // Move To Universal Damage Function //
                                setTimeout(function () {
                                     console.log(FullAttack)
                                     console.log(" THealth : ")
                                     console.log(TempHealth)
                                      localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                                    EnemyLosesHealth(Enemy,TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
                                }, Party[0].PlayerTextSpeed);
                            }
                        });
                        $("#SpellBack").click(function () {
                            PlayerTurn2(Enemy, TempHealth);
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='SBack'> Back </button>");
            $("#SBack").click(function () {
                PlayerTurn2(Enemy,  TempHealth);
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
                        var Party = JSON.parse(localStorage.getItem('_Party'));
                     //   var Character = JSON.parse(localStorage.getItem('_character'));
                        $("#Overlay").css("opacity", ".5");
                        $("#Player").html("<div class='SubMainTitle' id='PlayerName'>" + PartyMember.Name + " " + PartyMember.FamilyName + "</div><br><div class='HealthMainTitle' id='PlayerHealth'>Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "</div></div><br><div class='ManaMainTitle'  id='PlayerMana'>Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "</div><br><div class='XPMainTitle'  id='PlayerXP'>XP : " + PartyMember.Experience.Total + " / " + PartyMember.Experience.ToNextLevel + "</div>");
                        console.log("After Character")
                        console.log(PartyMember)
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
                for (i = 0; i < PartyMember.Inventory.length; i++) {
                    console.log(PartyMember.Inventory[i])
                        // ITEM Menu Selection //
                    $("#OptionsHolder").append("<div class='BattleItemSlot'><input class='BattleItem animated bounce' type='image' src='" + PartyMember.Inventory[i].Avatar + "' id='" + i + "'>" + PartyMember.Inventory[i].Name + "</input></div>");
                    $("#" + i + "").click(function () {
                        // Using ITEMS //
                        var index = this.id;
                        console.log(PartyMember.Inventory[this.id].Name);
                        var Item = PartyMember.Inventory[index]
                        $("#OptionsHolder").html("<div>Do You Want To Use " + PartyMember.Inventory[index].Name + " ?</div><br><button class='MenuButton animated bounce' id='Accept'> Yes </button><button class='MenuButton animated bounce' id='Deny'> No </button>");
                        $("#Accept").click(function () {
                            WhichCharacter(Item, index);
                        });
                        $("#Deny").click(function () {
                            $("#OptionsHolder").html("");
                            ListItems();
                        });

                        function WhichCharacter(Item, index) {
                            console.log(Item);
                            $("#OptionsHolder").html("<span class'animated fadeIn'>Which Character Would You Like To Use " + PartyMember.Inventory[index].Name + " On?</span><br><div id='PartyList'></div>");
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
                                        $("#OptionsHolder").html("<div class='animated flipInX StatusMessage'><span>Are you sure you want to use a " + PartyMember.Inventory[index].Name + " on " + Party[this.id.substr(1, 1)].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
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
                                            PartyMember.Inventory.splice(index, 1);
                                            Character = PartyMember;
                                            localStorage.setItem('_character', JSON.stringify(Character));
                                            localStorage.setItem('_Party', JSON.stringify(Party));
                                            setTimeout(function () {
                                                $("#InventoryDialog").html("");
                                                PlayerTurn2(Enemy, TempHealth);
                                            }, Party[0].PlayerTextSpeed);
                                        });
                                        $("#No").click(function () {
                                            $("#OptionsHolder").html("");
                                            $("#InventoryContainer").html("");
                                            $("#InventoryDialog").html("");
                                            PlayerTurn2(Enemy, TempHealth);
                                        });
                                    }
                                    else if (Item.Type == "Misc") {
                                        $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated rubberBand'>You Can't Use A " + Item.Name + " On " + Party[this.id.substr(1, 1)].Name + " ? What are you even thinking? It has no effect...</div>");
                                        setTimeout(function () {
                                            PlayerTurn2(Enemy, TempHealth);
                                        }, Party[0].PlayerTextSpeed );
                                    }
                                    else if (Item.Type == "Spell") {
                                        if (PartyMember.Spells.length == 4) {
                                            $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated jello'> " + Party[this.id.substr(1, 1)].Name + " Has no more room for spells, Maybe another party member? </div>");
                                        }
                                        else {
                                            $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated tada'>Taught " + Item.Name + " To " + Party[this.id.substr(1, 1)].Name + " !</div>")
                                            localStorage.setItem('_thisID', JSON.stringify(this.id));
                                            setTimeout(function () {
                                                var ThisId = JSON.parse(localStorage.getItem('_thisID'));
                                                Party[ThisId.substr(1, 1)].Spells.push(Item);
                                                $("#OptionsHolder").html("");
                                                PartyMember.Inventory.splice(index, 1);
                                                Character = PartyMember;
                                                localStorage.setItem('_character', JSON.stringify(Character));
                                                localStorage.setItem('_Party', JSON.stringify(Party));
                                                PlayerTurn2(Enemy,  TempHealth);
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
                                                $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated jello'>  " + Party[ThisId.substr(1, 1)].Name + " Thought it was just okay... </div>");
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
                                                $("#OptionsHolder").html("<div id='Options' class=' MenuWrapper animated bounce'>  " + Party[ThisId.substr(1, 1)].Name + " Gained " + Item.Stats.Health + " HP </div>");
                                                setTimeout(function () {
                                                    console.log(PartyMember.Inventory)
                                                    console.log(index)
                                                    PartyMember.Inventory.splice(index, 1);
                                                    console.log(PartyMember.Inventory)
                                                    PartyMember = PartyMember;
                                                    //PartyMember.Inventory.pop(index);
                                                    localStorage.setItem('_character', JSON.stringify(Character));
                                                    localStorage.setItem('_Party', JSON.stringify(Party));
                                                    $("#PartyStatus").load("./temp/Status.html");
                                                    PlayerTurn2(Enemy, TempHealth);
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
                    PlayerTurn2(Enemy,  TempHealth);
                });
            };
        });
        $("#Attack").click(function () {
           var Party = JSON.parse(localStorage.getItem('_Party'));
            
            /* PLAYER ATTACK BUTTON */
            $("#Run").prop('disabled', true);
            $("#Attack").prop('disabled', true);
            $("#Items").prop('disabled', true);
            $("#Status").prop('disabled', true);
            $("#SpellsAttack").prop('disabled', true);
            //    
            $("#OptionsHolder").html("");
            for (i = 0; i < 4; i++) {
                console.log(PartyMember.Moves[i])
                if (PartyMember.Moves[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='" + i + "'>" + PartyMember.Moves[i].Name + "</button>");
                }
                else {
                    $("#OptionsHolder").append("<button disabled class='animated bounce MenuButtonDisabled' id='" + i + "'> No Move Set</button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (PartyMember.Moves[index].Cost > PartyMember.Stats[1].Value) {
                        $("#MessageHolder").html("<div class='animated rubberBand  MenuWrapper' id='StatusMSG'>" + PartyMember.Name + " Doesn't Have Enough Health! </div>");
                    }
                    else {
                        $("#OptionsHolder").html("");
                        
                        if (PartyMember.Moves[index].Cost == 0 ){
                            $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + PartyMember.Moves[index].Name + " will add " + PartyMember.Moves[index].Damage[0] +" - "+PartyMember.Moves[index].Damage[1]+ " damage to your attack</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        } else {
                            $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + PartyMember.Moves[index].Name + " will add "+ PartyMember.Moves[index].Damage[0] +" - "+PartyMember.Moves[index].Damage[1]+" damage to your attack and cost " + PartyMember.Moves[index].Cost + " HP</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        }
                        
                        
                        
                        $("#Accept").click(function () {
                            var Move = PartyMember.Moves[index];
                            var MoveDamage = Math.floor(Math.random() * Move.Damage[1] - Move.Damage[0]) + Move.Damage[0];
                            console.log(Move.Damage);
                           
                            PlayerAttack(Enemy, TempHealth, Move);
                        });
                        $("#AttackBack").click(function () {
                            PlayerTurn2(Enemy,TempHealth);
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='AttackBack'> Back </button>");
            $("#AttackBack").click(function () {
                PlayerTurn2(Enemy, TempHealth);
            });
        });
        /* PLAYER ATTACK */
        function PlayerAttack(Enemy, TempHealth, Move) {
            var MoveDamage = JSON.parse(localStorage.getItem('_MoveDamage'));
    // Regular Attack //
                var Spell = "";
                var CritcalChance = 0;
                var DidCriticalHit = false;
                var UsedMagic = false;
                var RandomAttack = Math.random() + .75;
                // Remove Cost from PLayer's HP if needed
                PartyMember.Stats[0].Value = PartyMember.Stats[0].Value - Move.Cost;
             $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
                /////
                RandomAttack = Math.round(PartyMember.Stats[1].Value * RandomAttack);
                FullAttack = RandomAttack + CritcalChance + MoveDamage
                  localStorage.setItem('_Party', JSON.stringify(Party));
                  localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                    // Move To Universal Damage Function //
                EnemyLosesHealth(Enemy,TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
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
                //Check STRENGTH WEAKNESS//
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
        PartyMember.Stats[0].Value = PartyMember.Stats[0].Value + PartyMember.Stats[2].Value;
        if (EnemyAttackOption.Stats.Element == PartyMember.Weakness1 || EnemyAttackOption.Stats.Element == PartyMember.Weakness2) {
            var EnemyElementStrength = 1.25;
        }
        else if (EnemyAttackOption.Stats.Element == PartyMember.Strength1 || EnemyAttackOption.Stats.Element == PartyMember.Strength2) {
            var EnemyElementStrength = 0.75;
        }
        else {
            var EnemyElementStrength = 1;
        };
        console.log(EnemyElementStrength)
        if (PartyMember.Stats[2].Value < Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength))) {
            PartyMember.Stats[0].Value = PartyMember.Stats[0].Value - Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength));
            DamageEarned = Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength)) - PartyMember.Stats[2].Value;
        }
        else {
            PartyMember.Stats[0].Value = PartyMember.Stats[0].Value - PartyMember.Stats[2].Value;
            PartyMember.Stats[0].Value = PartyMember.Stats[0].Value - 1;
            DamageEarned = 1 * EnemyElementStrength;
        };
        if (PartyMember.Stats[0].Value > 0) {
            /* If Player Loses health */
            setTimeout(function () {
                if (EnemyElementStrength == 1.25) {
                    $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'>It attacked " + PartyMember.Name + "'s weakness and did " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //    PlayerTurn(Enemy,  TempHealth);
                        $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "");
                          console.log(PartyMember.Stats[0].Value )
                           localStorage.setItem('_Party', JSON.stringify(Party));
                           localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                           localStorage.setItem('_TempHealth', JSON.stringify(_TempHealth));
                       FourthDialog(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }
                else if (EnemyElementStrength == 0.75) {
                    $("#MessageHolder").html("<h4 class='animated bounce  Message' id='StatusMSG'>It attacked " + PartyMember.Name + "'s strength so it only did  " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //    PlayerTurn(Enemy, TempHealth);
                        console.log(PartyMember.Stats[0].Value )
                        $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "");
                          console.log(PartyMember.Stats[0].Value )
                        localStorage.setItem('_Party', JSON.stringify(Party));
                           localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                           localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                       FourthDialog(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }
                else {
                      console.log(PartyMember.Stats[0].Value )
                    BattleDamage()
                };

                function BattleDamage() {
                      console.log(PartyMember.Stats[0].Value )
                    $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
                    $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'>It did " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //  PlayerTurn(Enemy, empHealth);
                         localStorage.setItem('_Party', JSON.stringify(Party));
                           localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                           localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                       FourthDialog(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                };
            }, Party[0].PlayerTextSpeed);
        }
        else {
            /* PLAYER DIES */
            PartyMember.Stats[0].Value = 0;
            $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
            $("#MessageHolder").html("<h4 class='animated hinge  Message' id='StatusMSG'> " + PartyMember.Name + " passed out ! </div>");
            setTimeout(function () {
                BattleLost(Enemy,  TempHealth);
            }, Party[0].PlayerTextSpeed);
        }
    }

    function EnemyLosesHealth(Enemy,TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move) {
           var Party = JSON.parse(localStorage.getItem('_Party'));
          var Enemy = JSON.parse(localStorage.getItem('_Enemy'));
        
        $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
        CriticalChance = 0;
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        //// ENEMY LOSES IT'S HEALTH HERE ////
         console.log("TempHealth : ")
         console.log(TempHealth)
         console.log(FullAttack)
        FullAttack = FullAttack + CritcalChance;
        console.log(FullAttack)
        TempHealth = TempHealth - FullAttack
         console.log(FullAttack)
         console.log(TempHealth)
        if (TempHealth > 0) {
            /* If ENEMY Loses HEALTH */
            if (DidCriticalHit == true) {
                $("#MessageHolder").html("<h4 class='animated tada  Message' id='StatusMSG'>Critical Hit!</div>");
            }
            else if (UsedMagic == true) {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Spell.Name + " costed " + Spell.Stats.Cost + " Mana </div>")
                 console.log(FullAttack)
            }
            else {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks using " + Move.Name + " </div>");
            }
            setTimeout(function () {
                console.log(TempHealth)
                console.log( Enemy.Stats.Health)
                $("#EnemyHealth").html("Health : " + TempHealth + " / " + Enemy.Stats.Health);
                $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value);
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage </div>");
                setTimeout(function () {
                    localStorage.setItem('_Party', JSON.stringify(Party));
                   ThirdDialog();
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
                $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'>" + PartyMember.Name + " destroys " + Enemy.Name + " using " + Move.Name + " </div>");
                setTimeout(function () {
                    $("#EnemyHealth").html("Health : " + 0 + " / " + Enemy.Stats.Health);
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    BattleWon(Enemy,  TempHealth);
                }, Party[0].PlayerTextSpeed);
            }

            function AttackInfo() {
                setTimeout(function () {
                    console.log("Enemy Died")
                    
                    $("#EnemyHealth").html("Health : " + 0 + " / " + Enemy.Stats.Health);
                    $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value);
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage</div>");
                    setTimeout(function () {
                        $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Enemy.Name + " died </div>");
                        setTimeout(function () {
                            $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'> " + PartyMember.Name + " won the fight! </div>");
                            setTimeout(function () {
                                localStorage.setItem('_PartyMember', JSON.stringify(PartyMember));
                                BattleWon(Enemy, TempHealth);
                            }, Party[0].PlayerTextSpeed);
                        }, Party[0].PlayerTextSpeed);
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            };
        }
    };
    
    
     function EnemyLosesHealthCheat(Enemy,TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move) {
           var Party = JSON.parse(localStorage.getItem('_Party'));
        
        $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
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
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks using " + Move.Name + " </div>");
            }
            setTimeout(function () {
                console.log(TempHealth)
                console.log( Enemy.Stats.Health)
                $("#EnemyHealth").html("Health : " + TempHealth + " / " + Enemy.Stats.Health);
                $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value);
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage </div>");
                setTimeout(function () {
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                    localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                   SecondDialog();
                }, Party[0].PlayerTextSpeed);
            }, Party[0].PlayerTextSpeed);
        }
        else {
             TempHealth =  1;
            /* If ENEMY Loses HEALTH */
            if (DidCriticalHit == true) {
                $("#MessageHolder").html("<h4 class='animated tada  Message' id='StatusMSG'>Critical Hit!</div>");
            }
            else if (UsedMagic == true) {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Spell.Name + " costed " + Spell.Stats.Cost + " Mana </div>")
            }
            else {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks using " + Move.Name + " </div>");
            }
            setTimeout(function () {
                console.log(TempHealth)
                console.log( Enemy.Stats.Health)
                $("#EnemyHealth").html("Health : " + TempHealth + " / " + Enemy.Stats.Health);
                $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value);
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage </div>");
                setTimeout(function () {
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                    localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                   //  EnemyTurn(Enemy, TempHealth);
                    SecondDialog();
                }, Party[0].PlayerTextSpeed);
            }, Party[0].PlayerTextSpeed);
        }
    };
    
    
    

    function BattleWon(Enemy, TempHealth) {
    //    var Character = JSON.parse(localStorage.getItem('_character'));
        var Party = JSON.parse(localStorage.getItem('_Party'));
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
                LootName = " Also " + PartyMember.Name + " obtained a " + Loot.Name + " !";
            }
        }
        Party[0].Wallet.Total = Party[0].Wallet.Total + Enemy.Earnings.Total;
        PartyMember.Experience.Total = PartyMember.Experience.Total + Enemy.Experience.ExperienceEarned;
        $("#PlayerXP").html("XP : " + PartyMember.Experience.Total + " / " + PartyMember.Experience.ToNextLevel + "");
      //  localStorage.setItem('_character', JSON.stringify(Character));
        localStorage.setItem('_Party', JSON.stringify(Party));
        CheckLevel(PartyMember);

        function CheckLevel() {
            var GainedLevel = 0;
            var DidGainLevel = false;
            console.log("Configuring Character Experience and Level");
       //     var Character = JSON.parse(localStorage.getItem('_character'));
            var Party = JSON.parse(localStorage.getItem('_Party'));
            console.log(PartyMember.Experience);
            console.log("Level : " + PartyMember.Level);
            /* Experience System WHILE Statements //// Make More Concise Later! /////// */
            while (PartyMember.Experience.Total >= PartyMember.Experience.ToNextLevel) {
                PartyMember.Experience.Total = PartyMember.Experience.ToNextLevel - PartyMember.Experience.Total;
                PartyMember.Experience.Total = Math.abs(PartyMember.Experience.Total);
                PartyMember.Experience.ToNextLevel = Math.round(PartyMember.Experience.ToNextLevel * 1.45);
                PartyMember.Level = PartyMember.Level + 1;
                PartyMember.Experience.SkillPoints = PartyMember.Experience.SkillPoints + 3;
                PartyMember.Stats[0].Value = PartyMember.Stats[6].Value;
                PartyMember.Stats[7].Value = PartyMember.Stats[8].Value;
                DidGainLevel = true;
                GainedLevel++
                console.log(PartyMember)
                $("#PlayerXP").html("XP : " + PartyMember.Experience.Total + " / " + PartyMember.Experience.ToNextLevel + "");
            }
            if (DidGainLevel == true) {
                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + PartyMember.Name + "  Earned " + Enemy.Earnings.Total + " Coins and Gained " + Enemy.Experience.ExperienceEarned + " XP " + LootName + " and gained " + GainedLevel + " level!</span><br></div>");
            //    localStorage.setItem('_character', JSON.stringify(Character));
                localStorage.setItem('_Party', JSON.stringify(Party));
                setTimeout(function () {
                    ThirdDialog()
                }, 2500);
            }
            else {
                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + PartyMember.Name + "  Earned " + Enemy.Earnings.Total + " Coins and Gained " + Enemy.Experience.ExperienceEarned + " XP " + LootName + "</span><br> </div>");
            //    localStorage.setItem('_character', JSON.stringify(Character));
                localStorage.setItem('_Party', JSON.stringify(Party));
                setTimeout(function () {
                    ThirdDialog()
                }, 2500);
            };
        };
        $("#Finish").click(function () {
            $("#App").load("./temp/Victoria.html")
        });
    }

    function BattleLost(Enemy,TempHealth) {
        $("#Run").prop('disabled', true);
        $("#Attack").prop('disabled', true);
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span> Game Over </span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
    //    localStorage.clear();
        $("#Finish").click(function () {
            $("#App").load("./index.html")
        });
    };

    function BattleRunAway(Enemy,TempHealth) {
        var Character = JSON.parse(localStorage.getItem('_character'));
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span>" + PartyMember.Name + "  Did not earn anything from this battle.</span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
       // localStorage.setItem('_character', JSON.stringify(Character));
        localStorage.setItem('_Party', JSON.stringify(Party));
        $("#Finish").click(function () {
            $("#App").load("./temp/Victoria.html")
        });
    };

    function SecondDialog(Enemy, TempHealth) {
        var Party = JSON.parse(localStorage.getItem('_Party'));
    //    console.log("Second Dialog")
    //    console.log(PartyMember.Stats[0].Value);
        $("#App").prepend("<div class='CharacterMessageContainer' id='CharacterMessageContainer'><div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div></div>")
            // Sets up the character themselves and their dialog
        $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Great first attack! Now it's my turn. What should I do?  '</div>");
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
                    , Dialog: "  ' I could use a spell? or how about an attack! '  <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> *Ben's turn*</button>  "
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
                            DialogSelect.Music.play();
                        }
                        else if (DialogSelect.SoundControl == "Play") {
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
            $("#Accept2").click(function () {
                        $("#StatusMessageHolder").html("");
                        $("#ContinueMessageHolder").html("");
                        $("#CharacterMessageContainer").remove();
                        PlayerTurn2(Enemy,  TempHealth);
                    });
        }
    };

    function ThirdDialog() {
        $("#App").prepend("<div class='CharacterMessageContainer' id='CharacterMessageContainer'><div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div></div>")
            // Sets up the character themselves and their dialog
        $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Whew, I'm getting tired! '</div>");
      
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
                    , Dialog: " Oh no.. "
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
                    , Dialog: " It's Going To Attack Us! "
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
                    , Dialog: " ' Look out "+Party[0].Name+" ! '  <br> <button class='MenuButton animated flipInY' id='Accept3'> *Seal Attacks* </button> "
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
                PartyMember = Party[0]
                EnemyTurn();
             
            });
        }
    };
    
     function FourthDialog() {
        $("#App").prepend("<div class='CharacterMessageContainer' id='CharacterMessageContainer'><div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div></div>")
            // Sets up the character themselves and their dialog
        $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Are you okay? '</div>");
      
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
                    , Dialog: " Now he is looking at me! "
                    , Button: "No"
                    , ChangeCharacter: "No"
                    , Avatar: "./img/BenAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Sea Lion "
                    , Dialog: " Garuuu "
                    , Button: "No"
                    , ChangeCharacter: "Yes"
                    , Avatar: "./img/SeaLion.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Ben "
                    , Dialog: " Let's do this!"
                    , Button: "No"
                    , ChangeCharacter: "Yes"
                    , Avatar: "./img/BenAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Ben "
                    , Dialog: " I'm ready ! "
                    , Button: "No"
                    , ChangeCharacter: "No"
                    , Avatar: "./img/BenAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Jan "
                    , Dialog: " "+Party[0].Name+" ? "
                    , Button: "No"
                    , ChangeCharacter: "Yes"
                    , Avatar: "./img/JanAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Ben "
                    , Dialog: " Uh oh.. "
                    , Button: "No"
                    , ChangeCharacter: "Yes"
                    , Avatar: "./img/BenAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Jan "
                    , Dialog: " and is that Ben ? "
                    , Button: "No"
                    , ChangeCharacter: "Yes"
                    , Avatar: "./img/JanAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Ben "
                    , Dialog: " Yeah."
                    , Button: "No"
                    , ChangeCharacter: "Yes"
                    , Avatar: "./img/BenAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Jan "
                    , Dialog: "  Get away from that poor Sea Lion ! "
                    , Button: "No"
                    , ChangeCharacter: "Yes"
                    , Avatar: "./img/JanAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Jan "
                    , Dialog: "  and come with me back to my office.. "
                    , Button: "No"
                    , ChangeCharacter: "No"
                    , Avatar: "./img/JanAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Ben "
                    , Dialog: "  Aw man!  "
                    , Button: "No"
                    , ChangeCharacter: "Yes"
                    , Avatar: "./img/BenAvatar.png"
                    , Sound: "No"
                    , SoundControl: "None"
                    , Music: "No"
                    , MusicControl: "None"
                , },
                {
                    Name: " Ben "
                    , Dialog: "  'Come on "+Party[0].Name+" , Don't tell her anything okay?'  <br> <button class='MenuButton animated flipInY' id='Accept4'> *Follow Jan* </button>"
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
                Party[0].Triggers.Victoria8 = true;
                localStorage.setItem('_Party', JSON.stringify(Party));
                 $("#StatusMessageHolder").html("");
                $("#ContinueMessageHolder").html("");
                $("#CharacterMessageContainer").remove();
               $("#App").load("./temp/JanOffice.html");
             
            });
        }
    };
   
    
};