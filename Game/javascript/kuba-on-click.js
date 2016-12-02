
$('.fridge--ingridient').click(function () {
    $('.plate:empty:visible').first().append(this);
    checkPlate();
});

function checkPlate() {
    $('.table--plate').each(function () {
        if ($(this).find('.plate').length === $(this).find('.fridge--ingridient').length) {
            $(this).hide();
            $('.area--fridge').append(
                $(this).find('.fridge--ingridient')
            );
        }
    });
}
