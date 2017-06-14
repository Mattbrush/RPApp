console.log('~~~~~~~~~~~Creator Activated~~~~~~~~~~~~~')



$("#Colorpick").css("background",$( "#Colorpick#Colorpick option:selected" ).css( "background-color" ));
  $("#Colorpick").css("color",$( "#Colorpick option:selected" ).css( "color" ));

$("#Strength1").css("background",$( "#Strength1 option:selected" ).css( "background-color" ));
  $("#Strength1").css("color",$( "#Strength1 option:selected" ).css( "color" ));

$("#Strength2").css("background",$( "#Strength2 option:selected" ).css( "background-color" ));
  $("#Strength2").css("color",$( "#Strength2 option:selected" ).css( "color" ));

$("#Weakness1").css("background",$( "#Weakness1 option:selected" ).css( "background-color" ));
  $("#Weakness1").css("color",$( "#Weakness1 option:selected" ).css( "color" ));

$("#Weakness2").css("background",$( "#Weakness2 option:selected" ).css( "background-color" ));
  $("#Weakness2").css("color",$( "#Weakness2 option:selected" ).css( "color" ));


String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
}


$("#Colorpick").change(function() {
    console.log($( "select option:selected" ).css( "background-color" ));
  $("#Colorpick").css("background",$( "#Colorpick option:selected" ).css( "background-color" ));
  $("#Colorpick").css("color",$( "#Colorpick option:selected" ).css( "color" ));
});



$("#Strength1").change(function() {
    console.log($( "select option:selected" ).css( "background-color" ));
  $("#Strength1").css("background",$( "#Strength1 option:selected" ).css( "background-color" ));
  $("#Strength1").css("color",$( "#Strength1 option:selected" ).css( "color" ));
});

$("#Strength2").change(function() {
    console.log($( "select option:selected" ).css( "background-color" ));
  $("#Strength2").css("background",$( "#Strength2 option:selected" ).css( "background-color" ));
  $("#Strength2").css("color",$( "#Strength2 option:selected" ).css( "color" ));
});

$("#Weakness1").change(function() {
    console.log($( "select option:selected" ).css( "background-color" ));
  $("#Weakness1").css("background",$( "#Weakness1 option:selected" ).css( "background-color" ));
  $("#Weakness1").css("color",$( "#Weakness1 option:selected" ).css( "color" ));
});

$("#Weakness2").change(function() {
    console.log($( "select option:selected" ).css( "background-color" ));
  $("#Weakness2").css("background",$( "#Weakness2 option:selected" ).css( "background-color" ));
  $("#Weakness2").css("color",$( "#Weakness2 option:selected" ).css( "color" ));
});




var SkillPoints = 3;
var Attack = 0;
var Defense = 0;
var Wisdom = 0;
var Vitality = 0;
var Speed = 0;
$("#Stats").html("<span id='SkillPoints'>Skill Points : " + SkillPoints + "</span><br><span class='StatHeader'> Attack :</span><button class='Add MenuButton StatMenuButtonAdd' id='AttackAdd'>+</button><span id='Attackstat' class='StatPoint MenuButton'> " + Attack + "</span><button class='Minus MenuButton StatMenuButtonMinus' id='AttackMinus'>-</button><br><span class='StatHeader'> Defense :</span><button class='Add MenuButton StatMenuButtonAdd' id='DefenseAdd'>+</button><span id='Defensestat' class='StatPoint MenuButton'> " + Defense + "</span><button class='Minus MenuButton StatMenuButtonMinus' id='DefenseMinus'>-</button><br><span class='StatHeader'> Wisdom :</span><button class='Add MenuButton StatMenuButtonAdd' id='WisdomAdd'>+</button><span id='Wisdomstat' class='StatPoint MenuButton'> " + Wisdom + "</span><button class='Minus MenuButton StatMenuButtonMinus' id='WisdomMinus'>-</button><br><span class='StatHeader'> Vitality :</span><button class='Add MenuButton StatMenuButtonAdd' id='VitalityAdd'>+</button><span id='Vitalitystat' class='StatPoint MenuButton'> " + Vitality + "</span><button class='Minus MenuButton StatMenuButtonMinus' id='VitalityMinus'>-</button><br><span class='StatHeader'> Speed :</span><button class='Add MenuButton StatMenuButtonAdd' id='SpeedAdd'>+</button><span id='Speedstat' class='StatPoint MenuButton'> " + Speed + "</span><button class='Minus MenuButton StatMenuButtonMinus' id='SpeedMinus'>-</button><br><br>")
$(".Add").click(function () {
    if (this.id.indexOf("Attack") != -1 && SkillPoints > 0) {
        Attack = Attack + 1;
        SkillPoints = SkillPoints - 1;
        $("#Attackstat").html("" + Attack);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
    else if (this.id.indexOf("Defense") != -1 && SkillPoints > 0) {
        Defense = Defense + 1;
        SkillPoints = SkillPoints - 1;
        $("#Defensestat").html("" + Defense);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
    else if (this.id.indexOf("Wisdom") != -1 && SkillPoints > 0) {
        Wisdom = Wisdom + 1;
        SkillPoints = SkillPoints - 1;
        $("#Wisdomstat").html("" + Wisdom);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
    else if (this.id.indexOf("Vitality") != -1 && SkillPoints > 0) {
        Vitality = Vitality + 1;
        SkillPoints = SkillPoints - 1;
        $("#Vitalitystat").html("" + Vitality);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
    else if (this.id.indexOf("Speed") != -1 && SkillPoints > 0) {
        Speed = Speed + 1;
        SkillPoints = SkillPoints - 1;
        $("#Speedstat").html("" + Speed);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
})
$(".Minus").click(function () {
    if (this.id.indexOf("Attack") != -1 && Attack > 0) {
        Attack = Attack - 1;
        SkillPoints = SkillPoints + 1;
        $("#Attackstat").html("" + Attack);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
    else if (this.id.indexOf("Defense") != -1 && Defense > 0) {
        Defense = Defense - 1;
        SkillPoints = SkillPoints + 1;
        $("#Defensestat").html("" + Defense);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
    else if (this.id.indexOf("Wisdom") != -1 && Wisdom > 0) {
        Wisdom = Wisdom - 1;
        SkillPoints = SkillPoints + 1;
        $("#Wisdomstat").html("" + Wisdom);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
    else if (this.id.indexOf("Vitality") != -1 && Vitality > 0) {
        Vitality = Vitality - 1;
        SkillPoints = SkillPoints + 1;
        $("#Vitalitystat").html("" + Vitality);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
    else if (this.id.indexOf("Speed") != -1 && Speed > 0) {
        Speed = Speed - 1;
        SkillPoints = SkillPoints + 1;
        $("#Speedstat").html("" + Speed);
        $("#SkillPoints").html("Skill Points : " + SkillPoints);
    }
})
$("#Confirm").click(function () {
    VitalityCalculation = Vitality * 1.75;
    var Health = Math.floor(Math.random() * 35) + 15 + VitalityCalculation;
    Health = Math.round(Health);
    WisdomCalculation = Wisdom * 2.75;
    var Mana = Math.floor(Math.random() * 25) + 10 + WisdomCalculation;
    Mana = Math.round(Mana);
    var Character = {
        Name: $("#Name").val().capitalize()
        ,FamilyName:$("#FamilyName").val().capitalize(),
        Sex: $("input:checked").val()
        , Color: ColorPicker()
        , Level: 1
        , Strength1: Strength1()
        , Strength2: Strength2()
        , Weakness1: Weakness1()
        , Weakness2: Weakness2()
        , Stats: [{
                Name: "Health"
                , Value: Health
        }
            , {
                Name: "Attack"
                , Value: Attack
            }
            , {
                Name: "Defense"
                , Value: Defense
            }
            , {
                Name: "Wisdom"
                , Value: Wisdom
            }
            , {
                Name: "Vitality"
                , Value: Vitality
            }
            , {
                Name: "Accuracy"
                , Value: Math.floor(Math.random() * 0.99) + 0.75
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
            , }, {
                Name: "Speed"
                , Value: Speed
            , }
                 ]
        , Wallet: {
         Total:0,
        }
        , Inventory: []
        ,Weight: Math.round((Attack / 2) *  Math.floor(Math.random() * 25) + 10)
        , Equipment:{
            Head:"",
            Torso:"",
            Legs:"",
            Belt:"",
            LeftHand:"",
            RightHand:"",
            Ring1:"",
            Ring2:"",
        }
        , Spells: []
        , Moves: []
        , BattleStats:{
            AttackStrength:[0,0],
            DefenseStrength:[0,0]
        }
        , Triggers:{
            Victoria1:false,
            Victoria2:false,
            Victoria3:false,
            Victoria4:false,
            Victoria5:false,
            Victoria6:false,
            Victoria7:false,
            Victoria8:false,
            Victoria9:false,
            Victoria10:false,
                   }
        , Experience: {
            Total: 0
            , ToNextLevel: Math.floor(Math.random() * 25) + 20
            , SkillPoints: SkillPoints
        , }
        , DateCreated: moment().format("LLL")
        , PlayerTextSpeed: 2000,
     }
    saveChanges(Character);
    console.log(Character)
});
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    /* Color Picker to decide what each color will be once the player chooses their favourite color*/
function ColorPicker() {
    var ColorSelected = $("#Colorpick").val()
        /* Add color values here to your liking */
    if (ColorSelected == "Blue") {
        ColorSelected = "#4985D6";
        return ColorSelected;
    }
    else if (ColorSelected == "Red") {
        ColorSelected = "#FF4848";
        return ColorSelected;
    }
    else if (ColorSelected == "Green") {
        ColorSelected = "#80B584";
        return ColorSelected;
    }
    else if (ColorSelected == "Orange") {
        ColorSelected = "#FFCB2F";
        return ColorSelected;
    }
    else if (ColorSelected == "Purple") {
        ColorSelected = "#BA21E0";
        return ColorSelected;
    };
};


/* Strength and weakness decided upon the users favourite activites to do */

function Weakness1() {
    var Weakness1 = $("#Weakness1").val()
    console.log(Weakness1);
    return Weakness1;
};

function Weakness2() {
    var Weakness2 = $("#Weakness2").val()
    console.log(Weakness2);
    return Weakness2;    
};

function Strength1() {
    var Strength1 = $("#Strength1").val()
    console.log(Strength1);
    return Strength1;
};

function Strength2() {
    var Strength2 = $("#Strength2").val()
    console.log(Strength2);
    return Strength2;
};
/* officially Saves character information to localstorage as well as creates a party of just your main character on the screen*/
function saveChanges(Character) {
    /* Affordance in case they did not want a last name :D*/
    if(Character.FamilyName == ""){Character.FamilyName = "Hero"};
    if(Character.Name == ""){Character.Name = "Brave"};
    
    
    /* Add in BattleStats */
    PartyMember = Character;
        var AttackStrength = [0,0]
        var DefenseStrength = [0,0]
        
        
        if (PartyMember.Equipment.Head.Stats == undefined){
            console.log("No Headwear On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Head.Stats.Defense
        };
        
        if (PartyMember.Equipment.Torso.Stats == undefined){
            console.log("No Torso On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Torso.Stats.Defense
        }
        
         if (PartyMember.Equipment.Belt.Stats == undefined){
            console.log("No Belt On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Belt.Stats.Defense
        }
        
        
        if (PartyMember.Equipment.Legs.Stats == undefined){
            console.log("No Legs On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Legs.Stats.Defense
        }
        
        if (PartyMember.Equipment.Ring1.Stats == undefined){
            console.log("No Ring1 On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Ring1.Stats.Defense
        }
        
        
         if (PartyMember.Equipment.Ring2.Stats == undefined){
            console.log("No Ring2 On Character");
        } else {
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.Ring2.Stats.Defense
        }
        
        
        
        

        if (PartyMember.Equipment.RightHand.Stats == undefined){
        console.log(" No Item Equipped In Right Hand")
        } else {
              if (PartyMember.Equipment.RightHand.Stats.Attack != undefined){
             console.log("No RightHand Defense For  Character");
            AttackStrength[0] = AttackStrength[0] + PartyMember.Equipment.RightHand.Stats.Attack   
            } else if (PartyMember.Equipment.RightHand.Stats.Defense != undefined){
             console.log("No RightHand Attack For  Character");
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.RightHand.Stats.Defense   
            }
        }
        
        if (PartyMember.Equipment.LeftHand.Stats == undefined){
        console.log(" No Item Equipped In LeftHand ")
        } else {
              if (PartyMember.Equipment.LeftHand.Stats.Attack != undefined){
             console.log("No LeftHand Defense For  Character");
            AttackStrength[0] = AttackStrength[0] + PartyMember.Equipment.LeftHand.Stats.Attack   
            } else if (PartyMember.Equipment.LeftHand.Stats.Defense != undefined){
             console.log("No LeftHand Attack For  Character");
            DefenseStrength[0] = DefenseStrength[0] + PartyMember.Equipment.LeftHand.Stats.Defense   
            }
        
        }
        
    
      if (DefenseStrength[0] == 0){
            DefenseStrength[0] = 1;
        }
        
         if (AttackStrength[0] == 0){
            AttackStrength[0] = 1;
        }
    
    
    
        if (PartyMember.Stats[2].Value < 1){
         DefenseStrength[0] = Math.round(( 1 ) *  DefenseStrength[0]);   
        } else {
        DefenseStrength[0] = Math.round(( PartyMember.Stats[2].Value + .45) *  DefenseStrength[0]);
        };
        
        
        if (PartyMember.Stats[1].Value < 1){
         AttackStrength[0] = Math.round(( 1 ) *  AttackStrength[0]);   
        } else {
        AttackStrength[0] = Math.round(( PartyMember.Stats[1].Value + .25) *  AttackStrength[0]);
        };
        
        
    Character.BattleStats.AttackStrength[0] = AttackStrength[0];
    Character.BattleStats.DefenseStrength[0]= DefenseStrength[0];
    
    
    
    
    //////////////////////
    
    
    
    
    
    
    
    
    var FirstMove = {  Name:"Punch",
                Damage:[4,8],
                Cost: 0,
                    Type:"Physical"};
    Character.Moves.push(FirstMove)
    console.log(Character)
    $("#Color").css("background-color", "" + Character.Color + "");
    var Party = [];
    Party.push(Character);
    
    
    
    
    
    
/* Create Journal Area For Journal Entries and Everything Journal Related ! */
    
    var Journal = [
            {
            Name:"Enemies",
            Entries:[
                {
                        Name:"Starfish",
                        Avatar:"./img/Starfish.gif",
                        Description:"Starfish or sea stars are star-shaped echinoderms belonging to the class Asteroidea. Common usage frequently finds these names being also applied to ophiuroids, which are correctly referred to as brittle stars or 'basket stars'.",
                        Defeated: 0,
                        Moves:[
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
                        ],
                        Loot:[
                            
                    {
                    Name: "Ball Of Sand"
                    , IDName: "BallOfSand"
                    , Avatar: "./img/BallOfSand.png"
                    , Type: "Misc"
                    , Index: 0
                    , Weight: 2
                    , Stats: {}
                    , Worth: 1
                    , DropRate: 0.75
                    , Hidden: true,
                }, 
                        ],
                        Hidden: true,
                        Viewed: false,
                    },
                {
                        Name:"Dungeness Crab",
                        Avatar:"./img/DungenessCrab.png",
                        Description:"The Dungeness crab, Metacarcinus magister, is a species of crab that inhabits eelgrass beds and water bottoms on the west coast of North America.",
                        Defeated: 0,
                        Moves:[
                            {
                        Name: "Saltwater Slice"
                        , Type: "Element"
                        , Index: 0
                        , Targets: "All"
                        , Stats: {
                            Damage: Math.floor(Math.random() * 2) + 1
                            , Element: "Saltwater"
                        , }
                    , }
                    , {
                        Name: " Sharp Pinch "
                        , Type: "Attack"
                        , Index: 0
                        , Targets: "One"
                        , Stats: {
                            Damage: Math.floor(Math.random() * 2) + 1
                            , Element: "None"
                        }
                    },
                        ],
                        Loot:[{
                    Name: "Ball Of Sand"
                    , IDName: "BallOfSand"
                    , Avatar: "./img/BallOfSand.png"
                    , Type: "Misc"
                    , Index: 0
                    , Weight: 2
                    , Stats: {}
                    , Worth: 1
                    , DropRate: 0.75
                            ,Hidden: true,
                },{
                    Name: "Shell"
                    , IDName: "Shell"
                    , Avatar: "./img/Shell.png"
                    , Type: "Misc"
                    , Index: 0
                    , Weight: 1
                    , Stats: {}
                    , Worth: 2
                    , DropRate: 0.40
                    ,Hidden: true,
                }, ],
                        Hidden: true,
                        Viewed: false,
                    },
                {
                        Name:"Seagull",
                        Avatar:"./img/Seagull.png",
                        Description:"Gulls or seagulls are seabirds of the family Laridae in the suborder Lari. They are most closely related to the terns and only distantly related to auks, skimmers, and more distantly to the waders",
                        Defeated: 0,
                        Moves:[
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
                        },
                    },
                        ],
                        Loot:[
                            {
                    Name: "Seaweed"
                    , IDName: "Seaweed"
                    , Avatar: "./img/Seaweed.png"
                    , Type: "Misc"
                    , Index: 0
                    , Weight: 1
                    , Stats: {}
                    , Worth: 2
                    , DropRate: .65
                    , Hidden: true,
                },
                        ],
                        Hidden: true,
                        Viewed: false,
                    },
            ],
            },
             {
            Name:"Recipes",
            Entries:[],
            },
             {
            Name:"Blueprints",
            Entries:[],
            },
             {
            Name:"Provinces & Territories ",
            Entries:[
                    {
                        Name:"British Columbia",
                           Avatar:"./img/BritishColumbiaVictoria.jpg",
                        Description:" British Columbia, Canada's westernmost province, is defined by its Pacific coastline and mountain ranges. Nature areas like Glacier National Park offer hiking and biking trails, as well as campgrounds. Whistler Blackcomb is a major ski resort that hosted the 2010 Winter Olympics. The scenic Sea-to-Sky Highway links Whistler with Vancouver, a city known for its film industry, at the province's southern U.S. border. ",
                        Hidden: true,
                        Viewed: false,
                    },
            ],
            },
             {
            Name:"Characters",
            Entries:[
                {
                        Name:"Ben Wengel",
                       Avatar:"./img/BenAvatar.png",
                        Description:" Ben Wengel is an adventurous person living in Victoria, B.C. He loves to go hiking and exploring all across Vancouver Island. Ben is a forester in his day job and cares a lot about the environment. ",
                    Hidden: true,
                    Viewed: false,
                    },
            ],
            },
             {
            Name:"Cities",
            Entries:[
                {
                        Name:"Victoria",
                        Avatar:"./img/BritishColumbiaVictoria.jpg",
                        Description:"Victoria, capital of British Columbia, sits on the craggy southern end of Vancouver Island. With abundant parkland, it’s known for outdoor activities. The city's British colonial past shows in its Victorian architecture, including stately Craigdarroch Castle mansion. Butchart Gardens, with 55 acres of vivid floral displays, plus statuary, water features and a carousel, is one of many formal gardens in the city.",
                    Hidden: true,
                    Viewed: false,
                    },
                {
                        Name:"Vancouver",
                       Avatar:"./img/BritishColumbiaVictoria.jpg",
                        Description:"Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities. A popular filming location, it’s surrounded by mountains, and also has thriving art, theatre and music scenes. Vancouver Art Gallery is known for its works by regional artists, while the Museum of Anthropology houses preeminent First Nations collections.",
                     Hidden: true,
                    Viewed: false,
                    },
                {
                        Name:"Whistler",
                       Avatar:"./img/BritishColumbiaVictoria.jpg",
                        Description:"Whistler is a town north of Vancouver, British Columbia, that's home to Whistler Blackcomb, one of the largest ski resorts in North America. Besides skiing and snowboarding, the area offers snowshoeing, tobogganing and ski jumping at the Olympic Park, a venue for the 2010 Vancouver Winter Olympics. The hub of Whistler is a compact, chalet-style pedestrian village at the base of Whistler and Blackcomb mountains.",
                     Hidden: true,
                    Viewed: false,
                    },
                {
                        Name:"Kelowna",
                       Avatar:"./img/BritishColumbiaVictoria.jpg",
                        Description:"Kelowna is a city in the south of Canada’s British Columbia province. It’s in the Okanagan Valley, on the eastern shore of Okanagan Lake, surrounded by provincial parks, pine forest, vineyards, orchards and mountains. Its downtown area incorporates waterfront City Park and a lakeside cultural district. More than 20 local vineyards offer wine tours and tastings.",
                     Hidden: true,
                    Viewed: false,
                    }
                ]
                },
            ];
    
    
    // End of creating journal
    
    
    localStorage.setItem('_Party', JSON.stringify(Party));
    localStorage.setItem('_Journal', JSON.stringify(Journal));
    $("#App").load("./temp/CutSceneIntro2.html")
}