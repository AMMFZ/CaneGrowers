$(document).ready(function() {
    'use strict';
    //Nice_scroll
    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '8px',
        cursorborder: '1px solid #1abc9c',
        cursorborderradius: '10px'
    });
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    //Active Link When Click
    $('.navbar-default .navbar-nav>li>a').click(function(){
       $(this).parent().addClass('active').siblings().removeClass('active'); 
    });
    //Video_playing_When_click
    $('.stories .play img').click(function(){
       $(this).parent('.play').css('display','none').parent('.the_vid').find('video').attr({'controls':"on",'autoplay':"autoplay"});
    });
    //Arriw_top
    var scrollButton =$(".arrow-top");
    $(window).scroll(function (){ 
     if ($(this).scrollTop() >= 700) {
         scrollButton.css('left','8px');
     }else{
         scrollButton.css('left','-40px');
     }
   });
});