!function(e){jQuery.scrollSpeed=function(n,o){var t=e(document),i=e(window),l=e("html, body"),r=i.height(),u=0,a=!1;return window.navigator.msPointerEnabled?!1:void i.on("mousewheel DOMMouseScroll",function(e){return a=!0,(e.originalEvent.wheelDeltaY<0||e.originalEvent.detail>0)&&(u=u+r>=t.height()?u:u+=n),(e.originalEvent.wheelDeltaY>0||e.originalEvent.detail<0)&&(u=0>=u?0:u-=n),l.stop().animate({scrollTop:u},o,"default",function(){a=!1}),!1}).on("scroll",function(){a||(u=i.scrollTop())}).on("resize",function(){r=i.height()})},jQuery.easing["default"]=function(e,n,o,t,i){return-t*((n=n/i-1)*n*n*n-1)+o}}(jQuery);

 $(document).ready(function(){ 
        $(window).scroll(function(){  // make a button in bottom fixed for jump upper //
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
	$(function() {  
    jQuery.scrollSpeed(100, 800);  // page mouse scrolling //
});


$(function() {
    //caches a jQuery object containing the header element
    var header = $(".anim-from-left");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('clearHeader').addClass("animated bounceInLeft");
        } else {
            header.removeClass("animated bounceInLeft").addClass('clearHeader');
        }
    });
	var header2 = $(".anim-from-right");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header2.removeClass('clearHeader').addClass("animated bounceInRight");
        } else {
            header2.removeClass("animated bounceInRight").addClass('clearHeader');
        }
    });
});

