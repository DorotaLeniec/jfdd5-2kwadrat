
$(document).ready(function() {
  $(".menuOption").click(function () {
    var checkBoxes = $(".main-menu-switch");
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
  });
});
