
$(function() {
    $('.textblock').not(':first').hide();
    $('.wrapper .tab').click(function() {
        $('.wrapper .tab').removeClass('active').addClass('hoverOn').eq($(this).index()).addClass('active').removeClass('hoverOn');
        $('.textblock').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

    $('.formblock .form-field').hover(function(){
        $('.formblock .helptext').eq($('.form-wrapper .form-field').index()).toggleClass('.helptext-active');
    },
    function(){
        console.log($('.helptext'));
        $('.helptext').eq($('.form-wrapper .form-field').index()).toggleClass('.helptext-active');
        console.log($('.helptext').eq($('.form-wrapper .form-field').index(this)));
    });
});
