$(document).ready(function() {

    $('.item__slider').slick({
        adaptiveHeight: true,
        autoplay: true
    });

    // var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    // // xhr.open('GET', 'https://api.qwant.com/api/search/images?count=7&offset=1&q=partner+travel', true);
    // xhr.send();
    // 
    // xhr.onreadystatechange = function() {
    // if (xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
    // console.log(xhr.response);
    // }
    // };

    // $('.grid_item').imagefill();

    // $('.masonry-grid').imagesLoaded(function() {
    //     $(this).masonry({
    //         // set itemSelector so .grid-sizer is not used in layout
    //         itemSelector: '.grid-item',
    //         // use element for option
    //         columnWidth: '.grid-sizer',
    //         percentPosition: true
    //     });
    // });
    var $grid = $('.masonry-grid');
    $grid.masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        columnWidth: '.grid_sizer',
        gutter: 10,
        percentPosition: true
    });

    $('.grid_item').imagefill();

    $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
    });

    // 
});