/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
console.log("~~~Inventory~~~")
StartApp();
/*~~~~~~~~~~~~~~~~~~~~ --------------------- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function StartApp() {
      $("#MessageHolder").remove();
    var Character = JSON.parse(localStorage.getItem('_character'));
    Character.Inventory.sort(function(a, b){
    if(a.Name < b.Name) return -1;
    if(a.Name > b.Name) return 1;
    return 0;
})
      localStorage.setItem('_character', JSON.stringify(Character));
     var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    Party[0] = Character
    if (Character.Inventory.length <= 0) {
        console.log('emptyInventory');
        $("#InventoryContainer").html("<h3 class='SubSubMainTitle animated rubberBand'> Inventory </h3>  You have no items");
        $("#InventoryContainer").css("border-color", "" + Party[0].Color + "");
    }
    else {
        
        console.log(Character.Inventory)
        
        
        for (i = 0; i < Character.Inventory.length; i++) {
            PlaceInventory();

            function PlaceInventory() {
                $("#StatusMessageHolder").html("");
                $("#StatusMessageHolder").css("display", "none");
                $("#InventoryContainer").html("<h3 class='SubSubMainTitle animated rubberBand'> Inventory </h3> ");
                var Character = JSON.parse(localStorage.getItem('_character'));
                for (i = 0; i < Character.Inventory.length; i++) {
                    console.log(Character.Inventory[i]);
                    Character.Inventory[i].Index = i;
                    $("#InventoryContainer").append("<div class='animated bounceIn BattleItemSlot'><input class='BattleItem' type='image' src='" + Character.Inventory[i].Avatar + "' id='" + i + "'><br>" + Character.Inventory[i].Name + "</input></div>");
                    $("#InventoryContainer").css("border-color", "" + Party[0].Color + "");
                    $("#" + i + "").click(function () {
                       
                        var index = this.id;
                        var Item = Character.Inventory[index]
                         if(Character.Inventory[index].Type == "Key"){
                             $("#StatusMessageHolder").css("display", "block");
                             $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'>You can't use a  <strong>" + Character.Inventory[index].Name + "</strong> right now </div><div class='MenuWrapper'><button class='MenuButton' id='Back'> Back </button></div><br>");
                             $("#Back").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                         }else if (Character.Inventory[index].Type == "Weapon" || Character.Inventory[index].Type == "Armour"){
                         $("#StatusMessageHolder").css("display", "block");
                        $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'>Do you want to equip someone with the <strong>" + Character.Inventory[index].Name + "</strong> ? </div><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='Deny'> No </button></div><br>");
                        $("#Accept").click(function () {
                            WhichCharacter(Item, index);
                        });
                        $("#Deny").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });    
                         }
                        else{
                        $("#StatusMessageHolder").css("display", "block");
                        $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'>Do you want to use  a <strong>" + Character.Inventory[index].Name + "</strong> on someone ?</div><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='Deny'> No </button></div><br>");
                        $("#Accept").click(function () {
                            WhichCharacter(Item, index);
                        });
                        $("#Deny").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                    };
                    });
                };
                if (Character.Inventory.length <= 0) {
                    $("#InventoryContainer").html("<h3 class='SubSubMainTitle animated rubberBand'> Inventory </h3>  You have no items");
                };
            };
        };

        function WhichCharacter(Item, index) {
            $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'><span>Which character would you like to use a " + Character.Inventory[index].Name + " on?</span><br><div id='PartyList'></div></div>");
            for (e = 0; e < Party.length; e++) {
                $("#PartyList").append("<button class='animated flipInX MenuButton' id='" + index + e + "'>" + Party[e].Name + "</button>");
                $("#" + index + e + "").click(function () {
                    if (Item.Type == "Status") {
                        // If Item is a STATUS ITEM  i.e Potion or Elixir
                        // console.log("Healed  By " + Item.Stats.Health + " HP")
                        // If It Goes OVER AMOUNT NEEDED
                        if (Party[this.id.substr(1, 1)].Stats[0].Value + Item.Stats.Health > Party[this.id.substr(1, 1)].Stats[6].Value ) {
                            Party[this.id.substr(1, 1)].Stats[0].Value = Party[this.id.substr(1, 1)].Stats[6].Value;
                        }
                        // If IT IS ALL NEEDED
                        else if  (Party[this.id.substr(1, 1)].Stats[7].Value + Item.Stats.Mana > Party[this.id.substr(1, 1)].Stats[8].Value ) {
                            Party[this.id.substr(1, 1)].Stats[7].Value = Party[this.id.substr(1, 1)].Stats[8].Value;
                        } else {
                            Party[this.id.substr(1, 1)].Stats[7].Value = Party[this.id.substr(1, 1)].Stats[0].Value + Item.Stats.Mana;
                        };
                        $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'><span>Are you sure you want to use a " + Character.Inventory[index].Name + " on " + Party[this.id.substr(1, 1)].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
                        var Name = this.id.substr(1, 1);
                        localStorage.setItem('_Name', JSON.stringify(Name));
                        $("#Yes").click(function () {
                            // Are You Sure Statements...  Allows players to back out form this if need be.
                            var Name = JSON.parse(localStorage.getItem('_Name'));
                            if (Item.Stats.Health == 0){
                            $("#StatusMessageHolder").html("<div class='animated tada StatusMessage'>Restored " + Party[Name].Name + "'s Mana by " + Item.Stats.Mana + " MP </div>");
                            } else if (Item.Stats.Mana == 0){
                            $("#StatusMessageHolder").html("<div class='animated tada StatusMessage'>Healed Up " + Party[Name].Name + " By " + Item.Stats.Health + " HP </div>");
                            };
                            Party[0].Inventory.splice(index, 1);
                            Character = Party[0];
                            localStorage.setItem('_character', JSON.stringify(Character));
                            localStorage.setItem('_Party', JSON.stringify(Party));
                            setTimeout(function () {
                                $("#InventoryDialog").html("");
                                PlaceInventory();
                            }, Character.PlayerTextSpeed);
                        });
                        $("#No").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                    }
                    else if (Item.Type == "Spell") {
                        $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'><span>Are you sure you want to teach " + Character.Inventory[index].Name + " to " + Party[this.id.substr(1, 1)].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
                        var Name = this.id.substr(1, 1);
                        localStorage.setItem('_Name', JSON.stringify(Name));
                        $("#Yes").click(function () {
                            // Are You Sure Statements...  Allows players to back out form this if need be.
                            var Name = JSON.parse(localStorage.getItem('_Name'));
                            //    console.log("Taught " + Item.Name + " To "+Party[this.id.substr(1,1)].Name+" !")
                            Party[Name].Spells.push(Item);
                            $("#StatusMessageHolder").html("<div class='animated tada StatusMessage'>Taught " + Item.Name + " To " + Party[Name].Name + " !</div>");
                            Party[0].Inventory.splice(index, 1);
                            Character = Party[0];
                            localStorage.setItem('_character', JSON.stringify(Character));
                            localStorage.setItem('_Party', JSON.stringify(Party));
                            setTimeout(function () {
                                $("#InventoryDialog").html("");
                                PlaceInventory();
                            }, Character.PlayerTextSpeed);
                        });
                        $("#No").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                    }else if (Item.Type == "Weapon" || Item.Type == "Armour" ) {
                              // IF ITEM IS WEAPON OR ARMOUR 
                        $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'><span>Are you sure you want to equip " + Party[this.id.substr(1, 1)].Name + " with a  " + Character.Inventory[index].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
                        var Name = this.id.substr(1, 1);
                        localStorage.setItem('_Name', JSON.stringify(Name));
                        $("#Yes").click(function () {
                              var Name = JSON.parse(localStorage.getItem('_Name'));
                            
                            // If player Already has something equipped in that slot, Refuse the palyer access to equip an item... //
                            if (Party[Name].Equipment[Item.Equip]  != ""){
                                 $("#StatusMessageHolder").html("<div class='animated pulse StatusMessage'> "+Party[Name].Name+" already has something equipped for that. Would you like to equip the "+Item.Name+" instead?<br> <button class='MenuButton' id='Yes'> Yes </button> <button class='MenuButton' id='No'> No </button></div> ");
                                $("#No").click(function(){
                                    WhichCharacter(Item, index);
                                });
                                
                                
                                 $("#Yes").click(function(){
                            
                            // Unequipping previous item from slot first *Adding it to Inventory*
                                     
                                     Party[0].Inventory.push(Party[Name].Equipment[Item.Equip]);
                              var OldName = Party[Name].Equipment[Item.Equip];
                                     
                             // Equiping Character With Item *Replacing Previous item with new item*
                            console.log(Item)
                            Party[Name].Equipment[Item.Equip] = Item;
                            console.log(Party[Name].Equipment)
                            $("#StatusMessageHolder").html("<div class='animated bounceIn StatusMessage'> "+Party[Name].Name+" has switched the "+OldName.Name+" with the " + Item.Name + " !</div>");
                           Party[0].Inventory.splice(index, 1);
                            Character = Party[0];
                            localStorage.setItem('_character', JSON.stringify(Character));
                           localStorage.setItem('_Party', JSON.stringify(Party));
                           setTimeout(function () {
                                $("#InventoryDialog").html("");
                                PlaceInventory();
                            }, Character.PlayerTextSpeed);  
                                     
                                     
                                });
                                
                                
                            } else {
                                                
                            // Are You Sure Statements...  Allows players to back out form this if need be.
                          
                            // Equiping Character With Item
                            console.log(Item)
                            Party[Name].Equipment[Item.Equip] = Item;
                            console.log(Party[Name].Equipment)
                            $("#StatusMessageHolder").html("<div class='animated bounceIn StatusMessage'> "+Party[Name].Name+" has been equipped with " + Item.Name + " !</div>");
                           Party[0].Inventory.splice(index, 1);
                            Character = Party[0];
                            localStorage.setItem('_character', JSON.stringify(Character));
                           localStorage.setItem('_Party', JSON.stringify(Party));
                           setTimeout(function () {
                                $("#InventoryDialog").html("");
                                PlaceInventory();
                            }, Character.PlayerTextSpeed);
                                
                            };
                            
                            
                            
                            
                            
            
                        });
                        $("#No").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                    }
                    else if (Item.Type == "Misc") {
                        // IF ITEM IS MISC
                        $("#InventoryDialog").html("<div class='animated rubberBand StatusMessage'> You Can't Use A " + Item.Name + " On " + Party[this.id.substr(1, 1)].Name + " ? What are you even thinking? It has no effect...</div>");
                        setTimeout(function () {
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        }, Character.PlayerTextSpeed + 2000);
                    }
                    else if (Item.Type == "Food") {
                        $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'><span>Are you sure you want to feed a " + Character.Inventory[index].Name + " to " + Party[this.id.substr(1, 1)].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
                        var Name = this.id.substr(1, 1);
                        localStorage.setItem('_Name', JSON.stringify(Name));
                        $("#Yes").click(function () {
                            var Name = JSON.parse(localStorage.getItem('_Name'));
                            if (Party[Name].Stats[0].Value + Item.Stats.Health > Party[Name].Stats[6].Value) {
                                // If It Goes OVER AMOUNT NEEDED
                                Party[Name].Stats[0].Value = Party[Name].Stats[6].Value;
                            }
                            // If IT IS ALL NEEDED
                            else {
                                Party[Name].Stats[0].Value = Party[Name].Stats[0].Value + Item.Stats.Health;
                            };
                            $("#InventoryContainer").html("");
                            $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'> Fed " + Item.Name + " To " + Party[Name].Name + " </div>");
                            var ThisId = this.id;
                            localStorage.setItem('_CurrentFood', JSON.stringify(ThisId));
                            setTimeout(function () {
                                var ThisId = JSON.parse(localStorage.getItem('_CurrentFood'));
                                if (Item.Stats.Health < 25) {
                                    $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'>  " + Party[Name].Name + " Thought it was just okay... </div>");
                                    setTimeout(function () {
                                        DoneEating();
                                    }, Character.PlayerTextSpeed + 1000);
                                }
                                else if (Item.Stats.Health < 100) {
                                    $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'>  " + Party[Name].Name + " Thought it was not bad! </div>");
                                    setTimeout(function () {
                                        DoneEating();
                                    }, Character.PlayerTextSpeed + 1000);
                                };
                            }, Character.PlayerTextSpeed);
                        });

                        function DoneEating() {
                            $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'> It healed " + Party[Name].Name + " by " + Item.Stats.Health + " HP</div>");
                            setTimeout(function () {
                                Party[0].Inventory.splice(index, 1);
                                Character = Party[0];
                                localStorage.setItem('_character', JSON.stringify(Character));
                                localStorage.setItem('_Party', JSON.stringify(Party));
                                $("#InventoryDialog").html("");
                                $("#InventoryContainer").html("");
                                PlaceInventory();
                            }, Character.PlayerTextSpeed + 1000);
                        };
                        $("#No").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                    }; // End of Else ifs for types of an item
                });
            };
        };
    };
};
console.log("~~~~~~~~~~~~~~~~~~~")