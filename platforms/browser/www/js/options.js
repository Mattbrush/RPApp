console.clear();
console.log('~~~~~~~~~~~Options~~~~~~~~~~~~~')
StartOptions();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')

function StartOptions() {

    var Party = JSON.parse(localStorage.getItem('_Party'));
    console.log(Party[0]);
    
    /////////// Which Options Do You Want? //////////
    $("#Message").html(" Which options would you like to change?");
    $("#OptionsList").append(`<span class='animated fadeInDown Option'>Game Text Speed : </span><select class='Input animated fadeInDown' id='TextSpeed'><option  value='4000'>Slow</option><option selected value='2000'>Medium</option><option  value='1500'>Fast</option></select>`);
    
    
    
    
    
    
    // Debug Menu Options..
    
   
    $("#OptionsList").append("<h3 id='Triggers' class='animated fadeInDown' > Debug Options</h3>");

    $("#Triggers").append("<br><span id='1' class='animated fadeInDown' > Victoria 1 : </span><button id='1On' class='MenuButton'> True </button><button id='1Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='2' class='animated fadeInDown' > Victoria 2 : </span><button id='2On' class='MenuButton'> True </button><button id='2Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='3' class='animated fadeInDown' > Victoria 3 : </span><button id='3On' class='MenuButton'> True </button><button id='3Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='4' class='animated fadeInDown' > Victoria 4 : </span><button id='4On' class='MenuButton'> True </button><button id='4Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='5' class='animated fadeInDown' > Victoria 5 : </span><button id='5On' class='MenuButton'> True </button><button id='5Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='6' class='animated fadeInDown' > Victoria 6 : </span><button id='6On' class='MenuButton'> True </button><button id='6Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='7' class='animated fadeInDown' > Victoria 7 : </span><button id='7On' class='MenuButton'> True </button><button id='7Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='8' class='animated fadeInDown' > Victoria 8 : </span><button id='8On' class='MenuButton'> True </button><button id='8Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><span id='9' class='animated fadeInDown' > Victoria 9 : </span><button id='9On' class='MenuButton'> True </button><button id='9Off' class='MenuButton'> False </button>");
    $("#Triggers").append("<br><button id='Ben10' class='MenuButton' > Ben10 </button>");

         TriggerOnOff()
          
          function TriggerOnOff(){
                var Party = JSON.parse(localStorage.getItem('_Party'));
              console.log(Party[0].Triggers)
      for (i = 1; i <11; i++) {
             
              
               
          if (Party[0].Triggers["Victoria"+i] == true){
              $("#"+i+"Off").removeClass("MenuButton")
              $("#"+i+"Off").addClass("MenuButtonDisabled")
          } else{
              $("#"+i+"On").removeClass("MenuButton")
              $("#"+i+"On").addClass("MenuButtonDisabled")
          }
          
 };     
        
              for (i = 1; i < 11; i++) {  
          $("#"+i+"On").click(function(){
              if (Party[0].Triggers["Victoria"+this.id.substr(0,1)] == true){
                  Party[0].Triggers["Victoria"+this.id.substr(0,1)] = true
                  
                  localStorage.setItem('_Party', JSON.stringify(Party));
                  TriggerOnOff()
              }else if (Party[0].Triggers["Victoria"+this.id.substr(0,1)] == false){
                  Party[0].Triggers["Victoria"+this.id.substr(0,1)] = true
                 $(this).removeClass("MenuButtonDisabled");
                 $(this).addClass("MenuButton");
                  $("#"+this.id.substr(0,1)+"Off").removeClass("MenuButton");
                  $("#"+this.id.substr(0,1)+"Off").addClass("MenuButtonDisabled");
                  localStorage.setItem('_Party', JSON.stringify(Party));
                  TriggerOnOff()
              }
          });
          
          $("#"+i+"Off").click(function(){
              var Party = JSON.parse(localStorage.getItem('_Party'));
              if (Party[0].Triggers["Victoria"+this.id.substr(0,1)] == true){
                  Party[0].Triggers["Victoria"+this.id.substr(0,1)] = false;
                     $(this).removeClass("MenuButtonDisabled");
                 $(this).addClass("MenuButton");
                  $("#"+this.id.substr(0,1)+"On").removeClass("MenuButton");
                  $("#"+this.id.substr(0,1)+"On").addClass("MenuButtonDisabled");
                  
                  localStorage.setItem('_Party', JSON.stringify(Party));
                  TriggerOnOff()
              }else if (Party[0].Triggers["Victoria"+this.id.substr(0,1)] == false){
                  Party[0].Triggers["Victoria"+this.id.substr(0,1)] = false;
             
              localStorage.setItem('_Party', JSON.stringify(Party));
                   TriggerOnOff()
              }

          });
              };
      };
    
    
    // End of Triggers
    
    
    
    $("#Ben10").click(function(){
            var Party = JSON.parse(localStorage.getItem('_Party'));
                    var Mana = Math.floor(Math.random() * 25) + 15;
                    var Health = Math.floor(Math.random() * 35) + 15;
                    var Ben = {
                        Name: "Ben"
                        , FamilyName: "Wengel"
                        , Sex: "Male"
                        , Color: "Green"
                        , Level: 1
                        , Class: "None"
                        , Strength1: "Saltwater"
                        , Strength2: "Tundra"
                        , Weakness1: "Grassland"
                        , Weakness2: "Mountain"
                        , Stats: [{
                                Name: "Health"
                                , Value: Health
        }
            , {
                                Name: "Attack"
                                , Value: 2
            }
            , {
                                Name: "Defense"
                                , Value: 1
            }
            , {
                                Name: "Wisdom"
                                , Value: 0
            }
            , {
                                Name: "Vitality"
                                , Value: 0
            }
            , {
                                Name: "Accuracy"
                                , Value: Math.floor(Math.random() * .10) + .80
            }
        , {
                                Name: "FullHealth"
                                , Value: Health
                            , }
                   , {
                                Name: "Mana"
                                , Value: Mana
                            , }
                  , {
                                Name: "FullMana"
                                , Value: Mana
                            , }
                              , {
                                Name: "Speed"
                                , Value: 0
            }
                 ]
                        , Weight: Math.round((2 / 2) * Math.floor(Math.random() * 10) + 20)
                        , Equipment: {
                            Head: ""
                            , Torso: ""
                            , Legs: ""
                            , Belt: ""
                            , LeftHand: ""
                            , RightHand: ""
                            , Ring1: ""
                            , Ring2: ""
                        , }
                        , Spells: [
                            {
                                Name: " Leafy Wind"
                                , IDName: "LeafyWind"
                                , Avatar: "./img/LeafyWind.png"
                                , Type: "Spell"
                                , Index: 0
                                , Weight: 1
                                , Stats: {
                                    Cost: 5
                                    , Damage: [2,4]
                                    , Element: "Boreal Forest"
                                }
                                , Worth: 5
                                , DropRate: 0.00
    }
        ]
                        , Moves: [
                            {
                                Name: "Chop"
                                , Damage: [1,3]
                                , Cost: 0
                                , Type: "Physical"
                        }
                        , {
                                Name: "Slice"
                                , Damage: [1,5]
                                , Cost: 2
                                , Type: "Physical"
                        }
        , ]
                        , BattleStats: {
                            AttackStrength:[0,0]
                            , DefenseStrength:[0,0]
                        }
                        , Experience: {
                            Total: 0
                            , ToNextLevel: Math.floor(Math.random() * 25) + 20
                            , SkillPoints: 0
                        , }
                    };
                    /* Add in BattleStats */
                    var PartyMember = Ben;
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
        
        
        
        Ben.BattleStats.AttackStrength[0] = AttackStrength[0];
        Ben.BattleStats.AttackStrength[1] = AttackStrength[1];
        Ben.BattleStats.DefenseStrength[0] = DefenseStrength[0];
        Ben.BattleStats.DefenseStrength[1] = DefenseStrength[1];
                    Party.push(Ben);
             Party[0].Triggers.Victoria1 = true;
                    Party[0].Triggers.Victoria2 = true;
                    Party[0].Triggers.Victoria3 = true;
                    Party[0].Triggers.Victoria4 = true;
                    Party[0].Triggers.Victoria5 = true;
                    Party[0].Triggers.Victoria6 = true;
                    Party[0].Triggers.Victoria7 = true;
                    Party[0].Triggers.Victoria8 = true;
                    Party[0].Triggers.Victoria9 = true;
                    Party[0].Triggers.Victoria10 = true;       
        console.log("Pushed Ben into party and Made all triggers true for player :D");
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    // DONE JOINING BEN TO THE PARTY  
    });
    
    
    
    
    $("#OptionsList").append("<h4> Party </h4><div id='PartyList'></div>");
    PlaceParty();
    function PlaceParty(){
        var Party = JSON.parse(localStorage.getItem('_Party'));
        $("#PartyList").html("");
    
    for (i = 0; i < Party.length; i++) {  
        $("#PartyList").append("<br><button id='"+i+"Party' class='MenuButton'>"+Party[i].Name+"</button>");
        $("#"+i+"Party").click(function(){
           $("#OptionsList").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>"); 
           $("#OptionsList").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'> Are you sure you want to remove <strong>"+Party[this.id.substr(0,1)].Name+"</strong> From The Party? <br><button class='MenuButton' id='Yes'> Yes </button><button class='MenuButton' id='No'> No </button></div>"); 
            var index = this.id.substr(0,1);
           
             $("#Yes").click(function(){
                  
                 Party.splice(index, 1);
                $("#OverlayBlanket").remove();
                $("#AlertPlayerMessage").remove();
                  localStorage.setItem('_Party', JSON.stringify(Party));
                PlaceParty();
            });
            
            $("#No").click(function(){
                $("#OverlayBlanket").remove();
                $("#AlertPlayerMessage").remove();
                 localStorage.setItem('_Party', JSON.stringify(Party));
                PlaceParty();
            });
        });
    };
};
          
    
    
    
    
    
    
    
    $("#Confirm").click(function () {
        var Party = JSON.parse(localStorage.getItem('_Party'));
            Party[0].PlayerTextSpeed = $("#TextSpeed").val();
            $("#MessageHolder").html("<h4 class='Message animated pulse ' id='Message'></h4>");
            $("#Message").html(" Changes saved.");
        console.log(Party[0].Triggers)
            localStorage.setItem('_Party', JSON.stringify(Party));
            setTimeout(function () {
                $("#App").load("./index.html");
            }, 1000);
      
    });
    $("#Back").click(function () {
        $("#App").load("./index.html");
    });
}