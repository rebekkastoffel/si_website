$(function(){
    // srcoll to first section when clicking on scroll-button
    $('.scroll-button').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#first').offset().top
        },'slow');
    });

    // function to resize image when scrolling
    function resizeLogoOnScroll() {
        const distanceY = $(window).scrollTop(),
            shrinkOn = 200,
            logo = $('#logo');

        if (distanceY > shrinkOn) {
            logo.addClass("smaller");
        } else {
            logo.removeClass("smaller");
        }
    }
    // call resize-function on scroll-event
    $(window).scroll(resizeLogoOnScroll);

    /*
     // the following function could be used to autoplay the video on ios devices
     // needs a fix to avoid fullscreen play
     function playVideo() {
     const video = document.getElementById('bg-video');
     video.play()
     }
     $(window).scroll(resizeLogoOnScroll);
     */

    if(isMobile.any()) {
        //$("video").remove()
        $("video").css("display", "none")
    }
});
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};