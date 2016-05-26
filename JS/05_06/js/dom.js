var logBlock = document.getElementsByClassName('logBlock')[0];
var splitList = [];
var length = 0;

var addTimeMark = function(timeMark) {
    splitList[length] = document.createElement('p');
    splitList[length].classList.add('timemark');
    splitList[length].innerHTML = ((1+length) + '. ' + timeMark);
    logBlock.appendChild(splitList[length]);
    length++;
}

var cleanSplitList = function(){
    for (item in splitList){
        logBlock.removeChild(splitList[item]);
    }
    length = 0;
}
