$(document).ready(function () {

    var hi = $('.head button.new');
    var h = $('.head button.pop');
    var v = $('.head button.feat');

    $(hi).click(function () {

        $('.border .popular,.border .feature').addClass('hide');
        $('.border .newest').removeClass('hide');



    });
    $(h).click(function () {

        $('.border .newest,.border .feature').addClass('hide');
        $('.border .popular').removeClass('hide');



    });

    $(v).click(function () {

        $('.border .newest,.border .popular').addClass('hide');
        $('.border .feature').removeClass('hide');




    });
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('magictime openUpRight');
    });
    $('.navv,up').click(function () {
        $(this).toggleClass('magictime boingInUp');
    });


    console.log($(document).width());
    /*$('a').click(function (e) {
            e.preventDefault();
        });*/


});
$(function () {
    var scr = $('.up'),
        nav = $('.navv');
    $(window).scroll(function () {
            if ($(this).scrollTop() >= 800 && $(window).width() > 500) {
                $(scr).show('slow');
                $(nav).show('slow');


                $('.navbar').addClass('men');
                /*$('.men').slideDown(1000);*/


            } else {
                $(scr).hide('slow');
                $(nav).hide('slow');
                $('.navbar').removeClass('men');

            }
    });
    $(scr).click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    $('.navbar ul li a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);

    })
    $('a').click(function (d) {
        d.preventDefault();
    })


});


$(window).on('load', function () {
        $("body").css("overflow", "auto");
        $(".overlay").fadeOut(2000)
    }



);
