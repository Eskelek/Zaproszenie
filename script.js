$(function () {
    'use strict';
    var show = $("#light");
    var black = $(".black");
    
    $(show).click(function () {
        $(black).css({'margin-top': '-100vh', 'opacity': '0'});
    });
    
    var l1 = $("#1");
    var l2 = $("#2");
    var l3 = $("#3");
    var l4 = $("#4");
    var l5 = $("#5");
    var l6 = $("#6");
    var on = $("#on");
    var neon = $(".zaprosz");
    var light = $("#light");
    var l7 = $(".neo");
    var l8 = $(".miga");
    var plate = $("#plate")
    
    $(on).click(function () {
        $(l1).css({'animation': 'neon 2s 4', 'animation-fill-mode': 'forwards'});
        $(on).css({'animation': 'dangerButton 1.2s linear', 'animation-fill-mode': 'forwards'});
        $(plate).css({'animation': 'dangerButton 1.2s linear', 'animation-fill-mode': 'forwards'});
        $(l2).css({'animation': 'neon2 1s 4', 'animation-fill-mode': 'forwards'});
        $(l3).css({'animation': 'neon3 .3s 4', 'animation-fill-mode': 'forwards'});
        $(l4).css({'animation': 'neon4 .5s 4', 'animation-fill-mode': 'forwards'});
        $(l5).css({'animation': 'neon5 1.8s 4', 'animation-fill-mode': 'forwards'});
        $(l6).css({'animation': 'neon2 1.1s 4', 'animation-fill-mode': 'forwards'});
        $(l7).css({'animation': 'neon6 .1s 50', 'animation-fill-mode': 'forwards'});
        $(l8).css({'animation': 'neon7 .1s infinite', 'animation-fill-mode': 'forwards'});
        $(neon).css({'animation': 'neon .1s 10', 'animation-fill-mode': 'forwards'});
        $(light).css({'animation': 'neon5 .1s 10', 'animation-fill-mode': 'forwards', 'animation-delay': '9s'});
    });
    //koscioł
    var klik = $("#klik");
    var p = $(".p");
    $(klik).click(function(){
        if($('p.active').length > 0){
            $(p).slideUp();
            $(p).css({'display': 'none'});
            $(p).removeClass('active');
        } else {
            $(p).slideDown();
            $(p).css({'display': 'block'});
            $(p).addClass('active');
        }
    })
});