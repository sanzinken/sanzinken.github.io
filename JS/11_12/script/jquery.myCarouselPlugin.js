(function($){

  $.fn.myCarouselPlugin = function(options) {

    var default_setiings = {
      imgWidth: '100px',
      listItemMarginRight: '25px',
      hiderWidth: '600px'
    };

    var settings = $.extend(default_setiings, options);
    $(this).parent().append('<div class="carousel-hider"></div>');
    $(this).appendTo('div.carousel-hider');

    var $img = $('.carousel-img');
    var $listItem = $('.carousel-item');
    var $list = $(this);
    var $hider = $('.carousel-hider');

    $hider.after('<div class="carousel-wrapper"></div>');
    var $carouselWrapper = $('.carousel-wrapper');


    $img.css({'max-width': settings.imgWidth});
    $listItem.css({'display':'block', 'margin-right': settings.listItemMarginRight, 'float': 'left'});
    $list.css({'width': '1000000px', 'position': 'relative', 'padding': '0px'});
    $hider.css({'width': settings.hiderWidth, 'overflow': 'hidden', 'float': 'left'});

    $hider.before('<a href="#" class="left-arrow">Сюда</a>');
    $hider.after('<a href="#" class="right-arrow">Туда</a>');

    var $leftArrow = $('.left-arrow');
    var $rightArrow = $('.right-arrow');

    $leftArrow.appendTo($carouselWrapper);
    $hider.appendTo($carouselWrapper);
    $rightArrow.appendTo($carouselWrapper);

    $leftArrow.css({'float': 'left', 'text-decoration': 'none', 'color':'black', 'cursor': 'pointer', 'display': 'block', 'border': '1px solid grey', 'background-color': 'lightgrey', 'padding': '5px', 'margin-top':'25px', 'margin-right': '25px'});
    $rightArrow.css({'float': 'left', 'text-decoration': 'none', 'color':'black', 'cursor': 'pointer', 'display': 'block', 'border': '1px solid grey', 'background-color': 'lightgrey', 'padding': '5px', 'margin-top':'25px', 'margin-left': '25px'});

    var pixelOffset = parseInt(settings.imgWidth);
    var curentLeftValue = 0;
    var elementCount = $list.find('li').length;
    var minOffset = -((elementCount - 5) * pixelOffset);
    var maxOffset = 0;

    $leftArrow.on('click', function(e){
      e.preventDefault();
      if(curentLeftValue != maxOffset){
        curentLeftValue += pixelOffset;
        $list.animate({left: curentLeftValue + 'px'}, 300);
      }
    });

    $rightArrow.on('click', function(e){
      e.preventDefault();
      if(curentLeftValue != minOffset){
        curentLeftValue -= pixelOffset;
        $list.animate({left: curentLeftValue + 'px'}, 300);
      }
    });


    return this;
  };

})(jQuery);
