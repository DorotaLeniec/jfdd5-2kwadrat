(function makeDiv(){                                                                                                    // tworzymy diva
  var divsize = ((Math.random()*100) + 15).toFixed();                                                                   // losujemy wielkosc. wynnik mnozymy przez 100, dodajemy 15 i toFixed zaokragla nam, zeby nie bylo cyfr po przecinku
  var foodimage = ['https://cdn4.iconfinder.com/data/icons/summer_klukeart/png/hamburger.png',                          // kradniemy z internetow lekkie grafiki jedzenia i wsadzamy je w tablice
        'http://www.i2clipart.com/cliparts/5/7/4/c/clipart-cartoon-lobster-574c.png',
        'http://findicons.com/files/icons/1187/pickin_time/128/onion.png',
        'http://icons.iconarchive.com/icons/iconshock/brilliant-food/256/french-fries-icon.png',
        'http://icons.iconarchive.com/icons/icons-land/3d-food/256/Dish-Pasta-Spaghetti-icon.png',
        'http://downloadicons.net/sites/default/files/soup-icon-53582.png',
        'http://www.freeiconspng.com/free-images/sausage-icon-16414',
        'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
        'http://vignette2.wikia.nocookie.net/farmville2/images/5/59/Cucumber.png/revision/latest?cb=20121010115545'],
  choseImage = foodimage[Math.floor(Math.random() * foodimage.length)];                                                 // losujemy jedna grafike z tablicy
  $newdiv = $('<div/>').css({                                                                                           // tworzymy nowego diva przez jQuery
    'width':divsize+'px',                                                                                               // okreslamy wielkosc tego diva przypisujac mu wczesniej wylosowana wielkosc
    'height':divsize+'px'
  });

  var posx = (Math.random() * ($("#game_area").width() - divsize)).toFixed();                                           // losujemy miejsce w divie #game_area i odejmujemy divsize, zeby obrazek nie wychodzil za ramki
  var posy = (Math.random() * ($("#game_area").height() - divsize) ).toFixed();                                         // analogicznie jak powyzej

  $newdiv.css({                                                                                                         // stylowanko
    'position':'absolute',
    'left':posx+'px',                                                                                                   // nadawanko wylosowanej pozycji
    'top':posy+'px',                                                                                                    // analogicznie jak powyzej
    'display':'none',
    'background': 'url(' + choseImage + ')',                                                                            // wsadzanie w background wylosowanego obrazka
    'background-size': 'cover'
  }).appendTo( '#game_area' ).fadeIn(100).delay(300).fadeOut(200, function(){                                           // wsadzamy tego diva w game_area i nadajemy mu pojawianie sie i zanikanie z ekranu a delayem okreslamy ile czasu sie wyswietla
    $(this).remove();                                                                                                   // usuwamy newdiva
    makeDiv();                                                                                                          // nazot wywolujemy funkcje tworzaca diva
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