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
  });

  new WOW().init();
});
