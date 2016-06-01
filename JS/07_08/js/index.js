
$(function() {
    $('.textblock').not(':first').hide();
    $('.wrapper .tab').click(function() {
        $('.wrapper .tab').removeClass('active').addClass('hoverOn').eq($(this).index()).addClass('active').removeClass('hoverOn');
        $('.textblock').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

    $('.form-wrapper .form-field').hover(function(){
        $('.formblock .helptext').eq($('.form-wrapper .form-field').index()).addClass('.helptext-active');
    }, function(){
        $('.formblock .helptext').eq($('.form-wrapper .form-field').index()).removeClass('.helptext-active');
    });
});
