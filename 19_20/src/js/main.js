//= partials/jquery.min.js
//= partials/owl.carousel.js
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

  var accordionActive = $('.acco-active.acco-button');

  $(".acco-button").click(function() {
    if(!$(this).hasClass('acco-active')){
      accordionActive.toggleClass('.acco-active');
      accordionActive.next('.acco-active').toggleClass('.acco-active');
      accordionActive = $(this);
      accordionActive.html('-');
      accordionActive.toggleClass('.acco-active');
    }
  });

  new WOW().init();
});
