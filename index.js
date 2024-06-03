var questionsArr = [
    {
        question: 'JavaScript is the best language',
        answer: true
    },
    {
        question: 'HTML stands for Hypertext Markup Language',
        answer: true
    },
    {
        question: 'CSS stands for Creative Style Sheets',
        answer: false
    },
    {
        question: 'JSON stands for JavaScript Object Notation',
        answer: true
    },
    {
        question: 'Python is a programming language used primarily for front-end development',
        answer: false
    }
];

function runQuiz() {
    var score = 0;

    for (var i = 0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i].question);
        if (userAnswer === questionsArr[i].answer) {
            score++;
        }
    }

    var percentageCorrect = (score / questionsArr.length) * 100;
    percentageCorrect = Math.round(percentageCorrect * 100) / 100; 
    alert('Your score: ' + percentageCorrect + '%');
}
  