/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
console.log("~~~~~~~~~~~~~~~~~~~MAIN MENU~~~~~~~~~~~~~~~~~~~")
$("#MessageHolder").remove();
$("#ContinueMessageHolder").remove();
// Change Background //
$(".Overlay").css("background-image", "url(img/Leather.jpg)");
////

CheckWallet()
CheckLevel();
StartApp();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    /*~~~~~~~~~~~~~~~~~~~~ --------------------- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function CheckWallet() {
    var Party = JSON.parse(localStorage.getItem('_Party'));
    console.log("~~~Configuring Wallet~~~");
    console.log("Wallet : ");
    console.log(Party[0].Wallet);
    localStorage.setItem('_Party', JSON.stringify(Party));
    console.log("~~~~~~~~~~~~~~~~~~~")
};

function CheckLevel() {
    console.log("~~~Configuring Character Experience and Level~~~");
    var Party = JSON.parse(localStorage.getItem('_Party'));
    console.log("Character Experience and Level : ");
    console.log(Party[0].Experience);
    console.log("Level : " + Party[0].Level);
    /* Experience System WHILE Statements //// Make More Concise Later! /////// */
    while (Party[0].Experience.Total >= Party[0].Experience.ToNextLevel) {
        Party[0].Experience.ToNextLevel = Math.round(Party[0].Experience.ToNextLevel * 1.25);
        Party[0].Level = Party[0].Level + 1; 
        Party[0].Experience.Total = 0;
    }
    console.log(Party);
     localStorage.setItem('_Party', JSON.stringify(Party));
    console.log("~~~~~~~~~~~~~~~~~~~")
};

function StartApp() {
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
         //  $("#MenuTitle").animateCss('bounce');
    }, 1000);
    PlaceInformation();

    function PlaceInformation() {
        
        
        
        // Creating Slides For Swiper //
  var Party = JSON.parse(localStorage.getItem('_Party'));
        for (i = 0; i < Party.length; i++) {
            var Party = JSON.parse(localStorage.getItem('_Party'));
            console.log(Party[i])
        $("#PartyStatus").append("<div class='swiper-slide'><div class='MenuWrapper' id='CharacterStats"+i+"'><div class=''><h3 class='SubSubMainTitle animated rubberBand'>Stats</h3> Player Name : <strong>" + Party[i].Name + " " + Party[i].FamilyName + "</strong></div><div class='' id='Level'>Level :  " + Party[i].Level + "</div><div class='' id='Stats"+i+"'></div><div class='' id='Spells"+i+"'><button class='MenuButton'> Spells </button></div><div class='' id='Moves"+i+"'><button class='MenuButton'> Moves </button></div></div></div></div>");
        if (Party[i].Spells.length == 0) {
            $("#Spells"+i+"").append("<br> None learned ");
            $("#Spells"+i+"").css("color", "pink");
        }
        else {
            for (u = 0; u < Party[i].Spells.length; u++) {
                $("#Spells"+i+"").append("<br>" + Party[i].Spells[u].Name + "");
                console.log(Party[i].Spells.length)
            };
        };
        if (Party[i].Moves.length == 0) {
            $("#Moves"+i+"").append("<br> None learned ");
            // $("#Spells").css("color","red");
        }
        else {
            for (u = 0; u < Party[i].Moves.length; u++) {
                $("#Moves"+i+"").append("<br>" + Party[i].Moves[u].Name + "");
            };
        };  
            
        for (u = 0; u < 10; u++) {
            // Deciding how to display dfferent Stats //
            if (u == 6) {}
            else if (u == 9) {}
            else if (u == 5) {}
            else if (u == 4) {}
            else if (u == 8) {}
            else if (u == 3) {}
            else if (u == 2) {}
            else if (u == 1) {}
            else if (u == 0) {
                $("#Stats"+i+"").append("<progress class='Bar HealthProgress' id='PlayerHealth'  value='"+Party[i].Stats[u].Value+"' max='" + Party[i].Stats[6].Value + "'  data-label='" + Party[i].Stats[u].Value + " / " + Party[i].Stats[6].Value+ "'></progress>");
            }
            else if (u == 7) {
                $("#Stats"+i+"").append("<progress class='Bar ManaProgress' id='PlayerMana'  value='"+Party[i].Stats[u].Value+"'   max='" + Party[i].Stats[8].Value + "' data-label='" + Party[i].Stats[u].Value + " / " + Party[i].Stats[8].Value+ "'></progress>");
            }
            else {
                $("#Stats"+i+"").append("<span>" + Party[i].Stats[u].Name + " : " + Party[i].Stats[u].Value + "</span><br>");
            };
            
            
        };
        
        $("#Stats"+i+"").append("<progress class='Bar XPProgress' id='XPMainTitle'  value='"+Party[i].Experience.Total+"' max='" + Party[i].Experience.ToNextLevel + "'  data-label='" + Party[i].Experience.Total + " / " + Party[i].Experience.ToNextLevel+ "'></progress>");    
            
            
            
             /* ~~~~~Equipment Bonus Stats~~~~~  */
        
        
        PartyMember = Party[i];
        console.log("~~Current Party Member~~");
        console.log(PartyMember.Name);
        console.log("Current Health   : " + PartyMember.Stats[0].Value);
        
        var AttackStrength = [0,0]
        var DefenseStrength = [0,0]
        
        PartyMember.BattleStats.AttackStrength= [0,0];
        PartyMember.BattleStats.DefenseStrength= [0,0];
        
        
        if (PartyMember.Equipment.Head.Stats == undefined){
            console.log("No Headwear On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Head.Stats.Defense[0]
            DefenseStrength[1] = DefenseStrength[1] + PartyMember.Equipment.Head.Stats.Defense[1]
        };
        
        if (PartyMember.Equipment.Torso.Stats == undefined){
            console.log("No Torso On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Torso.Stats.Defense[0];
            DefenseStrength[1] = DefenseStrength[1] + PartyMember.Equipment.Torso.Stats.Defense[1];
        }
        
         if (PartyMember.Equipment.Belt.Stats == undefined){
            console.log("No Belt On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Belt.Stats.Defense[0]
            DefenseStrength[1] = DefenseStrength[1] + PartyMember.Equipment.Belt.Stats.Defense[1]
        }
        
        
        if (PartyMember.Equipment.Legs.Stats == undefined){
            console.log("No Legs On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Legs.Stats.Defense[0]
            DefenseStrength[1] = DefenseStrength[1] + PartyMember.Equipment.Legs.Stats.Defense[1]
        }
        
        if (PartyMember.Equipment.Ring1.Stats == undefined){
            console.log("No Ring1 On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Ring1.Stats.Defense[0]
            DefenseStrength[1] = DefenseStrength[1] + PartyMember.Equipment.Ring1.Stats.Defense[1]
        }
        
        
         if (PartyMember.Equipment.Ring2.Stats == undefined){
            console.log("No Ring2 On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Ring2.Stats.Defense[0]
            DefenseStrength[1] = DefenseStrength[1] + PartyMember.Equipment.Ring2.Stats.Defense[1]
        }
        
        
        
        

        if (PartyMember.Equipment.RightHand.Stats == undefined){
        console.log(" No Item Equipped In Right Hand")
        } else {
              if (PartyMember.Equipment.RightHand.Stats.Attack != undefined){
             console.log("No RightHand Defense For  Character");
            AttackStrength[0] = AttackStrength[0] + PartyMember.Equipment.RightHand.Stats.Attack[0]   
            AttackStrength[1] = AttackStrength[1] + PartyMember.Equipment.RightHand.Stats.Attack[1]   
            } else if (PartyMember.Equipment.RightHand.Stats.Defense != undefined){
             console.log("No RightHand Attack For  Character");
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.RightHand.Stats.Defense[0]    
            DefenseStrength[1] = DefenseStrength[1] + PartyMember.Equipment.RightHand.Stats.Defense[1]    
            }
        }
        
        if (PartyMember.Equipment.LeftHand.Stats == undefined){
        console.log(" No Item Equipped In LeftHand ")
        } else {
              if (PartyMember.Equipment.LeftHand.Stats.Attack != undefined){
             console.log("No LeftHand Defense For  Character");
            AttackStrength[0] = AttackStrength[0] + PartyMember.Equipment.LeftHand.Stats.Attack[0]   
            AttackStrength[1] = AttackStrength[1] + PartyMember.Equipment.LeftHand.Stats.Attack[1]   
            } else if (PartyMember.Equipment.LeftHand.Stats.Defense != undefined){
             console.log("No LeftHand Attack For  Character");
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.LeftHand.Stats.Defense[0]   
            DefenseStrength[1] = DefenseStrength[1] + PartyMember.Equipment.LeftHand.Stats.Defense[1]   
            }
        
        }
      
        
        AttackStrength[0] = AttackStrength[0] + PartyMember.Stats[1].Value;
        AttackStrength[1] = AttackStrength[1] + PartyMember.Stats[1].Value;
        DefenseStrength[0] = DefenseStrength[0] + PartyMember.Stats[2].Value;
        DefenseStrength[1] = DefenseStrength[1] + PartyMember.Stats[2].Value;
        
    
      if (DefenseStrength[0] <= 1){
            DefenseStrength[0] = 1;
        }
        
         if (AttackStrength[0] <= 1){
            AttackStrength[0] = 1;
        }
        
        if (DefenseStrength[1] <= 1){
            DefenseStrength[1] = 1;
        }
        
         if (AttackStrength[1] <= 1){
            AttackStrength[1] = 1;
        }
        Party[PartyIndex].BattleStats.AttackStrength[0] = AttackStrength[0];
        Party[PartyIndex].BattleStats.AttackStrength[1] = AttackStrength[1];
        Party[PartyIndex].BattleStats.DefenseStrength[0] = DefenseStrength[0];
        Party[PartyIndex].BattleStats.DefenseStrength[1] = DefenseStrength[1];

        localStorage.setItem('_Party', JSON.stringify(Party));
        
        
       
        console.log("~~~~~~~~~~")
            /* ~~~~~End Of Stats~~~~~  */
        
        
        $("#Stats"+i+"").append("<br><span><strong>Attack Power</strong> : " + Party[PartyIndex].BattleStats.AttackStrength[0] + " - " + Party[PartyIndex].BattleStats.AttackStrength[1] + "</span>");
        $("#Stats"+i+"").append("<br><span><strong>Defense Power</strong> : " + Party[PartyIndex].BattleStats.DefenseStrength[0] + " - " + Party[PartyIndex].BattleStats.DefenseStrength[1] + "</span>");
             
            $("#CharacterStats"+i+"").css("background", "" + Party[i].Color + "");
    
            localStorage.setItem('_Party', JSON.stringify(Party));
        };
        
        ////////////
        
        
        $("#PartyStatusContainer").append("<div class='MenuWrapper' id='PartyButtons'></div><div class='MenuWrapper' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span class='Money'>$" + Party[0].Wallet.Total + "</span><br><span> Party Weight :  " + PartyWeightCurrent + " / " + PartyWeightTotal + "</span>");
        
        
        
        
        
         for (i = 0; i < Party.length; i++) {
            $("#PartyButtons").append("<button class='MenuButton2' id='Party"+i+"'>"+Party[i].Name+"</button>"); 
             $("#Party"+i+"  ").css("background"," "+Party[i].Color+"  ");
             $("#Party"+i+"  ").click(function(){
                 StatsSwiper.slideTo(this.id.substr(5,1));
             });
         };
        
        
        
        // Create Swiper.Js Component. //
        var StatsSwiper = new Swiper('.swiper-container',{
            // Functions For Swiper
            
            
            // Parameters For Swiper
    spaceBetween: 100,
      //      loop: true,
        });
    
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
        $("#PlayerMenu").load("./temp/Status.html");
    })
    $("#Inventory").click(function () {
        $(".MenuButtonTabs").removeClass("TabActive")
        $("#Inventory").addClass("TabActive")
        $("#PlayerMenu").load("./temp/Inventory.html");
    })
    $("#Equipment").click(function () {
        $(".MenuButtonTabs").removeClass("TabActive")
        $("#Equipment").addClass("TabActive")
        $("#PlayerMenu").load("./temp/Equipment.html");
    })
    $("#Skills").click(function () {
        $(".MenuButtonTabs").removeClass("TabActive")
        $("#Skills").addClass("TabActive")
        $("#PlayerMenu").load("./temp/Skills.html");
    })
    $("#Close").click(function () {
        $("#Overlay").css("opacity", "0.85");
        console.log("Before Character");
        console.log(Party[0]);
        $("#Overlay").css("z-index", "-1");
        $("#Overlay").html("");
        $("#Overlay").removeClass("Open");
    })
};