/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }
    , // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        app.initialize();
    }
    , // Update DOM on a Received Event
    receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
     //   alert('Received Event: ' + id);
    }
};

/*~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function InitApp() {
    
    
    /* ~~~~~~~~~~~~~~ VERSION NUMBER ~~~~~~~~~~~~~~~~~~ */
    $("#Version").html("0.0.3 (GroundWork Update)");
    
    
    
    
    //// CREATE MAIN HTML FOR INDEX ////
    $("#App").html("<div id='MenuTitle'><h3 class='MainTitle animated  bounce'>The Great Canadian Adventure</h3></div> <div id='TitleMessageHolder'><h4 class='animated flipInX  Message' id='TitleMessage'></h4></div><div class=' MainMenuWrapper ' id='MenuWrapper'><button class='animated fadeIn MenuButton' id='NewGame'>New</button><br><button class='MenuButton animated fadeIn' id='Load'>Load Game</button><br><button class='MenuButton animated fadeIn' id='Options'>Options</button></div>")
    
    choosephrase();
    
    $("#Overlay").css("background-image","url(img/Canada.jpg)");
    $("#Overlay").css("opacity","1");

    
    

    
    
    //* Checking If There Is A User Account *//
    if (localStorage.getItem('_character')) {
        //* If YES *//
        var Character = JSON.parse(localStorage.getItem('_character'));
        console.log("Player Is Recognized")
        console.log(Character)
        $("#NewGame").html("Continue")
        $("#NewGame").attr("id","Continue");
        $("#MenuWrapper").append("<br><div id='ContinueInfo'><br><h4><span>Name : " + Character.Name + " " + Character.FamilyName+ "</span><br><span>Level : " + Character.Level + "</span><br><span>Date Created : " + Character.DateCreated + "</span></h4></div>")
        $("#MenuWrapper").css("border-color",""+Character.Color+"");
     //   $(".MenuButton").css("color","white");
     //   $(".MenuButton").css("background","#f14141");
    }
    else {
        //* If NO *//
        console.log("No Player Recognized, Starting New Game")
        
    }
    //* Button Functions *//

    $("#NewGame").click(function () {
        $("#App").load("./temp/CutSceneIntro.html");
    });
    $("#Continue").click(function () {
        $("#App").load("./temp/Victoria.html");
    });
    $("#Load").click(function () {
        $("#App").load("./temp/Load.html");
    });
    $("#Options").click(function () {
        $("#App").load("./temp/Options.html");
    });
    $("#Delete").click(function () {
        localStorage.clear();
        location.href = './index.html';
    });
}



$("#Overlay").css("background-image","url(img/Canada.jpg)");

    function choosephrase(){
  var Sayings = [{Phrase:` "Sorry!" `},{Phrase:` "How's it going eh !" `},{Phrase:` "My igloo is melting !!" ` },{Phrase:` "You just gotta go out and give'r" ` },{Phrase:` “A timmies double-double costs about a loonie, pretty good deal eh?” ` },{Phrase:` "Try our poutine !" ` },]  
  
  var Choice = Sayings[Math.floor(Math.random()*Sayings.length)];
    $("#TitleMessage").html(" "+Choice.Phrase+" ");
    
    
 /* var MenuPhraseChange = window.setInterval(function () {
        var Choice = Sayings[Math.floor(Math.random()*Sayings.length)];
    $("#TitleMessageHolder").html(" <h4 class='animated fadeInRight  Message' id='TitleMessage'> "+Choice.Phrase+" </h4> ");
    }, 10000);
    
    var MenuBump = window.setInterval(function () {
    $("#MenuTitle").html("<h3 class='MainTitle animated rubberBand'> ~ The Great Canadian Adventure ~ </h3>");
    }, 5000);
*/
        
        
        $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
        
        
};





/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
console.log("*~~~~~~~~~App Status~~~~~~~~~~~*");
InitApp();
console.log("*~~~~~~~~~---------------~~~~~~~~~~~*");