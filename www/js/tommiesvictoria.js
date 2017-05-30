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
    $("#MessageHolder").html("<h4 class='animated pulse  Message' id='Dialog'> Welcome to Tommie's </h4>");
    setTimeout(function () {
        StoreFront();
    }, 1250);

    function StoreFront() {
      //  $("#Logo").html("<img src='./img/tommieslogo.png'>");
        var Character = JSON.parse(localStorage.getItem('_character'));
        
        $("#Options").html("<br><button class='MenuButton2 animated fadeInDown' id='Buy'>Buy</button><button class='MenuButton2 animated fadeInDown' id='Leave'>Leave</button>");
        // BUYING Items Function
        $("#Buy").click(function () {
            FreshenStore(Character);
        });

        $("#Leave").click(function () {
            localStorage.setItem('_character', JSON.stringify(Character));
            audio.pause();
            audio.currentTime = 0;
            $("#App").load("./temp/ShoppingDistrictVictoria.html")
        });
    }

    function FreshenStore(Character, Total) {
        $("#Logo").html("");
        $("#Logo").html("<img class='width50' src='./img/TommiesLogo.png'>");
        $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> Try our new Icebergs today! </h4>");
        console.log("~~~Adding Shop Items~~~");
        CheckWallet();
        var Character = JSON.parse(localStorage.getItem('_character'));
        $("#Options").html("<br><div class='MenuWrapper animated pulse' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span class='Money'>$" + Character.Wallet.Total + "</span><br></div><button id='Back' class='animated fadeInDown MenuButton2'> Back </button>");
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
                if (Character.Wallet.Total < StoreInventory[i].Worth) {
                    // PLayer doesn't have enough money..
                    $("#" + i).css("border-color", "Grey");
                    $("#" + i).css("pointer-events", "none");
                }
                $("#" + i + "").click(function () {
                    var index = this.id
                    ShopkeeperPurchaseDialog();
                    $("#StatusMessageHolder").css("display", "block");
                    $("#StatusMessageHolder").html("<h4 class='animated flipInX  StatusMessage' id='StatusMessage'>Are You Sure You Want To Buy " + StoreInventory[this.id].Name + " For " + StoreInventory[this.id].Worth + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                    $("#StatusMessageHolder").css("border-color", "" + Character.Color + "");
                    $("#Accept").click(function () {
                        PurchaseItem(Character, index);
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
                FreshenStore(Character, Total)
            });
        });
        $("#FoodItems").click(function () {
            $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> You hungry?  </h4>");
            $("#Inventory").html("<div class='SubSubMainTitle animated flipInY' id='FoodItems'>Food Items</div>");
            var StoreItemCount = 0
            for (i = 0; i < StoreInventory.length; i++) {
                console.log(StoreInventory[i]);
                if (StoreInventory[i].Type == "Food") {
                    StoreItemCount++
                    $("#Inventory").append("<br><div><input type='image' src='" + StoreInventory[i].Avatar + "' class='StoreSlot' id='" + i + "' >Name : " + StoreInventory[i].Name + " <br>Type: " + StoreInventory[i].Type + "  <br>Price : $" + StoreInventory[i].Worth + "</input></div>");
                    $("#" + i).css("border-color", "Orange");
                }
                if (Character.Wallet.Total < StoreInventory[i].Worth) {
                    // PLayer doesn't have enough money..
                    $("#" + i).css("border-color", "Grey");
                    $("#" + i).css("pointer-events", "none");
                }
                $("#" + i + "").click(function () {
                    var index = this.id
                    ShopkeeperPurchaseDialog();
                    $("#StatusMessageHolder").css("display", "block");
                    $("#StatusMessageHolder").html("<h4 class='animated flipInX  StatusMessage' id='StatusMessage'>Are You Sure You Want To Buy " + StoreInventory[this.id].Name + " For " + StoreInventory[this.id].Worth + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                    $("#StatusMessageHolder").css("border-color", "" + Character.Color + "");
                    $("#Accept").click(function () {
                        PurchaseItem(Character, index);
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
                $("#Inventory").html("<div> Sorry, No Food Items Availabe </div>");
            }
            $("#Inventory").append("<br><button class='MenuButton' id='ItemsBack'> Back To Items </button>");
            $("#ItemsBack").click(function () {
                FreshenStore(Character, Total)
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
                if (Character.Wallet.Total < StoreInventory[i].Worth) {
                    // PLayer doesn't have enough money..
                    $("#" + i).css("border-color", "Grey");
                    $("#" + i).css("pointer-events", "none");
                }
                $("#" + i + "").click(function () {
                    var index = this.id
                    ShopkeeperPurchaseDialog();
                    $("#StatusMessageHolder").css("display", "block");
                    $("#StatusMessageHolder").html("<h4 class='animated flipInX  StatusMessage' id='StatusMessage'>Are You Sure You Want To Buy " + StoreInventory[this.id].Name + " For " + StoreInventory[this.id].Worth + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                    $("#StatusMessageHolder").css("border-color", "" + Character.Color + "");
                    $("#Accept").click(function () {
                        PurchaseItem(Character, index);
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
                FreshenStore(Character, Total)
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
                if (Character.Wallet.Total < StoreInventory[i].Worth) {
                    // PLayer doesn't have enough money..
                    $("#" + i).css("border-color", "Grey");
                    $("#" + i).css("pointer-events", "none");
                }
                $("#" + i + "").click(function () {
                    var index = this.id
                    ShopkeeperPurchaseDialog();
                    $("#StatusMessageHolder").css("display", "block");
                    $("#StatusMessageHolder").html("<h4 class='animated flipInX  StatusMessage' id='StatusMessage'>Are You Sure You Want To Buy " + StoreInventory[this.id].Name + " For " + StoreInventory[this.id].Worth + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                    $("#StatusMessageHolder").css("border-color", "" + Character.Color + "");
                    $("#Accept").click(function () {
                        PurchaseItem(Character, index);
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
                FreshenStore(Character, Total)
            });
        });
        function PurchaseItem(Character, index) {
            Sale.play();
            $("#Dialog").html("Thank you so much for your patronage");
            Character.Wallet.Total = Character.Wallet.Total - StoreInventory[index].Worth;
          //  StoreSellBack.push(StoreInventory[index]);
            // Lowers Value Of Item For Player
            var Orignalworth = StoreInventory[index].Worth;
            StoreInventory[index].Worth = Math.round(StoreInventory[index].Worth * 0.75);
            Character.Inventory.push(StoreInventory[index]);
            console.log(StoreInventory[index].Worth)
            RefreshMoney();
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
        var Character = JSON.parse(localStorage.getItem('_character'));
        console.log("~~~Configuring Wallet~~~");
        console.log("Wallet : ");
        console.log(Character.Wallet);
        localStorage.setItem('_character', JSON.stringify(Character));
        console.log("~~~~~~~~~~~~~~~~~~~")
    };

    function RefreshMoney() {
        $("#Total").html("" + Character.Wallet.Total + "");
    };
    /*
    TODO:



    */
};