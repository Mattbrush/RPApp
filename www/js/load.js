console.clear();
console.log('~~~~~~~~~~~Options~~~~~~~~~~~~~')
LoadGame();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')

function LoadGame() {
     /*  window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}*/
    
    
    var Character = JSON.parse(localStorage.getItem('_character'));
    /////////// Which Options Do You Want? //////////
    $("#Message").html(" Which save file would you like to load ? ");
    $("#OptionsList").append(`Things go here... `);

    $("#Back").click(function () {
        $("#App").load("./index.html");
    });
}