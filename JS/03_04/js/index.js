// var arrElements = function(tagname, className, number){
//     var elemArray = [];
//
//     for(var i = 0; i < number; i ++){
//         elemArray[i] = document.createElement(tagname);
//         elemArray[i].classList.add(className);
//     }
//
//     return elemArray;
// }
//
// var insertAppend = function(targetElem, destElem){
//     if(Array.isArray(targetElem)){
//         for(var  iter in targetElem ){
//             destElem.appendChild( targetElem[iter] );
//         }
//     }else {
//         destElem.appendChild(targetElem);
//     }
// }
//
// var insertTextAtElem = function (targetElem, someText){
//     if( Array.isArray(targetElem) ){
//         for(var iter in targetElem ){
//             targetElem[iter].innerHTML = someText + (eval(iter) + 1);
//         }
//     }else {
//         targetElem.innerHTML = someText;
//     }
// }
//
// var insertQuestionBlock = function(rows, div, label, checkbox, textNode){
//     for (var iter in checkbox){
//         checkbox[iter].setAttribute('type', 'checkbox');
//     }
//
//     for (var iter in label){
//         div[iter].appendChild(label[iter]);
//     }
//
//     for (var iter in label){
//         label[iter].appendChild(checkbox[iter]);
//         label[iter].appendChild(textNode[iter]);
//     }
//
//     for(var itr in div)
//         rows.appendChild(div[itr]);
// }
//
//
//
// var div = document.createElement('div');
// var container = div;
// container.classList.add('container');
//
// var body = document.body;
// body.insertBefore(container, body.firstChild);
//
// var row = document.createElement('div');
// row.classList.add('row');
// container.appendChild(row);
//
//
// var header1 =document.createElement('h1');
// header1.classList.add('text-center');
// header1.innerHTML = 'Тест по програмуванню';
// row.insertBefore(header1,row.children[1]);
//
// var form = document.createElement('form');
// form.setAttribute('method', 'post');
// form.setAttribute('action', '#');
// row.appendChild(form);
//
// var check_1 = arrElements('input', 'someClass', 3);
// var check_2 = arrElements('input', 'someClass', 3);
// var check_3 = arrElements('input', 'someClass', 3);
//
// for (var iter in check_1){
//     check_1[iter].setAttribute('type', 'checkbox');
// }
// for (var iter in check_2){
//     check_1[iter].setAttribute('type', 'checkbox');
// }
// for (var iter in check_3){
//     check_1[iter].setAttribute('type', 'checkbox');
// }
//
// var text_question_1 = [];
// for(var itr = 0; itr < 3; itr++){
//     text_question_1[itr] = document.createTextNode('Варіант №' + (eval(iter) + 1));
// }
// var text_question_2 = [];
// for(var itr = 0; itr < 3; itr++){
//     text_question_2[itr] = document.createTextNode('Варіант №' + (eval(iter) + 1));
// }
// var text_question_3 = [];
// for(var itr = 0; itr < 3; itr++){
//     text_question_3[itr] = document.createTextNode('Варіант №' + (eval(iter) + 1));
// }
//
// var label_1 = arrElements('label', 'someFiClass', 3);
// var label_2 = arrElements('label', 'someFiClass', 3);
// var label_3 = arrElements('label', 'someFiClass', 3);
//
// var div_check_1 = arrElements('div', 'checkbox', 3);
// var div_check_2 = arrElements('div', 'checkbox', 3);
// var div_check_3 = arrElements('div', 'checkbox', 3);
//
// var rows = arrElements('div', 'row', 3);
//
// var header2 = arrElements('h2', 'text-left', 3); //array of <h2></h2>
// insertTextAtElem(header2, 'Питання №');
//
// for(itr in header2){
//     rows[itr].appendChild(header2[itr]);
// }
//
// insertQuestionBlock(rows[0], div_check_1, label_1, check_1, text_question_1 );
// insertQuestionBlock(rows[1], div_check_2, label_2, check_2, text_question_2 );
// insertQuestionBlock(rows[2], div_check_3, label_3, check_3, text_question_3 );
//
// for (var itr in rows){
//     form.appendChild(rows[itr]);
// }
//
// var button = document.createElement('button');
// button.classList.add('btn', 'btn-default', 'btn-lg', 'btn-block');
// button.setAttribute('type', 'submit');
// button.innerHTML = 'Перевірити мої результати';
// form.appendChild(button);
//////////////////////////////////////////////////////////////////////////////////////////////////////
var dom = {
    mainHeader: 'Тест по програмуванню',
    questions: ['Питання №1','Питання №2' , 'Питання №3'],
    answers: ['Відповідь №1', 'Відповідь №2','Відповідь №3'],

    arrElements:  function(tagname, className, number, ifArray){
        if(!ifArray){
            var element = document.createElement(tagname);
            element.classList.add(className);
            return element;
        }else {
            var elemArray = [];
            for(var i = 0; i < number; i ++){
                elemArray[i] = document.createElement(tagname);
                elemArray[i].classList.add(className);
            }
            return elemArray;
        }

    },

    insertAppend:  function(targetElem, destElem){
        if(Array.isArray(targetElem)){
            for(var  iter in targetElem ){
                destElem.appendChild( targetElem[iter] );
            }
        }else {
            destElem.appendChild(targetElem);
        }
    },

    insertTextAtElem: function (targetElem, someText){
        if( Array.isArray(targetElem) ){
            for(var iter in targetElem ){
                targetElem[iter].innerHTML = someText + (eval(iter) + 1);
            }
        }else {
            targetElem.innerHTML = someText;
        }
    },

    insertQuestionBlock: function(rows, div, label, checkbox, textNode){
        for (var iter in checkbox){
            checkbox[iter].setAttribute('type', 'checkbox');
        }

        for (var iter in label){
            div[iter].appendChild(label[iter]);
        }

        for (var iter in label){
            label[iter].appendChild(checkbox[iter]);
            label[iter].appendChild(textNode[iter]);
        }

        for(var itr in div)
            rows.appendChild(div[itr]);
    },

    domCreator: function(){
        var container = this.arrElements('div', 'container', 1, false);
        var body = document.body;
        this.insertAppend(container, body);

        var row =this.arrElements('div', 'row', 1, false);
        container.appendChild(row);


        var header1 = this.arrElements('h1', 'text-center', 1, false);

        header1.innerHTML = 'Тест по програмуванню';
        row.insertBefore(header1,row.children[1]);

        var form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', '#');
        row.appendChild(form);

        var check_1 = this.arrElements('input', 'someClass', 3, true);
        var check_2 = this.arrElements('input', 'someClass', 3, true);
        var check_3 = this.arrElements('input', 'someClass', 3, true);

        for (var iter in check_1){
            check_1[iter].setAttribute('type', 'checkbox');
        }
        for (var iter in check_2){
            check_1[iter].setAttribute('type', 'checkbox');
        }
        for (var iter in check_3){
            check_1[iter].setAttribute('type', 'checkbox');
        }

        var text_question_1 = [];
        for(var itr = 0; itr < 3; itr++){
            text_question_1[itr] = document.createTextNode('Варіант №' + (eval(itr) + 1));
        }
        var text_question_2 = [];
        for(var itr = 0; itr < 3; itr++){
            text_question_2[itr] = document.createTextNode('Варіант №' + (eval(itr) + 1));
        }
        var text_question_3 = [];
        for(var itr = 0; itr < 3; itr++){
            text_question_3[itr] = document.createTextNode('Варіант №' + (eval(itr) + 1));
        }

        var label_1 = this.arrElements('label', 'someFiClass', 3, true);
        var label_2 = this.arrElements('label', 'someFiClass', 3, true);
        var label_3 = this.arrElements('label', 'someFiClass', 3, true);

        var div_check_1 = this.arrElements('div', 'checkbox', 3, true);
        var div_check_2 = this.arrElements('div', 'checkbox', 3, true);
        var div_check_3 = this.arrElements('div', 'checkbox', 3, true);

        var rows = this.arrElements('div', 'row', 3, true);

        var header2 = this.arrElements('h2', 'text-left', 3, true); //array of <h2></h2>
        this.insertTextAtElem(header2, 'Питання №');

        for(itr in header2){
            rows[itr].appendChild(header2[itr]);
        }

        this.insertQuestionBlock(rows[0], div_check_1, label_1, check_1, text_question_1 );
        this.insertQuestionBlock(rows[1], div_check_2, label_2, check_2, text_question_2 );
        this.insertQuestionBlock(rows[2], div_check_3, label_3, check_3, text_question_3 );

        for (var itr in rows){
            form.appendChild(rows[itr]);
        }

        var button = document.createElement('button');
        button.classList.add('btn', 'btn-default', 'btn-lg', 'btn-block');
        button.setAttribute('type', 'submit');
        button.innerHTML = 'Перевірити мої результати';
        form.appendChild(button);
    }
}


dom.domCreator();
