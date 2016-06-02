
$(function() {
    $('.textblock').not(':first').hide();
    $('.wrapper .tab').click(function() {
        $('.wrapper .tab').removeClass('active').addClass('hoverOn').eq($(this).index()).addClass('active').removeClass('hoverOn');
        $('.textblock').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

    $('.helptext').hide();
    $('.formblock .form-field').hover(function(){
        $('.helptext').eq($(this).index()).fadeIn(500);
        console.log($(this).index());
    },
    function(){
        $('.helptext').eq($('.formblock .form-field').index()).fadeOut(500);
        console.log($(this).index());
    });
});
