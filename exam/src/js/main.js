$(document).ready(function() {

    $('.item__slider').slick({
        adaptiveHeight: true,
        autoplay: true
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open('GET', 'https://api.qwant.com/api/search/images?count=7&offset=1&q=partners+travel', true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if ("withCredentials" in xhr)
            console.log('support CORS')
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
            console.log(xhr.responseText);
        } else {
            console.log('something bad');
            console.log(xhr.status + ' | ' + xhr.readyState);
            console.log(xhr.getResponseHeader("Content-Type"));
        }
    }


});