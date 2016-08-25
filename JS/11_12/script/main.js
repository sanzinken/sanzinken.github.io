$(function(){

  $('ul.carousel-list').myCarouselPlugin({});

});

$(function(){

  var html = $('#renderingScript').html();

  var obj = {
    name: 'Alexandr Zinkevych',
    path: 'img/Iam/Iam.jpg',
    job: 'electrician',
    reasons: ['reason 1', 'reason 2', 'reason 3'],
    phone: '+380971234578',
    facebook: 'www.facebook.com/profile.php?id=100006057079142',
    feedback: 'My feedback'
  };

  var content = tmpl(html, obj);
  console.log(content);

  $('.second-ex').append(content);

});
