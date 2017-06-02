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
                Name: "Sprinkled Doughnut"
                , IDName: "SprinkledDoughnut"
                , Avatar: "./img/SprinkledDoughnut.png"
                , Type: "Food"
                , Index: 0
        ,Weight: 2
                , Stats: {
                    Health: 5
                , }
                , Worth: 2
                , DropRate: 0.65
    },
     {
                Name: "Apple"
                , IDName: "Apple"
                , Avatar: "./img/Apple.png"
                , Type: "Food"
                , Index: 0
         ,Weight: 2
                , Stats: {
                    Health: 10
                , }
                , Worth: 4
                , DropRate: 0.65
    },
    {
                Name: "Kale Smoothie"
                , IDName: "KaleSmoothie"
                , Avatar: "./img/KaleSmoothie.png"
                , Type: "Food"
                , Index: 0
        ,Weight: 5
                , Stats: {
                    Health: 35
                , }
                , Worth: 7
                , DropRate: 0.65
    },
    
]


///////////////////











StartStore();
$("#Logo").html("<img class='width50' src='./img/TommiesLogo.png'>");
$("#Overlay").css("background-image","url(img/TommiesInside.jpg)");

function StartStore() {
    console.log("~~~~~Starting StorePage!~~~~~~")
    var Character = JSON.parse(localStorage.getItem('_character'));
    var Party = JSON.parse(localStorage.getItem('_Party'));
    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='Dialog'> Welcome to Tommie's </h4>");
    
    if (Party[0].Triggers.Victoria5 == true){
        /* Back to regular store */
      setTimeout(function () {
        StoreFront();
    }, 1500);  
    } else if (Party[0].Triggers.Victoria4 == true){
        /* Ben gets you a drink! */
      setTimeout(function () {
        StoreStory1();
    }, 1500);  
    } else {
        // Regular storefront
        setTimeout(function () {
        StoreBusy();
    }, 1250);
    };
    
    function StoreBusy() {
    
         $("#Options").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
       $("#Options").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
         $("#AlertPlayerMessage").html("<div class='animated bounceIn AlertPlayerText'> Someone has spilled coffee all over the floor to the entrance.Maybe you should come back later? </div><br><button class='MenuButton2 animated fadeInDown' id='Leave'>Leave</button>");
          
          
           $("#Leave").click(function () {
            localStorage.setItem('_character', JSON.stringify(Character));
            audio.pause();
            audio.currentTime = 0;
            $("#App").load("./temp/ShoppingDistrictVictoria.html")
        });
    
    
    };


    function StoreStory1() {
    
    
    
          
           $("#Options").html("<div id='Alert' class='animated bounceIn AlertPlayerMessage'><span class='AlertPlayerText'> The smell of coffee and donuts fills the air.. You want to eat everything !  </span><br></div><br>");
        $("#App").prepend("<div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'><button class='DialogNextButton animated flipInX' id='Continue'> Continue </button></div>")
        
        /* Add dialog from Ben here */
       // setTimeout(function () {
          $("#Continue").click(function(){
              $("#Alert").remove();
              $("#ContinueMessageHolder").remove();
          
           $("#App").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
        $("#App").prepend("<div id='CharacterAvatar' class='Fixed CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
         $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben : 'Wow, You look hungry... Here I will grab us some sandwiches and coffee! '</div>");
      $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Coffee'> Thank you </button>");
            
            
            
            $("#Coffee").click(function(){
                $("#ContinueMessageHolder").remove();
                $("#CharacterAvatar").removeClass("fadeIn");
                $("#CharacterAvatar").addClass("fadeOut");
                
                 setTimeout(function () {
                $("#CharacterAvatar").remove();
                $("#OverlayBlanket").remove();
                $("#Logo").remove();
                $("#MessageHolder").remove();
                $("#Options").remove();
                    
                $("#App").append("<div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>");         
                $("#App").prepend("<div id='Alert' class='AlertPlayerMessage animated flipInX '><span class='AlertPlayerText'> You and Ben enjoy a nice meal together ! </span><br><input class='BattleItem' type='image' src='./img/SprinkledDoughnut.png'></input></div>");   
                      setTimeout(function () {
                 $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Next </button>");
                          
                          $("#Next").click(function(){
                              $("#Alert").html("<span class='AlertPlayerText'> Your health is replenished from eating food. </span><br><input class='BattleItem' type='image' src='./img/KaleSmoothie.png'></input>");
                              $("#ContinueMessageHolder").html("<button class='DialogNextButton animated flipInX' id='Next2'> Next </button>");
                              Party[0].Stats[0].Value = Party[0].Stats[6].Value;
                              $("#Next2").click(function(){
                                  $("#Alert").remove(); 
                                  $("#ContinueMessageHolder").remove();
                                  BenDialog();
                              });
                          });
                     }, 1000); ;
                
                

                }, 2000); ;
                
            });
            
             });
          
          function BenDialog(){
              
              
                 $("#App").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
        $("#App").prepend("<div id='CharacterAvatar' class='Fixed CharacterAvatar animated fadeIn'></div><div class='MenuWrapperStatusMessage' id='ContinueMessageHolder'></div>")
         $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='./img/BenAvatar.png'><div id='StatusMessageHolder'><br>");
     $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated fadeIn'> Ben :  I'm stuffed, That was delicious! '</div>");
              
               $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");     
              
              
              ClickDialog();
              
              
              
              
              
              
              
         
     // Set Dialog Back to Zero !
    var DialogOrderNumber = 0;

    function ClickDialog() {
        DialogOrder = [
            
            {
                Name: " Ben "
                , Dialog: " But after a fight like that, it was a much needed meal! "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " By the way...  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " You fought really well there!  if I'm being honest, I could learn a lot from you!  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " There are a lot of animals out there being infected by this stuff, It's not going to get any better unless someone does something about it.. "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: "I guess I'm trying to say...  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " 'Do you want to work together on this and save this city?' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept1'> Heck Yes ! </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " It isn't going to be easy, but with you and I working together, I know we can do it!  "
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " ' So you don't mind if I join you and fight the infected animals alongside you? ' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept2'> *Invite Ben To Party* </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " Let's make this city a better place!"
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " I'm thinking we should probably go to the Canadian Tire around here and see if we can buy some <strong>Weapons</strong> or <strong>Armour</strong> to help us fight!"
                , Button: "No"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , },{
                Name: " Ben "
                , Dialog: " ' What do you say ? ' <div id='DialogOptions'><button class='MenuButton animated flipInY' id='Accept3'> * Head To Shopping District * </button>  "
                , Button: "Yes"
                , ChangeCharacter: "No"
                , Avatar: "./img/BenAvatar.png"
                , Sound: "No"
                , SoundControl: "None"
                , Music: "No"
                , MusicControl: "None"
            , }
           
         ]
        $("#Next").click(function () {
            var DialogSelect = DialogOrder[DialogOrderNumber]
            var Dialog = " " + DialogSelect.Name + " : ' " + DialogSelect.Dialog + "  ' ";
            console.log('Click');
            console.log(Dialog)
            console.log(DialogOrderNumber);
            DialogOrderNumber++
            if (DialogSelect.Button == "No") {
  
                if (DialogSelect.ChangeCharacter == "No") {
                    $("#Avatar").attr("src", " " + DialogSelect.Avatar + " ")
                    $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'>" + Dialog + "<br></div>");
                }
                else {
                     $("#CharacterAvatar").html("<img class='Avatar animated fadeIn' id='Avatar' src='" + DialogSelect.Avatar + "'><div id='StatusMessageHolder'><br>");
                     $("#ContinueMessageHolder").html("");
                    setTimeout(function () {
                        $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'>" + Dialog + "<br></div>");
                        $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                         ClickDialog();
                    }, 1000);
                }
                if (DialogSelect.Music != "No" || DialogSelect.Sound != "No") {
                    if (DialogSelect.MusicControl == "Stop") {
                        DialogSelect.Music.pause();
                        DialogSelect.Music.currentTime = 0;
                    }
                    else if (DialogSelect.SoundControl == "Stop") {
                        DialogSelect.Sound.pause();
                        DialogSelect.Sound.currentTime = 0;
                    };
                    if (DialogSelect.MusicControl == "Play") {
                        console.log("Playing " + DialogSelect.Music);
                        DialogSelect.Music.play();
                    }
                    else if (DialogSelect.SoundControl == "Play") {
                        console.log("Playing " + DialogSelect.Sound);
                        DialogSelect.Sound.play();
                    }
                };
            }
            else {

                Dialog = " " + DialogSelect.Name + " :  " + DialogSelect.Dialog + "   ";
                $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper '>" + Dialog + "</div>");
                DialogOption(DialogSelect);
                $("#ContinueMessageHolder").html("");
            }
        });
    };
     


        function DialogOption(DialogSelect) {
  
    $("#Accept1").click(function () {
                  $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' Awesome! I knew I picked the right person for the job!  '</div>");
                $("#ContinueMessageHolder").append("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                });
            
            $("#Accept2").click(function () {
                $("#ContinueMessageHolder").remove();
                $("#CharacterAvatar").removeClass("fadeIn");
                $("#CharacterAvatar").addClass("fadeOut");
                 $("#App").prepend("<div id='Alert' class='AlertPlayerMessage'><div  id='StatusMessage' class='AlertPlayerText animated flipInX'><img class='ObtainedItem' src='./img/BenAvatar.png'></img><br> Ben has joined your party ! </div></div>");
                
                
                //  JOINING BEN TO THE PARTY 
                
                   var Party = JSON.parse(localStorage.getItem('_Party'));
                var Character = JSON.parse(localStorage.getItem('_character'));
                var Ben = {
                    Name: "Ben"
                    , FamilyName: "Wengel"
                    , Sex: "Male"
                    , Color: "Green"
                    , Level: 1
                    , Strength1: "Saltwater"
                    , Strength2: "Tundra"
                    , Weakness1: "Grassland"
                    , Weakness2: "Mountain"
                    , Stats: [{
                            Name: "Health"
                            , Value: 15
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
                            , Value: 0.85
            }
        , {
                            Name: "FullHealth"
                            , Value: 15
                        , }
                   , {
                            Name: "Mana"
                            , Value: 5
                        , }
                  , {
                            Name: "FullMana"
                            , Value: 5
                        , }
                 ]
                    , Weight: Math.round((2 / 2) * 25)
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
                                , Damage: 10
                                , Element: "Boreal Forest"
                            }
                            , Worth: 5
                            , DropRate: 0.00
    }
        ]
                    , Moves: [
                        {
                            Name: "Chop"
                            , Damage: 4
                            , Cost: 0
                            , Type: "Physical"
                        }
                        , {
                            Name: "Slice"
                            , Damage: 7
                            , Cost: 2
                            , Type: "Physical"
                        }
        , ]
                    , BattleStats: {
                        AttackStrength: ""
                        , DefenseStrength: ""
                    }
                    , Experience: {
                        Total: 0
                        , ToNextLevel: 25
                        , SkillPoints: 0
                    , }
                };
                /* Add in BattleStats */
                PartyMember = Ben;
                var AttackStrength = 0;
                var DefenseStrength = 0
                if (PartyMember.Equipment.Head.Stats == undefined) {
                    console.log("No Headwear On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Head.Stats.Defense
                };
                if (PartyMember.Equipment.Torso.Stats == undefined) {
                    console.log("No Torso On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Torso.Stats.Defense
                }
                if (PartyMember.Equipment.Belt.Stats == undefined) {
                    console.log("No Belt On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Belt.Stats.Defense
                }
                if (PartyMember.Equipment.Legs.Stats == undefined) {
                    console.log("No Legs On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Legs.Stats.Defense
                }
                if (PartyMember.Equipment.Ring1.Stats == undefined) {
                    console.log("No Ring1 On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Ring1.Stats.Defense
                }
                if (PartyMember.Equipment.Ring2.Stats == undefined) {
                    console.log("No Ring2 On Character");
                }
                else {
                    DefenseStrength = DefenseStrength + PartyMember.Equipment.Ring2.Stats.Defense
                }
                if (PartyMember.Equipment.RightHand.Stats == undefined) {
                    console.log(" No Item Equipped In Right Hand")
                }
                else {
                    if (PartyMember.Equipment.RightHand.Stats.Attack != undefined) {
                        console.log("No RightHand Defense For  Character");
                        AttackStrength = AttackStrength + PartyMember.Equipment.RightHand.Stats.Attack
                    }
                    else if (PartyMember.Equipment.RightHand.Stats.Defense != undefined) {
                        console.log("No RightHand Attack For  Character");
                        DefenseStrength = DefenseStrength + PartyMember.Equipment.RightHand.Stats.Defense
                    }
                }
                if (PartyMember.Equipment.LeftHand.Stats == undefined) {
                    console.log(" No Item Equipped In LeftHand ")
                }
                else {
                    if (PartyMember.Equipment.LeftHand.Stats.Attack != undefined) {
                        console.log("No LeftHand Defense For  Character");
                        AttackStrength = AttackStrength + PartyMember.Equipment.LeftHand.Stats.Attack
                    }
                    else if (PartyMember.Equipment.LeftHand.Stats.Defense != undefined) {
                        console.log("No LeftHand Attack For  Character");
                        DefenseStrength = DefenseStrength + PartyMember.Equipment.LeftHand.Stats.Defense
                    }
                }
                if (DefenseStrength == 0) {
                    DefenseStrength = 1;
                }
                if (AttackStrength == 0) {
                    AttackStrength = 1;
                }
                if (PartyMember.Stats[2].Value < 1) {
                    DefenseStrength = Math.round((1) * DefenseStrength);
                }
                else {
                    DefenseStrength = Math.round((PartyMember.Stats[2].Value + .45) * DefenseStrength);
                };
                if (PartyMember.Stats[1].Value < 1) {
                    AttackStrength = Math.round((1) * AttackStrength);
                }
                else {
                    AttackStrength = Math.round((PartyMember.Stats[1].Value + .25) * AttackStrength);
                };
                Ben.BattleStats.AttackStrength = AttackStrength;
                Ben.BattleStats.DefenseStrength = DefenseStrength;
                //////////////////////
                /* finished With Character Creation MOVING ON IN STORY */
                Party[0].Triggers.Victoria5 = true;
                Party.push(Ben);
                localStorage.setItem('_character', JSON.stringify(Character));
                localStorage.setItem('_Party', JSON.stringify(Party));
                
                
                // DONE JOINING BEN TO THE PARTY 
                
                

                
                
                
                setTimeout(function () {
                  //  $("#Alert").animateCss("flipInX");
                $("#Alert").html("<div class='animated flipInX AlertPlayerText'><br> Ben is a Forester who enjoys the <strong>Boreal Forest</strong> most of all. He is <strong>Smart</strong>,  <strong>Charming</strong> and  <strong>Brave</strong>. He will make a great addition to the team ! </div>");
                    
                    $("#App").append("<div id='ContinueMessageHolder' class='MenuWrapperStatusMessage' ><button class='DialogNextButton animated flipInX' id='Continue'> Continue </button></div>");
                    
                    
                    
                    
                    $("#Continue").click(function () {
                        $("#Alert").remove();
                         $("#CharacterAvatar").removeClass("fadeOut");
                $("#CharacterAvatar").addClass("fadeIn");
                          $("#StatusMessageHolder").html("<div  id='StatusMessage' class='DialogWrapper animated flipInX'> "+DialogSelect.Name+" : ' I'm so excited for this!  '</div>");
                $("#ContinueMessageHolder").html("<button class='DialogNextButton animated flipInX' id='Next'> Continue </button>");
                ClickDialog();
                    });
                    
                    
                    
                    
                    
                  }, 4000);
                });
            
            
            
$("#Accept3").click(function () {
                  $("#App").load("./temp/ShoppingDistrictVictoria.html")
                });

          
        
        //////////////////////////////
          
      };
    
     };
    
    
    
      };
    
    

    function StoreFront() {
      //  $("#Logo").html("<img src='./img/tommieslogo.png'>");
 
        var Character = JSON.parse(localStorage.getItem('_character'));
        var Party = JSON.parse(localStorage.getItem('_Party'));
        
        CheckWallet();
         console.log(Party[0].Wallet);
        
        
        $("#Options").html("<br><button class='MenuButton2 animated fadeInDown' id='Buy'>Buy</button><button class='MenuButton2 animated fadeInDown' id='Leave'>Leave</button>");
        // BUYING Items Function
        $("#Buy").click(function () {
            FreshenStore();
        });

        $("#Leave").click(function () {
            localStorage.setItem('_character', JSON.stringify(Character));
            audio.pause();
            audio.currentTime = 0;
            $("#App").load("./temp/ShoppingDistrictVictoria.html")
        });
    }

    function FreshenStore(Total) {
        $("#Logo").html("");
        $("#Logo").html("<img class='width50' src='./img/TommiesLogo.png'>");
        $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> Try our new Icebergs today! </h4>");
        console.log("~~~Adding Shop Items~~~");
        CheckWallet();
        //var Character = JSON.parse(localStorage.getItem('_character'));
        var Party = JSON.parse(localStorage.getItem('_Party'));
        $("#Options").html("<br><div class='MenuWrapper animated pulse' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span id='WalletTotal' class='Money'>$" + Party[0].Wallet.Total + "</span><br></div><button id='Back' class='animated fadeInDown MenuButton2'> Back </button>");
        console.log("StoreInventory : ");
        /////// Theme Button For Store to gelp with filtering /////
        $("#Inventory").html("<div class='MenuWrapper'><button class='MenuButton animated flipInY' id='FoodItems'>Food Items</button></div>");
        $("#StatusItems").click(function () {
            $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> Want more Health or Mana? !</h4>");
            $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='StatusItems'>Status Items</div>");
            var StoreItemCount = 0
            for (i = 0; i < StoreInventory.length; i++) {
                console.log(StoreInventory[i]);
                if (StoreInventory[i].Type == "Status") {
                    StoreItemCount++
                    $("#Inventory").append("<br><div><input type='image' src='" + StoreInventory[i].Avatar + "' class='StoreSlot' id='" + i + "' >Name : " + StoreInventory[i].Name + " <br>Type: " + StoreInventory[i].Type + "  <br>Price : $" + StoreInventory[i].Worth + "</input></div>");
                    $("#" + i).css("border-color", "Red");
                }
                if (Party[0].Wallet.Total < StoreInventory[i].Worth) {
                    // PLayer doesn't have enough money..
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
        $("#FoodItems").click(function () {
            $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> You hungry?  </h4>");
            $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='FoodItems'>Food Items</div><div id='InventoryContainer' class='StoreInventory'></div>");
            var StoreItemCount = 0
            for (i = 0; i < StoreInventory.length; i++) {
                console.log(StoreInventory[i]);
                if (StoreInventory[i].Type == "Food") {
                    StoreItemCount++
                    $("#InventoryContainer").append("<div class='BattleItemSlot'><input type='image' src='" + StoreInventory[i].Avatar + "' class='BattleItem' id='" + i + "' ><br> " + StoreInventory[i].Name + " <br>Price : $" + StoreInventory[i].Worth + "</input></div>");
                    $("#" + i).css("border-color", "Orange");
                }
                if (Party[0].Wallet.Total < StoreInventory[i].Worth) {
                    // PLayer doesn't have enough money..
                    $("#" + i).css("border-color", "Grey");
                    $("#" + i).css("pointer-events", "none");
                }
                $("#" + i + "").click(function () {
                     $("#Store").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
                    $("#Store").prepend("<div id='AlertPlayerMessage' class='AlertPlayerMessage'></div>");
                    var index = this.id
                    ShopkeeperPurchaseDialog();
                    $("#StatusMessageHolder").css("display", "block");
                    $("#AlertPlayerMessage").html("<div class='AlertPlayerText'><img class='Width75' src='"+StoreInventory[this.id].Avatar+"'></img><br> <span class='animated flipInY '>" + StoreInventory[this.id].Name + " </span><br> <span class='animated flipInY '>$ " + StoreInventory[this.id].Worth + "</span> <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Purchase </button><button class='MenuButton'  id='Deny'> Back </button></div>");
                    $("#StatusMessageHolder").css("border-color", "" + Party[0].Color + "");
                    $("#Accept").click(function () {
                        $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                        PurchaseItem( index);
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                    })
                    $("#Deny").click(function () {
                        $("#OverlayBlanket").remove();
                        $("#AlertPlayerMessage").remove();
                        $("#Inventory").html("");
                        $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                        $("#StatusMessageHolder").css("display", "none");
                        FreshenStore();
                    })
                });
            };
            if (StoreItemCount == 0) {
                $("#Inventory").html("<div> Sorry, No Food Items Availabe </div>");
            }
            $("#Inventory").append("<br><button class='MenuButton' id='ItemsBack'> Back To Items </button>");
            $("#ItemsBack").click(function () {
                FreshenStore(Total)
            });
        });
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
                    // PLayer doesn't have enough money..
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
        $("#SpellItems").click(function () {
            $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> You want to do some magic? </h4>");
            $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='MiscItems'>Spell Items</div>");
            var StoreItemCount = 0
            for (i = 0; i < StoreInventory.length; i++) {
                console.log(StoreInventory[i]);
                if (StoreInventory[i].Type == "Spell") {
                    StoreItemCount++
                    $("#Inventory").append("<br><div><input type='image' src='" + StoreInventory[i].Avatar + "' class='StoreSlot' id='" + i + "' >Name : " + StoreInventory[i].Name + " <br>Type: " + StoreInventory[i].Type + "  <br>Price : $" + StoreInventory[i].Worth + "</input></div>");
                    $("#" + i).css("border-color", "Blue");
                }
                if (Party[0].Wallet.Total < StoreInventory[i].Worth) {
                    // PLayer doesn't have enough money..
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
                $("#Inventory").html("<div> Sorry, No Spell Items Availabe </div>");
            }
            $("#Inventory").append("<br><button class='MenuButton' id='ItemsBack'> Back To Items </button>");
            $("#ItemsBack").click(function () {
                FreshenStore( Total)
            });
        });
        function PurchaseItem(index) {
            var Party = JSON.parse(localStorage.getItem('_Party'));
            Sale.play();
            $("#Dialog").html("Thank you so much for your patronage");
            Party[0].Wallet.Total = Party[0].Wallet.Total - StoreInventory[index].Worth;
          //  StoreSellBack.push(StoreInventory[index]);
            // Lowers Value Of Item For Player
            var Orignalworth = StoreInventory[index].Worth;
            StoreInventory[index].Worth = Math.round(StoreInventory[index].Worth * 0.75);
            Party[0].Inventory.push(StoreInventory[index]);
        //    Party[0] = Character;
            RefreshMoney();
            $("#Inventory").html("");
            
           // localStorage.setItem('_character', JSON.stringify(Character));
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
        console.log("~~~~~~~~~~~~~~~");
        $("#Back").click(function () {
            $("#Inventory").html("");
            console.clear();
            localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
            StoreFront();
        });
    };


    function ShopkeeperPurchaseDialog() {
        var ShopkeeperDialog = [
            {
                Dialog: "That is a fine item indeed!"
            }
            , {
                Dialog: "Are you sure about this one?"
            }
        , ]
        var DialogOption = ShopkeeperDialog[Math.floor(Math.random() * ShopkeeperDialog.length)];
        $("#MessageHolder").html("<h4 class='animated pulse  Message' id='Dialog'> " + DialogOption.Dialog + " </h4>");
    }



    function CheckWallet() {
    //    var Character = JSON.parse(localStorage.getItem('_character'));
        var Party = JSON.parse(localStorage.getItem('_Party'));
        console.log("~~~Configuring Wallet~~~");
        console.log("Wallet : ");//
    //     Party[0].Wallet.Total = Party[0].Wallet.Total + 10;
        $("#Total").html(""+Party[0].Wallet.Total+"");
        console.log(Party[0].Wallet);
     //   localStorage.setItem('_character', JSON.stringify(Character));
        localStorage.setItem('_Party', JSON.stringify(Party));
        console.log("~~~~~~~~~~~~~~~~~~~")
    };

    function RefreshMoney() {
        $("#Total").html("" + Party[0].Wallet.Total + "");
    };
    /*
    TODO:



    */
};