
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
var tablicaSkladnikow = ['bread','cheese','tomato','bun','burger','ketchup','pasta','meatball','salmon','egg','milk','flour','salad']
function assigning(){
    $('.skladnik').each(function(){
        var random;
        var temp;
        // for (var i = 1;i < tablicaSkladnikow.length;){
        random = Math.ceil(Math.random() * 12);
        console.log(random);
        temp = tablicaSkladnikow[random];
        console.log(random);
        $(this).html('<div class="'  + temp + '"></div>');
        $('.skladnik > div').addClass('food-icon');
    });
}
assigning();
// **********---------------------------On icon click function definition--------------------------*********
$('.food-icon').click(function () {
    $(this).parent().addClass('pusty');
    $('.plate:empty:visible').first().append(this);
    checkPlate();
});
//***----------------------------------Checking Plate function ------------------------------***************
function checkPlate() {
    $('.table--plate').each(function () {
        if ($(this).find('.plate').length === $(this).find('.food-icon').length) {
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
