//
//
// var $table = $('<table>');
// var $container = $('.area--fridge');
//
//
// $container.append($table);
//
// function times(n,action){
//     for(var i=0;i<n;i++){
//         action(i);
//     }
// }
// times(6,function(x){
//     var $tr = $('<tr>');
//     $table.append($tr);
//     times(6,function(y) {
//         var $td = $('<td>');
//         $tr.append($td)
//         $td.addClass('cell').addClass('skladnik');
//     });
// });
//
// var tablicaSkladnikow = ['http://simpleicon.com/wp-content/uploads/burger_3.svg','http://simpleicon.com/wp-content/uploads/burger_3.svg','http://simpleicon.com/wp-content/uploads/burger_3.svg','sad.svg',5,6,7,8,9,10];
//
//
// function assigning(){
//     $('.skladnik').each(function(){
//         var random;
//         var temp;
//         // for (var i = 1;i < tablicaSkladnikow.length;){
//             random = Math.round(Math.random() * 10)
//             temp = tablicaSkladnikow[random];
//         console.log(random);
//             $(this).html('<p><img class="food-icon" src="' + temp + '"/></p>');
//
//     });
// }
// assigning();
