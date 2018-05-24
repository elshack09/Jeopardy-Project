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
        alertify.alert("CORRECT").setHeader('You got this one...');
    });
    $("#a2").click(function(){
        $("#point").append().text(b);
        alertify.alert("WRONG").setHeader('You got this one...');
        
    });
    $("#a3").click(function(){
        $("#point").append().text(b);
        alertify.alert("WRONG").setHeader('You got this one...');
        
    });
    $("#b1").click(function(){
        $("#point").append().text(b);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#b2").click(function(){
        $("#point").append().text(a);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#b3").click(function(){
        $("#point").append().text(b);
        alertify.alert("WRONG").setHeader('You got this one...');
    });
    $("#c1").click(function(){
        $("#point").append().text(a);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#c2").click(function(){
        $("#point").append().text(b);
        alertify.alert("WRONG").setHeader('You got this one...');   
    });
    $("#c3").click(function(){
        $("#point").append().text(b);
        alertify.alert("WRONG").setHeader('You got this one...');
    });
    $("#d1").click(function(){
        $("#point").append().text(a);
        alertify.alert("CORRECT").setHeader('You got this one...');       
    });
    $("#d2").click(function(){
        $("#point").append().text(b);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#d3").click(function(){
        $("#point").append().text(b);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#e1").click(function(){
        $("#point").append().text(d);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#e2").click(function(){
        $("#point").append().text(d);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#e3").click(function(){
        $("#point").append().text(c);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#f1").click(function(){
        $("#point").append().text(c);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#f2").click(function(){
        $("#point").append().text(d);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#g1").click(function(){
        $("#point").append().text(c);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#g2").click(function(){
        $("#point").append().text(d);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#g3").click(function(){
        $("#point").append().text(d);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#h1").click(function(){
        $("#point").append().text(d);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#h2").click(function(){
        $("#point").append().text(c);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#h3").click(function(){
        $("#point").append().text(d);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#i1").click(function(){
        $("#point").append().text(e);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#i2").click(function(){
        $("#point").append().text(f);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#i3").click(function(){
        $("#point").append().text(f);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#j1").click(function(){
        $("#point").append().text(f);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#j2").click(function(){
        $("#point").append().text(f);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#j3").click(function(){
        $("#point").append().text(e);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#k1").click(function(){
        $("#point").append().text(e);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#k2").click(function(){
        $("#point").append().text(f);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#k3").click(function(){
        $("#point").append().text(f);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#l1").click(function(){
        $("#point").append().text(f);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#l2").click(function(){
        $("#point").append().text(e);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#l3").click(function(){
        $("#point").append().text(f);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#m1").click(function(){
        $("#point").append().text(g);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#m2").click(function(){
        $("#point").append().text(h);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#m3").click(function(){
        $("#point").append().text(h);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#n1").click(function(){
        $("#point").append().text(h);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    $("#n2").click(function(){
        $("#point").append().text(f);
        alertify.alert("CORRECT").setHeader('You got this one...');        
    });
    $("#n3").click(function(){
        $("#point").append().text(h);
        alertify.alert("WRONG").setHeader('You got this one...');        
    });
    
    
    
    
    

});

function overalScore(){
    score = a+b+c+d+e+f+g+h+i+j;
    document.getElementById("point").innerHTML= score;
}
// currentvalue
// string to num
// parsInt
// new score