////////////// Table Of Contents////////////
// ~~~~~ 1  Creating Objects
// ~~~~~ 2 Battle Functions
// ~~~~~ 3 Win/Loss Conditions/Functions
// ~~~~~ 4 Misc.
////////////////////////////////////////////
console.clear();
console.log("~~~~~~~~~~~BATTLE STARTED~~~~~~~~~~");
StartBattle();

function StartBattle() {
    /*~~~~~~~~~~~~~~~~~~~~ Creating Objects   /1/ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*
    
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
    
    
    
    
    
    */
    $("#Overlay").css("opacity", "0.50");
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    $("#Player").css("background", "" + Party[0].Color + "");
    ////// ENEMY CREATOR /////
    
   
    
    /*
    Spirit Bear
    Armour sets for spirit animals
      // Mudman
    // Piranna
    // Alligator
    // Jellyfish
     // Spriggen
    // Boss Spirit Animals
    */
    
    
  
    
    var Enemies = [
            {
                Name: 'Sea Otter'
                , Avatar: "./img/SeaOtter.jpg"
                , Type: "Saltwater"
                , SpawnRate:0.25
                , Strength1: "Mountain"
                , Strength2: "Desert"
                , Weakness1: "Boreal Forest"
                , Weakness2: "Deciduous Forest"
                , Color: "#B7B7FF"
                , Stats: {
                    Health: Math.floor(Math.random() * 25) + 5
                    , Attack: Math.floor(Math.random() * 2) + 1
                    , Defense: Math.floor(Math.random() * 2) + 0
                    , Magic: 0
                    , Vitality: Math.floor(Math.random() * 2) + 0
                    , Accuracy: Math.floor(Math.random() * 0.96) + 0.60
                , }
                , Loot: [{
                    Name: "Limpet"
                    , IDName: "Limpet"
                    , Avatar: "./img/Limpit.png"
                    , Type: "Food"
                    , Index: 0
                    ,Weight: 1
                    , Stats: {
                        Health: 5
                    }
                    , Worth: 5
                    , DropRate: 0.85
                },
                         {
                Name: " Imp's Bane "
                , IDName: "ImpsBane"
                , Avatar: "./img/ImpsBane.jpg"
                , Type: "Weapon"
                , Description: " A <strong>dagger</strong> ripped from the roots of the life tree <strong>Yggdrasil</strong>. "
                , Index: 0
                ,Weight: 1.5
                ,Equip:"RightHand"
                , Stats: {
                    Attack: [1,3],
                    CriticalAttack: 4,
                    Enchanted : false,
                    Durability: 100,
                 }
                , Worth: 3
                , DropRate: 0.03
    },]
                , MoveSet: [

                    {
                        Name: "Salty Spray"
                        , Type: "Element"
                        , Index: 0
                        , Stats: {
                            Damage: Math.floor(Math.random() * 2) + 1
                            , Element: "Saltwater"
                        , }
                    , }
                    , {
                        Name: "Smack"
                        , Type: "Attack"
                        , Index: 0
                        , Stats: {
                            Damage: Math.floor(Math.random() * 3) + 1
                            , Element: "None"
                        }
                }

            ]
                , Earnings: {
                    Total: Math.floor(Math.random() * 6) + 2
                , }
                , Experience: {
                    ExperienceEarned: Math.floor(Math.random() * 13) + 4
                , }
                , RunStat: 150
            , }
    , {
                Name: 'Mountain Goat'
                , Avatar: "./img/MountainGoat.png"
                , Type: "Mountain"
                , SpawnRate:0.35
                , Strength1: "Boreal Forest"
                , Strength2: "Desert"
                , Weakness1: "Saltwater"
                , Weakness2: "Freshwater"
                , Color: "#D7ACAC"
                , Stats: {
                    Health: Math.floor(Math.random() * 20) + 5
                    , Attack: Math.floor(Math.random() * 2) + 1
                    , Defense: Math.floor(Math.random() * 1) + 0
                    , Magic: 0
                    , Vitality: Math.floor(Math.random() * 2) + 0
                    , Accuracy: Math.floor(Math.random() * 0.96) + 0.60
                , }
                , Loot: [{
                    Name: "Grass Bundle"
                    , IDName: "GrassBundle"
                    , Avatar: "./img/GrassBundle.png"
                    , Type: "Misc"
                    , Index: 0
                    ,Weight: 2
                    , Stats: {}
                    , Worth: 2
                    , DropRate: 0.65
                }, ]
                , MoveSet: [

                    {
                        Name: "Rolling Rock"
                        , Type: "Element"
                        , Index: 0
                        , Stats: {
                            Damage: Math.floor(Math.random() * 3) + 1
                            , Element: "Mountain"
                        , }
                    , }
                    , {
                        Name: "Bodyslam"
                        , Type: "Attack"
                        , Index: 0
                        , Stats: {
                            Damage: Math.floor(Math.random() * 4) + 1
                            , Element: "None"
                        }
                }

            ]
                , Earnings: {
                    Total: Math.floor(Math.random() * 8) + 2
                , }
                , Experience: {
                    ExperienceEarned: Math.floor(Math.random() * 9) + 2
                , }
                , RunStat: 300
            , }, {
                Name: 'Starfish'
                , Avatar: "./img/Starfish.gif"
                , Type: "Saltwater"
                , SpawnRate:0.40
                , Strength1: "Mountain"
                , Strength2: "Desert"
                , Weakness1: "Boreal Forest"
                , Weakness2: "Deciduous Forest"
                , Color: "#B7B7FF"
                , Stats: {
                    Health: Math.floor(Math.random() * 10) + 5
                    , Attack: Math.floor(Math.random() * 1) + 1
                    , Defense: Math.floor(Math.random() * 1) + 0
                    , Magic: 0
                    , Vitality: Math.floor(Math.random() * 1) + 0
                    , Accuracy: Math.floor(Math.random() * 0.96) + 0.55
                , }
                , Loot: [{
                    Name: "Ball Of Sand"
                    , IDName: "BallOfSand"
                    , Avatar: "./img/BallOfSand.png"
                    , Type: "Misc"
                    , Index: 0
                    ,Weight: 2
                    , Stats: {}
                    , Worth: 1
                    , DropRate: 0.35
                }, ]
                , MoveSet: [

                    {
                        Name: "Sea Spin"
                        , Type: "Element"
                        , Index: 0
                        , Stats: {
                            Damage: Math.floor(Math.random() * 2) + 1
                            , Element: "Saltwater"
                        , }
                    , }
                    , {
                        Name: "Pointy Spike"
                        , Type: "Attack"
                        , Index: 0
                        , Stats: {
                            Damage: Math.floor(Math.random() * 2) + 1
                            , Element: "None"
                        }
                }

            ]
                , Earnings: {
                    Total: Math.floor(Math.random() * 3) + 2
                , }
                , Experience: {
                    ExperienceEarned: Math.floor(Math.random() * 8) + 2
                , }
                , RunStat: 350
            , },

]
        ////////////////// /////
    console.log("Available Enemies : ");
    for (i = 0; i < Enemies.length; i++) {
        console.log(Enemies[i]);
    };
    StartBattle(Party[0])
        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        /*~~~~~~~~~~~~~~~~~~~~ Battle Functions    /2/~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function StartBattle(Party[0]) {
        /* Randomize The Enemy Encounter */
        
        EnemyPicker();
        
        function EnemyPicker(){
            
        var PickingEnemy =  Math.random().toFixed(2);
        var Enemy = Enemies[Math.floor(Math.random() * Enemies.length)];
        console.log(PickingEnemy)
        console.log(Enemy.SpawnRate)
        if (Enemy.SpawnRate > PickingEnemy){
            Enemy = Enemy;
            CreateBattle(Enemy);
        } else {
            console.log("Picking Again")
            EnemyPicker();
        };
            
        };
        
        
        
        function CreateBattle(Enemy){
            console.log("Current Enemy :")
        console.log(Enemy)
        Enemy.Stats.Health = Enemy.Stats.Health + Enemy.Stats.Vitality;
        var TempHealth = Enemy.Stats.Health;
        
            /* Change Status */
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>A " + Enemy.Name + " Approaches </div>");
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
        //Update HealthBArs
        $("#HealthBar").css("width", "100%");
        /* Activate Turn Decider */
        setTimeout(function () {
            TurnChoice(Enemy, Party[0], TempHealth);
        }, Party[0].PlayerTextSpeed);
    };
    };
    //////////////////// TURN DECIDER //////////////////////////
    function TurnChoice(Enemy, Party[0], TempHealth) {
        /* Randomly Decide First Turn */
        var Chooser = [{
                    Player: Party[0].Name
                , }
            , {
                    Player: Enemy.Name
                , }]
            /* Decide Odds Later */
        var Choice = Chooser[Math.floor(Math.random() * Chooser.length)];
        /* Make this better later, probably not an IF/ELSE statement */
        if (Choice.Player === Party[0].Name) {
            PlayerTurn(Enemy, Party[0], TempHealth)
        }
        else {
            EnemyTurn(Enemy, Party[0], TempHealth);
        };
        /*
        console.log(Chooser);
        console.log("Choice");
        console.log(Choice);  */
    };
    /////////////////////////////////////////////
    //////////////////// ENEMY TURN   //////////////////////////
    function EnemyTurn(Enemy, Party[0], TempHealth) {
        var Character = JSON.parse(localStorage.getItem('_character'));
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button class='MenuButtonDisabled' disabled id='Attack'>Attack</button><button class='MenuButtonDisabled' disabled id='Items'>Items</button><button class='MenuButtonDisabled' id='Status' disabled>Status</button><button class='MenuButtonDisabled' disabled id='SpellsAttack'>Spells</button><br><button class='MenuButtonDisabled' disabled id='Run'>Run Away</button></div>");
        $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='StatusMSG'>It is now " + Enemy.Name + "'s Turn </div>");
        setTimeout(function () {
            EnemyMove(Enemy, Party[0], TempHealth);
        }, Party[0].PlayerTextSpeed);
    };

    function EnemyMove(Enemy, Party[0], TempHealth) {
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
                    $("#MessageHolder").html("<h4 class='animated bounce  Message' id='StatusMSG'>" + Enemy.Name + " Continues the fight anyway! </div>");
                    setTimeout(function () {
                        EnemyAttack(Enemy, Party[0], TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            }
        }
        else {
            EnemyAttack(Enemy, Party[0], TempHealth);
        };

        function EnemyAttack(Enemy, Party[0], TempHealth) {
            /* ENEMY ATTACKS */
            EnemyAttackChoice(Enemy, TempHealth);
        };
    };
    //////////////////// PLAYER TURN //////////////////////////
    function PlayerTurn(Enemy, Party[0], TempHealth) {
        /* Setting Up Party */
        var Party = JSON.parse(localStorage.getItem('_Party'));
        Party[0] = Character;
        localStorage.setItem('_Party', JSON.stringify(Party));
        var Party = JSON.parse(localStorage.getItem('_Party'));
        //////////////////////////////
        $("#PlayerHealth").html("Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value + "");
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button class='MenuButton' id='Attack'>Attack</button><button class='MenuButton' id='Items'>Items</button><button class='MenuButton' id='Status'>Status</button><button class='MenuButton' id='SpellsAttack'>Spells</button><br><button class='MenuButton' id='Run'>Run Away</button></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>It is now " + Party[0].Name + "'s Turn </div>");
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
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Party[0].Name + " Ran Away Safely </div>");
                    setTimeout(function () {
                        BattleRunAway();
                    }, Party[0].PlayerTextSpeed);
                }
                else {
                    $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                    $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='StatusMSG'> " + Party[0].Name + " could not release from the " + Enemy.Name + "'s grasp! </div>");
                    setTimeout(function () {
                        EnemyTurn(Enemy, Party[0], TempHealth);
                    }, Party[0].PlayerTextSpeed + 1000);
                }
            });
            $("#RBack").click(function () {
                PlayerTurn(Enemy, Party[0], TempHealth);
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
                                }, Party[0].PlayerTextSpeed + 1500);
                            }
                            else if (ElementStrength == 0.75) {
                                $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'> " + Party[0].Name + " Attacks at " + Enemy.Name + "'s Strength so " + Party[0].Spells[index].Name + " only did  " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed + 1500);
                            }
                            else if (ElementStrength == 1) {
                                $("#MessageHolder").html("<h4 class='animated flash  Message' id='StatusMSG'> " + Party[0].Name + " Used " + Party[0].Spells[index].Name + " And Does " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed + 1500);
                            }
                            else if (ElementStrength == 0.65) {
                                $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'> " + Party[0].Name + " Attacks at " + Enemy.Name + "'s same type so " + Party[0].Spells[index].Name + " barely effected it with   " + FullAttack + " Points of damage! </div>");
                                setTimeout(function () {
                                    SpellMoveOn()
                                }, Party[0].PlayerTextSpeed + 1500);
                            }

                            function SpellMoveOn() {
                                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                                var Spell = Party[0].Spells[index]
                                    // Move To Universal Damage Function //
                                setTimeout(function () {
                                    EnemyLosesHealth(Enemy, Party[0], TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
                                }, Party[0].PlayerTextSpeed);
                            }
                        });
                        $("#SpellBack").click(function () {
                            PlayerTurn(Enemy, Party[0], TempHealth);
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='SBack'> Back </button>");
            $("#SBack").click(function () {
                PlayerTurn(Enemy, Party[0], TempHealth);
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
                    $("#OptionsHolder").append("<div class='BattleItemSlot'><input class='BattleItem animated bounce' type='image' src='" + Party[0].Inventory[i].Avatar + "' id='" + i + "'>" + Party[0].Inventory[i].Name + "</input></div>");
                    $("#" + i + "").click(function () {
                        // Using ITEMS //
                        var index = this.id;
                        console.log(Party[0].Inventory[this.id].Name);
                        var Item = Party[0].Inventory[index]
                        $("#OptionsHolder").html("<div>Do You Want To Use " + Party[0].Inventory[index].Name + " ?</div><br><button class='MenuButton animated bounce' id='Accept'> Yes </button><button class='MenuButton animated bounce' id='Deny'> No </button>");
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
                                                PlayerTurn(Enemy, Party[0], TempHealth);
                                            }, Party[0].PlayerTextSpeed);
                                        });
                                        $("#No").click(function () {
                                            $("#OptionsHolder").html("");
                                            $("#InventoryContainer").html("");
                                            $("#InventoryDialog").html("");
                                            PlayerTurn(Enemy, Party[0], TempHealth);
                                        });
                                    }
                                    else if (Item.Type == "Misc") {
                                        $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated rubberBand'>You Can't Use A " + Item.Name + " On " + Party[this.id.substr(1, 1)].Name + " ? What are you even thinking? It has no effect...</div>");
                                        setTimeout(function () {
                                            PlayerTurn(Enemy, Party[0], TempHealth);
                                        }, Party[0].PlayerTextSpeed + 2000);
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
                                                Party[0] = Party[0];
                                                localStorage.setItem('_character', JSON.stringify(Character));
                                                localStorage.setItem('_Party', JSON.stringify(Party));
                                                PlayerTurn(Enemy, Party[0], TempHealth);
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
                                                }, Party[0].PlayerTextSpeed + 1000);
                                            }
                                            else if (Item.Stats.Health < 100) {
                                                $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated jello'>  " + Party[ThisId.substr(1, 1)].Name + " Thought it was not bad! </div>");
                                                setTimeout(function () {
                                                    DoneEating();
                                                }, Party[0].PlayerTextSpeed + 1000);
                                            };

                                            function DoneEating() {
                                                $("#OptionsHolder").html("<div id='Options' class=' MenuWrapper animated bounce'>  " + Party[ThisId.substr(1, 1)].Name + " Gained " + Item.Stats.Health + " HP </div>");
                                                setTimeout(function () {
                                                    console.log(Party[0].Inventory)
                                                    console.log(index)
                                                    Party[0].Inventory.splice(index, 1);
                                                    console.log(Party[0].Inventory)
                                                    Character = Party[0];
                                                    //Party[0].Inventory.pop(index);
                                                    localStorage.setItem('_character', JSON.stringify(Character));
                                                    localStorage.setItem('_Party', JSON.stringify(Party));
                                                    $("#PartyStatus").load("./temp/Status.html");
                                                    PlayerTurn(Enemy, Party[0], TempHealth);
                                                }, Party[0].PlayerTextSpeed + 1000);
                                            };
                                        }, Party[0].PlayerTextSpeed + 1000);
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
                    PlayerTurn(Enemy, Party[0], TempHealth);
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
                console.log(Party[0].Moves[i])
                if (Party[0].Moves[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='" + i + "'>" + Party[0].Moves[i].Name + "</button>");
                }
                else {
                    $("#OptionsHolder").append("<button disabled class='animated bounce MenuButtonDisabled' id='" + i + "'> No Move Set</button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (Party[0].Moves[index].Cost > Party[0].Stats[1].Value) {
                        $("#MessageHolder").html("<div class='animated rubberBand  MenuWrapper' id='StatusMSG'>" + Party[0].Name + " Doesn't Have Enough Mana! </div>");
                    }
                    else {
                        $("#OptionsHolder").html("");
                        $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + Party[0].Moves[index].Name + " will add " + Party[0].Moves[index].Damage + " damage to attack and cost " + Party[0].Moves[index].Cost + " HP</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        $("#Accept").click(function () {
                            var Move = Party[0].Moves[index];
                            PlayerAttack(Enemy, Party[0], TempHealth, Move);
                        });
                        $("#AttackBack").click(function () {
                            PlayerTurn(Enemy, Party[0], TempHealth);
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounce' id='AttackBack'> Back </button>");
            $("#AttackBack").click(function () {
                PlayerTurn(Enemy, Party[0], TempHealth);
            });
        });
        /* PLAYER ATTACK */
        function PlayerAttack(Enemy, Party[0], TempHealth, Move) {
            /* Adding Misses */
            if (Math.random() >= Party[0].Stats[5].Value) {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Party[0].Name + " attacks using " + Move.Name + " </div>");
                setTimeout(function () {
                    $("#MessageHolder").html("<div class='MenuWRapper animated tada  Message' id='StatusMSG'>StatusMSG").html("" + Party[0].Name + " missed! </div>");
                    setTimeout(function () {
                        EnemyTurn(Enemy, Party[0], TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            }
            else {
                //*****CRITICAL HIT CHANCE 1/10****//
                var CritcalChance = Math.floor((Math.random() * 10) + 1);
                var DidCriticalHit = false;
                var UsedMagic = false;
                if (CritcalChance == 10) {
                    CritcalChance = Math.round((Party[0].Stats[1].Value * 1.25) * (Move.Damage * 1.25));
                    DidCriticalHit = true;
                    console.log("CRITIAL ATTACK")
                }
                else {
                    CritcalChance = 0
                };
                // Regular Attack //
                var Spell = "";
                var RandomAttack = Math.random() + .75;
                RandomAttack = Math.round(Party[0].Stats[1].Value * RandomAttack);
                FullAttack = RandomAttack + CritcalChance + Move.Damage
                    // Move To Universal Damage Function //
                EnemyLosesHealth(Enemy, Party[0], TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
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
                        PlayerTurn(Enemy, Party[0], TempHealth);
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
        var Character = JSON.parse(localStorage.getItem('_character'));
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
            DamageEarned = Math.round((Enemy.Stats.Attack + EnemyAttackOption.Stats.Damage) * (EnemyElementStrength));
        }
        else {
            Party[0].Stats[0].Value = Party[0].Stats[0].Value - Party[0].Stats[2].Value;
            Party[0].Stats[0].Value = Party[0].Stats[0].Value - 1;
            DamageEarned = 1 * EnemyElementStrength;
        };
        localStorage.setItem('_character', JSON.stringify(Character));
        if (Party[0].Stats[0].Value > 0) {
            var Character = JSON.parse(localStorage.getItem('_character'));
            /* If Player Loses health */
            //    $("#StatusMSG").html("" + Enemy.Name + " did "++" !");
            setTimeout(function () {
                if (EnemyElementStrength == 1.25) {
                    $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'>It attacked " + Party[0].Name + "'s weakness and did " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        PlayerTurn(Enemy, Party[0], TempHealth);
                    }, Party[0].PlayerTextSpeed + 1500);
                }
                else if (EnemyElementStrength == 0.75) {
                    $("#MessageHolder").html("<h4 class='animated bounce  Message' id='StatusMSG'>It attacked " + Party[0].Name + "'s strength so it only did  " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        PlayerTurn(Enemy, Party[0], TempHealth);
                    }, Party[0].PlayerTextSpeed + 1500);
                }
                else {
                    BattleDamage()
                };

                function BattleDamage() {
                    $("#PlayerHealth").html("Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "");
                    $("#MessageHolder").html("<h4 class='animated swing  Message' id='StatusMSG'>It did " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        PlayerTurn(Enemy, Party[0], TempHealth);
                    }, Party[0].PlayerTextSpeed);
                };
            }, Party[0].PlayerTextSpeed);
        }
        else {
            var Character = JSON.parse(localStorage.getItem('_character'));
            /* PLAYER DIES */
            Party[0].Stats[0].Value = 0;
            $("#PlayerHealth").html("Health : " + Party[0].Stats[0].Value + " / " + Party[0].Stats[6].Value + "");
            $("#MessageHolder").html("<h4 class='animated hinge  Message' id='StatusMSG'> " + Party[0].Name + " passed out ! </div>");
            setTimeout(function () {
                BattleLost(Enemy, Party[0], TempHealth);
            }, Party[0].PlayerTextSpeed);
        }
    }

    function EnemyLosesHealth(Enemy, Party[0], TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move) {
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
                $("#EnemyHealth").html("Health : " + TempHealth + " / " + Enemy.Stats.Health);
                $("#PlayerMana").html("Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value);
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Party[0].Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage </div>");
                setTimeout(function () {
                    localStorage.setItem('_character', JSON.stringify(Character));
                    EnemyTurn(Enemy, Party[0], TempHealth);
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
                    localStorage.setItem('_character', JSON.stringify(Character));
                    BattleWon(Enemy, Party[0], TempHealth);
                }, Party[0].PlayerTextSpeed + 1000);
            }

            function AttackInfo() {
                setTimeout(function () {
                    $("#EnemyHealth").html("Health : " + 0 + " / " + Enemy.Stats.Health);
                    $("#PlayerMana").html("Mana : " + Party[0].Stats[7].Value + " / " + Party[0].Stats[8].Value);
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Party[0].Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage</div>");
                    setTimeout(function () {
                        $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Enemy.Name + " died </div>");
                        setTimeout(function () {
                            $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'> " + Party[0].Name + " won the fight! </div>");
                            setTimeout(function () {
                                localStorage.setItem('_character', JSON.stringify(Character));
                                BattleWon(Enemy, Party[0], TempHealth);
                            }, Party[0].PlayerTextSpeed);
                        }, Party[0].PlayerTextSpeed + 1000);
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            };
        }
    };

    function BattleWon(Enemy, Party[0], TempHealth) {
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
                //  console.log("Character");
                //  console.log(Party[0]);
                LootName = " Also " + Party[0].Name + " obtained a " + Loot.Name + " !";
            }
        }
        Party[0].Wallet.Bronze = Party[0].Wallet.Bronze + Enemy.Earnings.Bronze;
        Party[0].Experience.Total = Party[0].Experience.Total + Enemy.Experience.ExperienceEarned;
        $("#PlayerXP").html("XP : " + Party[0].Experience.Total + " / " + Party[0].Experience.ToNextLevel + "");
        localStorage.setItem('_character', JSON.stringify(Character));
        CheckLevel(Party[0]);

        function CheckLevel(Party[0]) {
            var GainedLevel = 0;
            var DidGainLevel = false;
            console.log("Configuring Character Experience and Level");
            var Character = JSON.parse(localStorage.getItem('_character'));
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
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + Party[0].Name + "  Earned " + Enemy.Earnings.Bronze + " Coins and Gained " + Enemy.Experience.ExperienceEarned + " XP " + LootName + " and gained " + GainedLevel + " level!</span><br><button class='MenuButton' id='Finish'>Finish Battle</button> </div>");
                localStorage.setItem('_character', JSON.stringify(Character));
            }
            else {
                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + Party[0].Name + "  Earned " + Enemy.Earnings.Bronze + " Coins and Gained " + Enemy.Experience.ExperienceEarned + " XP " + LootName + "</span><br><button class='MenuButton' id='Finish'>Finish Battle</button> </div>");
                localStorage.setItem('_character', JSON.stringify(Character));
            };
        };
        //localStorage.setItem('_character', JSON.stringify(Character));
        $("#Finish").click(function () {
            $("#App").load("./temp/Victoria.html")
        });
    }

    function BattleLost(Enemy, Party[0], TempHealth) {
        $("#Run").prop('disabled', true);
        $("#Attack").prop('disabled', true);
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span> Game Over </span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
        localStorage.clear();
        $("#Finish").click(function () {
            $("#App").load("./index.html")
        });
    };

    function BattleRunAway(Enemy, Party[0], TempHealth) {
        var Character = JSON.parse(localStorage.getItem('_character'));
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span>" + Party[0].Name + "  Did not earn anything from this battle.</span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
        localStorage.setItem('_character', JSON.stringify(Character));
        $("#Finish").click(function () {
            $("#App").load("./temp/Victoria.html")
        });
    };
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~MISC  /4/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*
    TODO:




    */
};