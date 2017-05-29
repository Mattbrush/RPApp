/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
console.log("~~~~~~~~~~~~~~~~~~~MAIN MENU~~~~~~~~~~~~~~~~~~~")
CheckWallet()
CheckLevel();
StartApp();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    /*~~~~~~~~~~~~~~~~~~~~ --------------------- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function CheckWallet() {
        var Character = JSON.parse(localStorage.getItem('_character'));
        console.log("~~~Configuring Wallet~~~");
        console.log("Wallet : ");
        console.log(Character.Wallet);
        localStorage.setItem('_character', JSON.stringify(Character));
        console.log("~~~~~~~~~~~~~~~~~~~")
    };


function CheckLevel(Character) {
    console.log("~~~Configuring Character Experience and Level~~~");
    var Character = JSON.parse(localStorage.getItem('_character'));
    console.log("Character Experience and Level : ");
    console.log(Character.Experience);
    console.log("Level : " + Character.Level);
    /* Experience System WHILE Statements //// Make More Concise Later! /////// */
    while (Character.Experience.Total >= Character.Experience.ToNextLevel) {
        Character.Experience.ToNextLevel = Math.round(Character.Experience.ToNextLevel * 1.25);
        Character.Level = Character.Level + 1;
        Character.Experience.Total = 0;
    }
    localStorage.setItem('_character', JSON.stringify(Character));
    console.log("~~~~~~~~~~~~~~~~~~~")
};

function StartApp(Character) {
        var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    
    
    // Set Player to be looking at //
    var PartyIndex = 0;
    console.log(Party[PartyIndex])
    $("#ContinueMessageHolder").remove();
    $("#Overlay").css("opacity","1");
    window.setInterval(function () {
        //    $("#Color").html(moment().format("LTS"))
     //   $("#MenuTitle").html(" <h3 class='animated tada SubMainTitle' > Menu </h3>")
    }, 5000);
    PlaceInformation();
    
    function PlaceInformation(){
    $("#Color").css("background", "" +  Party[PartyIndex].Color + "");
    $("#PartyStatus").html("<div class='MenuWrapper' id='CharacterStats'><div class='MenuWrapper'><h3 class='SubSubMainTitle animated rubberBand'>Stats</h3> Player Name : <strong>" + Party[PartyIndex].Name + " " +  Party[PartyIndex].FamilyName + "</strong></div><div class='MenuWrapper' id='Stats'></div><div class='MenuWrapper' id='Level'>Level :  " +  Party[PartyIndex].Level + "</div><div class='MenuWrapper' id='Experience'>Total Experience : " +  Party[PartyIndex].Experience.Total + "</div><div class='MenuWrapper' id='ToNext'> To Next Level : " +  Party[PartyIndex].Experience.ToNextLevel + "</div><div class='MenuWrapper' id='Spells'><span>Spells : </span></div><div class='MenuWrapper' id='Moves'><span>Moves : </span></div><div class='MenuWrapper' id='PartySwitch'><button class='MenuButton' id='PrevParty'> Previous </button><button class='MenuButton' id='NextParty'> Next </button></div></div><br><div class='MenuWrapper' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span class='Money'>$" + Character.Wallet.Total + "</span><br><br></div><br><br>");
    $("#CharacterStats").css("border-color",""+ Party[PartyIndex].Color+"");
    $("#Wallet").css("border-color",""+ Party[PartyIndex].Color+"");
        
            if (Party[PartyIndex].Spells.length == 0) {
        $("#Spells").append("<br> None learned ");
               // $("#Spells").css("color","red");
    }
    else {
        for (i = 0; i < Party[PartyIndex].Spells.length; i++) {
            $("#Spells").append("<br>" + Party[PartyIndex].Spells[i].Name + "");
            console.log(Party[PartyIndex].Spells.length)
        };
    };
        
          if (Party[PartyIndex].Moves.length == 0) {
        $("#Moves").append("<br> None learned ");
               // $("#Spells").css("color","red");
    }
    else {
        for (i = 0; i < Party[PartyIndex].Moves.length; i++) {
            $("#Moves").append("<br>" + Party[PartyIndex].Moves[i].Name + "");
            console.log(Party[PartyIndex].Moves.length)
        };
    };
        
        
        
         for (i = 0; i < 8; i++) {
        // Deciding how to display dfferent Stats //
        if (i == 6) {}
        else if (i == 5) {}
        else if (i == 4) {}
        else if (i == 0) {
            $("#Stats").append("<span>" + Party[PartyIndex].Stats[i].Name + " : " + Party[PartyIndex].Stats[i].Value + " / " + Party[PartyIndex].Stats[6].Value + "</span><br>");
        }
        else if (i == 7) {
            $("#Stats").append("<span>" + Party[PartyIndex].Stats[i].Name + " : " + Party[PartyIndex].Stats[i].Value + " / " + Party[PartyIndex].Stats[8].Value + "</span><br>");
        }
        else {
            $("#Stats").append("<span>" + Party[PartyIndex].Stats[i].Name + " : " + Party[PartyIndex].Stats[i].Value + "</span><br>");
        };
    };
        
        
        
            // Changing Party Member Button
    $("#NextParty").click(function () {
        PartyIndex++
        if (Party[PartyIndex] == undefined){
            PartyIndex = 0;
            PlaceInformation();
           console.log(Party[PartyIndex]) 
        } else {
            PlaceInformation();
            console.log(Party[PartyIndex])
        }
    })
    
        $("#PrevParty").click(function () {
        PartyIndex--
        if (Party[PartyIndex] == undefined){
            PartyIndex = Party.length-1;
            PlaceInformation();
           console.log(Party[PartyIndex]) 
        } else {
            PlaceInformation();
            console.log(Party[PartyIndex])
        }
    })
    ////////////////////////////
    
        
    };

   
    // Or Just display them generically with this : 

    $("#MenuList").html("<br><div class='FixedBottomMenuWrapper' style='border-color:"+Party[0].Color+"'><button class='MenuButtonTabs TabActive' id='Party'>Stats</button><button class='MenuButtonTabs' id='Inventory'>Inventory</button><button class='MenuButtonTabs' id='Skills'>Skill Points</button><button id='Close' class='MenuButtonTabs'>Close</button></div>");
    $(".FixedBottomMenuWrapper").css("border-width","5px");
    $(".FixedBottomMenuWrapper").css("border-left","0");
    $(".FixedBottomMenuWrapper").css("border-right","0");
    $(".FixedBottomMenuWrapper").css("border-bottom","0");
    $(".FixedBottomMenuWrapper").css("border-style","double");
    ////////// MENU BUTTON FUNCTIONS ///////////////
    

    
    
    
    $("#Party").click(function () {
        $(".MenuButtonTabs").removeClass("TabActive")
        $("#Party").addClass("TabActive")
        $("#PartyStatus").load("./temp/Status.html");
    })
    $("#Inventory").click(function () {
        $(".MenuButtonTabs").removeClass("TabActive")
         $("#Inventory").addClass("TabActive")
        $("#PartyStatus").load("./temp/Inventory.html");
    })
    $("#Skills").click(function () {
        $(".MenuButtonTabs").removeClass("TabActive")
         $("#Skills").addClass("TabActive")
        $("#PartyStatus").load("./temp/Skills.html");
    })
    $("#Close").click(function () {
        $("#Overlay").css("opacity","0.85");
        console.log("Before Character");
        console.log(Character);
        $("#Overlay").css("z-index", "-1");
        $("#Overlay").html("");
        $("#Overlay").removeClass("Open");
    })
};