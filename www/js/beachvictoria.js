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

function StartBeach() {
  //  $("#Locationtitle").html(" The Beach, Victoria,  B.C");
    $("#OverlayContainer").append("<div id='CharacterAvatar' class='CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
    $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' The Beach eh? I wonder if there are any infected nearby?  '</div>");
    $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Continue'> Continue </button>");
    $("#Continue").click(function(){
        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Want to go looking? Could be dangerous? '</div>");
        $("#ContinueMessageHolder").html("<button class='DialogNextButton animated flipInX' id='WalkBeach'> Look For Infected Animals </button><br><button class='DialogNextButton animated flipInX' id='Leave'> Leave </button><br>");
        $("#WalkBeach").click(function () {
            $("#ContinueMessageHolder").remove();
            $("#StatusMessageHolder").html("");
            $("#ContinueMessageHolder").html("");
            $("#CharacterAvatar").html("");
            $("#App").load("./temp/BeachVictoriaWalking.html");
        });
        $("#Leave").click(function () {
            $("#ContinueMessageHolder").remove();
            $("#StatusMessageHolder").html("");
            $("#ContinueMessageHolder").html("");
            $("#CharacterAvatar").html("");
            $("#App").load("./temp/Victoria.html");
        });
    });
};