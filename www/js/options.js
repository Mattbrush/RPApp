console.clear();
console.log('~~~~~~~~~~~Options~~~~~~~~~~~~~')
StartOptions();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~')

function StartOptions() {
     /*  window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}*/
    
    
    var Character = JSON.parse(localStorage.getItem('_character'));
    /////////// Which Options Do You Want? //////////
    $("#Message").html(" Which options would you like to change?");
    $("#OptionsList").append(`<span class='animated fadeInDown Option'>Game Text Speed : </span><select class='Input animated fadeInDown' id='TextSpeed'><option  value='4000'>Slow</option><option selected value='2000'>Medium</option><option  value='1500'>Fast</option></select>`);
    $("#Confirm").click(function () {
        if (Character == null) {
            $("#MessageHolder").html("<h4 class='Message animated pulse ' id='Message'></h4>");
            $("#Message").html(" You haven't made a character yet! ");
        }
        else {
            Character.PlayerTextSpeed = $("#TextSpeed").val();
            $("#MessageHolder").html("<h4 class='Message animated pulse ' id='Message'></h4>");
            $("#Message").html(" Changes saved.");
            localStorage.setItem('_character', JSON.stringify(Character));
            setTimeout(function () {
                $("#App").load("./index.html");
            }, Character.PlayerTextSpeed);
        };
    });
    $("#Back").click(function () {
        $("#App").load("./index.html");
    });
}