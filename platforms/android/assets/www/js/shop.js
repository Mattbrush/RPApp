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
StartStore();
$("#Logo").html("<img src='./img/SuperAwesomeSuperStoreOfCanadaLogo.png'>");

function StartStore() {
    console.log("~~~~~Starting StorePage!~~~~~~")
    var Character = JSON.parse(localStorage.getItem('_character'));
    //var Money = 0;
    if (localStorage.getItem('_StoreInventory')) {
        $("#Dialog").html("Welcome Back To My Store !");
        var StoreInventory = JSON.parse(localStorage.getItem('_StoreInventory'));
    }
    else {
        $("#Dialog").html("Welcome To My Store !");
        var StoreInventory = [

            {
                Name: "Health Potion"
                , IDName: "HealthPotion"
                , Avatar: "./img/HealthPotion.png"
                , Type: "Status"
                , Index: 0
                , Stats: {
                    Health: 50
                    , Mana: 0
                , }
                , Worth: 10
                , DropRate: 0.65
    }
            , {
                Name: "Super Health Potion"
                , IDName: "SuperHealthPotion"
                , Avatar: "./img/SuperHealthPotion.png"
                , Type: "Status"
                , Index: 0
                , Stats: {
                    Health: 250
                    , Mana: 0
                , }
                , Worth: 70
                , DropRate: 0.65
    }, {
                Name: "Mana Potion"
                , IDName: "ManaPotion"
                , Avatar: "./img/ManaPotion.png"
                , Type: "Status"
                , Index: 0
                , Stats: {
                    Health: 0
                    , Mana: 50
                , }
                , Worth: 10
                , DropRate: 0.65
    }
            , {
                Name: "Super Mana Potion"
                , IDName: "SuperManaPotion"
                , Avatar: "./img/SuperManaPotion.png"
                , Type: "Status"
                , Index: 0
                , Stats: {
                    Health: 0
                    , Mana: 250
                , }
                , Worth: 70
                , DropRate: 0.65
    }
        , {
                Name: "Freshwater Splash"
                , IDName: "FreshwaterSplash"
                , Avatar: "./img/FreshwaterSplash.png"
                , Type: "Spell"
                , Index: 0
                , Stats: {
                    Cost: 5
                    , Damage: 10
                    , Element: "Freshwater"
                }
                , Worth: 5
                , DropRate: 0.00
    },{
                Name: "Loaf Of Bread"
                , IDName: "LoafOfBread"
                , Avatar: "./img/LoafOfBread.png"
                , Type: "Food"
                , Index: 0
                , Stats: {
                    Health: 10
                , }
                , Worth: 10
                , DropRate: 0.65
    },



];
    };
    localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
    var StoreSellBack = [];
    setTimeout(function () {
        StoreFront();
    }, Character.PlayerTextSpeed);

    function StoreFront() {
        $("#Logo").html("<img src='./img/SuperAwesomeSuperStoreOfCanadaLogo.png'>");
        var Character = JSON.parse(localStorage.getItem('_character'));
        var StoreInventory = JSON.parse(localStorage.getItem('_StoreInventory'));
        $("#MessageHolder").html("<h4 class='animated pulse  Message' id='Dialog'> What can I help you with?</h4>");
        $("#Options").html("<br><button class='MenuButton2 animated fadeInDown' id='Buy'>Buy</button><button class='MenuButton2 animated fadeInDown' id='Sell'>Sell</button><button class='MenuButton2 animated fadeInDown' id='Leave'>Leave</button>");
        // BUYING Items Function
        $("#Buy").click(function () {
            FreshenStore(Character);
        });
        // SELLING Items Function
        $("#Sell").click(function () {
            SellStore(Character)
        });
        $("#Leave").click(function () {
            localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
            localStorage.setItem('_character', JSON.stringify(Character));
            audio.pause();
            audio.currentTime = 0;
            $("#App").load("./temp/Victoria.html")
        });
    }

    function FreshenStore(Character, Total) {
        $("#Logo").html("");
        $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> Check out what I have today !</h4>");
        console.log("~~~Adding Shop Items~~~");
        CheckWallet();
        var Character = JSON.parse(localStorage.getItem('_character'));
        var StoreInventory = JSON.parse(localStorage.getItem('_StoreInventory'));
        $("#Options").html("<br><div class='MenuWrapper animated pulse' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span class='Money'>$" + Character.Wallet.Total + "</span><br></div><button id='Back' class='animated fadeInDown MenuButton2'> Back </button>");
        console.log("StoreInventory : ");
        /////// Theme Button For Store to gelp with filtering /////
        $("#Inventory").html("<div class='MenuWrapper'><button class='MenuButton animated flipInY' id='StatusItems'>Status Items</button><button class='MenuButton animated flipInY' id='FoodItems'>Food Items</button><button class='MenuButton animated flipInY' id='MiscItems'>Miscellaneous Items</button><button class='MenuButton animated flipInY' id='SpellItems'>Spell Items</button></div>");
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
            $("#MessageHolder").html("<h4 class='animated tada  Message' id='Dialog'> You hungry? !</h4>");
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
            StoreSellBack.push(StoreInventory[index]);
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

    function SellStore(Character, Total) {
        $("#Logo").html("");
        $("#MessageHolder").html("<h4 class='animated rubberBand  Message' id='Dialog'> What do you want to offer me? </h4>");
        $("#Inventory").html("<h4 class='animated pulse  SubSubMainTitle' id='Dialog'> Your Inventory :  </h4>");
        CheckWallet();
        var Character = JSON.parse(localStorage.getItem('_character'));
        var StoreInventory = JSON.parse(localStorage.getItem('_StoreInventory'));
        $("#Options").html("<br><div class='MenuWrapper animated pulse' id='Wallet'> <h4 class='SubSubMainTitle'> Wallet : </h4><span class='Money'>$" + Character.Wallet.Total + "</span><br></div><br><button class='animated fadeInDown MenuButton2' id='Back'>Back</button></div>");
        for (i = 0; i < Character.Inventory.length; i++) {
         if (Character.Inventory[i].Type == "Key"){}else {
            
            console.log(Character.Inventory[i]);
            $("#Inventory").append("<br><input class='StoreSlot' type='image' src='" + Character.Inventory[i].Avatar + "'  id='" + i + "'>Name : " + Character.Inventory[i].Name + "<br> Type: " + Character.Inventory[i].Type + " <br> Price : " + Character.Inventory[i].Worth + "</input>");
            if (Character.Inventory[i].Type == "Status") {
                $("#" + i).css("border-color", "Red");
            }
            else if (Character.Inventory[i].Type == "Spell") {
                $("#" + i).css("border-color", "Blue");
            }
            else if (Character.Inventory[i].Type == "Food") {
                $("#" + i).css("border-color", "Orange");
            }
            else if (Character.Inventory[i].Type == "Misc") {
                $("#" + i).css("border-color", "Green");
            }
            $("#" + i + "").click(function () {
                var index = this.id
                ShopkeeperSellerDialog();
                $("#StatusMessageHolder").css("display", "block");
                $("#StatusMessageHolder").html("<h4 class='animated flipInX  StatusMessage' id='StatusMessage'>Are You Sure You Want To Sell " + Character.Inventory[this.id].Name + " For " + Character.Inventory[this.id].Worth + " ? <br><div class='MenuWrapper'><button class='MenuButton' id='Accept'> Yes </button><button class='MenuButton'  id='Deny'> No </button></div></h4>");
                $("#StatusMessageHolder").css("border-color", "" + Character.Color + "");
                $("#Accept").click(function () {
                    SellItem(Character, index);
                    $("#StatusMessageHolder").css("display", "none");
                    $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                })
                $("#Deny").click(function () {
                    $("#Inventory").html("");
                    $("#StatusMessageHolder").css("display", "none");
                    $("#StatusMessageHolder").html("<h4 class='animated flipOutX  Message' id='StatusMessgae'></h4>");
                    SellStore();
                })

                function SellItem(Character) {
                    $("#Dialog").html("Thank you so much for your patronage");
                    Sale.play();
                    Character.Wallet.Total = Character.Wallet.Total + Character.Inventory[index].Worth;
                    StoreSellBack.push(Character.Inventory[index]);
                    // Raise Value Of Item For Shop
                    Character.Inventory[index].Worth = Math.round(Character.Inventory[index].Worth / 0.75);
                    if (Character.Inventory[index].Type == "Spell") {
                        StoreInventory.push(Character.Inventory[index]);
                        Character.Inventory.splice(index, 1);
                        localStorage.setItem('_StoreInventory', JSON.stringify(StoreInventory));
                    $("#Inventory").html("");
                    localStorage.setItem('_character', JSON.stringify(Character));
                    SellStore();
                    } else {
                    Character.Inventory.splice(index, 1);
                    $("#Inventory").html("");
                    localStorage.setItem('_character', JSON.stringify(Character));
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