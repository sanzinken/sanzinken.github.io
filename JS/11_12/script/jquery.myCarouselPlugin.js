(function($){

  $.fn.myCarouselPlugin = function(options) {

    var default_setiings = {
      imgWidth: '100px',
      listItemMarginRight: '25px',
      hiderWidth: '600px'
    };

    var settings = $.extend(default_setiings, options);

    $('.wrapper').append('<div class="carousel-hider"></div>');
    $(this).appendTo('div.carousel-hider');

    var $img = $('.carousel-img');
    var $listItem = $('.carousel-item');
    var $list = $(this);
    var $hider = $('.carousel-hider');

    $img.css({'max-width': settings.imgWidth});
    $listItem.css({'display':'block', 'margin-right': settings.listItemMarginRight, 'float': 'left'});
    $list.css({'width': '1000000px', 'position': 'relative', 'padding': '0px'});
    $hider.css({'width': settings.hiderWidth, 'overflow': 'hidden', 'float': 'left'});

    $hider.before('<a href="#" class="left-arrow">Сюда</a>');
    $('.wrapper').append('<a href="#" class="right-arrow">Туда</a>');

    var $leftArrow = $('.left-arrow');
    var $rightArrow = $('.right-arrow');

    $leftArrow.css({'float': 'left', 'text-decoration': 'none', 'color':'black', 'cursor': 'pointer', 'display': 'block', 'border': '1px solid grey', 'background-color': 'lightgrey', 'padding': '5px', 'margin-top':'25px', 'margin-right': '25px'});
    $rightArrow.css({'float': 'left', 'text-decoration': 'none', 'color':'black', 'cursor': 'pointer', 'display': 'block', 'border': '1px solid grey', 'background-color': 'lightgrey', 'padding': '5px', 'margin-top':'25px', 'margin-left': '25px'});

    var pixelOffset = parseInt(settings.imgWidth);
    var curentLeftValue = 0;

    $leftArrow.on('click', function(e){
      e.preventDefault();
      curentLeftValue += pixelOffset;
      console.log(curentLeftValue);
      $list.animate({left: curentLeftValue + 'px'}, 300);
    });

    $rightArrow.on('click', function(e){
      e.preventDefault();
      curentLeftValue -= pixelOffset;
      $list.animate({left: curentLeftValue + 'px'}, 300);
    });


    return this;
  };

})(jQuery);
