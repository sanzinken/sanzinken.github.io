const testObj = {
    questions: [
        { question: 'Question 1', answers: ['Answer 1', 'Answer 2', 'Answer 3'], rightAns: 0 },
        { question: 'Question 2', answers: ['Answer 1', 'Answer 2', 'Answer 3'], rightAns: 1 },
        { question: 'Question 3', answers: ['Answer 1', 'Answer 2', 'Answer 3'], rightAns: 2 }
    ],
};

let jsonTestObj = JSON.stringify(testObj);

localStorage.setItem('storTesting', jsonTestObj);
jsonTestObj = localStorage.getItem('storTesting');
localStorage.clear();

const questionObj = JSON.parse(jsonTestObj);

//make Handlebars helper for type index beggining from 1 to n
Handlebars.registerHelper("ind", function(value) {
    return parseInt(value) + 1;
});
//compiling and making template
const templateScript = document.getElementById('handlebars-template').innerHTML;
//Handlebars return compiled template 
const template = Handlebars.compile(templateScript);
//Compiled html from template 
const templateHTML = template(questionObj);

const testSpace = document.querySelector('.testSpace');
testSpace.innerHTML = templateHTML;
//Check the answer
//Button with check
const button = document.getElementById('button');


button.addEventListener('click', () => {
    let isPassed = true;
    let questions = testSpace.querySelectorAll('.question');

    for (let i = 0; i < questions.length; i++) {
        const answers = questions[i].querySelectorAll('.answer');

        if (answers[questionObj.questions[i].rightAns].checked) {
            console.log(questionObj);
            continue;
        } else {
            isPassed = false;
            console.log('some went wrong...');
        }
    }
    //create Modal Window
    modal(isPassed);
}, false);

function modal(passed) {
    console.log(passed);
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('modalOpen');

    const modalMessage = document.querySelector('.modalMessage');
    if (passed) {
        modalMessage.innerHTML = 'Test passed!'
    } else {
        modalMessage.innerHTML = 'You fail!'
    }

    document.getElementById('modalBackground').style.display = 'block';
}

const closeButton = document.querySelector('.close');

closeButton.onclick = function() {
    document.getElementById('modalBackground').style.display = 'none';
    document.querySelector('.wrapper').classList.remove('modalOpen');
}