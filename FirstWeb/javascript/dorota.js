$('.wizytowka-box').css("opacity", 0);
var played = false;
$(window).scroll(function () {
    var windowHeight = $(window).height();//jak mierzyc wysokosc przy zmianie rozdzielczosci?
    var windowScrollPositionTop = $(window).scrollTop();
    var windowPositionBottom = windowHeight + windowScrollPositionTop;
    var wizytowkaBoxOffset = $('.wizytowka-box').offset().top;
    wizytowkaBoxOffset = wizytowkaBoxOffset + windowHeight / 2;


    $('.status').html(wizytowkaBoxOffset);

    if (windowPositionBottom > wizytowkaBoxOffset && !played) {
        $('.wizytowka-box').animate({"opacity": 1}, 2000).addClass('oko');

        if($('.wizytowka-box').hasClass('oko')){
            $('.wizytowka-back').addClass('rotate-js');
            $('.wizytowka-front').addClass('rotate-js-2');
            // $('.wizytowka-box').removeClass("oko");
            setTimeout(function () {
                $('.wizytowka-back').removeClass('rotate-js');
                $('.wizytowka-front').removeClass('rotate-js-2');
            }, 2000);
            $('.wizytowka-box').css("opacity", 1);
            played = true;
        }


        // $('.wizytowka-back').removeClass('rotate-js').addClass('rotate-back');
        // $('.wizytowka-front').removeClass('rotate-ja-2').addClass('rotate-back-2');


    }

});
