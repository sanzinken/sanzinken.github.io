$(document).ready(function() {

    $('.item__slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false
                }
            }
        ]
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
        itemSelector: '.grid_item',
        // columnWidth: 33,
        // percentPosition: true,
        gutter: 10
    });

    $('.grid_item').imagefill();

    $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
    });
});