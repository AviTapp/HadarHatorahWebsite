(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.dropdown-trigger').dropdown();
    $('.collapsible').collapsible();
    $('.slider').slick({
      accessibility: true,
      autoplay: true,
      fade: true,
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
