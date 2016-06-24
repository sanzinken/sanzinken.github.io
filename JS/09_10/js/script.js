$(function() {

    $('.jcarousel').jcarousel({
        // Configuration goes here
    });


     $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });
    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel').jcarousel('scroll');

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + '</a>';
        }
    });

    $('.jcarousel-pagination a').eq(0).addClass('active');

    $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    }).on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    }).on('click', function(e) {
        e.preventDefault();
    })
// Selectric
    $('select').selectric();
//
    // jQuery checkbox
    $('.checkbox-custom').mousedown(
        function() {
            changeChake( $(this) );
        }
    );

    $('.checkbox-custom').each(
        function() {
            changeChakeStart( $(this) );
        }
    );

    function changeChake( el ) {
        var el = el,
        input = el.find("input").eq(0);

        if( !input.attr('checked') ) {
            el.css("background-position","0 -17px");
            input.attr("checked", true);
        }else {
            el.css("background-position","0 0");
            input.attr("checked", false)
        }

     return true;
    };

    function changeChakeStart ( el ) {
        var el = el,
        input =  el.find('input').eq(0);

        if(  input.attr('checked') ) {
            el.css("background-position","0 -17px");
        }

        return true;
    }
// slide menu
     $('.sub-menu').hide();

    $('.sub-menu-container-1').hover(function(){
        $('.menu-lev2').slideToggle();
        console.log('hover on sub-menu1');
    }, function(){
        $('.menu-lev2').hide();
        console.log('hover off sub-menu1');
    });

    $('.sub-menu-container-2').hover(function(){
        $('.menu-lev3').slideToggle();
        console.log('hover on sub-menu2');
    }, function(){
        $('.menu-lev3').hide();
        console.log('hover off submenu-3');
    })
});
