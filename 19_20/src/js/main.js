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



   
  $(".acco-button").click(function(event) {
   
     function takeActiveButton (obj) {
      for (var i = 0; i < obj.length; i++) {
        
        if($(obj[i]).data('active') === 'enabled')
          return obj[i];
      }
     }

    var activeButton = takeActiveButton($('.acco-button'));
    var thisElem = this;

    if( $(activeButton).is(thisElem) ) {
      return
    }else{

      $(thisElem).data('active', 'enabled');
      $(activeButton).data('active', 'disabled');

      $(this).html('-');
      $(thisElem).next().removeClass('acco-disactive');
      $(thisElem).next().addClass('acco-active');
      $(thisElem).next().next().removeClass('text-hidden');
      $(thisElem).next().next().slideToggle(300);
      // $(thisElem).next().next().addClass('acco-text-active');
      $(thisElem).removeClass('acco-disactive');
      $(thisElem).addClass('acco-active');

      $(activeButton).html('+');
      $(activeButton).next().removeClass('acco-active');
      $(activeButton).removeClass('acco-active');
      $(activeButton).addClass('acco-disactive');
      $(activeButton).next().addClass('acco-disactive');
      // $(activeButton).next().next().addClass('text-hidden');
      $(activeButton).next().next().slideToggle(300);
      // $(activeButton).next().next().removeClass('acco-text-active');

    }

  });

  new WOW().init();
  console.log("----------REBUILD----------");
});
