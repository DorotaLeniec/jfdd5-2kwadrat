// $('.feature-1').hide();
//
// $('.feature-2').css({
//   position: 'absolute',
//   left: 169,
//   top: 182
// }).animate({left: 230});

// $(".features").find("div");
// $(".feature-4").prependTo(".features");
/* $(".feature-2").moveRig*/

$('slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.feature-group');
  var $slides = $this.find('cecha');
  var buttonArray = [];
  var currentIndex = 0;
  var timeout;


  // tutaj wpisac move()

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move (currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }


  $.each($slides, function(index) {
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('clock', function() {
      move(index);
    }).appendTo('.feature-buttons');
    buttonArray.push($button);
  });

  advance();

});