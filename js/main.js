new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    fixedElements: '.menu, .m_gnb_open',
    controlArrows: false,
    slidesNavigation: true,
    navigation: true,
    scrollOverflow: true,
    anchors: ['firstPage', 'secondPage', '3rdPage', '4th', '5th', '6th'],
    afterLoad: function (origin, destination, direction) {
        if (destination.index == 0) {
            $("#section1").addClass("on");
        } else if (origin && origin.index == 0) {
            $("#section1").removeClass("on");
        }
        if (destination.index == 1) {
            $(".menu").addClass("on");
        } else if (origin && origin.index == 1) {
            $(".menu").removeClass("on");
        }
        if (destination.index == 2) {
            $("#section3").addClass("on");
        } else if (origin && origin.index == 2) {
            $("#section3").removeClass("on");
        }

        if (destination.index == 3) {
            $("#section4").addClass("on");
        } else if (origin && origin.index == 3) {
            $("#section4").removeClass("on");
        }

        if (destination.index == 4) {
            $("#section5").addClass("on");
        } else if (origin && origin.index == 4) {
            $("#section5").removeClass("on");
        }

        if (destination.index == 5) {
            $("#section6").addClass("on");
        } else if (origin && origin.index == 5) {
            $("#section6").removeClass("on");
        }

        if (destination.index == 6) {
            $("#section7").addClass("on");
        } else if (origin && origin.index == 6) {
            $("#section7").removeClass("on");
        }

        if (destination.index == 7) {
            $("#section8").addClass("on");
        } else if (origin && origin.index == 7) {
            $("#section8").removeClass("on");
        }

        if ($(window).width() < 900) {
            $('.header-menu').addClass('on');
        } else {
            $('.header-menu').removeClass('on');
        }

    }
});

//methods
fullpage_api.setAllowScrolling(true);

$(".m_gnb_open").on("click", function () {
    //$("#nav").show();
    $(".menu").slideDown();
});

$(".header-menu.on li").on("click", function () {
    //$("#nav").hide();
    $(".menu").slideUp();
});
