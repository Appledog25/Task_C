$(document).ready(function () {
    //navigation bar toggle
    $('#navbar-toggler').click(function () {
        $('.navbar-collapse').slideToggle(400);
    });
    //navbar background change on scrolling
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos >= 0) {
            $('.navbar').addClass('cng-navbar');

        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });


    // product
    $('.product .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // Quora
    $('.quora-head').each(function () {
        $(this).click(function () {
            $(this).next().toggleClass('show-quora-content');
            let icon = $(this).children('span').children("i").attr('class');
            if (icon = "fas fa-plus") {
                $(this).children('span').html('<i class="fas fa-minus"></i>');

            }
            else {
                $(this).children('span').html('<i class="fas fa-plus"></i>');
            }
        });
    });
    // testimonials
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

});