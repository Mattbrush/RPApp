/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
console.log("~~~Inventory~~~")
StartApp();
/*~~~~~~~~~~~~~~~~~~~~ --------------------- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function StartApp() {
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    Party[0] = Character
        //    console.log(Party);
    if (Character.Inventory.length <= 0) {
        console.log('emptyInventory');
        $("#InventoryContainer").html("<h3 class='SubSubMainTitle animated rubberBand'> Inventory </h3>  You have no items");
        $("#InventoryContainer").css("border-color", "" + Party[0].Color + "");
    }
    else {
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
                    $("#InventoryContainer").append("<div class='BattleItemSlot'><input class='BattleItem' type='image' src='" + Character.Inventory[i].Avatar + "' id='" + i + "'>" + Character.Inventory[i].Name + "</input></div>");
                    $("#InventoryContainer").css("border-color", "" + Party[0].Color + "");
                    $("#" + i + "").click(function () {
                       
                        var index = this.id;
                        var Item = Character.Inventory[index]
                         if(Character.Inventory[index].Type == "Key"){
                             $("#StatusMessageHolder").css("display", "block");
                             $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'>You can't use " + Character.Inventory[index].Name + " right now </div><div class='MenuWrapper'><button class='MenuButton' id='Back'> Back </button></div><br>");
                             $("#Back").click(function () {
                            $("#StatusMessageHolder").html("");
                            $("#InventoryContainer").html("");
                            $("#InventoryDialog").html("");
                            PlaceInventory();
                        });
                         }else{
                        $("#StatusMessageHolder").css("display", "block");
                        $("#StatusMessageHolder").html("<div class='animated flipInX StatusMessage'>Do You Want To Use " + Character.Inventory[index].Name + " On Someone ?</div><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton' id='Deny'> No </button></div><br>");
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
                    }
                    else if (Item.Type == "Misc") {
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