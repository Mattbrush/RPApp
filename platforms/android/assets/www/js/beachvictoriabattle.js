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




           *****  THIS IS A REAL BATTE. IT IS AN EXAMPLE OF HOW AN ACTUAL SYSTEM SHOULD RUN FOR LEVELING UP AND GRINDING ENEMIES.  *******
           
           
           
        
        */
    var Party = JSON.parse(localStorage.getItem('_Party'));
    $("#OverlayContainer").html("<div id='Overlay' class='animated fadeIn'></div>")
    $("#Overlay").css("opacity", "0.65");
    $("#Overlay").css("background-image", "url(img/PierVictoria.jpg)");
    $("#Overlay").css("background-position-x", "770px");
    $("#Overlay").css("background-size", "cover");
    /* Starts with the main player and then switches based on player choices for other party members */
    var PartyMember = Party[0];
    PartyMember.IndexPosition = 0;
    ////// ENEMY CREATOR /////
    var Enemies = [
         /*   {
                Name: 'Sea Otter'
                , Avatar: "./img/SeaOtter.jpg"
                , Type: "Saltwater"
                , SpawnRate: 0.25
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
                        , Weight: 1
                        , Stats: {
                            Health: 5
                        }
                        , Worth: 5
                        , DropRate: 0.75
                }
                    , {
                        Name: " Imp's Bane "
                        , IDName: "ImpsBane"
                        , Avatar: "./img/ImpsBane.jpg"
                        , Type: "Weapon"
                        , Description: " A <strong>dagger</strong> ripped from the roots of the life tree <strong>Yggdrasil</strong>. "
                        , Index: 0
                        , Weight: 1.5
                        , Equip: "RightHand"
                        , Stats: {
                            Attack: [1, 3]
                            , CriticalAttack: 4
                            , Enchanted: false
                            , Durability: 100
                        , }
                        , Worth: 3
                        , DropRate: 0.98
    }, ]
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
                    ExperienceEarned: Math.floor(Math.random() * 13) + 8
                , }
                , RunStat: 150
            , } */
     {
                Name: 'Starfish'
                , Avatar: "./img/Starfish.gif"
                , Type: "Saltwater"
                , SpawnRate: 0.40
                , Strength1: "Saltwater"
                , Strength1: "Saltwater"
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
                    , Weight: 2
                    , Stats: {}
                    , Worth: 1
                    , DropRate: 0.75
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
                    ExperienceEarned: Math.floor(Math.random() * 6) + 2
                , }
                , RunStat: 350
            , },

          /*  {
                Name: 'Sea Lion'
                , Avatar: "./img/SeaLion.png"
                , Type: "Saltwater"
                , SpawnRate: 0.10
                , Strength1: "Boreal Forest"
                , Strength2: "Desert"
                , Weakness1: "Saltwater"
                , Weakness2: "Freshwater"
                , Color: "#D7ACAC"
                , Stats: {
                    Health: Math.floor(Math.random() * 10) + 25
                    , Attack: Math.floor(Math.random() * 4) + 1
                    , Defense: Math.floor(Math.random() * 0) + 0
                    , Magic: 0
                    , Vitality: Math.floor(Math.random() * 5) + 0
                    , Accuracy: Math.floor(Math.random() * 0.96) + 0.85
                , }
                , Loot: []
                , MoveSet: [

                    {
                        Name: "Salty Roar "
                        , Type: "Element"
                        , Index: 0
                        , Stats: {
                            Damage: Math.floor(Math.random() * 2) + 1
                            , Element: "Saltwater"
                        , }
                    , }
                    , {
                        Name: " Clap "
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
                    ExperienceEarned: Math.floor(Math.random() * 20) + 14
                , }
                , RunStat: 1
            , },*/ {
                Name: 'Seagull'
                , Avatar: "./img/Seagull.png"
                , Type: "Saltwater"
                , SpawnRate: 0.50
                , Strength1: "Boreal Forest"
                , Strength2: "Desert"
                , Weakness1: "Saltwater"
                , Weakness2: "Freshwater"
                , Color: "#D7ACAC"
                , Stats: {
                    Health: Math.floor(Math.random() * 10) + 5
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
                    , DropRate: .65
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
                    ExperienceEarned: Math.floor(Math.random() * 8) + 5
                , }
                , RunStat: 300
            , }

]
        ////////////////// /////
    console.log("Available Enemies : ");
    for (i = 0; i < Enemies.length; i++) {
        console.log(Enemies[i]);
    };
    console.log(PartyMember);
    /* Star tAnimation For Battle ? */
    BattleAnimation();

    function BattleAnimation() {
        $("#App").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
        $("#App").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
        $("#AlertPlayerMessage").html("<div class='animated bounceIn  AlertPlayerText' id='StatusMSG'> Enemy Approaching ! </div>");
        $("#AlertPlayerMessage").append("<img id='Transition' class='width75' src='./img/BattleTransition.gif'></img>");
        var TurnTracker = {
            0: false,
            1: false,
            2: false,
            3: false,
        }
        localStorage.setItem('_Party', JSON.stringify(Party));
        localStorage.setItem('_TurnTracker', JSON.stringify(TurnTracker));
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
            if (Enemy.SpawnRate > PickingEnemy) {
                Enemy = Enemy;
                CreateBattle(Enemy);
            }
            else {
                EnemyPicker();
            };
        };

        function CreateBattle(Enemy) {
          //  console.log("Current Enemy :")
           // console.log(Enemy)
            Enemy.Stats.Health = Enemy.Stats.Health + Enemy.Stats.Vitality;
            var TempHealth = Enemy.Stats.Health;
             localStorage.setItem('_Enemy', JSON.stringify(Enemy));
             localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
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
            // Placing Current PartyMember's Stats
         $("#Player").html("<div class='SubMainTitle' id='PlayerName'>" + PartyMember.Name + " " + PartyMember.FamilyName + "</div><br><div class='HealthMainTitle' id='PlayerHealth'>Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "</div></div><br><div class='ManaMainTitle'  id='PlayerMana'>Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "</div><br><div class='XPMainTitle'  id='PlayerXP'>XP : " + PartyMember.Experience.Total + " / " + PartyMember.Experience.ToNextLevel + "</div>");
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            //Change Color
             $("#Player").css("background", "" + PartyMember.Color + "");
            //Update HealthBars
            $("#HealthBar").css("width", "100%");
        /////
            /* Activate Turn Decider */
            setTimeout(function () {
                TurnChoice(Enemy, Party[0], TempHealth);
            }, Party[0].PlayerTextSpeed);
        }; // End of CreateBattle()
    }; // End of StartBattle()
    //////////////////// TURN DECIDER //////////////////////////
    function TurnChoice(Enemy, TempHealth) {
        /* Randomly Decide First Turn */
        var Chooser = [{
                    Player: PartyMember
                , }
            , {
                    Player: Enemy.Name
                , }]
            /* Decide Odds Later */
        var Choice = Chooser[Math.floor(Math.random() * Chooser.length)];
        $("#OverlayBlanket").remove();
        $("#AlertPlayerMessage").remove();
        localStorage.setItem('_Enemy', JSON.stringify(Enemy));
        /* Make this better later, probably not an IF/ELSE statement */
        if (Choice.Player === PartyMember) {
            PlayerTurn()
        }
        else {
            EnemyTurn();
        };
        /*
        console.log(Chooser);
        console.log("Choice");
        console.log(Choice);  */
    };
    /////////////////////////////////////////////
    //////////////////// ENEMY TURN   //////////////////////////
    function EnemyTurn() {
        var Party = JSON.parse(localStorage.getItem('_Party'));
        var TurnTracker = JSON.parse(localStorage.getItem('_TurnTracker'));
        var Enemy = JSON.parse(localStorage.getItem('_Enemy'));
        var TempHealth = JSON.parse(localStorage.getItem('_TempHealth'));
         $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='StatusMSG'>It is now " + Enemy.Name + "'s Turn </div>");
      //  console.log(Enemy)
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button class='MenuButtonDisabled' disabled id='Attack'>Attack</button><button class='MenuButtonDisabled' disabled id='Items'>Items</button><button class='MenuButtonDisabled' id='Status' disabled>Status</button><button class='MenuButtonDisabled' disabled id='SpellsAttack'>Spells</button><br><button class='MenuButtonDisabled' disabled id='Run'>Run Away</button></div>");
         $("#OptionsHolder").append("<br><div id='PartyHolder'></div>");
        // Add party Members to switch to
        for (i = 0; i < 4; i++) {
           // console.log("Party Member "+i+" Turn :  "+TurnTracker[i]);
            if (Party[i]) {
                if (TurnTracker[i] == false){
                $("#PartyHolder").append("<button disabled id='" + i + "' class='MenuButtonDisabled'> " + Party[i].Name + "</button>");
                } else {
                 $("#PartyHolder").append("<button disabled id='" + Party[i].Name + "Button' class='MenuButtonDisabled'> " + Party[i].Name + "</button>"); 
                };
            
            }
            else {
                $("#PartyHolder").append("<button id='None" + i + "Button' class='MenuButtonDisabled'> None </button>");
            };
            
           
        };
        
        
        
       
        setTimeout(function () {
            EnemyMove(Enemy,TempHealth);
        }, Party[0].PlayerTextSpeed);
    };

    function EnemyMove(Enemy,TempHealth) {
       // console.log(Enemy)
        var RunChance = Enemy.Stats.Health / 5;
        if (TempHealth < RunChance) {
            var ScaredChecker = Math.random() * 1000;
            console.log(" ScaredChecker Need to be lower than " + Enemy.RunStat + " :")
            console.log(" Scared Checker : " + ScaredChecker)
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
                    $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'>" + Enemy.Name + " Continues the fight anyway! </div>");
                    setTimeout(function () {
                        EnemyAttack();
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            };
        }
        else {
            EnemyAttack(Enemy,TempHealth);
        };

        function EnemyAttack() {

            /* ENEMY ATTACKS */
            EnemyAttackChoice(Enemy,TempHealth);
        };
    };
    //////////////////// PLAYER TURN //////////////////////////
    function PlayerTurn() {
        /* Setting Up Party */
        var Party = JSON.parse(localStorage.getItem('_Party'));
        var TurnTracker = JSON.parse(localStorage.getItem('_TurnTracker'));
        var Enemy = JSON.parse(localStorage.getItem('_Enemy'));
        var TempHealth = JSON.parse(localStorage.getItem('_TempHealth'));
        //////////////////////////////
        // Deciding Player's Turn
        var PlayerCanGo = true;
        console.log(TurnTracker);
        for (i = 0; i < Party.length; i++) {
        if (PartyMember.Name == Party[i].Name){
            console.log(PartyMember.Name);
            if (TurnTracker[i] == true){
                console.log("this dude can't go!");
                DecideTurn();
            }
        }
        };
        function DecideTurn(){
            var Skipper = 0;
         for (i = 0; i < 4; i++) {
             console.log(TurnTracker[i]);
             if (Party[i]){
              if (TurnTracker[i] == false){
               console.log("It is possible for " + Party[i].Name + " to fight");
                PartyMember = Party[i];
                PartyMember.IndexPosition = i;
             } else {
                console.log(" Skipping "+ Party[i].Name+ " Because they have gone!")
              //   Skipper++;
                             Skipper++ 
                
             };
         } else {
                         Skipper++ 
         }

              console.log(Skipper)
             if (Skipper == 4){
                 PlayerCanGo = false;
                 EnemyTurn();
             }
         };
        };
        
        if (PlayerCanGo == true){
        
        
        console.log(PartyMember)
        // Placing Current PartyMember's Stats
         $("#Player").html("<div class='SubMainTitle' id='PlayerName'>" + PartyMember.Name + " " + PartyMember.FamilyName + "</div><br><div class='HealthMainTitle' id='PlayerHealth'>Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "</div></div><br><div class='ManaMainTitle'  id='PlayerMana'>Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "</div><br><div class='XPMainTitle'  id='PlayerXP'>XP : " + PartyMember.Experience.Total + " / " + PartyMember.Experience.ToNextLevel + "</div>");
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
         //Change Color
             $("#Player").css("background", "" + PartyMember.Color + "");
            //Update HealthBars
            $("#HealthBar").css("width", "100%");
        /////
        
        
        $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "");
        $("#OptionsHolder").html("<div id='Options' class='animated flipInY'><button class='MenuButton' id='Attack'>Attack</button><button class='MenuButton'  id='Items'>Items</button><button class='MenuButton'  id='Status'>Status</button><button class='MenuButton'  id='SpellsAttack'>Spells</button><br><button class='MenuButton'  id='Run'>Run Away</button></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'>It is now " + PartyMember.Name + "'s Turn </div>");
        $("#OptionsHolder").append("<br><div id='PartyHolder'></div>");
        // Add party Members to switch to
        for (i = 0; i < 4; i++) {
           // console.log("Party Member "+i+" Turn :  "+TurnTracker[i]);
            if (Party[i]) {
                if (TurnTracker[i] == false){
                $("#PartyHolder").append("<button id='" + i + "' class='MenuButton'> " + Party[i].Name + "</button>");
                    
                $(" #"+i+"  ").css("background",""+Party[i].Color+"");
                $(" #"+i+"  ").css("color"," White ");
                } else {
                 $("#PartyHolder").append("<button disabled id='" + Party[i].Name + "Button' class='MenuButtonDisabled'> " + Party[i].Name + "</button>"); 
                };
                 $("#"+i+"").click(function(){
// Changing party member to clicked party name
                PartyMember = Party[this.id];
                PartyMember.IndexPosition = this.id;
// Restarting PlayerTurn
                PlayerTurn();
            });
            }
            else {
                $("#PartyHolder").append("<button id='None" + i + "Button' class='MenuButtonDisabled'> None </button>");
            };
            
           
        };
        // BUTTON FUNCTIONS //
        $("#Run").click(function () {
            $("#MessageHolder").html("<h4 class='animated pulse Message' id='StatusMSG'>Are You Sure You Want To Run Away? </h4>");
            $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
            $("#OptionsHolder").html("<button  class='MenuButton animated bounceIn' id='Run'>Run Away</button><br><button class='MenuButton animated bounceIn'  id='RBack'>Back</button>");
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
                        EnemyTurn();
                    }, Party[0].PlayerTextSpeed);
                }
            });
            $("#RBack").click(function () {
                PlayerTurn();
            });
        });
        $("#SpellsAttack").click(function () {
            $("#OptionsHolder").html("<div id='Options' class=''></div>");
            for (i = 0; i < 4; i++) {
                //  console.log(PartyMember.Spells[i])
                if (PartyMember.Spells[i] != null) {
                    $("#OptionsHolder").append("<button class='MenuButton animated bounceIn' id='" + i + "'>" + PartyMember.Spells[i].Name + "</button>");
                if (PartyMember.Spells[i].Stats.Element == 'Boreal Forest')    
                $("#"+i+"").css("background","#097b5c");
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
                            console.log(PartyMember.Stats[7].Value);
                            Party[PartyMember.IndexPosition] = PartyMember;
                            console.log(PartyMember.Stats[7].Value);
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
                                console.log(PartyMember.Stats[7].Value);
                                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                                var Spell = PartyMember.Spells[index]
                                    // Move To Universal Damage Function //
                                setTimeout(function () {
            localStorage.setItem('_PartyMember', JSON.stringify(PartyMember));   
            localStorage.setItem('_Party', JSON.stringify(Party));   
                                    EnemyLosesHealth(Enemy, TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
                                }, Party[0].PlayerTextSpeed);
                            }
                        });
                        $("#SpellBack").click(function () {
                            PlayerTurn();
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounceIn' id='SBack'> Back </button>");
            $("#SBack").click(function () {
                PlayerTurn();
            });
        });
        $("#Status").click(function () {
            /*
            $("#Overlay").css("opacity", "1");
            CheckOverlay();
            ///////* Timer Set to check for changes done on an Overlay Page!!!! VERY IMPORTANTAY ********//////////
            /*
            function CheckOverlay() {
                var OverlayChecker = setInterval(function () {
                    OverlayTimer()
                }, Party[0].PlayerTextSpeed);

                function OverlayTimer() {
                    if ($("#Overlay").hasClass("Open")) {}
                    else {
                        clearInterval(OverlayChecker);
                        PlayerTurn();
                    };
                }
            };
            $("#Overlay").addClass("Open");
            $("#Overlay").css("z-index", "1");
            $("#Overlay").load("./temp/Status.html");
            */
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
                    $("#OptionsHolder").append("<div class='BattleItemSlot'><input class='BattleItem animated bounceIn' type='image' src='" + PartyMember.Inventory[i].Avatar + "' id='" + i + "'>" + PartyMember.Inventory[i].Name + "</input></div>");
                    $("#" + i + "").click(function () {
                        // Using ITEMS //
                        var index = this.id;
                        console.log(PartyMember.Inventory[this.id].Name);
                        var Item = PartyMember.Inventory[index]
                        $("#OptionsHolder").html("<div>Do You Want To Use " + PartyMember.Inventory[index].Name + " ?</div><br><button class='MenuButton animated bounceIn' id='Accept'> Yes </button><button class='MenuButton animated bounceIn' id='Deny'> No </button>");
                        $("#Accept").click(function () {
                            WhichCharacter(Item, index);
                        });
                        $("#Deny").click(function () {
                            $("#OptionsHolder").html("");
                            ListItems();
                        });

                        function WhichCharacter(Item, index) {
                        //    console.log(Item);
                            $("#OptionsHolder").html("<span class'animated fadeIn'>Which Character Would You Like To Use " + PartyMember.Inventory[index].Name + " On?</span><br><div id='PartyList'></div>");
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
                                                PlayerTurn();
                                            }, Party[0].PlayerTextSpeed);
                                        });
                                        $("#No").click(function () {
                                            $("#OptionsHolder").html("");
                                            $("#InventoryContainer").html("");
                                            $("#InventoryDialog").html("");
                                            PlayerTurn();
                                        });
                                    }
                                    else if (Item.Type == "Misc") {
                                        $("#OptionsHolder").html("<div id='Options' class='MenuWrapper animated rubberBand'>You Can't Use A " + Item.Name + " On " + Party[this.id.substr(1, 1)].Name + " ? What are you even thinking? It has no effect...</div>");
                                        setTimeout(function () {
                                            PlayerTurn();
                                        }, Party[0].PlayerTextSpeed);
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
                                                PlayerTurn();
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
                                      //  console.log(this.id)
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
                                                $("#OptionsHolder").html("<div id='Options' class=' MenuWrapper animated bounceIn'>  " + Party[ThisId.substr(1, 1)].Name + " Gained " + Item.Stats.Health + " HP </div>");
                                                setTimeout(function () {
                                                   // console.log(PartyMember.Inventory)
                                                    //console.log(index)
                                                    PartyMember.Inventory.splice(index, 1);
                                                    console.log(PartyMember.Inventory)
                                                    PartyMember = PartyMember;
                                                    //PartyMember.Inventory.pop(index);
                                                    localStorage.setItem('_character', JSON.stringify(Character));
                                                    localStorage.setItem('_Party', JSON.stringify(Party));
                                                    $("#PartyStatus").load("./temp/Status.html");
                                                    PlayerTurn();
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
                    PlayerTurn();
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
                    $("#OptionsHolder").append("<button class='MenuButton animated bounceIn' id='" + i + "'>" + PartyMember.Moves[i].Name + "</button>");
                }
                else {
                    $("#OptionsHolder").append("<button disabled class='animated bounceIn MenuButtonDisabled' id='" + i + "'> No Move Set</button>");
                };
                $("#" + i + "").click(function () {
                    var index = this.id;
                    if (PartyMember.Moves[index].Cost > PartyMember.Stats[1].Value) {
                        $("#MessageHolder").html("<div class='animated rubberBand  MenuWrapper' id='StatusMSG'>" + PartyMember.Name + " Doesn't Have Enough Health! </div>");
                    }
                    else {
                        $("#OptionsHolder").html("");
                        if (PartyMember.Moves[index].Cost == 0) {
                            $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + PartyMember.Moves[index].Name + " will add " + PartyMember.Moves[index].Damage[0] + " - " + PartyMember.Moves[index].Damage[1] + " damage to your attack</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        }
                        else {
                            $("#OptionsHolder").html("<div class='animated pulse  MenuWrapper' id='StatusMSG'>" + PartyMember.Moves[index].Name + " will add " + PartyMember.Moves[index].Damage[0] + " - " + PartyMember.Moves[index].Damage[1] + " damage to your attack and cost " + PartyMember.Moves[index].Cost + " HP</div><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='AttackBack'> Back </button></div> ");
                        }
                        $("#Accept").click(function () {
                            var Move = PartyMember.Moves[index];
                            var MoveDamage = Math.floor(Math.random() * Move.Damage[1] - Move.Damage[0]) + Move.Damage[0];
                            console.log("Move.Damage");
                            console.log(Move.Damage);
                            localStorage.setItem('_MoveDamage', JSON.stringify(MoveDamage));
                            localStorage.setItem('_Move', JSON.stringify(Move));
                            PlayerAttack();
                        });
                        $("#AttackBack").click(function () {
                            PlayerTurn();
                        });
                    };
                });
            };
            $("#OptionsHolder").append("<button class='MenuButton animated bounceIn' id='AttackBack'> Back </button>");
            $("#AttackBack").click(function () {
                PlayerTurn();
            });
        });
        /* PLAYER ATTACK */
        function PlayerAttack(Enemy, TempHealth, Move) {
            var MoveDamage = JSON.parse(localStorage.getItem('_MoveDamage'));
            var Move = JSON.parse(localStorage.getItem('_Move'));
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
            FullAttack = RandomAttack + CritcalChance + MoveDamage;
            // Move To Universal Damage Function //
            console.log("Player Attacking");
            Party[PartyMember.IndexPosition] = PartyMember;
            
             localStorage.setItem('_PartyMember', JSON.stringify(PartyMember));  
  localStorage.setItem('_Party', JSON.stringify(Party));
            EnemyLosesHealth(Enemy, TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move)
        };
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
                        var TurnTracker = JSON.parse(localStorage.getItem('_TurnTracker'));
                        var TurnTracker = {
            0: false,
            1: false,
            2: false,
            3: false,
        }
                        
                        localStorage.setItem('_TurnTracker', JSON.stringify(TurnTracker));
                        // PlayerTurn(Enemy,  TempHealth);
                        localStorage.setItem('_Party', JSON.stringify(Party));
                        PlayerTurn(Enemy, TempHealth);
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
                        var TurnTracker = JSON.parse(localStorage.getItem('_TurnTracker'));
                        var TurnTracker = {
            0: false,
            1: false,
            2: false,
            3: false,
        }
                        
                        localStorage.setItem('_TurnTracker', JSON.stringify(TurnTracker));
                        localStorage.setItem('_Party', JSON.stringify(Party));
                        localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                        localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                        PlayerTurn(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }
                else if (EnemyElementStrength == 0.75) {
                    $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'>It attacked " + PartyMember.Name + "'s strength so it only did  " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        //    PlayerTurn(Enemy, TempHealth);
                        console.log(PartyMember.Stats[0].Value)
                        $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
                        $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value + "");
                        console.log(PartyMember.Stats[0].Value)
                        var TurnTracker = JSON.parse(localStorage.getItem('_TurnTracker'));
                        var TurnTracker = {
            0: false,
            1: false,
            2: false,
            3: false,
        }
                        
                        localStorage.setItem('_TurnTracker', JSON.stringify(TurnTracker));
                        localStorage.setItem('_Party', JSON.stringify(Party));
                        localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                        localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                        PlayerTurn(Enemy, TempHealth);
                    }, Party[0].PlayerTextSpeed);
                }
                else {
                    console.log(PartyMember.Stats[0].Value)
                    BattleDamage()
                };

                function BattleDamage() {
                    console.log(PartyMember.Stats[0].Value)
                    $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
                    $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'>It did " + DamageEarned + " damage </div>");
                    setTimeout(function () {
                        Party[PartyMember.IndexPosition] = PartyMember;
                        //  PlayerTurn(Enemy, empHealth);
                        var TurnTracker = JSON.parse(localStorage.getItem('_TurnTracker'));
                        var TurnTracker = {
            0: false,
            1: false,
            2: false,
            3: false,
        }
                        
                        localStorage.setItem('_TurnTracker', JSON.stringify(TurnTracker));
                        localStorage.setItem('_Party', JSON.stringify(Party));
                        localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                        localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                        PlayerTurn(Enemy, TempHealth);
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
                Party[PartyMember.IndexPosition] = PartyMember;
                BattleLost(Enemy, TempHealth);
            }, Party[0].PlayerTextSpeed);
        }
    }

    function EnemyLosesHealth(Enemy, TempHealth, FullAttack, DidCriticalHit, CritcalChance, UsedMagic, Spell, Move) {
        var Party = JSON.parse(localStorage.getItem('_Party'));
        var PartyMember = JSON.parse(localStorage.getItem('_PartyMember'));
        var Enemy = JSON.parse(localStorage.getItem('_Enemy'));
        var TempHealth = JSON.parse(localStorage.getItem('_TempHealth'));
        var TurnTracker = JSON.parse(localStorage.getItem('_TurnTracker'));
        
        Party[PartyMember.IndexPosition] = PartyMember;
        
        
        
        $("#PlayerHealth").html("Health : " + PartyMember.Stats[0].Value + " / " + PartyMember.Stats[6].Value + "");
        $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value);
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        //// ENEMY LOSES IT'S HEALTH HERE ////
        FullAttack = FullAttack + CritcalChance;
        TempHealth = TempHealth - FullAttack
        console.log(Party[1].Stats[7].Value);
        if (TempHealth > 0) {
             var PartyMember = JSON.parse(localStorage.getItem('_PartyMember'));
            console.log("PartyMember");
        console.log(PartyMember);
            /* If ENEMY Loses HEALTH */
            if (DidCriticalHit == true) {
                $("#MessageHolder").html("<h4 class='animated tada  Message' id='StatusMSG'>Critical Hit!</div>");
            }
            else if (UsedMagic == true) {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Spell.Name + " costed " + Spell.Stats.Cost + " Mana </div>")
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + Spell.Name + " costed " + Spell.Stats.Cost + " Mana </div>")
            }
            else {
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks using " + Move.Name + " </div>");
            }
            setTimeout(function () {
                $("#EnemyHealth").html("Health : " + TempHealth + " / " + Enemy.Stats.Health);
                
                $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage </div>");
                setTimeout(function () {
                    var i = 5
                    for (i = 0; i < 4; i++) {
                    if (Party[i]){
                      if (Party[i].Name == PartyMember.Name){
                          console.log(i)
                          var Index = i;
                      }  
                    };
                    };
                    TurnTracker[Index] = true;
                    console.log(TurnTracker);
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                    localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                    localStorage.setItem('_TurnTracker', JSON.stringify(TurnTracker));
                    PlayerTurn(Enemy, TempHealth);
                }, Party[0].PlayerTextSpeed);
            }, Party[0].PlayerTextSpeed);
        }
        else {
        var PartyMember = JSON.parse(localStorage.getItem('_PartyMember'));
        var Party = JSON.parse(localStorage.getItem('_Party'));
        var Enemy = JSON.parse(localStorage.getItem('_Enemy'));
        var TempHealth = JSON.parse(localStorage.getItem('_TempHealth'));
        var TurnTracker = JSON.parse(localStorage.getItem('_TurnTracker'));
            console.log(Party[1].Stats[7].Value);
        TempHealth = 0;
          $("#EnemyHealth").html("Health : " + 0 + " / " + Enemy.Stats.Health);   
            
            
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
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'>" + PartyMember.Name + " destroys " + Enemy.Name + " using " + Move.Name + " </div>");
                setTimeout(function () {
                   localStorage.setItem('_Party', JSON.stringify(Party));
                    localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                    localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                    localStorage.setItem('_TurnTracker', JSON.stringify(TurnTracker));
                    BattleWon(Enemy, Party[0], TempHealth);
                }, Party[0].PlayerTextSpeed);
            }

            function AttackInfo() {
                setTimeout(function () {
                    $("#EnemyHealth").html("Health : " + 0 + " / " + Enemy.Stats.Health);
                    $("#PlayerMana").html("Mana : " + PartyMember.Stats[7].Value + " / " + PartyMember.Stats[8].Value);
                    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'>" + PartyMember.Name + " attacks " + Enemy.Name + " with " + FullAttack + " damage</div>");
                    setTimeout(function () {
                        $("#MessageHolder").html("<h4 class='animated pulse  Message' id='StatusMSG'> " + Enemy.Name + " died </div>");
                        setTimeout(function () {
                            $("#MessageHolder").html("<h4 class='animated jello  Message' id='StatusMSG'> " + Party[0].Name + " won the fight! </div>");
                            setTimeout(function () {
                    console.log(Party[1].Stats[7].Value);
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    localStorage.setItem('_Enemy', JSON.stringify(Enemy));
                    localStorage.setItem('_TempHealth', JSON.stringify(TempHealth));
                    localStorage.setItem('_TurnTracker', JSON.stringify(TurnTracker));
                                BattleWon(Enemy, TempHealth);
                            }, Party[0].PlayerTextSpeed);
                        }, Party[0].PlayerTextSpeed);
                    }, Party[0].PlayerTextSpeed);
                }, Party[0].PlayerTextSpeed);
            };
        }
    };

    function BattleWon(Enemy, TempHealth) {
        var Party = JSON.parse(localStorage.getItem('_Party'));
        var Enemy = JSON.parse(localStorage.getItem('_Enemy'));
        var TempHealth = JSON.parse(localStorage.getItem('_TempHealth'));
        var TurnTracker = JSON.parse(localStorage.getItem('_TurnTracker'));
        $("#Run").prop('disabled', true);
        $("#Attack").prop('disabled', true);
        $("#Status").prop('disabled', true);
        $("#Items").prop('disabled', true);
        if (Enemy.Loot.length != 0) {
            var Loot = Enemy.Loot[Math.floor(Math.random() * Enemy.Loot.length)];
            var LootName = "";
            if (Math.random() >= Loot.DropRate) {
                Party[0].Inventory.push(Loot);
                LootName = " Also " + Enemy.Name + " gave up  a " + Loot.Name + " !";
            }
        }
        Party[0].Wallet.Total = Party[0].Wallet.Total + Enemy.Earnings.Total;
        PartyMember.Experience.Total = PartyMember.Experience.Total + Enemy.Experience.ExperienceEarned;
        localStorage.setItem('_Party', JSON.stringify(Party));
        CheckLevel(PartyMember);

        function CheckLevel() {
            var GainedLevel = 0;
            var DidGainLevel = false;
            var GainedLevelCharacter = [];
            console.log("Configuring Character Experience and Level");
            var Party = JSON.parse(localStorage.getItem('_Party'));
            console.log(PartyMember.Experience);
            console.log("Level : " + PartyMember.Level);
            /* Experience System WHILE Statements //// Make More Concise Later! /////// */
            
            // EXP Earned //
            
            var ExpEarned = Enemy.Experience.ExperienceEarned;
            
            ExpEarned = Math.round(Enemy.Experience.ExperienceEarned / Party.length);
            
            
            for (i = 0; i < Party.length; i++) {
                Party[i].Experience.Total = Party[i].Experience.Total + ExpEarned;
            };
            
            
            // Party Members that gained levels?//
            for (i = 0; i < Party.length; i++) {
            while (Party[i].Experience.Total >= Party[i].Experience.ToNextLevel) {
                Party[i].Experience.Total = Party[i].Experience.ToNextLevel - Party[i].Experience.Total;
                Party[i].Experience.Total = Math.abs(Party[i].Experience.Total);
                Party[i].Experience.ToNextLevel = Math.round(Party[i].Experience.ToNextLevel * 1.45);
                Party[i].Level = Party[i].Level + 1;
                Party[i].Experience.SkillPoints = Party[i].Experience.SkillPoints + 3;
                Party[i].Stats[0].Value = Party[i].Stats[6].Value;
                Party[i].Stats[7].Value = Party[i].Stats[8].Value;
                DidGainLevel = true;
                GainedLevelCharacter.push(Party[i].Name);
                GainedLevel++
                console.log(Party[i])
            }  
            };
            ////////////
            
            
            console.log(Party[1].Stats[7].Value);
            
            console.log("GainedLevelCharacter : ");
            console.log(GainedLevelCharacter);
            
            $("#PlayerXP").html("XP : " + PartyMember.Experience.Total + " / " + PartyMember.Experience.ToNextLevel + "");
             localStorage.setItem('_Party', JSON.stringify(Party));
            /////////
            
            var Party = JSON.parse(localStorage.getItem('_Party'));
            
            if (DidGainLevel == true) {
                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + Party[0].Name + "  Earned " + Enemy.Earnings.Total + " <strong>Loonies</strong> and All Party Members Gained " + ExpEarned + " XP ! " + LootName + "</span><br><button class='MenuButton' id='Finish'>Finish Battle</button> </div>");
                localStorage.setItem('_Party', JSON.stringify(Party));
            }
            else {
                $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
                $("#MessageHolder").html("<h4 class='animated bounceIn  Message' id='StatusMSG'><span>" + Party[0].Name + "  Earned " + Enemy.Earnings.Total + " <strong>Loonies</strong> and All Party Members Gained " + ExpEarned + " XP ! " + LootName + "</span><br><button class='MenuButton' id='Finish'>Finish Battle</button> </div>");
                localStorage.setItem('_Party', JSON.stringify(Party));
            };
        };
        $("#Finish").click(function () {
            $("#App").load("./temp/BeachVictoriaWalking.html")
        });
    }

    function BattleLost(Enemy, TempHealth) {
        $("#Run").prop('disabled', true);
        $("#Attack").prop('disabled', true);
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span> Game Over </span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
        $("#Finish").click(function () {
            
            localStorage.setItem('_Party', JSON.stringify(Party));
            
            $("#App").load("./temp/BeachVictoriaWalking.html")
        });
    };

    function BattleRunAway(Enemy, TempHealth) {
        var Party = JSON.parse(localStorage.getItem('_Party'));
        $("#OptionsHolder").html("<div id='Options' class='animated flip'></div>");
        $("#MessageHolder").html("<h4 class='animated lightSpeedIn  Message' id='StatusMSG'><span>" + Party[0].Name + "  Did not earn anything from this battle.</span><br><button class='MenuButton' id='Finish'>Finish Battle</button></div>");
        localStorage.setItem('_Party', JSON.stringify(Party));
        $("#Finish").click(function () {
            
            
            localStorage.setItem('_Party', JSON.stringify(Party));
           $("#App").load("./temp/BeachVictoriaWalking.html")
        });
    };
};