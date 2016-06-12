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

    $('.jcarousel').jcarousel('scroll', '+=1');
});
