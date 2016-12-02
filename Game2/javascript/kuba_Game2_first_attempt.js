(function makeDiv(){
  var divsize = ((Math.random()*100) + 15).toFixed();
  var foodimage = ['https://cdn4.iconfinder.com/data/icons/summer_klukeart/png/hamburger.png',
        'http://www.i2clipart.com/cliparts/5/7/4/c/clipart-cartoon-lobster-574c.png',
        'http://findicons.com/files/icons/1187/pickin_time/128/onion.png',
        'http://icons.iconarchive.com/icons/iconshock/brilliant-food/256/french-fries-icon.png',
        'http://icons.iconarchive.com/icons/icons-land/3d-food/256/Dish-Pasta-Spaghetti-icon.png',
        'http://downloadicons.net/sites/default/files/soup-icon-53582.png',
        'http://www.freeiconspng.com/free-images/sausage-icon-16414',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
        'http://vignette2.wikia.nocookie.net/farmville2/images/5/59/Cucumber.png/revision/latest?cb=20121010115545'],
  choseImage = foodimage[Math.floor(Math.random() * foodimage.length)];
  $newdiv = $('<div/>').css({
    'width':divsize+'px',
    'height':divsize+'px'
  });

  var posx = (Math.random() * ($("#game_area").width() - divsize)).toFixed();
  var posy = (Math.random() * ($("#game_area").height() - divsize) ).toFixed();

  $newdiv.css({
    'position':'absolute',
    'left':posx+'px',
    'top':posy+'px',
    'display':'none',
    'background': 'url(' + choseImage + ')',
    'background-size': 'cover'
  }).appendTo( '#game_area' ).fadeIn(100).delay(300).fadeOut(200, function(){
    $(this).remove();
    makeDiv();
  });
})();




// (function makeDiv(){
//   var divsize = ((Math.random()*100) + 30).toFixed();
//   var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
//   $newdiv = $('<div/>').css({
//     'width':divsize+'px',
//     'height':divsize+'px',
//     'background-color': color
//   });
//
//   var posx = (Math.random() * ($("#game_area").width() - divsize)).toFixed();
//   var posy = (Math.random() * ($("#game_area").height() - divsize)).toFixed();
//
//   $newdiv.css({
//     'position':'absolute',
//     'left':posx+'px',
//     'top':posy+'px',
//     'display':'none'
//   }).appendTo( '#game_area' ).fadeIn(100).delay(200).fadeOut(200, function(){
//     $(this).remove();
//     makeDiv();
//   });
// })();