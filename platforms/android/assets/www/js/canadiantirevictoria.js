////////////// Table Of Contents////////////
////////////////////////////////////////////
/*~~~~~~~~~~~~~~~~~~~~ Creating Objects   /1/ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
console.log("~~~~~ShoppingTime!~~~~~~")
    // Play Music//
var audio = new Audio('./music/shoppingTheme.mp3');
var Sale = new Audio('./sound/sale.mp3');
audio.play();
////

/* Store Inventory */

var StoreInventory = [
    
    {
                Name: "Sword"
                , IDName: "Sword"
                , Avatar: "./img/Sword.png"
                , Type: "Weapon"
                , Index: 0
                ,Weight: 5
                ,Equip:"RightHand"
                , Stats: {
                    Attack: 5
                , }
                , Worth: 2
                , DropRate: 0.65
    },
    {
                Name: " Lumber Axe"
                , IDName: "LumberAxe"
                , Avatar: "./img/LumberAxe.png"
                , Description: " A sturdy handaxe made for a moutaineer ."
                , Type: "Weapon"
                , Index: 0
                ,Weight: 7
                ,Equip:"RightHand"
                , Stats: {
                    Attack: 6
                , }
                , Worth: 3
                , DropRate: 0.65
    },
   /* 
     {
                Name: " Imp's Bane "
                , IDName: "ImpsBane"
                , Avatar: "./img/ImpsBane.jpg"
                , Type: "Weapon"
                , Description: " A <strong>dagger</strong> ripped from the roots of the life tree <strong>Yggdrasil</strong>. "
                , Index: 0
                ,Weight: 1.5
                ,Equip:"RightHand"
                , Stats: {
                    Attack: [1,3],
                    CriticalAttack: 4,
                    Enchanted : false,
                    Durability: 100,
                 }
                , Worth: 3
                , DropRate: 0.65
    },*/
    
    
     {
                Name: " Lumber Pants "
                , IDName: "LumberPants"
                , Avatar: "./img/LumberPants.png"
                , Type: "Armour"
                , Index: 0
                ,Weight: 7
                ,Equip:"Legs"
                , Stats: {
                    Defense: 3
                , }
                , Worth: 3
                , DropRate: 0.65
    },
     {
                Name: " Wool Cap "
                , IDName: "WoolCap"
                , Avatar: "./img/WoolCap.png"
                , Type: "Armour"
                , Index: 0
                ,Weight: 7
                ,Equip:"Head"
                , Stats: {
                    Defense: 2
                , }
                , Worth: 3
                , DropRate: 0.65
    },
    
]


///////////////////





StartStore();
$("#Logo").html("<img class='width50' src='./img/CanadianTire.png'>");
$("#Overlay").css("background-image","url(img/CanadianTireInside.jpg)");

function StartStore() {
    console.log("~~~~~Starting StorePage!~~~~~~")
    var Party = JSON.parse(localStorage.getItem('_Party'));
    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='Dialog'> Welcome to Canadian Tire ! </h4>");
    
    if (Party[0].Triggers.Victoria6 == true){
        // Player has ben in their party
         setTimeout(function () {
        StoreFront();
         }, 1000); 
    } else if (Party[0].Triggers.Victoria5 == true){
        // Player has ben in their party
         setTimeout(function () {
        StoreTutorial1();
         }, 1000); 
    } else if (Party[0].Triggers.Victoria4 == false){
        // Player has not beaten the fighting tutorial yet
         setTimeout(function () {
        StoreBusy();
             }, 1000); 
    } else if (Party[0].Triggers.Victoria5 == false){
        // Player has not beaten the fighting tutorial yet
         setTimeout(function () {
        StoreBusy2();
             }, 1000); 
    } else {
           setTimeout(function () {
        StoreFront();
    }, 1000); 
    };
    
      function StoreBusy() {
           $("#Options").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
       $("#Options").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
         $("#AlertPlayerMessage").html("<div class='animated bounceIn AlertPlayerText'> (There are deer running around in the store.. You see a lot of people yelling and scrambling.. Maybe you should come back later?) </div><br><button class='MenuButton2 animated fadeInDown' id='Leave'>Leave</button>");
          
          
           $("#Leave").click(function () {
            Party[0].Triggers.Victoria6 = true;
            localStorage.setItem('_Party', JSON.stringify(Party));
            audio.pause();
            audio.currentTime = 0;
            $("#App").load("./temp/ShoppingDistrictVictoria.html")
        });
      };
    
    function StoreBusy2() {
       $("#Options").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
       $("#Options").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
         $("#AlertPlayerMessage").html("<div class='animated bounceIn AlertPlayerText'> (A man who looks like the Manager is facing off against a large buck, they both look exhausted..)  </div><br><button class='MenuButton2 animated fadeInDown' id='Continue'> Continue </button>");
        $("#Continue").click(function () {
          BenWantsToLeave();
        });
        
        /* Add dialog from Ben here */
        function BenWantsToLeave(){
            $("#OverlayBlanket").remove();
            $("#AlertPlayerMessage").remove();
           $("#App").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
        $("#App").prepend("<div id='CharacterAvatar' class='CharacterAvatar Fixed animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
         $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Whoa! What the heck? Let's get outta here "+Party[0].Name+" ! Come on, I will take you to Tommie's for a drink!  '</div>");
      $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Leave'> Okay.. </button>");
           $("#Leave").click(function () {
           localStorage.setItem('_Party', JSON.stringify(Party));
            audio.pause();
            audio.currentTime = 0;
            $("#App").load("./temp/ShoppingDistrictVictoria.html")
        });
            };
        
        //////////////////////////////  
          
      
      };
    
    
      function StoreTutorial1() {
       $("#Options").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
       $("#Options").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
         $("#AlertPlayerMessage").html("<div class='animated bounceIn AlertPlayerText'> The store smells of hardware and paint, You can see boxes of nails and lightbulbs on the shelves nearby.  </div><br><button class='MenuButton2 animated fadeInDown' id='Continue'> Continue </button>");
        $("#Continue").click(function () {
          BenTalks();
        });
        
        /* Add dialog from Ben here */
        function BenTalks(){
            $("#OverlayBlanket").remove();
            $("#AlertPlayerMessage").remove();
           $("#App").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
        $("#App").prepend("<div id='CharacterAvatar' class='CharacterAvatar Fixed animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
         $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' Alright, It's time to get some Weapons and Armour! What should we defend ourselves with?  '</div>");
      $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Conitnue </button>");
            
           $("#Next").click(function () {
            $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : ' We don't have much money yet, but we will get some more after fighting some enemies. For now maybe we should look at some armour? ' </div>");
               $("#ContinueMessageHolder").html("<button class='DialogNextButton animated flipInX' id='Shop'> Shop </button>");
               
                $("#Shop").click(function () {
                    Party[0].Triggers.Victoria6 = true;
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    $("#ContinueMessageHolder").remove();
                    $("#CharacterAvatar").remove();
                    $("#DiaogWrapper").remove();
                    $("#OverlayBlanket").remove();
                    $("#AlertPlayerMessage").remove();
          StoreFront();
        });
        });
            };
        
        //////////////////////////////  
          
      
      };
    
    
    


    function StoreFront() {
        $("#Logo").html("<img class='width50' src='./img/CanadianTire.png'>");

        var Party = JSON.parse(localStorage.getItem('_Party'));

        
        $("#Options").html("<br><button class='MenuButton2 animated fadeInDown' id='Buy'>Buy</button><button class='MenuButton2 animated fadeInDown' id='Sell'>Sell</button><button class='MenuButton2 animated fadeInDown' id='Leave'>Leave</button>");
        // BUYING Items Function
        $("#Buy").click(function () {
            FreshenStore(Party[0]);
        });
        
        // SELLING Items Function
        $("#Sell").click(function () {
            SellStore(Party[0])
        });

        $("#Leave").click(function () {

            localStorage.setItem('_Party', JSON.stringify(Party));
            audio.pause();
            audio.currentTime = 0;
            $("#App").load("./temp/ShoppingDistrictVictoria.html")
        });
    }

    function FreshenStore() {
        $("#Logo").html("");
        $("#Logo").html("<img class='width50' src='./img/CanadianTire.png'>");
        $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> Try our new Icebergs today! </h4>");
        console.log("~~~Adding Shop Items~~~");
        var Party = JSON.parse(localStorage.getItem('_Party'));
        CheckWallet();
        $("#Options").html("<br><div class='MenuWrapper' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span class='Money'>$" + Party[0].Wallet.Total + "</span><br></div><button id='Back' class='animated fadeInDown MenuButton2'> Back </button>");
        console.log("StoreInventory : ");
        /////// Theme Button For Store to gelp with filtering /////
        $("#Inventory").html("<div class='MenuWrapper'><button class='MenuButton animated flipInY' id='Weapons'>Weapons</button><br><button class='MenuButton animated flipInY' id='Armour'>Armour</button></div>");
        $("#StatusItems").click(function () {
            $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> Want more Health or Mana? !</h4>");
            $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='StatusItems'>Status Items</div>");
            var StoreItemCount = 0
            for (i = 0; i < StoreInventory.length; i++) {
                console.log(StoreInventory[i]);
                if (StoreInventory[i].Type == "Status") {
                    /////// IF THE ITEM IS A STATUS ITEM
                    StoreItemCount++
                    $("#Inventory").append("<br><div><input type='image' src='" + StoreInventory[i].Avatar + "' class='StoreSlot' id='" + i + "' >Name : " + StoreInventory[i].Name + " <br>Type: " + StoreInventory[i].Type + "  <br>Price : $" + StoreInventory[i].Worth + "</input></div>");
                    $("#" + i).css("border-color", "Red");
                }
                if (Party[0].Wallet.Total < StoreInventory[i].Worth) {
                    // Player doesn't have enough money..
                    $("#" + i).css("border-color", "Grey");
                    $("#" + i).css("pointer-events", "none");
                }
                $("#" + i + "").click(function () {
                    var index = this.id
                    ShopkeeperPurchaseDialog();
                    $("#StatusMessageHolder").css("display", "block");
                    $("#StatusMessageHolder").html("<h4 class='animated flipInX  StatusMessage' id='StatusMessage'>Are You Sure You Want To Buy " + StoreInventory[this.id].Name + " For " + StoreInventory[this.id].Worth + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                    $("#StatusMessageHolder").css("border-color", "" + Party[0].Color + "");
                    $("#Accept").click(function () {
                        PurchaseItem( index);
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                    })
                    $("#Deny").click(function () {
                        $("#Inventory").html("");
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                        FreshenStore();
                    })
                });
            };
            if (StoreItemCount == 0) {
                $("#Inventory").html("<div> Sorry, No Status Items Availabe </div>");
            }
            $("#Inventory").append("<br><button class='MenuButton' id='ItemsBack'> Back To Items </button>");
            $("#ItemsBack").click(function () {
                FreshenStore( Total)
            });
        });
        /////// IF THE ITEM IS A MISC ITEM
        $("#MiscItems").click(function () {
            $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> You need something a little different?</h4>");
            $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='MiscItems'>Miscellaneous Items</div>");
            var StoreItemCount = 0
            for (i = 0; i < StoreInventory.length; i++) {
                console.log(StoreInventory[i]);
                if (StoreInventory[i].Type == "Misc") {
                    StoreItemCount++
                    $("#Inventory").append("<br><div><input type='image' src='" + StoreInventory[i].Avatar + "' class='StoreSlot' id='" + i + "' >Name : " + StoreInventory[i].Name + " <br>Type: " + StoreInventory[i].Type + "  <br>Price : $" + StoreInventory[i].Worth + "</input></div>");
                    $("#" + i).css("border-color", "Green");
                }
                if (Party[0].Wallet.Total < StoreInventory[i].Worth) {
                    // Player doesn't have enough money..
                    $("#" + i).css("border-color", "Grey");
                    $("#" + i).css("pointer-events", "none");
                }
                $("#" + i + "").click(function () {
                    var index = this.id
                    ShopkeeperPurchaseDialog();
                    $("#StatusMessageHolder").css("display", "block");
                    $("#StatusMessageHolder").html("<h4 class='animated flipInX  StatusMessage' id='StatusMessage'>Are You Sure You Want To Buy " + StoreInventory[this.id].Name + " For " + StoreInventory[this.id].Worth + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                    $("#StatusMessageHolder").css("border-color", "" + Party[0].Color + "");
                    $("#Accept").click(function () {
                        PurchaseItem( index);
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                    })
                    $("#Deny").click(function () {
                        $("#Inventory").html("");
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                        FreshenStore();
                    })
                });
            };
            if (StoreItemCount == 0) {
                $("#Inventory").html("<div> Sorry, No Miscellaneus Items Availabe </div>");
            }
            $("#Inventory").append("<br><button class='MenuButton' id='ItemsBack'> Back To Items </button>");
            $("#ItemsBack").click(function () {
                FreshenStore( Total)
            });
        });
/////// IF THE ITEM IS A WEAPON
        $("#Weapons").click(function () {
             $("#Logo").html("");
                    var Party = JSON.parse(localStorage.getItem('_Party'));
            console.log(Party);
            $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> You trying to do some damage? </h4>");
            $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='MiscItems'> Weapons </div>");
            var StoreItemCount = 0
            $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='Weapons'> Weapons </div><div id='InventoryContainer' class='StoreInventory'></div>");
            for (i = 0; i < StoreInventory.length; i++) {
                console.log(StoreInventory[i]);
                 
                if (StoreInventory[i].Type == "Weapon") {
                    StoreItemCount++
                    $("#InventoryContainer").append("<div class='BattleItemSlot'><input type='image' src='" + StoreInventory[i].Avatar + "' class='BattleItem' id='" + i + "' ><br> " + StoreInventory[i].Name + " <br>Price : $" + StoreInventory[i].Worth + "</input></div>");
                    $("#" + i).css("border-color", "#b7b7b7");
                }
                if (Party[0].Wallet.Total < StoreInventory[i].Worth) {
                    // Player doesn't have enough money..
                    $("#" + i).css("border-color", "Grey");
                    $("#" + i).css("pointer-events", "none");
                }
                $("#" + i + "").click(function () {
                     $("#Store").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
                    $("#Store").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
                    var index = this.id
                    ShopkeeperPurchaseDialog();
                    $("#StatusMessageHolder").css("display", "block");
                    $("#AlertPlayerMessage").html("<h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'><img class='Width75' src='"+StoreInventory[this.id].Avatar+"'></img><br> <span class='animated flipInY '>" + StoreInventory[this.id].Name + " </span><br><span class='animated flipInY '>" + StoreInventory[this.id].Description + " </span> <br> <span class='animated flipInY '>$ " + StoreInventory[this.id].Worth + "</span> <br><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button>");
                    $("#StatusMessageHolder").css("border-color", "" + Party[0].Color + "");
                    $("#Accept").click(function () {
                       
                         /****** Equip Phase OF Store !? */
                                    $("#MessageHolder").html("<h4 class='animated tada  AlertPlayerText' id='Dialog'> Do you want to equip that now ?  </h4>");
                        $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'>Would you like to equip this item now to a party member ? </h4><br><button id='Yes' class='MenuButton'> Yes </button><button id='No' class='MenuButton'> No </button></div>");
                     
                        $("#No").click(function(){
                             $("#MessageHolder").html("");
                        $("#StatusMessageHolder").css("display", "none");
                         PurchaseItem( index); 
                        });
                        
                        
                        
                        $("#Yes").click(function(){
                           $("#MessageHolder").html("");
                          $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'> Which Party Member Would You Like To Equip This To ? </h4><div class='' id='PartyList'></div>");
                            
                            
                              for (e = 0; e < Party.length; e++) {
                                  if(e !=0){$("#PartList").append("<br>")};
                                  $("#PartyList").append("<button id='"+index+e+"'  class='MenuButton'> "+Party[e].Name+" </button>")
                                  
                                    
                              $("#"+index + e + "").click(function () {
                    var index2 = this.id.substr(1,1)
                   
                    $("#StatusMessageHolder").css("display", "block");
                    $("#AlertPlayerMessage").html("<h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'>Are you sure you want to equip " + Party[index2].Name + " with " + StoreInventory[index].Name + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                    $("#StatusMessageHolder").css("border-color", "" + Party[0].Color + ""); 
                    $("#Accept").click(function () {
                          
                    /*  Asking Dynamically which equpiment The Party member has or needs based off of the item that the party member is equipping */
                    if( Party[index2].Equipment.hasOwnProperty(StoreInventory[index].Equip) ){
                    // If Current Equipment Slot is full or not..
                    var CurrentItemEquippable = StoreInventory[index].Equip;
                    var CurrentEquipmentSlot = Party[index2].Equipment[CurrentItemEquippable];
                    
                        if (CurrentEquipmentSlot != "" ){
                            console.log(" Player Already has an item equipped");
                             $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated pulse  AlertPlayerText' id='StatusMessage'>" + Party[index2].Name + " already has something  equipped for that. Would you like to equip the "+StoreInventory[index].Name+" instead ? </h4><br> <button class='MenuButton' id='Yes'> Yes </button> <button class='MenuButton' id='No'> No </button></div>");
                            
                            $("#No").click(function(){
                                $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                                $("#MessageHolder").html("");
                                $("#StatusMessageHolder").css("display", "none");
                                  PurchaseItem( index); 
                            });
                            
                            $("#Yes").click(function(){
                                
                                
                                $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'>" + Party[index2].Name + " switched out their " + Party[index2].Equipment[StoreInventory[index].Equip].Name + " for the "+StoreInventory[index].Name+" ! </h4><br><img src='"+StoreInventory[index].Avatar+"'></img></div>");
                                
                                
                               setTimeout(function () {   
                                     $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                                $("#MessageHolder").html("");
                                $("#StatusMessageHolder").css("display", "none");
                                  SwitchEquipItem( index , index2, CurrentEquipmentSlot);
                                     }, 3000);
                            });
                            
                            
                            
                            
                            
                        } else {
                            $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'>" + Party[index2].Name + " Equipped " + StoreInventory[index].Name + "  ! </h4><br><img src='"+StoreInventory[index].Avatar+"'></img></div>");
                            
                           setTimeout(function () {  
                               $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                       $("#MessageHolder").html("");
                       $("#StatusMessageHolder").css("display", "none");
                        EquipItem( index , index2, CurrentEquipmentSlot);
                                }, 3000);
                            
                            
                        }
                        

                        
                        
                        
                    };
                
                    
                    })
                    $("#Deny").click(function () {
                        $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                        $("#Inventory").html("");
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  AlertPlayerText' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                        FreshenStore();
                    })
                });
                                  
                              };
                                  
                        });
                             
                        ////////////////////////END OF EQUIP PHASE/////////////////
                    })
                    $("#Deny").click(function () {
                        $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                        $("#Inventory").html("");
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  AlertPlayerText' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                       
                        FreshenStore();
                    })
                });
            };
            if (StoreItemCount == 0) {
                $("#Inventory").html("<div> Sorry, No Weapons Availabe </div>");
            }
            $("#Inventory").append("<br><button class='MenuButton' id='ItemsBack'> Back To Items </button>");
            $("#ItemsBack").click(function () {
                FreshenStore()
            });
        });
        
        /////// IF THE ITEM IS ARMOUR
        $("#Armour").click(function () {
            $("#Logo").html("");
                    var Party = JSON.parse(localStorage.getItem('_Party'));
            console.log(Party);
            $("#MessageHolder").html("<h4 class='animated tada  AlertPlayerText' id='Dialog'> You protect yourself?? </h4>");
            $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='Armour'> Armour </div><div id='InventoryContainer' class='StoreInventory'></div>");
            var StoreItemCount = 0
            for (i = 0; i < StoreInventory.length; i++) {
                console.log(StoreInventory[i]);
                if (StoreInventory[i].Type == "Armour") {
                    StoreItemCount++
                   $("#InventoryContainer").append("<div class='BattleItemSlot'><input type='image' src='" + StoreInventory[i].Avatar + "' class='BattleItem' id='" + i + "' ><br> " + StoreInventory[i].Name + " <br>Price : $" + StoreInventory[i].Worth + "</input></div>");
                    $("#" + i).css("border-color", "#8acad9");
                }
                if (Party[0].Wallet.Total < StoreInventory[i].Worth) {
                    // Player doesn't have enough money..
                    $("#" + i).css("border-color", "Grey");
                    $("#" + i).css("pointer-events", "none");
                }
                $("#" + i + "").click(function () {
                      $("#Store").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
                    $("#Store").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
                    var index = this.id
                    ShopkeeperPurchaseDialog();
                    $("#StatusMessageHolder").css("display", "block");
                    $("#AlertPlayerMessage").html("<h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'><img class='Width75' src='"+StoreInventory[this.id].Avatar+"'></img><br> <span class='animated flipInY '>" + StoreInventory[this.id].Name + " </span><br> <span class='animated flipInY '>$ " + StoreInventory[this.id].Worth + "</span> <br><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button>");
                    $("#StatusMessageHolder").css("border-color", "" + Party[0].Color + "");
                    $("#Accept").click(function () {
                       
                         /****** Equip Phase OF Store !? */
                                    $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> Do you want to equip that now ?  </h4>");
                        $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'>Would you like to equip this item now to a party member ? </h4><br><button id='Yes' class='MenuButton'> Yes </button><button id='No' class='MenuButton'> No </button></div>");
                     
                        $("#No").click(function(){
                            $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                             $("#MessageHolder").html("");
                        $("#StatusMessageHolder").css("display", "none");
                         PurchaseItem( index); 
                        });
                        
                        
                        
                        $("#Yes").click(function(){
                           $("#MessageHolder").html("");
                          $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'> Which Party Member Would You Like To Equip This To ? </h4><div class='' id='PartyList'></div>");
                            
                            
                              for (e = 0; e < Party.length; e++) {
                                  if(e !=0){$("#PartList").append("<br>")};
                                  $("#PartyList").append("<button id='"+index+e+"'  class='MenuButton'> "+Party[e].Name+" </button>")
                                  
                                    
                              $("#"+index + e + "").click(function () {
                    var index2 = this.id.substr(1,1)
                   
                    $("#StatusMessageHolder").css("display", "block");
                    $("#AlertPlayerMessage").html("<h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'>Are you sure you want to equip " + Party[index2].Name + " with " + StoreInventory[index].Name + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                    $("#StatusMessageHolder").css("border-color", "" + Party[0].Color + ""); 
                    $("#Accept").click(function () {
                          
                    /*  Asking Dynamically which equpiment The Party member has or needs based off of the item that the party member is equipping */
                    if( Party[index2].Equipment.hasOwnProperty(StoreInventory[index].Equip) ){
                    // If Current Equipment Slot is full or not..
                    var CurrentItemEquippable = StoreInventory[index].Equip;
                    var CurrentEquipmentSlot = Party[index2].Equipment[CurrentItemEquippable];
                    
                        if (CurrentEquipmentSlot != "" ){
                            console.log(" Player Already has an item equipped");
                             $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated pulse  AlertPlayerText' id='StatusMessage'>" + Party[index2].Name + " already has something  equipped for that. Would you like to equip the "+StoreInventory[index].Name+" instead ? </h4><br> <button class='MenuButton' id='Yes'> Yes </button> <button class='MenuButton' id='No'> No </button></div>");
                            
                            $("#No").click(function(){
                                $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                                $("#MessageHolder").html("");
                                $("#StatusMessageHolder").css("display", "none");
                                  PurchaseItem( index); 
                            });
                            
                            $("#Yes").click(function(){
                                
                                
                                $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'>" + Party[index2].Name + " switched out their " + Party[index2].Equipment[StoreInventory[index].Equip].Name + " for the "+StoreInventory[index].Name+" ! </h4><br><img src='"+StoreInventory[index].Avatar+"'></img></div>");
                                
                                
                               setTimeout(function () {   
                                     $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                                $("#MessageHolder").html("");
                                $("#StatusMessageHolder").css("display", "none");
                                  SwitchEquipItem( index , index2, CurrentEquipmentSlot);
                                     }, 3000);
                            });
                            
                            
                            
                            
                            
                        } else {
                            $("#AlertPlayerMessage").html("<div class='MenuWrapper'><h4 class='animated flipInX  AlertPlayerText' id='StatusMessage'>" + Party[index2].Name + " Equipped " + StoreInventory[index].Name + "  ! </h4><br><img src='"+StoreInventory[index].Avatar+"'></img></div>");
                            
                           setTimeout(function () {  
                               $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                       $("#MessageHolder").html("");
                       $("#StatusMessageHolder").css("display", "none");
                        EquipItem( index , index2, CurrentEquipmentSlot);
                                }, 3000);
                            
                            
                        }
                        

                        
                        
                        
                    };
                
                    
                    })
                    $("#Deny").click(function () {
                        $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                        $("#Inventory").html("");
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  AlertPlayerText' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                        FreshenStore();
                    })
                });
                                  
                              };
                                  
                        });
                             
                         
                        ////////////////////////END OF EQUIP PHASE/////////////////
                    })
                    $("#Deny").click(function () {
                        $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                        $("#Inventory").html("");
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  AlertPlayerText' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                       
                        FreshenStore();
                    })
                });
            };
            if (StoreItemCount == 0) {
                $("#Inventory").html("<div> Sorry, No Weapons Availabe </div>");
            }
            $("#Inventory").append("<br><button class='MenuButton' id='ItemsBack'> Back To Items </button>");
            $("#ItemsBack").click(function () {
                FreshenStore()
            });
        });
        
        

        
        
        
        
        
        /* Switching an already equipped item through the store */
        
        // Equipping Item, And Remaking the store afterwards //
          function SwitchEquipItem( index , index2, CurrentEquipmentSlot) {  
            var Party = JSON.parse(localStorage.getItem('_Party'));
              // Take party member inital item and send it to the player's inventory //
              Party[0].Inventory.push(Party[index2].Equipment[StoreInventory[index].Equip]);
              console.log(Party[0].Inventory)
            Sale.play();
            $("#Dialog").html(" I hope it helps you in battle ! ");
            Party[0].Wallet.Total = Party[0].Wallet.Total - StoreInventory[index].Worth;
            //  StoreSellBack.push(StoreInventory[index]);
            // Lowers Value Of Item For Player
            var Orignalworth = StoreInventory[index].Worth;
            StoreInventory[index].Worth = Math.round(StoreInventory[index].Worth * 0.75);
           // Equips the Correct Party Memeber with the Correct Item into the Dynamic Slot
            Party[index2].Equipment[StoreInventory[index].Equip] = StoreInventory[index];
            RefreshMoney();
            $("#Inventory").html("");
              // Reset Party[0] to reflect chnages 
            Character = Party[0];
            localStorage.setItem('_Party', JSON.stringify(Party));
            if (StoreInventory[index].Type == "Spell") {
                StoreInventory[index].Worth = Orignalworth
                StoreInventory.splice(index, 1);
                localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
              console.clear();
            FreshenStore();
            } else {
                StoreInventory[index].Worth = Orignalworth
            localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
              console.clear();
           FreshenStore();
            };
        };
        
        
        ////////////////////////////////////////////////////////////
        
        

        
        
        
        // Equipping Item, And Remaking the store afterwards //
          function EquipItem( index , index2, CurrentEquipmentSlot) {
            var Party = JSON.parse(localStorage.getItem('_Party'));
            Sale.play();
            $("#Dialog").html(" I hope it helps you in battle ! ");
            Party[0].Wallet.Total = Party[0].Wallet.Total - StoreInventory[index].Worth;
            //  StoreSellBack.push(StoreInventory[index]);
            // Lowers Value Of Item For Player
            var Orignalworth = StoreInventory[index].Worth;
            StoreInventory[index].Worth = Math.round(StoreInventory[index].Worth * 0.75);
           // Equips the Correct Party Memeber with the Correct Item into the Dynamic Slot
            Party[index2].Equipment[StoreInventory[index].Equip] = StoreInventory[index];
            RefreshMoney();
            $("#Inventory").html("");
              // Reset Party[0] to reflect chnages 
            Character = Party[0];
            localStorage.setItem('_character', JSON.stringify(Character));
            localStorage.setItem('_Party', JSON.stringify(Party));
            if (StoreInventory[index].Type == "Spell") {
                StoreInventory[index].Worth = Orignalworth
                StoreInventory.splice(index, 1);
                localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
              console.clear();
            FreshenStore();
            } else {
                StoreInventory[index].Worth = Orignalworth
            localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
              console.clear();
           FreshenStore();
            };
        };
        
        
        //////////////////////////////////////////////////////
        
        
        // Purchase of an item normally, no equipping involved // 
        function PurchaseItem(index) {
            Sale.play();
            $("#Dialog").html("Thank you so much for your patronage");
            Party[0].Wallet.Total = Party[0].Wallet.Total - StoreInventory[index].Worth;
          //  StoreSellBack.push(StoreInventory[index]);
            // Lowers Value Of Item For Player
            var Orignalworth = StoreInventory[index].Worth;
            StoreInventory[index].Worth = Math.round(StoreInventory[index].Worth * 0.75);
            Party[0].Inventory.push(StoreInventory[index]);
            console.log(StoreInventory[index].Worth)
            RefreshMoney();
            CheckWallet();
            $("#Inventory").html("");
            localStorage.setItem('_character', JSON.stringify(Character));
            if (StoreInventory[index].Type == "Spell") {
                StoreInventory[index].Worth = Orignalworth
                StoreInventory.splice(index, 1);
                localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
              console.clear();
            FreshenStore();
            } else {
                StoreInventory[index].Worth = Orignalworth
            localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
              console.clear();
            FreshenStore();
            };
        };
        ////////////////////////////////////////////////////////
        console.log("~~~~~~~~~~~~~~~");
        $("#Back").click(function () {
            /* Back from inside Store */
            $("#Inventory").html("");
            console.clear();
            localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
            StoreFront();
        });
    };


    function ShopkeeperPurchaseDialog() {
        /* Multiple lines of dialog for the shopkeeper to say */
        var ShopkeeperDialog = [
            {
                Dialog: " This could turn the tide in battle! "
            }
            , {
                Dialog: " A risky choice indeed.. "
            }
        , ]
        var DialogOption = ShopkeeperDialog[Math.floor(Math.random() * ShopkeeperDialog.length)];
        $("#MessageHolder").html("<h4 class='animated pulse  Message' id='Dialog'> " + DialogOption.Dialog + " </h4>");
    }



    function CheckWallet() {        var Party = JSON.parse(localStorage.getItem('_Party'));
        console.log("~~~Configuring Wallet~~~");
        console.log("Wallet : ");//
    //     Party[0].Wallet.Total = Party[0].Wallet.Total + 10;
        $("#Total").html(""+Party[0].Wallet.Total+"");
        console.log(Party[0].Wallet);
        localStorage.setItem('_Party', JSON.stringify(Party));
        console.log("~~~~~~~~~~~~~~~~~~~")
    };

    function RefreshMoney() {
        $("#Total").html("" + Party[0].Wallet.Total + "");
    };
    
    
    
    
     function SellStore( Total) {
        $("#Logo").html("");
        $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='Dialog'> What do you want to offer me? </h4>");
        $("#Inventory").html("<h4 class='animated pulse  SubSubMainTitle' id='Dialog'> Your Inventory :  </h4>");
         $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='PlayerInventory'> Armour </div><div id='InventoryContainer' class='StoreInventory'></div>");
        CheckWallet();
        var Character = JSON.parse(localStorage.getItem('_character'));
        var StoreInventory = JSON.parse(localStorage.getItem('_StoreInventory'));
        $("#Options").html("<br><div class='MenuWrapper animated pulse' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span class='Money'>$" + Party[0].Wallet.Total + "</span><br></div><br><button class='animated fadeInDown MenuButton2' id='Back'>Back</button></div>");
        for (i = 0; i < Party[0].Inventory.length; i++) {
         if (Party[0].Inventory[i].Type == "Key"){}else {
            
            console.log(Party[0].Inventory[i]);
            $("#Inventory").append("<br><input class='StoreSlot' type='image' src='" + Party[0].Inventory[i].Avatar + "'  id='" + i + "'>Name : " + Party[0].Inventory[i].Name + "<br> Type: " + Party[0].Inventory[i].Type + " <br> Price : " + Party[0].Inventory[i].Worth + "</input>");
            if (Party[0].Inventory[i].Type == "Status") {
                $("#" + i).css("border-color", "Red");
            }
            else if (Party[0].Inventory[i].Type == "Spell") {
                $("#" + i).css("border-color", "Blue");
            }
            else if (Party[0].Inventory[i].Type == "Food") {
                $("#" + i).css("border-color", "Orange");
            }
            else if (Party[0].Inventory[i].Type == "Misc") {
                $("#" + i).css("border-color", "Green");
            }else if (Party[0].Inventory[i].Type == "Armour") {
                $("#" + i).css("border-color", "#6bc4c7");
            }else if (Party[0].Inventory[i].Type == "Weapon") {
                $("#" + i).css("border-color", "#d8d8d8");
            }
            $("#" + i + "").click(function () {
                var index = this.id
                ShopkeeperSellerDialog();
                $("#StatusMessageHolder").css("display", "block");
                $("#StatusMessageHolder").html("<h4 class='animated flipInX  StatusMessage' id='StatusMessage'>Are You Sure You Want To Sell " + Party[0].Inventory[this.id].Name + " For " + Party[0].Inventory[this.id].Worth + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                $("#StatusMessageHolder").css("border-color", "" + Party[0].Color + "");
                $("#Accept").click(function () {
                    SellItem( index);
                    $("#StatusMessageHolder").css("display", "none");
                    $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                })
                $("#Deny").click(function () {
                    $("#Inventory").html("");
                    $("#StatusMessageHolder").css("display", "none");
                    $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                    SellStore();
                })

                function SellItem() {
                    $("#Dialog").html("Thank you so much for your patronage");
                    Sale.play();
                    Party[0].Wallet.Total = Party[0].Wallet.Total + Party[0].Inventory[index].Worth;
                    //StoreSellBack.push(Party[0].Inventory[index]);
                    // Raise Value Of Item For Shop
                    Party[0].Inventory[index].Worth = Math.round(Party[0].Inventory[index].Worth / 0.75);
                    if (Party[0].Inventory[index].Type == "Spell") {
                        StoreInventory.push(Party[0].Inventory[index]);
                        Party[0].Inventory.splice(index, 1);
                        localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
                    $("#Inventory").html("");
                    localStorage.setItem('_character', JSON.stringify(Character));
                    SellStore();
                    } else {
                    Party[0].Inventory.splice(index, 1);
                    $("#Inventory").html("");
                    localStorage.setItem('_character', JSON.stringify(Character));
                    localStorage.setItem('_Party', JSON.stringify(Party));
                    localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
                    SellStore();
                    };
                };
            });
        };
        };
        $("#Back").click(function () {
            $("#Inventory").html("");
            console.clear();
            localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
            StoreFront();
        });
    };
    
    
    
    
    
    
    function ShopkeeperSellerDialog() {
        var ShopkeeperDialog = [
            {
                Dialog: "That looks inticing"
            }
            , {
                Dialog: "Hmmm are you sure you want to part with that?"
            }
        , ]
        var DialogOption = ShopkeeperDialog[Math.floor(Math.random() * ShopkeeperDialog.length)];
        $("#Dialog").html("" + DialogOption.Dialog + "");
    }
    
    
    
    
    
    
    
    /*
    TODO:



    */
};