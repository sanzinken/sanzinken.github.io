
$(function() {
    $('.textblock').not(':first').hide();
    $('.wrapper .tab').click(function() {
        $('.wrapper .tab').removeClass('active').addClass('hoverOn').eq($(this).index()).addClass('active').removeClass('hoverOn');
        $('.textblock').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

    $('.helptext').hide();
    $('.form-wrapper .form-field').hover(function(){
        console.log($('.form-wrapper .form-field').index(this));
        $('.form-wrapper .helptext').eq($('.form-wrapper .form-field').index(this)).fadeIn(500);
    },
    function(){
        $('.form-wrapper .helptext').eq($('.form-wrapper .form-field').index(this)).fadeOut(500);
    });
});
