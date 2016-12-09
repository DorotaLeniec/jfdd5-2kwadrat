
var $table = $('<table>');
var $container = $('.area--fridge');
$container.append($table);
function times(n,action){
    for(var i=0;i<n;i++){
        action(i);
    }
}
times(6,function(x){
    var $tr = $('<tr>');
    $table.append($tr);
    times(6,function(y) {
        var $td = $('<td>');
        $tr.append($td);
        $td.addClass('cell').addClass('skladnik');
    });
});
// ********--------------------------Assigning icons into board--------------------------------------************



var tablicaSkladnikow = ['bread','cheese','tomato','bun','burger','ketchup','pasta','meatball','salmon','egg','milk','flour','salad'];

function assigning2(){
    var $emptyCells = 36;
    while($emptyCells>0) {
        for (var j = 0; j < tablicaSkladnikow.length; j++) {
            var $Cells = $('td:empty');
            var random = Math.round(Math.random() * $Cells.length);
            var foodFromTable = tablicaSkladnikow[j];
            var $randomCell = $($Cells[random]);
            var $foodItem = $('<div>').addClass('food-icon').addClass(foodFromTable).attr('foodType', foodFromTable);
            $randomCell.append($foodItem);
            $emptyCells = $Cells.length;
        }
    }
}
assigning2();

// **********---------------------------On icon click function definition--------------------------*********
// ------------------------------------zmienne globalne-------------------------
var emptyPlateCounter = [];
var pointCounter = 0;
var oneClickPointsCollect = [];
var onepoint = 0;
var pointssum = 0;

$('.food-icon').click(function () {
    var $firstEmptyPlate = $('.table--plate:visible:first > div');
    var foodTypeClass = $(this).attr('foodType');
    console.log($firstEmptyPlate);
    if ($firstEmptyPlate.hasClass(foodTypeClass)) {
        emptyPlateCounting($firstEmptyPlate);
        $('.table--plate:visible:first > div.' + foodTypeClass + ":first").append(this).css("opacity","1");

    }else{
        $('.face:visible:first').animate({
            backgroundColor : "#2b669a"
        });
        $(this).fadeTo("fast", 0);
        $(this).fadeTo("slow", 1);
    }
    checkPlate();
});

function pointCounting(){
    if(pointCounter<3) {
        pointCounter+=1;
        onepoint = 1;
        $('.points:not(".winner"):first').html(pointCounter);
        console.log("adding points" , pointCounter);
        summingPoints(onepoint);
    }else {
        $('.points:not(".winner"):first').addClass('winner');
        pointCounter=0;
        pointCounting();
    }

    function summingPoints (){

        pointssum+=onepoint;
        console.log("PUNKTYYYYYYYYYYYYYYYYY" , pointssum);
        $('.pointsSum').text("score: " + pointssum);

    }
    // ----------------POINTS COUNTING ---------------- //

//     function pointsSumming() {
//       oneClickPointsCollect.push(pointCounter);
//       console.log(oneClickPointsCollect);
//       function getSum(total, num) {
//         return total + num;
//       }
//
//       document.getElementById("totalScores").innerHTML = oneClickPointsCollect.reduce(getSum); // albo: .length... ale to daje przy nowym talerzu extra punkt
//     }
//
// pointsSumming();

    // ---------------END OF POINTS COUNTING ---------------- //

}


function emptyPlateCounting(firstPlate){
    emptyPlateCounter.push(firstPlate);
    console.log("z counting" , firstPlate);
    if(emptyPlateCounter.length === 1) {
        $('.face:not(".faceWon"):first').removeClass('sadFace').addClass('smileFace');
        pointCounting();
    }else if (emptyPlateCounter.length === 2){
        $('.face:not(".faceWon"):first').removeClass('smileFace').addClass('happyFace');
        pointCounting();
    }else if (emptyPlateCounter.length === 3){
        $('.face:not(".faceWon"):first').removeClass('happyFace').addClass('faceWon').addClass('winFace');
        pointCounting();
        emptyPlateCounter = [];


    }
}
//***----------------------------------Checking Plate function ------------------------------***************
function checkPlate() {
    $('.table--plate').each(function () {
        if ($(this).find('.plate').length === $(this).find('.food-icon').length) {
            var $faceFirstPointSum = $('.points:first:visible').html();
            $('.points:not(".pointsCounted"):first:visible').fadeOut(700).addClass('pointsCounted');
            // $('.pointsSum').html($faceFirstPointSum);



            $('.winFace').fadeOut(1000);
            $(this).fadeOut(1000,function (){
                gameRefresh();
            });
            $('.skladnik:empty:first').append(
                $(this).find('.food-icon:first')
            );
            $('.skladnik:empty:first').append(
                $(this).find('.food-icon:first')
            );
            $('.skladnik:empty:first').append(
                $(this).find('.food-icon:first')
            )
        }
    });
}

function gameRefresh(){
        if($('.table--plate:visible').length=== 0){
            $('.face').removeClass('winFace faceWon').addClass('sadFace');
            $('.face').stop().fadeIn(500);
            $('.points').removeClass('pointsCounted').removeClass('winner').stop().fadeIn(500);
            $('.points').text("0");
            pointCounter = 0;
            $('.table--plate .plate').removeClass(tablicaSkladnikow.join(' '));
            $('.table--plate').show();
            assigningClassesToPlates();
        }
}

function assigningClassesToPlates() {
    $('.plate').each(function(index,wartosc){
        var random;
        random = Math.round(Math.random() * 12);
        var ingrClass = tablicaSkladnikow[random];
        $(wartosc).addClass(ingrClass).css("opacity" , '0.5');
        console.log("hehehhehehehhehehe" , ingrClass , wartosc );

    })

}
//___________________________>TIMER____________________________//

// //
// // var counter = 10;
// // $(".time").html(counter);
// var myInterval = setInterval(function () {
//     --counter;
// }, 1000);
// myInterval();
//
//
// // Let's just add a function so that you can get the value
//
// var timeee = 10;
// $(".time").html(timeee);
//  // Increment value every second
//
// $(document).ready(function () {
//     $(".time").myInterval({
//         $(".time").html(timeee);
//     });
// });
//
$.fn.countdown = function (callback, duration) {
    var container = $(this[0]).html(duration);
    var countdown = setInterval(function () {
        if (--duration) {
            container.html(duration);
        } else {
            clearInterval(countdown);
            callback.call(container);
        }
    }, 1000);

};

$(".time").countdown(redirect, 5);

function redirect () {
    this.html("TIME OVER!");
    $(".theEndVisible").fadeTo("slow", 1).show();
}   $(".gameOver").fadeTo("slow", 1).show();

// var sec = 30;
// counter = document.getElementById('.time');
// counter.innerText = sec;
// i = setInterval(function(){
//     --sec;
//
//     if (sec === 1){
//         clearInterval(i);
//         window.location = document.getElementById('.time').href;
//     }
//     counter.innerText=sec;
// },1000);

// $(document).ready(function () {
//     $('.time').countdown({
//         until: 5,
//         compact: true,
//         onExpiry: function() { alert('bye!!'); }
//     });
// });

