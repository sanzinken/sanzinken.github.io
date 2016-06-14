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
});
