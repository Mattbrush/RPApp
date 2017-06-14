console.clear();
/* Establish All Soung Effects Globally First To Declare Them Later  */
// ~~~ SOUND EFFECTS ~~~ //
var BirdAmbience = new Audio('./sound/BirdAmbience.mp3');
var PaperShuffle = new Audio('./sound/PaperShuffle.mp3');
// ~~~ MUSIC ~~~ //
var MainTheme = new Audio('./music/MainTheme.mp3');
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var Party = JSON.parse(localStorage.getItem('_Party'));






/* Check Story Progress */
StartBeach();

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


function StartBeach(){
    
    //Setting Random Items //

var RandomItem = [
    
    {
                Name: "Sprinkled Doughnut"
                , IDName: "SprinkledDoughnut"
                , Avatar: "./img/SprinkledDoughnut.png"
                , Type: "Food"
                , Index: 0
        ,Weight: 2
                , Stats: {
                    Health: 5
                , }
                , Worth: 2
                , DropRate: 0.65
    },
     {
                Name: "Apple"
                , IDName: "Apple"
                , Avatar: "./img/Apple.png"
                , Type: "Food"
                , Index: 0
         ,Weight: 2
                , Stats: {
                    Health: 10
                , }
                , Worth: 4
                , DropRate: 0.65
    },
    
]

/////////
    
    
             $("#Locationtitle").remove();
             
             $("#App").prepend("<div id='OverlayBlanket' class='OverlayBlanket' ></div>");
    $("#App").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage' ></div>");
    
    
    
     $("#AlertPlayerMessage").prepend("<div id='AlertPlayerText' class='AlertPlayerText'><h5 id='Status'></h5><div id='PlayerStats'></div><img id='Player' style='Width:40%' src='./img/BeachIdle.gif'></img><br><br><button id='Walk' class='MenuButton'> Walk </button><br><button id='Leave' class='MenuButton'> Leave </button></div>");
    var Party = JSON.parse(localStorage.getItem('_Party'));
     for (i = 0; i < Party.length; i++) {
         $("#PlayerStats").append(" "+Party[i].Name+"   HP:"+Party[i].Stats[0].Value+"/"+Party[i].Stats[6].Value+" <br> ");
     };
    
    $("#AlertPlayerMessage").css("top","10%");
     $("#Status").html("<div class='animated bounceIn  '> Waiting </div>");
    
    
    $("#Leave").click(function(){
         $("#ContinueMessageHolder").remove();
            $("#StatusMessageHolder").html("");
            $("#ContinueMessageHolder").html("");
            $("#CharacterAvatar").html("");
            $("#App").load("./temp/Victoria.html");
    });
    
    $("#Walk").click(function(){
        Walking();
    });
    
    
    function Walking(){
    
    $("#AlertPlayerMessage").html("<div id='AlertPlayerText' class='AlertPlayerText'><h5 id='Status'></h5><img id='Player' style='Width:50%' src='./img/BeachWalking.gif'></img><br><button id='Stop' class='MenuButton'> Stop </button></div>");
        
        $("#Stop").click(function(){
         $("#ContinueMessageHolder").remove();
            $("#StatusMessageHolder").html("");
            $("#ContinueMessageHolder").html("");
            $("#CharacterAvatar").html("");
            $("#App").load("./temp/PierVictoria.html");
    });

    
    

    CurrentStatus();
    
    function CurrentStatus(){
        
        
        $("#Status").html("<div class='animated fadeInUp infinite'> Looking For Infected </div>");
         setTimeout(function () {
        BattleChancefunction();
          }, 1500);
        function BattleChancefunction(){
            var Timer = Math.floor(Math.random() * 4500) + 3500;
        console.log(Timer);
            StatusDialog();
        var BattleChance = Math.floor(Math.random() * 50) + 1
        console.log("Battle Chance : " + BattleChance);
        var BattleThreshold = Math.floor(Math.random() * 99) + 1
            console.log("Battle Threshold : "+BattleThreshold)
            
               if (BattleChance > BattleThreshold){
                   $("#Stop").remove();
             $("#Status").html("<div class='animated tada'> Enemy Approaching !</div>");
                   $("#Player").attr("src", "./img/BeachFighting.gif");
                   $("#Leave").remove();
                   $("#AlertPlayerText").append("<br><button id='Fight' class='MenuButton'> Fight! </button>");
                   $("#Fight").click(function(){
         $("#ContinueMessageHolder").remove();
            $("#StatusMessageHolder").html("");
            $("#ContinueMessageHolder").html("");
            $("#CharacterAvatar").html("");
            $("#App").load("./temp/BeachVictoriaBattle.html");
    });
                   
            } else if (BattleChance == 10 || BattleChance == 25 || BattleChance == 45 ){
                      $("#Stop").remove();
             $("#Status").html("<div class='animated tada'> Item Found ! </div>");
                   $("#Player").attr("src", "./img/BeachFighting.gif");
                   $("#Leave").remove();
                   $("#AlertPlayerText").append("<br><button id='Item' class='MenuButton'> Choose Item </button>");
    $("#Item").click(function(){
        // Item clicked, Create ItemChance variable for which chest. This allows for a class later on to know which box ot look under!
        var ItemChest = Math.floor(Math.random() * 2) + 1;
        var ItemChestDialog = "Sorry, The treasure must have been in the other chest!";
        
        
        
        
         $("#ContinueMessageHolder").remove();
            $("#AlertPlayerMessage").html("<div id='AlertPlayerText' class='AlertPlayerText'><h5 id='Status'> Which One ? </h5><br><button id='Chest1' class='MenuButton'> Chest 1 </button><button id='Chest2' class='MenuButton'> Chest2 </button><br><button id='Leave' class='MenuButton'> Back </button></div>");
    
                       
    $("#Chest1").click(function(){
        if (ItemChest == 1){
           ItemChestDialog = "You Got An Item!"; 
            $("#ContinueMessageHolder").remove();
            
            var Party = JSON.parse(localStorage.getItem('_Party'));
            Party[0].Inventory.push(RandomItem[0]);
            localStorage.setItem('_Party', JSON.stringify(Party));
            
            
            $("#AlertPlayerMessage").html("<div id='AlertPlayerText' class='AlertPlayerText'><h5 id='Status'> Which One ? </h5><div id='ItemChance'>"+ItemChestDialog+"<br> It's a "+RandomItem[0].Name+" !<br><img class='BattleItem animated flipInY' src='"+RandomItem[0].Avatar+"'></img></div><br><button id='Leave' class='MenuButton'> Back </button></div>");
        } else {
        
         $("#ContinueMessageHolder").remove();
            $("#AlertPlayerMessage").html("<div id='AlertPlayerText' class='AlertPlayerText'><h5 id='Status'> Which One ? </h5><div id='ItemChance'>"+ItemChestDialog+"</div><br><button id='Leave' class='MenuButton'> Back </button></div>");
            
        };
        $("#Leave").click(function(){
         $("#ContinueMessageHolder").remove();
            $("#StatusMessageHolder").html("");
            $("#ContinueMessageHolder").html("");
            $("#CharacterAvatar").html("");
            $("#App").load("./temp/BeachVictoriaWalking.html");
    });
        });
        
   $("#Chest2").click(function(){
        if (ItemChest == 2){
           ItemChestDialog = "You Got An Item!"; 
            $("#ContinueMessageHolder").remove();
            
             var Party = JSON.parse(localStorage.getItem('_Party'));
            Party[0].Inventory.push(RandomItem[1]);
            localStorage.setItem('_Party', JSON.stringify(Party));
            
            
            $("#AlertPlayerMessage").html("<div id='AlertPlayerText' class='AlertPlayerText'><h5 id='Status'> Which One ? </h5><div id='ItemChance'>"+ItemChestDialog+"<br> It's a "+RandomItem[1].Name+"!<br><img class='BattleItem animated flipInY' src='"+RandomItem[1].Avatar+"'></img></div><br><button id='Leave' class='MenuButton'> Back </button></div>");
        } else {
        
         $("#ContinueMessageHolder").remove();
            $("#AlertPlayerMessage").html("<div id='AlertPlayerText' class='AlertPlayerText'><h5 id='Status'> Which One ? </h5><div id='ItemChance'>"+ItemChestDialog+"</div><br><button id='Leave' class='MenuButton'> Back </button></div>");
            
        };
        $("#Leave").click(function(){
         $("#ContinueMessageHolder").remove();
            $("#StatusMessageHolder").html("");
            $("#ContinueMessageHolder").html("");
            $("#CharacterAvatar").html("");
            $("#App").load("./temp/BeachVictoriaWalking.html");
    });
        });           
            
        
        
        
        
        
        
        
        
        
        
                       
    $("#Leave").click(function(){
         $("#ContinueMessageHolder").remove();
            $("#StatusMessageHolder").html("");
            $("#ContinueMessageHolder").html("");
            $("#CharacterAvatar").html("");
            $("#App").load("./temp/BeachVictoriaWalking.html");
    });      
                       
                   });
                       } else  {
                 setTimeout(function () {
                BattleChancefunction();
                }, Timer);
            };
            
        };
        
    };
    
    
        
        
        function StatusDialog() {
            
            var PartyNum = Math.floor(Math.random() * Party.length) + 0;
           
            var PartyNum2 = 0;
            findNum2();
            
            function findNum2(){
             PartyNum2 = Math.floor(Math.random() * Party.length) + 0;
                if (PartyNum2 == PartyNum){
                    findNum2();
                }
                }
            var BothChance = Math.floor(Math.random() * 10) + 0;
            
            
            if (BothChance > 6){
                BothChance = true;
            }
            
            
        var Status = [
            {
                Dialog: " Looking under rocks "
            }
            , {
                Dialog: " Looking at the waves "
            }, {
                Dialog: " Staring at a crab "
            }, {
                Dialog: "  Pondering life "
            }, {
                Dialog: " Craving a Tommie's Icebergs "
            }, {
                Dialog: " Looking at Sand "
            }, {
                Dialog: " Wading in the water "
            }, {
                Dialog: " Feeling the hot sand "
            }, {
                Dialog: " Smelling the salty brine "
            }, {
                Dialog: " Thinking about food "
            }, {
                Dialog: " Watching the seagulls in the distance "
            }, {
                Dialog: " Getting paranoid "
            }, {
                Dialog: " Drifting off to sleep "
            }
        , ]
        var StatusOption = Status[Math.floor(Math.random() * Status.length)];
            if (BothChance == true){
                $("#Status").html("<div class='animated fadeInUp infinite'> "+Party[PartyNum].Name+" and "+Party[PartyNum2].Name+" are " + StatusOption.Dialog + "</div>");
            } else {
                $("#Status").html("<div class='animated fadeInUp infinite'> "+Party[PartyNum].Name+" is " + StatusOption.Dialog + "</div>");
            };
            
        
    }
        
        
        
    
    };
    
    
    
    
    
    
    
}