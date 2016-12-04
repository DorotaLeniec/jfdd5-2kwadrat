$(function () {
  var homeId = '#navigation-handler-banner',
      aboutId = '#ficzery',
      contactId = '#formularz',
      aboutUsId = '#autorzy';

  var homeOffset = $(homeId).offset().top,
      aboutOffset = $(aboutId).offset().top,
      contactOffset = $(contactId).offset().top,
      aboutUsOffset = $(aboutUsId).offset().top;

  var clearActiveClasses = function () {
    $('#navmenu a').each(function (idx, aTag) {
      $(aTag).removeClass('active');
    })
  };

  var selectActiveSection = function (offsets) {
    var currentScrollTop = $(window).scrollTop();

    switch (true) {
      case (currentScrollTop >= homeOffset && currentScrollTop < aboutOffset):
        clearActiveClasses();
        $("#navmenu a[href='index.html']").addClass('active');
        break;
      case (currentScrollTop >= aboutOffset && currentScrollTop < contactOffset):
        clearActiveClasses();
        $("#navmenu a[href='" + aboutId + "']").addClass('active');
        break;
      case (currentScrollTop >= contactOffset && currentScrollTop < aboutUsOffset):
        clearActiveClasses();
        $("#navmenu a[href='" + contactId + "']").addClass('active');
        break;
      case (currentScrollTop >= aboutUsOffset):
        clearActiveClasses();
        $("#navmenu a[href='" + aboutUsId + "']").addClass('active');
        break;
      default:
        clearActiveClasses();
        $("#navmenu a[href='index.html']").addClass('active');
        break;
    }
  };

  selectActiveSection();
  $(window).on('scroll', selectActiveSection);
});