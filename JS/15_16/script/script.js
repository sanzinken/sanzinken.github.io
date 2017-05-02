function pixaBayCallback(obj) {
  var source = $('#handlebars-template').html();
  var template = Handlebars.compile(source);

  var handlebarsData = {data: []};
  for(var i = 0; i < obj.hits.length; i++) {
    handlebarsData.data[i] = {
      url: obj.hits[i].previewURL,
      id: obj.hits[i].id
    };
  }

  var html = template(handlebarsData);


  $('.results').append(html);
};


$(document).ready(function(){
  
  $('#main-search-input').bind("enterKey",function(){
    $('#serp').empty();

    searchQuery = $('#main-search-input').val().trim().split(/\s+/).join("+");

    var urlString = 'https://pixabay.com/api/?key=4559307-49b6dfde04b11d875b5135803&q=' + searchQuery + '&image_type=photo&callback=pixaBayCallback&context=?';

    $.ajax({
      url: urlString,
      dataType: 'jsonp'
    });
  });
  $('#main-search-input').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
  });

  $('#main-search-button').click(function(){

    $('#serp').empty();

    searchQuery = $('#main-search-input').val().trim().split(/\s+/).join("+");

    var urlString = 'https://pixabay.com/api/?key=4559307-49b6dfde04b11d875b5135803&q=' + searchQuery + '&image_type=photo&callback=pixaBayCallback&context=?';

    $.ajax({
      url: urlString,
      dataType: 'jsonp'
    });

  });









});
