
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
function assigning(){
    $('.skladnik').each(function(){
        var random;
        var temp;
        // for (var i = 1;i < tablicaSkladnikow.length;){
        random = Math.ceil(Math.random() * 12);
        // console.log(random);
        temp = tablicaSkladnikow[random];
        // console.log(random);
        var $foodItem = $('<div>').addClass('food-icon').addClass(temp).attr('foodType', temp);
        $(this).append($foodItem);
    });
}
assigning();
// **********---------------------------On icon click function definition--------------------------*********
// ------------------------------------zmienne globalne-------------------------
var emptyPlateCounter = [];

$('.food-icon').click(function () {
    var $firstEmptyPlate = $('.plate:empty:visible').first();
    if ($firstEmptyPlate.hasClass($(this).attr('foodType'))) {
        emptyPlateCounting($firstEmptyPlate);
        $firstEmptyPlate.append(this).css("opacity","1");
        console.log(emptyPlateCounter.length);
    }else{
        $(this).fadeTo("fast", 0);
        $(this).fadeTo("slow", 1);
    }
    checkPlate();
});


function emptyPlateCounting(firstPlate){
    emptyPlateCounter.push(firstPlate);
    console.log("z counting" , firstPlate);
    if(emptyPlateCounter.length === 1) {
        $('.face:first').removeClass('sadFace').addClass('smileFace');
    }else if (emptyPlateCounter.length === 2){
        $('.face:first').removeClass('smileFace').addClass('happyFace');
    }else if (emptyPlateCounter.length === 3){
        $('.face:first').removeClass('happyFace').addClass('winFace').addClass('faceWon');
        emptyPlateCounter = [];
    }
}
//***----------------------------------Checking Plate function ------------------------------***************
function checkPlate() {
    $('.table--plate').each(function () {
        if ($(this).find('.plate').length === $(this).find('.food-icon').length) {
            emptyPlateCounter = [];
            $(this).fadeOut(300);
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
$('.face:first').css("background-image" , url = '../Images/faces/sad.svg');
// $('.face').css("background" , "red");