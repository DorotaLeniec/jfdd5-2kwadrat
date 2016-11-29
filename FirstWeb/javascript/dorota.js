$(window).scroll(function(){
var windowHeight = $(window).height();//jak mierzyc wysokosc przy zmianie rozdzielczosci?
var windowScrollPositionTop = $(window).scrollTop();
var windowPositionBottom = windowHeight + windowScrollPositionTop;
var wizytowkaBoxOffset = $('.wizytowka-box').offset().top;
wizytowkaBoxOffset=wizytowkaBoxOffset+windowHeight/2;

$('.wizytowka-box').css("opacity",0);
$('.status').html(wizytowkaBoxOffset);

if(windowPositionBottom>wizytowkaBoxOffset){
    $('.wizytowka-box').animate({"opacity":1} ,3000);
}
})