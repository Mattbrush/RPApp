/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
console.log("~~~~~~~~~~~~~~~~~~~MAIN MENU~~~~~~~~~~~~~~~~~~~")
$("#MessageHolder").remove();
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
        /* ~~~~~WEIGHT~~~~~  */
        // Set global party Weight
    PartyWeightTotal = 0;
    PartyWeightCurrent = 0;
    for (e = 0; e < Party[0].Inventory.length; e++) {
        if (Party[0].Inventory[e].Weight != undefined) {
            PartyWeightCurrent = PartyWeightCurrent + Party[0].Inventory[e].Weight
        }
        else {
            console.log("This item does not have a set weight");
            console.log(Party[0].Inventory[e]);
        }
    };
    // Calculate Current Weight Of Party ! //
    for (i = 0; i < Party.length; i++) {
        PartyWeightTotal = PartyWeightTotal + Party[i].Weight;
        if (Party[i].Equipment.Belt.Weight) {
            PartyWeightCurrent = PartyWeightCurrent + Party[i].Equipment.Belt.Weight;
        }
        else if (Party[i].Equipment.Head.Weight) {
            PartyWeightCurrent = PartyWeightCurrent + Party[i].Equipment.Head.Weight;
        }
        else if (Party[i].Equipment.LeftHand.Weight) {
            PartyWeightCurrent = PartyWeightCurrent + Party[i].Equipment.LeftHand.Weight;
        }
        else if (Party[i].Equipment.Legs.Weight) {
            PartyWeightCurrent = PartyWeightCurrent + Party[i].Equipment.Legs.Weight;
        }
        else if (Party[i].Equipment.RightHand.Weight) {
            PartyWeightCurrent = PartyWeightCurrent + Party[i].Equipment.RightHand.Weight;
        }
        else if (Party[i].Equipment.Ring1.Weight) {
            PartyWeightCurrent = PartyWeightCurrent + Party[i].Equipment.Ring1.Weight;
        }
        else if (Party[i].Equipment.Ring2.Weight) {
            PartyWeightCurrent = PartyWeightCurrent + Party[i].Equipment.Ring2.Weight;
        }
        else if (Party[i].Equipment.Torso.Weight) {
            PartyWeightCurrent = PartyWeightCurrent + Party[i].Equipment.Torso.Weight;
        };
    };
    //////////////////////////////////////////
    /* ~~~~~WEIGHT END~~~~~  */
    ////////////////////////////
    $("#ContinueMessageHolder").remove();
    $("#Overlay").css("opacity", "1");
    window.setInterval(function () {
        //    $("#Color").html(moment().format("LTS"))
        //   $("#MenuTitle").html(" <h3 class='animated tada SubMainTitle' > Menu </h3>")
    }, 5000);
    PlaceInformation();

    function PlaceInformation() {
        $("#Color").css("background", "" + Party[PartyIndex].Color + "");
        $("#PartyStatus").html("<div class='MenuWrapper' id='CharacterStats'><div class='MenuWrapper'><h3 class='SubSubMainTitle animated rubberBand'>Stats</h3> Player Name : <strong>" + Party[PartyIndex].Name + " " + Party[PartyIndex].FamilyName + "</strong></div><div class='MenuWrapper' id='Stats'></div><div class='MenuWrapper' id='Level'>Level :  " + Party[PartyIndex].Level + "</div><div class='MenuWrapper' id='Experience'>Total Experience : " + Party[PartyIndex].Experience.Total + "</div><div class='MenuWrapper' id='ToNext'> To Next Level : " + Party[PartyIndex].Experience.ToNextLevel + "</div><div class='MenuWrapper' id='Spells'><span>Spells : </span></div><div class='MenuWrapper' id='Moves'><span>Moves : </span></div><div class='MenuWrapper' id='PartySwitch'></div></div><br><div class='MenuWrapper' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span class='Money'>$" + Character.Wallet.Total + "</span><br><span> Party Weight :  " + PartyWeightCurrent + " / " + PartyWeightTotal + "</span><br></div><br><br>");
        if (Party.length > 1){
            $("#PartySwitch").append("<button class='MenuButton' id='PrevParty'> Previous </button><button class='MenuButton' id='NextParty'> Next </button>");
        };
        $("#CharacterStats").css("border-color", "" + Party[PartyIndex].Color + "");
        $("#Wallet").css("border-color", "" + Party[PartyIndex].Color + "");
        if (Party[PartyIndex].Spells.length == 0) {
            $("#Spells").append("<br> None learned ");
            $("#Spells").css("color", "pink");
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
            };
        };
        for (i = 0; i < 8; i++) {
            // Deciding how to display dfferent Stats //
            if (i == 6) {}
            else if (i == 5) {}
            else if (i == 4) {}
            else if (i == 3) {}
            else if (i == 2) {}
            else if (i == 1) {}
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
        /* ~~~~~Equipment Bonus Stats~~~~~  */
        PartyMember = Party[PartyIndex];
        console.log("~~Current Party Member~~");
        console.log(PartyMember.Name);
        console.log("Current Health   : " + PartyMember.Stats[0].Value);
        
        
        var AttackStrength = 0;
        var DefenseStrength = 0
        
        
        if (PartyMember.Equipment.Head.Stats == undefined){
            console.log("No Headwear On Character");
        } else {
            DefenseStrength = DefenseStrength + PartyMember.Equipment.Head.Stats.Defense
        };
        
        if (PartyMember.Equipment.Torso.Stats == undefined){
            console.log("No Torso On Character");
        } else {
            DefenseStrength = DefenseStrength + PartyMember.Equipment.Torso.Stats.Defense
        }
        
         if (PartyMember.Equipment.Belt.Stats == undefined){
            console.log("No Belt On Character");
        } else {
            DefenseStrength = DefenseStrength + PartyMember.Equipment.Belt.Stats.Defense
        }
        
        
        if (PartyMember.Equipment.Legs.Stats == undefined){
            console.log("No Legs On Character");
        } else {
            DefenseStrength = DefenseStrength + PartyMember.Equipment.Legs.Stats.Defense
        }
        
        if (PartyMember.Equipment.Ring1.Stats == undefined){
            console.log("No Ring1 On Character");
        } else {
            DefenseStrength = DefenseStrength + PartyMember.Equipment.Ring1.Stats.Defense
        }
        
        
         if (PartyMember.Equipment.Ring2.Stats == undefined){
            console.log("No Ring2 On Character");
        } else {
            DefenseStrength = DefenseStrength + PartyMember.Equipment.Ring2.Stats.Defense
        }
        
        
        
        

        if (PartyMember.Equipment.RightHand.Stats == undefined){
        console.log(" No Item Equipped In Right Hand")
        } else {
              if (PartyMember.Equipment.RightHand.Stats.Attack != undefined){
             console.log("No RightHand Defense For  Character");
            AttackStrength = AttackStrength + PartyMember.Equipment.RightHand.Stats.Attack   
            } else if (PartyMember.Equipment.RightHand.Stats.Defense != undefined){
             console.log("No RightHand Attack For  Character");
            DefenseStrength = DefenseStrength + PartyMember.Equipment.RightHand.Stats.Defense   
            }
        }
        
        if (PartyMember.Equipment.LeftHand.Stats == undefined){
        console.log(" No Item Equipped In LeftHand ")
        } else {
              if (PartyMember.Equipment.LeftHand.Stats.Attack != undefined){
             console.log("No LeftHand Defense For  Character");
            AttackStrength = AttackStrength + PartyMember.Equipment.LeftHand.Stats.Attack   
            } else if (PartyMember.Equipment.LeftHand.Stats.Defense != undefined){
             console.log("No LeftHand Attack For  Character");
            DefenseStrength = DefenseStrength + PartyMember.Equipment.LeftHand.Stats.Defense   
            }
        }
        
        if (DefenseStrength == 0){
            DefenseStrength = 1;
        }
        
         if (AttackStrength == 0){
            AttackStrength = 1;
        }
        
        
        if (PartyMember.Stats[2].Value < 1){
         DefenseStrength = Math.round(( 1 ) *  DefenseStrength); 
        } else {
        DefenseStrength = Math.round(( PartyMember.Stats[2].Value + .45) *  DefenseStrength);
        };
        
        
        if (PartyMember.Stats[1].Value < 1){
         AttackStrength = Math.round(( 1 ) *  AttackStrength);   
        } else {
        AttackStrength = Math.round(( PartyMember.Stats[1].Value + .25) *  AttackStrength);
        };
        
        Party[PartyIndex].BattleStats.AttackStrength = AttackStrength;
        Party[PartyIndex].BattleStats.DefenseStrength = DefenseStrength;
        Character = Party[0];
         localStorage.setItem('_character', JSON.stringify(Character));
        localStorage.setItem('_Party', JSON.stringify(Party));
        
        
       
        console.log("~~~~~~~~~~")
            /* ~~~~~End Of Stats~~~~~  */
        $("#Stats").append("<br><span>Attack Strength : " + Party[PartyIndex].BattleStats.AttackStrength + "</span>");
        $("#Stats").append("<br><span>Defense Strength : " + Party[PartyIndex].BattleStats.DefenseStrength + "</span>");
        // Changing Party Member Button
        $("#NextParty").click(function () {
            PartyIndex++
            if (Party[PartyIndex] == undefined) {
                PartyIndex = 0;
                PlaceInformation();
            }
            else {
                PlaceInformation();
            }
        })
        $("#PrevParty").click(function () {
                PartyIndex--
                if (Party[PartyIndex] == undefined) {
                    PartyIndex = Party.length - 1;
                    PlaceInformation();
                }
                else {
                    PlaceInformation();
                }
            })
            ////////////////////////////
    };
    // Or Just display them generically with this : 
    $("#MenuList").html("<br><div class='FixedBottomMenuWrapper' style='border-color:" + Party[0].Color + "'><button class='MenuButtonTabs TabActive' id='Party'>Stats</button><button class='MenuButtonTabs' id='Inventory'>Inv.</button><button class='MenuButtonTabs' id='Equipment'>Equip.</button><button class='MenuButtonTabs' id='Skills'>Skill Points</button><button id='Close' class='MenuButtonTabs'>Close</button></div>");
    $(".FixedBottomMenuWrapper").css("border-width", "5px");
    $(".FixedBottomMenuWrapper").css("border-left", "0");
    $(".FixedBottomMenuWrapper").css("border-right", "0");
    $(".FixedBottomMenuWrapper").css("border-bottom", "0");
    $(".FixedBottomMenuWrapper").css("border-style", "double");
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
    $("#Equipment").click(function () {
        $(".MenuButtonTabs").removeClass("TabActive")
        $("#Equipment").addClass("TabActive")
        $("#PartyStatus").load("./temp/Equipment.html");
    })
    $("#Skills").click(function () {
        $(".MenuButtonTabs").removeClass("TabActive")
        $("#Skills").addClass("TabActive")
        $("#PartyStatus").load("./temp/Skills.html");
    })
    $("#Close").click(function () {
        $("#Overlay").css("opacity", "0.85");
        console.log("Before Character");
        console.log(Character);
        $("#Overlay").css("z-index", "-1");
        $("#Overlay").html("");
        $("#Overlay").removeClass("Open");
    })
};