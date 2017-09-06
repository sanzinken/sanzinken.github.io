//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/wow/dist/wow.min.js

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
      0:{
        nav: true,
        dots: false,
        touchDrag: true,
        navText: ['<i class="fa fa-chevron-left chevrons fa-4x" aria-hidden="true"></i>',
        '<i class="fa fa-chevron-right chevrons fa-4x" aria-hidden="true"></i>']
      },
      1200: {
        nav: false,
        dots: true
      }
    }
  });

  $(".header-button-menu-760").on('click', function() {
    $('.main-menu').toggle();
    $(this).toggleClass('header-button-menu-760_active');
  });

  $('.acco-text:even:gt(0)').hide();
  $('.acco-text:odd').hide();

  $(".acco-button").click(function(event) {
    // get the content that needs to be shown
    var currentContent = $(this).next().next();
    var currentButton = $(this);
    var currentButtonDesc = $(this).next();

    var oldContent = $('.acco-text:visible');
    var oldButton = $('.acco-button.acco-active');
    var oldButtonDesc = $('.acco-title.acco-active');

    // Make sure the content that needs to be shown isn't already visible
    if ( currentContent.is(':visible') )
      return false;

    // Hide the old content
    oldContent.slideToggle(300);
    oldButton.text('+');
    oldButton.removeClass('acco-active');
    oldButtonDesc.removeClass('acco-active');

    // Shown the new content;
    currentContent.slideToggle(300);
    currentButton.text('-');
    currentButton.addClass('acco-active');
    currentButtonDesc.addClass('acco-active');
  });

  $('.acco-button').mousedown( function() {
    return false;
  });



  new WOW().init();
});
