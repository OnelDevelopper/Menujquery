$(document).ready(function(){
    
    $(".menu a").hover(function(){
        $(this).css({"background-color": "white", "color": "black"});
        var sousMenu = $(this).next(".sous-menu");
        if(sousMenu.length > 0){
            sousMenu.stop().slideDown();
        }
    });

    $(".menu a").mouseleave(function () {
        $(this).css({"background-color": "blue", "color": "white"})
    })
    
    $('.sous-menu').mouseleave(function () {
        $(this).stop().slideUp();
        $(".menu a").css({"background-color": "blue", "color": "white"})
    });
})