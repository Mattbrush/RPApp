/*~~~~~~~~~~~~~~~~~~~~ Creating Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.clear();
console.log("~~~Inventory~~~")
StartApp();
/*~~~~~~~~~~~~~~~~~~~~ --------------------- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function StartApp() {
    var Party = JSON.parse(localStorage.getItem('_Party'));
    console.log("Party :");
    console.log(Party);
    var PartyIndex = 0;
    
        $("#MessageHolder").remove();
    $("#EquipmentContainer").html("<h3 class='SubSubMainTitle animated rubberBand'> Equipment  </h3> <div class='MenuWrapper' id='CurrentPartyMember'></div>");
    // Place Current member initially  /* Starting with PLayer ! */
    PlaceCurrentMember();
    
       function PlaceCurrentMember() {
    
    var CurrentMember = Party[PartyIndex];
    var CurrentBelt = Party[PartyIndex].Equipment.Belt;
    var CurrentHead = Party[PartyIndex].Equipment.Head;
    var CurrentLeftHand = Party[PartyIndex].Equipment.LeftHand;
    var CurrentLegs = Party[PartyIndex].Equipment.Legs;
    var CurrentRightHand = Party[PartyIndex].Equipment.RightHand;
    var CurrentRing1 = Party[PartyIndex].Equipment.Ring1;
    var CurrentRing2 = Party[PartyIndex].Equipment.Ring2;
    var CurrentTorso = Party[PartyIndex].Equipment.Torso;
    // Current Head For Current Party Member
    if (CurrentHead == "") {
        CurrentHead = {
            Avatar: "./img/None.png"
            , Name: "None"
            , Weight: 0
            , Worth: 0
            , Class: "NoneEquipment"
        }
    }
    else {
        CurrentHead.Class = "ActiveEquipment"
    }
    // Current Torso For Current Party Member
    if (CurrentTorso == "") {
        CurrentTorso = {
            Avatar: "./img/None.png"
            , Name: "None"
            , Weight: 0
            , Worth: 0
            , Class: "NoneEquipment"
        }
    }
    else {
        CurrentTorso.Class = "ActiveEquipment"
    }
    // Current Left Arm For Current Party Member
    if (CurrentLeftHand == "") {
        CurrentLeftHand = {
            Avatar: "./img/None.png"
            , Name: "None"
            , Weight: 0
            , Worth: 0
            , Class: "NoneEquipment"
        }
    }
    else {
        CurrentLeftHand.Class = "ActiveEquipment"
    }
    // Current right Arm For Current Party Member
    if (CurrentRightHand == "") {
        CurrentRightHand = {
            Avatar: "./img/None.png"
            , Name: "None"
            , Weight: 0
            , Worth: 0
            , Class: "NoneEquipment"
        }
    }
    else {
        CurrentRightHand.Class = "ActiveEquipment"
    }
    // Current Belt  For Current Party Member
    if (CurrentBelt == "") {
        CurrentBelt = {
            Avatar: "./img/None.png"
            , Name: "None"
            , Weight: 0
            , Worth: 0
            , Class: "NoneEquipment"
        }
    }
    else {
        CurrentBelt.Class = "ActiveEquipment"
    }
    // Current Legs  For Current Party Member
    if (CurrentLegs == "") {
        CurrentLegs = {
            Avatar: "./img/None.png"
            , Name: "None"
            , Weight: 0
            , Worth: 0
            , Class: "NoneEquipment"
        }
    }
    else {
        CurrentLegs.Class = "ActiveEquipment"
    }
    // Current ring1  For Current Party Member
    if (CurrentRing1 == "") {
        CurrentRing1 = {
            Avatar: "./img/None.png"
            , Name: "None"
            , Weight: 0
            , Worth: 0
            , Class: "NoneEquipment"
        }
    }
    else {
        CurrentRing1.Class = "ActiveEquipment"
    }
    // Current Ring2  For Current Party Member
    if (CurrentRing2 == "") {
        CurrentRing2 = {
            Avatar: "./img/None.png"
            , Name: "None"
            , Weight: 0
            , Worth: 0
            , Class: "NoneEquipment"
        }
    }
    else {
        CurrentRing2.Class = "ActiveEquipment"
    }
    /*
    
    
                console.log(CurrentMember);
                console.log(CurrentBelt);
                console.log(CurrentHead);
                console.log(CurrentLeftHand);
                console.log(CurrentLegs);
                console.log(CurrentRightHand);
                console.log(CurrentRing1);
                console.log(CurrentRing2);
                console.log(CurrentTorso);
    
    
    */


 
        // Rewrites section of html for each player that is currently being picked
        $("#EquipmentContainer").css("border-color", "" + Party[PartyIndex].Color + "");
        $("#CurrentPartyMember").html("<span>" + Party[PartyIndex].Name + "</span><div id='Head' class='" + CurrentHead.Class + " Equipment'> Head  " + CurrentHead.Name + " </div><div id='Torso' class='" + CurrentTorso.Class + " Equipment'> Torso  " + CurrentTorso.Name + " </div><div id='LeftHand' class='" + CurrentLeftHand.Class + " Equipment'> Left Hand  " + CurrentLeftHand.Name + " </div><div id='RightHand' class='" + CurrentRightHand.Class + " Equipment'> Right Hand  " + CurrentRightHand.Name + " </div><div id='Belt' class='" + CurrentBelt.Class + " Equipment'> Belt  " + CurrentBelt.Name + " </div><div id='Legs' class='" + CurrentLegs.Class + " Equipment'> Legs  " + CurrentLegs.Name + " </div><br><div id='Ring1' class='" + CurrentRing1.Class + " Equipment'> Ring 1  " + CurrentRing1.Name + " </div><div id='Ring2' class='" + CurrentRing2.Class + " Equipment'> Ring 2  " + CurrentRing2.Name + " </div>");
        // Place buttons for Previous and next //
        $("#CurrentPartyMember").append("<br><div id='PartySwitcher'><button class='MenuButton' id='Prev'> Previous </button><button class='MenuButton' id='Next'> Next </button></div>");
        // Button functionality // Must be inside this function to work..
        $("#Next").click(function () {
            if (PartyIndex == Party.length - 1) {
                PartyIndex = 0;
                PlaceCurrentMember();
            }
            else {
                PartyIndex++
                PlaceCurrentMember();
            }
        });
        $("#Prev").click(function () {
            if (PartyIndex == 0) {
                PartyIndex = Party.length - 1;
                PlaceCurrentMember();
            }
            else {
                PartyIndex--
                PlaceCurrentMember();
            };
        });
        $(".Equipment").click(function () {
            var CurrentClickedEquipment = this.id
            if (Party[PartyIndex].Equipment[CurrentClickedEquipment] == "") {
                $("#EquipmentContainer").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
                $("#EquipmentContainer").prepend("<div id='EquipmentOverview' class='EquipmentOverview'> No Item Equipped <br><button id='Close' class='MenuButton2'> Close </button></div>");
                $("#Close").click(function () {
                    $("#EquipmentOverview").remove();
                    $("#OverlayBlanket").remove();
                });
                console.log(" Item has nothing equipped, No action can be taken.");
            }
            else {
                $("#EquipmentContainer").prepend("<div id='OverlayBlanket' class='OverlayBlanket'></div>");
                $("#EquipmentContainer").prepend("<div id='EquipmentOverview' class='EquipmentOverview'> " + Party[PartyIndex].Equipment[CurrentClickedEquipment].Name + "<br>Stats : <span id='EquipmentStats'></span><br><img src='" + Party[PartyIndex].Equipment[CurrentClickedEquipment].Avatar + "'></img><br><button id='Unequip' class='MenuButton'> Unequip </button> <br><button id='Close' class='MenuButton2'> Close </button></div>");
                if (Party[PartyIndex].Equipment[CurrentClickedEquipment].Stats.Attack) {
                    $("#EquipmentStats").append("<span> Attack : " + Party[PartyIndex].Equipment[CurrentClickedEquipment].Stats.Attack + "</span>");
                }
                $("#Unequip").click(function () {
                    // Clicking the unequip Button Functionality
                    $("#Unequip").addClass("MenuButtonDisabled");
                    $("#Close").addClass("MenuButtonDisabled");
                    $("#Unequip").prop('disabled', true);
                    $("#Close").prop('disabled', true);
                    $("#EquipmentOverview").append("<div class='MenuWrapper' id='AffordanceUnequip'><br> <span>Are you sure you would like to Unequip " + Party[PartyIndex].Equipment[CurrentClickedEquipment].Name + " from " + Party[PartyIndex].Name + " ? </span><br> <button id='Yes' class='MenuButton' > Yes </button> <button id='No' class='MenuButton' > No </button></div>");
                    $("#No").click(function () {
                        // No To UnEquip
                        $("#AffordanceUnequip").remove();
                        $("#Unequip").removeClass("MenuButtonDisabled");
                        $("#Close").removeClass("MenuButtonDisabled");
                        $("#Unequip").prop('disabled', false);
                        $("#Close").prop('disabled', false);
                    });
                    $("#Yes").click(function () {
                        // Yes To UnEquip
                        // Send item to Player's Inventory//
                        Party[0].Inventory.push(Party[PartyIndex].Equipment[CurrentClickedEquipment]);
                        console.log(Party[0].Inventory);
                        // Remove From PLayer's Equipment
                        Party[PartyIndex].Equipment[CurrentClickedEquipment] = "";
                        console.log(Party[PartyIndex].Equipment);
                        // Save GlobalVariables to LocalStorage
                        var Character = JSON.parse(localStorage.getItem('_character'));
                        Character = Party[0];
                        localStorage.setItem('_character', JSON.stringify(Character));
                        localStorage.setItem('_Party', JSON.stringify(Party));
                        // Refresh HMTL     
                        $("#EquipmentOverview").remove();
                        $("#OverlayBlanket").remove();
                        PlaceCurrentMember();
                    });
                });
                $("#Close").click(function () {
                    $("#EquipmentOverview").remove();
                    $("#OverlayBlanket").remove();
                });
                console.log(Party[PartyIndex].Equipment[CurrentClickedEquipment]);
            }
        }); // End of Clicking On Equipment Functionality
        // End Of PlaceCurrentMemberFucntion from here
    };
    // End of StartApp Function from beginning */
};
console.log("~~~~~~~~~~~~~~~~~~~")