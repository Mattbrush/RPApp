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
             $("#Locationtitle").remove();
             
             $("#App").prepend("<div id='OverlayBlanket' class='OverlayBlanket' ></div>");
    $("#App").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage' ></div>");
    $("#AlertPlayerMessage").prepend("<div id='AlertPlayerText' class='AlertPlayerText'><h4 id='Status'></h4><img id='Player' style='Width:50%' src='./img/BeachWalking.gif'></img><br><button id='Leave' class='MenuButton'> Leave </button></div>");
    $("#AlertPlayerMessage").css("top","10%");
    
    $("#Leave").click(function(){
         $("#ContinueMessageHolder").remove();
            $("#StatusMessageHolder").html("");
            $("#ContinueMessageHolder").html("");
            $("#CharacterAvatar").html("");
            $("#App").load("./temp/Victoria.html");
    });

    CurrentStatus();
    
    function CurrentStatus(){
        $("#Status").html("<div class='animated flash infinite'> Looking For Infected </div>");
         setTimeout(function () {
        BattleChancefunction();
          }, 1500);
        function BattleChancefunction(){
        var BattleChance = Math.floor(Math.random() * 45) + 1
        console.log("Battle Chance : " + BattleChance);
        var BattleThreshold = Math.floor(Math.random() * 99) + 1
            console.log("Battle Threshold : "+BattleThreshold)
            
               if (BattleChance > BattleThreshold){
             $("#Status").html("<div class='animated tada'> Enemy Approaching !</div>");
                   $("#Player").attr("src", "./img/BeachFighting.gif");
                   $("#Leave").remove();
                   $("#AlertPlayerText").append("<br><button id='Fight' class='MenuButton'> Fight! </button>");
            } else {
                 setTimeout(function () {
                BattleChancefunction();
                }, 3000);
            };
            
        };
        
    };
    
}