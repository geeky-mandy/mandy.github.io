$(document).ready(function () {
    $(".insert").hide();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll != 0) {
            $(".navbar-light").addClass("navbar-scroll");
        }
        if (scroll > 1200) {
            $(".insert").show();
            $(".upper-video").hide();
        }
        if (scroll == 0) {
            $(".insert").hide();
            $(".upper-video").show();
        }
        else {
            $(".navbar-light").removeClass("navbar-scroll");
        }
    })
    $(window).scroll(function () {
        var scrol = $(window).scrollTop();
        if (scrol > 1200) {
            $(".insert").show();
            $(".upper-video").hide();
        }
    })
});