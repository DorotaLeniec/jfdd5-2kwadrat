$(function () {
  var homeId = '#navigation-handler-banner',
      aboutId = '#ficzery',
      contactId = '#formularz',
      aboutUsId = '#autorzy',
      areaId = '#area';
      footer = "#footer"

  var homeOffset = $(homeId).offset().top,
      aboutOffset = $(aboutId).offset().top,
      contactOffset = $(contactId).offset().top,
      aboutUsOffset = $(aboutUsId).offset().top,
      areaIdOffset = $(areaId).offset().top;
      footerOffset = $(footer).offset().top;

  var clearActiveClasses = function () {
    $('#navmenu a').removeClass('active');
  };

  var selectActiveSection = function () {
    var currentScrollTop = $(window).scrollTop() + 51;

    // console.log('currentScrollTop', currentScrollTop);
    // console.log('homeOffset', homeOffset);
    // console.log('aboutOffset', aboutOffset);
    // console.log('contactOffset', contactOffset);
    // console.log('aboutUsOffset', aboutUsOffset);


    switch (true) {
      case (currentScrollTop >= homeOffset && currentScrollTop < aboutOffset):
        clearActiveClasses();
        $("#navmenu a[href='#container']").addClass('active');
        break;
      case (currentScrollTop >= aboutOffset && currentScrollTop < contactOffset):
        clearActiveClasses();
        $("#navmenu a[href='" + aboutId + "']").addClass('active');
        break;
      case (currentScrollTop >= contactOffset && currentScrollTop < aboutUsOffset):
        clearActiveClasses();
        $("#navmenu a[href='" + contactId + "']").addClass('active');
        break;
      case (currentScrollTop >= aboutUsOffset && currentScrollTop < footerOffset):
        clearActiveClasses();
        $("#navmenu a[href='" + aboutUsId + "']").addClass('active');
        break;
      // case (currentScrollTop >= aboutUsOffset && currentScrollTop > areaIdOffset):
      //   clearActiveClasses();
      //   $("#navmenu a[href='" + aboutUsId + "']").addClass('active');
      //   break;
      default:
        clearActiveClasses();
        $("#navmenu a[href='index.html']").addClass('active');
        break;
    }
  };

  selectActiveSection();
  $(window).on('scroll', selectActiveSection);
});