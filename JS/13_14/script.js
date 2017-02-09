var testObj = {
  questions:  [
                {question: 'Question 1', answers: ['Answer 1', 'Answer 2', 'Answer 3'], rightAns: 0},
                {question: 'Question 2', answers: ['Answer 1', 'Answer 2', 'Answer 3'], rightAns: 1},
                {question: 'Question 3', answers: ['Answer 1', 'Answer 2', 'Answer 3'], rightAns: 2}
              ],
};

var jsonTestObj = JSON.stringify(testObj);

localStorage.setItem('storTesting', jsonTestObj);
jsonTestObj = localStorage.getItem('storTesting');
localStorage.clear();

var questionObj = JSON.parse(jsonTestObj);

//make Handlebars helper for type index beggining from 1 to n
Handlebars.registerHelper("ind", function(value) {
  return parseInt(value) + 1;
});
//compiling and making template
var templateScript = document.getElementById('handlebars-template').innerHTML;
var template = Handlebars.compile(templateScript); //Handlebars return function.
var templateHTML = template(questionObj);

var testSpace = document.querySelector('.testSpace');
testSpace.innerHTML = templateHTML;

var button = document.getElementById('button');
var isPassed = true;

button.addEventListener('click', function() {
  var questions = testSpace.querySelectorAll('.question');

  for (var i = 0; i < questions.length; i++) {
    var answers = questions[i].querySelectorAll('.answer');
     if(answers[questionObj.questions[i].rightAns].checked) {
       continue;
     }else {
       isPassed = false;
     }
  }

  var wrapper = document.querySelector('.wrapper');
  wrapper.classList.add('modalOpen');

  var modalMessage = document.querySelector('.modalMessage');
  if (isPassed) {
    modalMessage.innerHTML = 'Test passed!'
  } else {
    modalMessage.innerHTML = 'You fail!'
  }

  document.getElementById('modalBackground').style.display = 'block';
}, false);

var closeButton = document.querySelector('.close');

closeButton.onclick = function(){
  document.getElementById('modalBackground').style.display = 'none';
  document.querySelector('.wrapper').classList.remove('modalOpen');
}
