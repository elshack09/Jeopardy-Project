// function for hint to show on modal tooltip
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

// hide button after it's clicked function

$(document).ready(function(){
    $("#aa1").click(function(){
        $(this).hide();
    });
    $("#aa2").click(function(){
        $(this).hide();
    });
    $("#aa3").click(function(){
        $(this).hide();
    });
    $("#aa4").click(function(){
        $(this).hide();
    });
    $("#bb1").click(function(){
        $(this).hide();
    });
    $("#bb2").click(function(){
        $(this).hide();
    });
    $("#bb3").click(function(){
        $(this).hide();
    });
    $("#bb4").click(function(){
        $(this).hide();
    });
    $("#cc1").click(function(){
        $(this).hide();
    });
    $("#cc2").click(function(){
        $(this).hide();
    });
    $("#cc3").click(function(){
        $(this).hide();
    });
    $("#cc4").click(function(){
        $(this).hide();
    });
    $("#dd1").click(function(){
        $(this).hide();
    });
    $("#dd2").click(function(){
        $(this).hide();
    });
     $("#dd3").click(function(){
        $(this).hide();
    });
    $("#dd4").click(function(){
        $(this).hide();
    });
    $("#ee1").click(function(){
        $(this).hide();
    });
    $("#ee2").click(function(){
        $(this).hide();
    });
    $("#ee3").click(function(){
        $(this).hide();
    });
    $("#ee4").click(function(){
        $(this).hide();
    });
});


// variables value

let a = 200;
let b = -200;
let c = 400;
let d = -400
let e = 600
let f = -600
let g = 800
let h = -800
let i = 1000;
let j = -1000;
let score = 0;
$(document).ready(function(){
    $("#a1").click(function(){
        $("#point").append().text(a);
        alertify.alert("Correct");
    });
    $("#a2").click(function(){
        $("#point").append().text(b);
    });
    $("#a3").click(function(){
        $("#point").append().text(b);
    });
    $("#b1").click(function(){
        $("#point").append().text(b);
    });
    $("#b2").click(function(){
        $("#point").append().text(e);
    });
    $("#b3").click(function(){
        $("#point").append().text(b);
    });
    $("#c1").click(function(){
        $("#point").append().text(a);
    });
    $("#c2").click(function(){
        $("#point").append().text(b);
    });
    $("#c3").click(function(){
        $("#point").append().text(b);
    });
    $("#d1").click(function(){
        $("#point").append().text(a);
    });
    $("#d2").click(function(){
        $("#point").append().text(b);
    });
    $("#d3").click(function(){
        $("#point").append().text(b);
    });

});

// currentvalue
// string to num
// parsInt
// new score