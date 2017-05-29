/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
CheckLevel();
StartApp();
/*~~~~~~~~~~~~~~~~~~~~ --------------------- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


function CheckLevel(Character) {
    console.log("~~~Configuring Character Experience and Level~~~");
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
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
    localStorage.setItem('_Party', JSON.stringify(Party));
     console.log("~~~~~~~~~~~~~~~~~~~")
};

function StartApp(Character) {
    /* Place Main Character First ALWAYS. Allow to swipe and change through array of party */
    var i = 0;
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    /* Make New Character Stat Variables */
    var NewStatPoints = 0;
    var NewAttack = 0;
    var NewDefense = 0;
    var NewWisdom = 0;
    var NewVitality = 0;
    $("#PartySkills").html("<h3 class='SubSubMainTitle animated rubberBand'> SkillPoints </h3><div>Player Name : "  + Character.Name + " " + Character.FamilyName+ "</div><br><div id='Stats'></div><div id='Confirm'></div><div id='Level'>Level :  " + Character.Level + "</div><br><div id='Experience'>Total Experience : " + Character.Experience.Total + "</div><br><div id='ToNext'> To Next Level : " + Character.Experience.ToNextLevel + "</div><br><div id='SkillPoints'>Available Skill Points : " + Character.Experience.SkillPoints + "</div>");
      $("#PartySkills").css("border-color",""+Party[0].Color+"");
   
    PlaceStats(Character);
    CheckSkillPoints(Character);
    
    /////// ADDING SKILLPOINTS TO STATS
    $(".Add").click(function () {
        if(Character.Experience.SkillPoints > 0){
         $("#Confirm").html("<button class='MenuButton' id='ConfirmChanges'> Confirm Changes</button>");
        }
        if (this.id.indexOf("Attack") != -1 && Character.Experience.SkillPoints > 0) {
            NewAttack = NewAttack + 1;
            NewStatPoints = NewStatPoints + 1;
            Character.Experience.SkillPoints = Character.Experience.SkillPoints - 1;
            $("#NewAttack").html(" + : " + NewAttack + " ");
            $("#SkillPoints").html("Skill Points : " + Character.Experience.SkillPoints);
        }
        else if (this.id.indexOf("Defense") != -1 && Character.Experience.SkillPoints > 0) {
            NewDefense = NewDefense + 1;
            NewStatPoints = NewStatPoints + 1;
            Character.Experience.SkillPoints = Character.Experience.SkillPoints - 1;
            $("#NewDefense").html(" + : " + NewDefense + " ");
            $("#SkillPoints").html("Skill Points : " + Character.Experience.SkillPoints);
        }
        else if (this.id.indexOf("Wisdom") != -1 && Character.Experience.SkillPoints > 0) {
            NewWisdom = NewWisdom + 1;
            NewStatPoints = NewStatPoints + 1;
            Character.Experience.SkillPoints = Character.Experience.SkillPoints - 1;
            $("#NewWisdom").html(" + : " + NewWisdom + " ");
            $("#SkillPoints").html("Skill Points : " + Character.Experience.SkillPoints);
        }
        else if (this.id.indexOf("Vitality") != -1 && Character.Experience.SkillPoints > 0) {
            NewVitality = NewVitality + 1;
            NewStatPoints = NewStatPoints + 1;
            Character.Experience.SkillPoints = Character.Experience.SkillPoints - 1;
            $("#NewVitality").html(" + : " + NewVitality + " ");
            $("#SkillPoints").html("Skill Points : " + Character.Experience.SkillPoints);
        }
        $("#ConfirmChanges").click(function () {
           // THERE ARE TWO CONFIRM CHANGES!?!?!?
            NewStatPoints = 0;
            Character.Stats[1].Value = Character.Stats[1].Value + NewAttack;
            Character.Stats[2].Value = Character.Stats[2].Value + NewDefense;
            Character.Stats[3].Value = Character.Stats[3].Value + NewWisdom;
            Character.Stats[4].Value = Character.Stats[4].Value + NewVitality;
            var Vitality = Character.Stats[4].Value * 1.75;
            var Health = Math.round(Vitality);
            Character.Stats[0].Value = Health + Character.Stats[0].Value  ;
            Character.Stats[6].Value = Health + Character.Stats[6].Value ;
            var Wisdom = Character.Stats[8].Value  * 2.75;
            var Mana = Math.round(Wisdom);
            Character.Stats[8].Value = Mana;
            Character.Stats[7].Value = Character.Stats[7].Value ;
            $("#Stats").html("");
            $("#Confirm").html("");
            PlaceStats(Character);
            CheckSkillPoints(Character);
            localStorage.setItem('_character', JSON.stringify(Character));
        });
        CheckSkillPoints(Character);
    })
    
    
    /////// REMOVING SKILLPOINTS TO STATS
    $(".Minus").click(function () {
         if(Character.Experience.SkillPoints > 0){
         $("#Confirm").html("<button class='MenuButton' id='ConfirmChanges'> Confirm Changes</button>");
        }
        if (this.id.indexOf("Attack") != -1 && NewAttack > 0) {
            NewAttack = NewAttack - 1;
            NewStatPoints = NewStatPoints - 1;
            Character.Experience.SkillPoints = Character.Experience.SkillPoints + 1;
            $("#NewAttack").html(" + : " + NewAttack + " ");
            $("#SkillPoints").html("Skill Points : " + Character.Experience.SkillPoints);
            if(NewAttack == 0){
                $("#NewAttack").html("");
            }
        }
        else if (this.id.indexOf("Defense") != -1 && NewDefense> 0) {
            NewDefense = NewDefense - 1;
            NewStatPoints = NewStatPoints - 1;
            Character.Experience.SkillPoints = Character.Experience.SkillPoints + 1;
            $("#NewDefense").html(" + : " + NewDefense + " ");
            $("#SkillPoints").html("Skill Points : " + Character.Experience.SkillPoints);
            if(NewDefense == 0){
                $("#NewDefense").html("");
            }
        }
        else if (this.id.indexOf("Wisdom") != -1 && NewWisdom > 0) {
            NewWisdom = NewWisdom - 1;
            NewStatPoints = NewStatPoints +-1;
            Character.Experience.SkillPoints = Character.Experience.SkillPoints + 1;
            $("#NewWisdom").html(" + : " + NewWisdom + " ");
            $("#SkillPoints").html("Skill Points : " + Character.Experience.SkillPoints);
            if(NewWisdom == 0){
                $("#NewWisdom").html("");
            }
        }
        else if (this.id.indexOf("Vitality") != -1 && NewVitality > 0) {
            NewVitality = NewVitality - 1;
            NewStatPoints = NewStatPoints - 1;
            Character.Experience.SkillPoints = Character.Experience.SkillPoints + 1;
            $("#NewVitality").html(" + : " + NewVitality + " ");
            $("#SkillPoints").html("Skill Points : " + Character.Experience.SkillPoints);
            if(NewVitality == 0){
                $("#NewVitality").html("");
            }
            
        }   
        
       $("#ConfirmChanges").click(function () {
           // THERE ARE TWO CONFIRM CHANGES!?!?!?
            NewStatPoints = 0;
            Character.Stats[1].Value = Character.Stats[1].Value + NewAttack;
            Character.Stats[2].Value = Character.Stats[2].Value + NewDefense;
            Character.Stats[3].Value = Character.Stats[3].Value + NewWisdom;
            Character.Stats[4].Value = Character.Stats[4].Value + NewVitality;
            var Vitality = Character.Stats[4].Value * 1.75;
            var Health = Math.round(Vitality);
            Character.Stats[0].Value = Health + Character.Stats[0].Value  ;
            Character.Stats[6].Value = Health + Character.Stats[6].Value ;
            var Wisdom = Character.Stats[8].Value  * 2.75;
            var Mana = Math.round(Wisdom);
            Character.Stats[8].Value = Mana;
            Character.Stats[7].Value = Character.Stats[7].Value ;
            $("#Stats").html("");
            $("#Confirm").html("");
            PlaceStats(Character);
            CheckSkillPoints(Character);
            localStorage.setItem('_character', JSON.stringify(Character));
        });
        CheckSkillPoints(Character);
    })
    

    function PlaceStats(Character) {
        for (i = 1; i < 5; i++) {
            
            $("#Stats").append("<span id='" + Character.Stats[i].Name +"' class='StatHeader'>  "+ Character.Stats[i].Name +"<button class='Add Modifier MenuButton StatMenuButtonAdd' id='" + Character.Stats[i].Name + "Add'>+</button> " + Character.Stats[i].Value + "</span><button class='Minus Modifier MenuButton StatMenuButtonMinus'  id='" + Character.Stats[i].Name + "Minus'>-</button><span id='New" + Character.Stats[i].Name + "' class='NewStatClass'></span><br>");
            
             if(Character.Experience.SkillPoints == 0){
            //     console.log('dfs')
         $(".Modifier").addClass("MenuButtonDisabled");
        }
            
        };
    };
    
    
    
    function CheckSkillPoints(Character){
        /////// Statements to check whether or not the player can allocate more points to their stats.
        
      if(Character.Experience.SkillPoints == 0  && NewStatPoints > 0  ){
        $(".Add").attr('disabled', true);
      } else if (Character.Experience.SkillPoints == 0  && NewStatPoints == 0){
         $(".AddModifier").html(""); 
         $(".MinusModifier").html(""); 
      } else if(NewStatPoints == 0){
            $(".NewStatClass").html("");
            $("#Confirm").html("");
      } else if ( Character.Experience.SkillPoints > 0 ){
          $(".Add").attr('disabled', false);
      };
    };
    
    
    
  
    

    
    
    /*
    $("#NextCharacter").click(function(){
    i + 1;
    $("#PartySkills").html("<div>Player Name : " + Party[i].Name + "</div><br><div id='Stats'></div><div id='Level'>Level :  " + Party[i].Level + "</div><br><div id='Experience'>Total Experience : " + Party[i].Experience.Total + "</div><br><div id='ToNext'> To Next Level : " + Party[i].Experience.ToNextLevel + "</div><br><div id='SkillPoints'>Available Skill Points : "+Party[i].Experience.SkillPoints+"</div>");
    });
    */
};