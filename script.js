$(document).ready(function(){
    $("#story1").mouseover(function(){
        $("#story1").css('color','red');
    });
    $("#story1").mouseout(function(){
        $("#story1").css('color','black');
    });
    $("#story1").click(function(){
        $("#content1").slideToggle("slow");
        $("#story1").css('color','red');
        $("#story1").css('font-size','20px');
        
    });
});

$(document).ready(function(){
    $("#story2").mouseover(function(){
        $("#story2").css('color','red');
    });
    $("#story2").mouseout(function(){
        $("#story2").css('color','black');
    });
    $("#story2").click(function(){
        $("#content2").slideToggle("slow");
        $("#story2").css('color','red');
        $("#story2").css('font-size','20px');
    });
});

$(document).ready(function(){
    $("#story3").mouseover(function(){
        $("#story3").css('color','red');
    });
    $("#story3").mouseout(function(){
        $("#story3").css('color','black');
    });
    $("#story3").click(function(){
        $("#content3").slideToggle("slow");
        $("#story3").css('font-size','20px');
    });
});

$(document).ready(function(){
    $("#main_div").slideDown(2000);
    $("#main_div").css('background-color','pink');
   
});

$(document).ready(function(){
    $("#story1").show(2300);
    
});

$(document).ready(function(){
    $("#story2").show(2300);
})

$(document).ready(function(){
    $("#story3").show(2300);
});
