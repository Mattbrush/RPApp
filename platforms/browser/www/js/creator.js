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
$("#Stats").html("<span id='SkillPoints'>Skill Points : " + SkillPoints + "</span><br><span class='StatHeader'> Attack :</span><button class='Add MenuButton StatMenuButtonAdd' id='AttackAdd'>+</button><span id='Attackstat' class='StatPoint MenuButton'> " + Attack + "</span><button class='Minus MenuButton StatMenuButtonMinus' id='AttackMinus'>-</button><br><span class='StatHeader'> Defense :</span><button class='Add MenuButton StatMenuButtonAdd' id='DefenseAdd'>+</button><span id='Defensestat' class='StatPoint MenuButton'> " + Defense + "</span><button class='Minus MenuButton StatMenuButtonMinus' id='DefenseMinus'>-</button><br><span class='StatHeader'> Wisdom :</span><button class='Add MenuButton StatMenuButtonAdd' id='WisdomAdd'>+</button><span id='Wisdomstat' class='StatPoint MenuButton'> " + Wisdom + "</span><button class='Minus MenuButton StatMenuButtonMinus' id='WisdomMinus'>-</button><br><span class='StatHeader'> Vitality :</span><button class='Add MenuButton StatMenuButtonAdd' id='VitalityAdd'>+</button><span id='Vitalitystat' class='StatPoint MenuButton'> " + Vitality + "</span><button class='Minus MenuButton StatMenuButtonMinus' id='VitalityMinus'>-</button><br><br>")
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
})
$("#Confirm").click(function () {
    VitalityCalculation = Vitality * 1.75;
    var Health = 25 + VitalityCalculation;
    Health = Math.round(Health);
    WisdomCalculation = Wisdom * 2.75;
    var Mana = 5 + WisdomCalculation;
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
                , Value: 0.95
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
                 ]
        , Wallet: {
         Total:0,
        }
        , Inventory: []
        ,Weight: Math.round((Attack / 2) *  25)
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
            AttackStrength:"",
            DefenseStrength:""
        }
        , Triggers:{
            Victoria1:false,
            Victoria2:false,
            Victoria3:false,
            Victoria4:false,
            Victoria5:false,
                   }
        , Experience: {
            Total: 0
            , ToNextLevel: 25
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
    else if (ColorSelected == "Yellow") {
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
        
        
    Character.BattleStats.AttackStrength = AttackStrength;
    Character.BattleStats.DefenseStrength= DefenseStrength;
    
    
    
    
    //////////////////////
    
    
    
    
    
    
    
    
    var FirstMove = {  Name:"Punch",
                Damage:5,
                Cost: 0,
                    Type:"Physical"};
    Character.Moves.push(FirstMove)
    console.log(Character)
    $("#Color").css("background-color", "" + Character.Color + "");
    var Party = [];
    Party.push(Character);
    localStorage.setItem('_character', JSON.stringify(Character));
    localStorage.setItem('_Party', JSON.stringify(Party));
    $("#App").load("./temp/CutSceneIntro2.html")
}