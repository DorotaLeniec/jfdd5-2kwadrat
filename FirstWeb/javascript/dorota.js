$('.wizytowka-box').css("opacity", 0);
var played = false;
$(window).scroll(function () {
    var windowHeight = $(window).height();//jak mierzyc wysokosc przy zmianie rozdzielczosci?
    var windowScrollPositionTop = $(window).scrollTop();
    var windowPositionBottom = windowHeight + windowScrollPositionTop;
    var wizytowkaBoxOffset = $('.wizytowka-box').offset().top;
    wizytowkaBoxOffset = wizytowkaBoxOffset + windowHeight / 2;
    if (windowPositionBottom > wizytowkaBoxOffset && !played) {
        $('.wizytowka-box').animate({"opacity": 1}, 1000).addClass('oko');
        setTimeout(function(){
        if($('.wizytowka-box').hasClass('oko')){
            $('.wizytowka-back').addClass('rotate-js');
            $('.wizytowka-front').addClass('rotate-js-2');
            // $('.wizytowka-box').removeClass("oko");
            setTimeout(function () {
                $('.wizytowka-back').removeClass('rotate-js');
                $('.wizytowka-front').removeClass('rotate-js-2');
            }, 3000);
            $('.wizytowka-box').css("opacity", 1);
            played = true;
        }
        },2000);
    }
});
