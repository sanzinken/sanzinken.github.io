
$(function() {
    $('.textblock').not(':first').hide();
    $('.wrapper .tab').click(function() {
        $('.wrapper .tab').removeClass('active').addClass('hoverOn').eq($(this).index()).addClass('active').removeClass('hoverOn');
        $('.textblock').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

    $('.form-wrapper .form-field').hover(function(){
        var index =$('.form-wrapper .form-field').index(this);
        console.log(index);
        $('.formblock .helptext').eq(index).addClass('.helptext-active');
    },function(){
        var index = $('.form-wrapper .form-field').index(this);
        console.log(index);
        $('.formblock .helptext').eq(index).removeClass('.helptext-active');
    });
});
