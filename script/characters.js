const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
let score = 0;

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    scoreElement.classList.add('hide');
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        setTimeout(() => {
            scoreElement.classList.remove('hide');
            scoreElement.innerText = "Your score: " + ((score/questions.length)*100) + "%";
            startButton.innerText = 'Restart';
            startButton.classList.remove('hide');
            questionContainerElement.classList.add('hide');
            score = 0;
        }, 1500);
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('btn-correct');
    } else {
        element.classList.add('btn-wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('btn-correct');
    element.classList.remove('btn-wrong');
}

const questions = [
    {
        question: 'How old is Hiccup?',
        answers: [
            { text: '12', correct: false },
            { text: '14', correct: false },
            { text: '15', correct: true },
            { text: '16', correct: false },
        ]
    },
    {
        question: 'Which dragon does Hiccup ride?',
        answers: [
            { text: 'Stormfly', correct: false },
            { text: 'Toothless', correct: true },
            { text: 'Kingstail', correct: false },
            { text: 'Hookfang', correct: false },
        ]
    },
    {
        question: 'What is Astrid of Hiccup at the end of the first movie?',
        answers: [
            { text: 'Wife', correct: false },
            { text: 'Just a friend', correct: false },
            { text: 'Enemy', correct: false },
            { text: 'girlfriend', correct: true },
        ]
    },
    {
        question: 'What color hair does Astrid have?',
        answers: [
            { text: 'blue', correct: false },
            { text: 'green', correct: false },
            { text: 'blond', correct: true },
            { text: 'red', correct: false },
        ]
    },
    {
        question: 'Stoick is the ... of Hiccup',
        answers: [
            { text: 'dad', correct: true },
            { text: 'friend', correct: false },
            { text: 'mom', correct: false },
            { text: 'brother', correct: false },
        ]
    },
];