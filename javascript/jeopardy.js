$(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

// hide button after it's clicked function

$(document).ready(function(){
    $("#aa1").click(function(){
        $(this).hide();
    });
});


// function value
$(document).ready(function(){
    $("#a1").click(function(){
        $("#point").append().text("200");
    });
    $("#b1").click(function(){
        $("#point").append().text("-200");
    });
    $("#c1").click(function(){
        $("#point").append().text("-200");
    });

});