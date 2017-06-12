/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
console.log("~~~Inventory~~~")
StartApp();
/*~~~~~~~~~~~~~~~~~~~~ --------------------- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function StartApp() {
      $("#MessageHolder").remove();
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    Party[0].Inventory.sort(function(a, b){
    if(a.Name < b.Name) return -1;
    if(a.Name > b.Name) return 1;
    return 0;
})
      localStorage.setItem('_character', JSON.stringify(Character));
     var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    Party[0] = Character
    if (Party[0].Inventory.length <= 0) {
        console.log('emptyInventory');
        $("#InventoryContainer").html("<h3 class='SubSubMainTitle animated rubberBand'> Inventory </h3>  You have no items");
        $("#InventoryContainer").css("border-color", "" + Party[0].Color + "");
    }
    else {
        
        console.log(Party[0].Inventory)
        
        
        for (i = 0; i < Party[0].Inventory.length; i++) {
            PlaceInventory();

            function PlaceInventory() {
                $("#StatusMessageHolder").html("");
                $("#StatusMessageHolder").css("display", "none");
                $("#InventoryContainer").html("<h3 class='SubSubMainTitle animated rubberBand'> Inventory </h3> ");
                var Character = JSON.parse(localStorage.getItem('_character'));
                for (i = 0; i < Party[0].Inventory.length; i++) {
                    console.log(Party[0].Inventory[i]);
                    Party[0].Inventory[i].Index = i;
                    $("#InventoryContainer").append("<div class='animated bounceIn BattleItemSlot'><input class='BattleItem' type='image' src='" + Party[0].Inventory[i].Avatar + "' id='" + i + "'><br>" + Party[0].Inventory[i].Name + "</input></div>");
                    $("#InventoryContainer").css("border-color", "" + Party[0].Color + "");
                    $("#" + i + "").click(function () {
                        $("#InventoryContainer").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
                        $("#InventoryContainer").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
                       
                        var index = this.id;
                        var Item = Party[0].Inventory[index]
                         if(Party[0].Inventory[index].Type == "Key"){
                             $("#StatusMessageHolder").css("display", "block");
                             $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'>You can't use a  <strong>" + Party[0].Inventory[index].Name + "</strong> right now </div><div class='MenuWrapper'><button class='MenuButton' id='Back'> Back </button></div><br>");
                             $("#Back").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                         }else if (Party[0].Inventory[index].Type == "Weapon" || Party[0].Inventory[index].Type == "Armour"){
                         $("#StatusMessageHolder").css("display", "block");
                        $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'>Do you want to equip someone with the <strong>" + Party[0].Inventory[index].Name + "</strong> ? </div><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='Deny'> No </button></div><br>");
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
                        $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'>Do you want to use  a <strong>" + Party[0].Inventory[index].Name + "</strong> on someone ?</div><br><img lcass='BattleItem' src='"+Party[0].Inventory[index].Avatar+"'></img><br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='Deny'> No </button></div><br>");
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
                if (Party[0].Inventory.length <= 0) {
                    $("#InventoryContainer").html("<h3 class='SubSubMainTitle animated rubberBand'> Inventory </h3>  You have no items");
                };
            };
        };

        function WhichCharacter(Item, index) {
            $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'><span>Which character would you like to use a " + Party[0].Inventory[index].Name + " on?</span><br><div id='PartyList'></div></div>");
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
                        $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'><span>Are you sure you want to use a " + Party[0].Inventory[index].Name + " on " + Party[this.id.substr(1, 1)].Name + " ?</span><br><span>"+Party[this.id.substr(1, 1)].Stats[0].Value+" / "+Party[this.id.substr(1, 1)].Stats[6].Value+"</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
                        var Name = this.id.substr(1, 1);
                        localStorage.setItem('_Name', JSON.stringify(Name));
                        $("#Yes").click(function () {
                            // Are You Sure Statements...  Allows players to back out form this if need be.
                            var Name = JSON.parse(localStorage.getItem('_Name'));
                            if (Item.Stats.Health == 0){
                            $("#AlertPlayerMessage").html("<div class='animated tada AlertPlayerText'>Restored " + Party[Name].Name + "'s Mana by " + Item.Stats.Mana + " MP </div>");
                            } else if (Item.Stats.Mana == 0){
                            $("#AlertPlayerMessage").html("<div class='animated tada AlertPlayerText'>Healed Up " + Party[Name].Name + " By " + Item.Stats.Health + " HP </div>");
                            };
                            Party[0].Inventory.splice(index, 1);
                            Character = Party[0];
                            localStorage.setItem('_character', JSON.stringify(Character));
                            localStorage.setItem('_Party', JSON.stringify(Party));
                            setTimeout(function () {
                                $("#InventoryDialog").html("");
                                PlaceInventory();
                            }, Party[0].PlayerTextSpeed);
                        });
                        $("#No").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                    }
                    else if (Item.Type == "Spell") {
                        $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'><span>Are you sure you want to teach " + Party[0].Inventory[index].Name + " to " + Party[this.id.substr(1, 1)].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
                        var Name = this.id.substr(1, 1);
                        localStorage.setItem('_Name', JSON.stringify(Name));
                        $("#Yes").click(function () {
                            // Are You Sure Statements...  Allows players to back out form this if need be.
                            var Name = JSON.parse(localStorage.getItem('_Name'));
                            //    console.log("Taught " + Item.Name + " To "+Party[this.id.substr(1,1)].Name+" !")
                            Party[Name].Spells.push(Item);
                            $("#AlertPlayerMessage").html("<div class='animated tada AlertPlayerText'>Taught " + Item.Name + " To " + Party[Name].Name + " !</div>");
                            Party[0].Inventory.splice(index, 1);
                            Character = Party[0];
                            localStorage.setItem('_character', JSON.stringify(Character));
                            localStorage.setItem('_Party', JSON.stringify(Party));
                            setTimeout(function () {
                                $("#InventoryDialog").html("");
                                PlaceInventory();
                            }, Party[0].PlayerTextSpeed);
                        });
                        $("#No").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                    }else if (Item.Type == "Weapon" || Item.Type == "Armour" ) {
                              // IF ITEM IS WEAPON OR ARMOUR 
                        $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'><span>Are you sure you want to equip " + Party[this.id.substr(1, 1)].Name + " with a  " + Party[0].Inventory[index].Name + " ?</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
                        var Name = this.id.substr(1, 1);
                        localStorage.setItem('_Name', JSON.stringify(Name));
                        $("#Yes").click(function () {
                              var Name = JSON.parse(localStorage.getItem('_Name'));
                            
                            // If player Already has something equipped in that slot, Refuse the palyer access to equip an item... //
                            if (Party[Name].Equipment[Item.Equip]  != ""){
                                 $("#AlertPlayerMessage").html("<div class='animated pulse AlertPlayerText'> "+Party[Name].Name+" already has something equipped for that. Would you like to equip the "+Item.Name+" instead?<br> <button class='MenuButton' id='Yes'> Yes </button> <button class='MenuButton' id='No'> No </button></div> ");
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
                            $("#AlertPlayerMessage").html("<div class='animated bounceIn AlertPlayerText'> "+Party[Name].Name+" has switched the "+OldName.Name+" with the " + Item.Name + " !</div>");
                           Party[0].Inventory.splice(index, 1);
                            Character = Party[0];
                            localStorage.setItem('_character', JSON.stringify(Character));
                           localStorage.setItem('_Party', JSON.stringify(Party));
                           setTimeout(function () {
                                $("#InventoryDialog").html("");
                                PlaceInventory();
                            }, Party[0].PlayerTextSpeed);  
                                     
                                     
                                });
                                
                                
                            } else {
                                                
                            // Are You Sure Statements...  Allows players to back out form this if need be.
                          
                            // Equiping Party[0] With Item
                            console.log(Item)
                            Party[Name].Equipment[Item.Equip] = Item;
                            console.log(Party[Name].Equipment)
                            $("#AlertPlayerMessage").html("<div class='animated bounceIn AlertPlayerText'> "+Party[Name].Name+" has been equipped with " + Item.Name + " !</div>");
                           Party[0].Inventory.splice(index, 1);
                            Party[0] = Party[0];
                            localStorage.setItem('_Party[0]', JSON.stringify(Party[0]));
                           localStorage.setItem('_Party', JSON.stringify(Party));
                           setTimeout(function () {
                                $("#InventoryDialog").html("");
                                PlaceInventory();
                            }, Party[0].PlayerTextSpeed);
                                
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
                        $("#AlertPlayerMessage").html("<div class='animated rubberBand AlertPlayerText'> You Can't Use A " + Item.Name + " On " + Party[this.id.substr(1, 1)].Name + " ? What are you even thinking? It has no effect...</div>");
                        setTimeout(function () {
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        }, Party[0].PlayerTextSpeed);
                    }
                    else if (Item.Type == "Food") {
                        $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'><span>Are you sure you want to feed a " + Party[0].Inventory[index].Name + " to " + Party[this.id.substr(1, 1)].Name + " ?</span><br><span>"+Party[this.id.substr(1, 1)].Stats[0].Value+" / "+Party[this.id.substr(1, 1)].Stats[6].Value+"</span><br><button class='animated flipInX MenuButton' id='Yes'> Yes </button><button class='animated flipInX MenuButton' id='No'> No </button></div>");
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
                        //    $("#InventoryContainer").html("");
                            $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'> Fed <strong>" + Item.Name + "</strong> To " + Party[Name].Name + " </div>");
                            var ThisId = this.id;
                            localStorage.setItem('_CurrentFood', JSON.stringify(ThisId));
                            setTimeout(function () {
                                var ThisId = JSON.parse(localStorage.getItem('_CurrentFood'));
                                if (Item.Stats.Health < 25) {
                                    $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'>  " + Party[Name].Name + " Thought it was just okay... </div>");
                                    setTimeout(function () {
                                        DoneEating();
                                    }, 3000);
                                }
                                else if (Item.Stats.Health < 100) {
                                    $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'>  " + Party[Name].Name + " Thought it was not bad! </div>");
                                    setTimeout(function () {
                                        DoneEating();
                                    },  3000);
                                };
                            }, Party[0].PlayerTextSpeed);
                        });

                        function DoneEating() {
                            $("#AlertPlayerMessage").html("<div class='animated flipInX AlertPlayerText'> It healed " + Party[Name].Name + " by " + Item.Stats.Health + " HP</div>");
                            setTimeout(function () {
                                Party[0].Inventory.splice(index, 1);
                                Party[0] = Party[0];
                                localStorage.setItem('_Party', JSON.stringify(Party));
                                $("#InventoryDialog").html("");
                                $("#InventoryContainer").html("");
                                PlaceInventory();
                            }, Party[0].PlayerTextSpeed);
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