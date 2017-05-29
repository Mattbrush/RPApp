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
    
    $("#Overlay").css("opacity","1");
    window.setInterval(function () {
        //    $("#Color").html(moment().format("LTS"))
     //   $("#MenuTitle").html(" <h3 class='animated tada SubMainTitle' > Menu </h3>")
    }, 5000);
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    $("#Color").css("background", "" + Character.Color + "");
    $("#PartyStatus").html("<div class='MenuWrapper' id='CharacterStats'><div class='MenuWrapper'><h3 class='SubSubMainTitle animated rubberBand'>Stats</h3> Player Name : <strong>" + Character.Name + " " + Character.FamilyName + "</strong></div><div class='MenuWrapper' id='Stats'></div><div class='MenuWrapper' id='Level'>Level :  " + Character.Level + "</div><div class='MenuWrapper' id='Experience'>Total Experience : " + Character.Experience.Total + "</div><div class='MenuWrapper' id='ToNext'> To Next Level : " + Character.Experience.ToNextLevel + "</div><div class='MenuWrapper' id='Spells'><span>Spells : </span></div></div><br><div class='MenuWrapper' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span class='Money'>$" + Character.Wallet.Total + "</span><br><br></div><br><br>");
    $("#CharacterStats").css("border-color",""+Party[0].Color+"");
    $("#Wallet").css("border-color",""+Party[0].Color+"");

    for (i = 0; i < 8; i++) {
        // Deciding how to display dfferent Stats //
        if (i == 6) {}
        else if (i == 5) {}
        else if (i == 4) {}
        else if (i == 0) {
            $("#Stats").append("<span>" + Character.Stats[i].Name + " : " + Character.Stats[i].Value + " / " + Character.Stats[6].Value + "</span><br>");
        }
        else if (i == 7) {
            $("#Stats").append("<span>" + Character.Stats[i].Name + " : " + Character.Stats[i].Value + " / " + Character.Stats[8].Value + "</span><br>");
        }
        else {
            $("#Stats").append("<span>" + Character.Stats[i].Name + " : " + Character.Stats[i].Value + "</span><br>");
        };
    };
    // Or Just display them generically with this : 
    if (Character.Spells.length == 0) {
        $("#Spells").append(" None learned ");
    }
    else {
        for (i = 0; i < Character.Spells.length; i++) {
            $("#Spells").append("<br>" + Character.Spells[i].Name + "");
            console.log(Character.Spells.length)
        };
    };
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