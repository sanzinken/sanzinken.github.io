function mathPow(num,  pow){
    var number =1;
    for (var i = 0; i < pow; i++){
        number *= num;
    }

    return number;
}

function fillArrayName(arr){
    for (var i = 0; i < 5; i++){
        arr[i] = prompt((i + 1) + ". Введіть ім'я:",'Vasiliy Pupkin');
    }
}

function fillUserName(){
    var username =  prompt("Введіть ваше ім'я:",'Vasiliy Pupkin');

    return username;
}

function feelTheDifference(arr, username){

    for (var i = 0; i < arr.length; i++) {
        if( arr[i] === username ){
            return username;
        }else{
            return false;
        }
    }

}

function greeting(username){
    if( username ){
        alert(username + ', вы успешно вошли');
    }else{
        alert('невірне ім*я');
    }
}

// ********************************************************************************
var num, pow;

num = prompt('введіть число:', 1);
pow= prompt('введіть степінь до якої необхідно піднести число:', 1);

alert(mathPow(num, pow));
// *********************************************************************************

var arr = [];
var userName;

fillArrayName(arr);
userName = fillUserName();
userName = feelTheDifference(arr, userName);
greeting(userName);
