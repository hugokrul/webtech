// The elements that need changes made by this scriptl
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');

// Initialize the score to zero for the quiz.
let score = 0;

// Make the shuffledQuestions and currentQuestionIndex global.
let shuffledQuestions, currentQuestionIndex;

// Add click event listeners to the buttons.
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// When you click the startButton, this function fires.
function startGame() {
    // When you start the game, the startbutton needs to disapear.
    startButton.classList.add('hide');
    // And the container containing the questions need to appear.
    questionContainerElement.classList.remove('hide');
    // This shuffles the questions random.
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    // Resets the elements so that it can be loaded in again dynamically by javascript.
    resetState();
    // After everything is hidden and deleted, it shows the question
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// This function uses the question object.
function showQuestion(question) {
    //  Sets the text of the questionElement to the text of the question object.
    questionElement.innerText = question.question;
    // Loops through all answers
    question.answers.forEach(answer => {
        // Makes a button for each answer, sets the appropriate text and adds a class for style
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        // If the answer is correct, it sets the dataset 'data-correct' to true.
        // This way it can be checked by another function.
        // It doesn't set the 'data-correct' to false if not, so that it's easier to check with an if statement.
        // If the answer is false, 'data-correct' will be undefined.
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // If you click on one of the buttons, it fires the selectAnswer function with an event.
        button.addEventListener('click', selectAnswer);
        // Adds the button to the answerButtonsElement.
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    // Hides the score and the 'next' button.
    scoreElement.classList.add('hide');
    nextButton.classList.add('hide');
    // removes all the children from the answerButtonsElement.
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    // Selects which button is clicked
    const selectedButton = e.target;
    // If the answer is true, correct will be true
    // If not correct will be undefined.
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    // AnswerButtonsElement.children is not an array by itself, but an HTMLArray, so you have to convert it to an array to use the forEach loop.
    Array.from(answerButtonsElement.children).forEach(button => {
        // Sets the class of the button to add styling.
        setStatusClass(button, button.dataset.correct);
    });
    // If you aren't on the last question.
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        // Waits 1.5 seconds so you can see the last answer.
        setTimeout(() => {
            // Shows the score element.
            scoreElement.classList.remove('hide');
            // Populates the score element with text.
            scoreElement.innerText = "Your score: " + ((score/questions.length)*100) + "%";
            // Changes the startButton text to Restart instead of start.
            startButton.innerText = 'Restart';
            // Shows the startButton.
            startButton.classList.remove('hide');
            // hides the question Container Element.
            questionContainerElement.classList.add('hide');
            // Resets the score.
            score = 0;
        }, 1500);
    }
}

function setStatusClass(element, correct) {
    // First clears all the elements.
    clearStatusClass(element);
    if (correct) {
        // btn-correct styles the button to be green.
        element.classList.add('btn-correct');
    } else {
        // btn-wrong styles the button to be red.
        element.classList.add('btn-wrong');
    }
}

function clearStatusClass(element) {
    // Removes classes to remove style.
    element.classList.remove('btn-correct');
    element.classList.remove('btn-wrong');
}

// A list with all question objects.
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