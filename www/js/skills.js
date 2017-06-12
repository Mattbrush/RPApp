/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
CheckLevel();
StartApp();
/*~~~~~~~~~~~~~~~~~~~~ --------------------- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


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
    
    
    localStorage.setItem('_Party', JSON.stringify(Party));
     console.log("~~~~~~~~~~~~~~~~~~~")
};

function StartApp() {
    /* Place Main Character First ALWAYS. Allow to swipe and change through array of party */
    var i = 0;
   // var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    /* Make New Character Stat Variables */
    var NewStatPoints = 0;
    var NewAttack = 0;
    var NewDefense = 0;
    var NewWisdom = 0;
    var NewVitality = 0;
    var NewSpeed = 0;
    var PartyIndex = 0;
    
    
    PlaceInformation();
    
    function PlaceInformation(){
        var SkillpointsOriginal = Party[PartyIndex].Experience.SkillPoints;
        
    
    $("#PartySkills").html("<div id='SkillsMenu'><h3 class='SubSubMainTitle animated rubberBand'> SkillPoints </h3><div>Player Name : "  + Party[PartyIndex].Name + " " + Party[PartyIndex].FamilyName+ "</div><br><div id='Stats'></div><div id='Confirm'></div><div id='Level'>Level :  " + Party[PartyIndex].Level + "</div><br><div id='Experience'>Total Experience : " + Party[PartyIndex].Experience.Total + "</div><br><div id='ToNext'> To Next Level : " + Party[PartyIndex].Experience.ToNextLevel + "</div><br><div id='SkillPoints'>Available Skill Points : " + Party[PartyIndex].Experience.SkillPoints + "<br> </div><div class='MenuWrapper' id='PartySwitch'></div></div>");
      $("#PartySkills").css("border-color",""+Party[PartyIndex].Color+"");
        // Only if there are more than 1 party member
         // Only display if there are more than 1 party member..
            if (Party.length > 1){
            $("#PartySwitch").append("<button class='MenuButton' id='PrevParty'> Previous </button><button class='MenuButton' id='NextParty'> Next </button>");
        };
           
        
        
        
        
                      // Changing Party Member Button
    $("#NextParty").click(function () {
        Party[PartyIndex].Experience.SkillPoints = SkillpointsOriginal
        NewStatPoints = 0;
        NewAttack = 0;
        NewDefense = 0;
        NewWisdom = 0;
        NewVitality = 0;
        NewSpeed = 0;
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
            Party[PartyIndex].Experience.SkillPoints = SkillpointsOriginal
           NewStatPoints = 0;
        NewAttack = 0;
        NewDefense = 0;
        NewWisdom = 0;
        NewVitality = 0;
        NewSpeed = 0;
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
        
   
    PlaceStats(Party[PartyIndex]);
    CheckSkillPoints(Party[PartyIndex]);
    
         /////// ADDING SKILLPOINTS TO STATS
    $(".Add").click(function () {
        
         console.log(Party[PartyIndex].Experience.SkillPoints);
      //  PlaceInformation();
       
        if(Party[PartyIndex].Experience.SkillPoints > 0){
         $("#Confirm").html("<button class='MenuButton' id='ConfirmChanges'> Confirm Changes</button>");
        }
        if (this.id.indexOf("Attack") != -1 && Party[PartyIndex].Experience.SkillPoints > 0) {
            NewAttack = NewAttack + 1;
            NewStatPoints = NewStatPoints + 1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints - 1;
            $("#NewAttack").html(" + : " + NewAttack + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
        }
        else if (this.id.indexOf("Defense") != -1 && Party[PartyIndex].Experience.SkillPoints > 0) {
            NewDefense = NewDefense + 1;
            NewStatPoints = NewStatPoints + 1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints - 1;
            $("#NewDefense").html(" + : " + NewDefense + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
        }
        else if (this.id.indexOf("Wisdom") != -1 && Party[PartyIndex].Experience.SkillPoints > 0) {
            NewWisdom = NewWisdom + 1;
            NewStatPoints = NewStatPoints + 1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints - 1;
            $("#NewWisdom").html(" + : " + NewWisdom + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
        }
        else if (this.id.indexOf("Vitality") != -1 && Party[PartyIndex].Experience.SkillPoints > 0) {
            NewVitality = NewVitality + 1;
            NewStatPoints = NewStatPoints + 1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints - 1;
            $("#NewVitality").html(" + : " + NewVitality + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
        }else if (this.id.indexOf("Speed") != -1 && Party[PartyIndex].Experience.SkillPoints > 0) {
            NewSpeed = NewSpeed + 1;
            NewStatPoints = NewStatPoints + 1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints - 1;
            $("#NewSpeed").html(" + : " + NewSpeed + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
        }
        $("#ConfirmChanges").click(function () {
     // THERE ARE TWO CONFIRM CHANGES!?!?!?
            NewStatPoints = 0;
            Party[PartyIndex].Stats[1].Value = Party[PartyIndex].Stats[1].Value + NewAttack;
            Party[PartyIndex].Stats[2].Value = Party[PartyIndex].Stats[2].Value + NewDefense;
            Party[PartyIndex].Stats[3].Value = Party[PartyIndex].Stats[3].Value + NewWisdom;
            Party[PartyIndex].Stats[4].Value = Party[PartyIndex].Stats[4].Value + NewVitality;
           Party[PartyIndex].Stats[9].Value = Party[PartyIndex].Stats[9].Value + NewSpeed;
            var Vitality = Party[PartyIndex].Stats[4].Value * 1.75;
           if (NewWisdom > 0){
           WisdomCalculation = NewWisdom * 2.75;
           var Mana = Math.floor(Math.random() * 15) + 5 + WisdomCalculation;
           Mana = Math.round(Mana);
            Party[PartyIndex].Stats[8].Value = Mana;
           };
           
           
            var Health = Math.round(Vitality);
            Party[PartyIndex].Stats[0].Value = Health + Party[PartyIndex].Stats[0].Value  ;
            Party[PartyIndex].Stats[6].Value = Health + Party[PartyIndex].Stats[6].Value ;
            var Wisdom = Party[PartyIndex].Stats[8].Value  * 2.75;
            var Mana = Math.round(Wisdom);
            Party[PartyIndex].Stats[7].Value = Party[PartyIndex].Stats[8].Value ;
            $("#Stats").html("");
            $("#Confirm").html("");
            PlaceStats(Party[PartyIndex]);
            CheckSkillPoints(Party[PartyIndex]);
            localStorage.setItem('_Party', JSON.stringify(Party));
        });
        CheckSkillPoints(Party[PartyIndex]);
        
            if(Party[PartyIndex].Experience.SkillPoints == 0){
            //     console.log('dfs')
         $(".Add").addClass("MenuButtonDisabled");
        }
    })
    
    
     /////// REMOVING SKILLPOINTS TO STATS
    $(".Minus").click(function () {
        console.log(Party[PartyIndex].Experience.SkillPoints);
//PlaceInformation();
        
         if(Party[PartyIndex].Experience.SkillPoints > 0){
         $("#Confirm").html("<button class='MenuButton' id='ConfirmChanges'> Confirm Changes</button>");
        }
        if (this.id.indexOf("Attack") != -1 && NewAttack > 0) {
            NewAttack = NewAttack - 1;
            NewStatPoints = NewStatPoints - 1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints + 1;
            $("#NewAttack").html(" + : " + NewAttack + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
            if(NewAttack == 0){
                $("#NewAttack").html("");
            }
        }
        else if (this.id.indexOf("Defense") != -1 && NewDefense> 0) {
            NewDefense = NewDefense - 1;
            NewStatPoints = NewStatPoints - 1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints + 1;
            $("#NewDefense").html(" + : " + NewDefense + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
            if(NewDefense == 0){
                $("#NewDefense").html("");
            }
        }
        else if (this.id.indexOf("Wisdom") != -1 && NewWisdom > 0) {
            NewWisdom = NewWisdom - 1;
            NewStatPoints = NewStatPoints +-1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints + 1;
            $("#NewWisdom").html(" + : " + NewWisdom + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
            if(NewWisdom == 0){
                $("#NewWisdom").html("");
            }
        }
        else if (this.id.indexOf("Vitality") != -1 && NewVitality > 0) {
            NewVitality = NewVitality - 1;
            NewStatPoints = NewStatPoints - 1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints + 1;
            $("#NewVitality").html(" + : " + NewVitality + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
            if(NewVitality == 0){
                $("#NewVitality").html("");
            }
            }else if (this.id.indexOf("Speed") != -1 && NewSpeed > 0) {
            NewSpeed = NewSpeed - 1;
            NewStatPoints = NewStatPoints - 1;
            Party[PartyIndex].Experience.SkillPoints = Party[PartyIndex].Experience.SkillPoints + 1;
            $("#NewSpeed").html(" + : " + NewSpeed + " ");
            $("#SkillPoints").html("Skill Points : " + Party[PartyIndex].Experience.SkillPoints);
            if(NewSpeed == 0){
                $("#NewSpeed").html("");
            }
            
        }
       CheckSkillPoints(Party[PartyIndex]);
        
         if(Party[PartyIndex].Experience.SkillPoints == 0){
            //     console.log('dfs')
         $(".Add").addClass("MenuButtonDisabled");
        } else {
          $(".Add").removeClass("MenuButtonDisabled");  
        }
         
    });
    
    
        
       $("#ConfirmChanges").click(function () {
           // THERE ARE TWO CONFIRM CHANGES!?!?!?
            NewStatPoints = 0;
            Party[PartyIndex].Stats[1].Value = Party[PartyIndex].Stats[1].Value + NewAttack;
            Party[PartyIndex].Stats[2].Value = Party[PartyIndex].Stats[2].Value + NewDefense;
            Party[PartyIndex].Stats[3].Value = Party[PartyIndex].Stats[3].Value + NewWisdom;
            Party[PartyIndex].Stats[4].Value = Party[PartyIndex].Stats[4].Value + NewVitality;
           Party[PartyIndex].Stats[9].Value = Party[PartyIndex].Stats[9].Value + NewSpeed;
            var Vitality = Party[PartyIndex].Stats[4].Value * 1.75;
           if (NewWisdom > 0){
           WisdomCalculation = NewWisdom * 2.75;
           var Mana = Math.floor(Math.random() * 15) + 5 + WisdomCalculation;
           Mana = Math.round(Mana);
            Party[PartyIndex].Stats[8].Value = Mana;
           };
           
           
            var Health = Math.round(Vitality);
            Party[PartyIndex].Stats[0].Value = Health + Party[PartyIndex].Stats[0].Value  ;
            Party[PartyIndex].Stats[6].Value = Health + Party[PartyIndex].Stats[6].Value ;
            var Wisdom = Party[PartyIndex].Stats[8].Value  * 2.75;
            var Mana = Math.round(Wisdom);
            Party[PartyIndex].Stats[7].Value = Party[PartyIndex].Stats[8].Value ;
            $("#Stats").html("");
            $("#Confirm").html("");
            PlaceStats(Party[PartyIndex]);
            CheckSkillPoints(Party[PartyIndex]);
            localStorage.setItem('_Party', JSON.stringify(Party));
        });
        
              
     
    
    
    
    /// End of PLaceInformation();
    };
        
   
    
    
   
    
  

    function PlaceStats() {
        for (i = 1; i < 5; i++) {
            
            $("#Stats").append("<span id='" + Party[PartyIndex].Stats[i].Name +"' class='StatHeader'>  "+ Party[PartyIndex].Stats[i].Name +"<button class='Add Modifier MenuButton StatMenuButtonAdd' id='" + Party[PartyIndex].Stats[i].Name + "Add'>+</button> " + Party[PartyIndex].Stats[i].Value + "</span><button class='Minus Modifier MenuButton StatMenuButtonMinus'  id='" + Party[PartyIndex].Stats[i].Name + "Minus'>-</button><span id='New" + Party[PartyIndex].Stats[i].Name + "' class='NewStatClass'></span><br>");
          
            
         
            
        };
        
          // Add Speed
            $("#Stats").append("<span id='" + Party[PartyIndex].Stats[9].Name +"' class='StatHeader'>  "+ Party[PartyIndex].Stats[9].Name +"<button class='Add Modifier MenuButton StatMenuButtonAdd' id='" + Party[PartyIndex].Stats[9].Name + "Add'>+</button> " + Party[PartyIndex].Stats[9].Value + "</span><button class='Minus Modifier MenuButton StatMenuButtonMinus'  id='" + Party[PartyIndex].Stats[9].Name + "Minus'>-</button><span id='New" + Party[PartyIndex].Stats[9].Name + "' class='NewStatClass'></span><br>");
        
         if(Party[PartyIndex].Experience.SkillPoints == 0){
            //     console.log('dfs')
         $(".Modifier").addClass("MenuButtonDisabled");
        }
    };
    
    
    
    function CheckSkillPoints(){
        /////// Statements to check whether or not the player can allocate more points to their stats.
        
      if(Party[PartyIndex].Experience.SkillPoints == 0  && NewStatPoints > 0  ){
        $(".Add").attr('disabled', true);
      } else if (Party[PartyIndex].Experience.SkillPoints == 0  && NewStatPoints == 0){
         $(".AddModifier").html(""); 
         $(".MinusModifier").html(""); 
      } else if(NewStatPoints == 0){
            $(".NewStatClass").html("");
            $("#Confirm").html("");
      } else if ( Party[PartyIndex].Experience.SkillPoints > 0 ){
          $(".Add").attr('disabled', false);
      };
    };
    
    
    

    
    
    
    
    
};