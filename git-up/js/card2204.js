$(function(){

    $(".eff_card").hover(function(){
        $(".img_main_card").hide()
        setTimeout(function() { 
            $(".hover_card").css({"opacity": "1","visibility": "visible","display": "inline-block"});
        },300);
    }, function(){
        $(".img_main_card").show()
        $(".hover_card").hide();
    });


    $(".hover_it").hover(function(){
        setTimeout(function() { 
            $(".before_hover").animate({"width": "50%"}, 'fast');
        }, 300);
    }, function(){
        $(".before_hover").animate({"width": "100%"},100);
    });

    // $(window).load(function(){
    //     $(".hover_it_class").animate({"width": "100%"});
    // });

    $(".header_part").hover(function(){
        setTimeout(function() { 
            $(".hover_it_class").animate({"width": "50%"}, 'fast')
            $(".gone").addClass(hover_sss);
        }, 300);
    }, function(){
        $(".hover_it_class").animate({"width": "100%"},100);
    });

    
});



// .animate({"width": "28%"}, 'slow')
// .css("z-index", "9999")
// .css("z-index", "9")