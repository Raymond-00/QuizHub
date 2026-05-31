const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");

let shuffledQuestions, currentQuestionIndex, score;

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false }
        ],
    },

    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            { text: 'Jupiter', correct: true },
            { text: 'Saturn', correct: false },
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: false }
        ],
    },

    {
        question: 'What is the chemical symbol for water?',
        answers: [
            { text: 'H2O', correct: true },
            { text: 'CO2', correct: false },
            { text: 'O2', correct: false },
            { text: 'NaCl', correct: false }
        ],
    },

    {
        question: 'who is the current minister of innovation,science and technology in nigeria?',
        answers: [
            { text: 'Dr. Kingsley Tochukwu Udeh', correct: true },
            { text: 'Dr. Isa Ali Pantami', correct: false },
            { text: 'Dr. Adebayo Shittu', correct: false },
            { text: 'Dr. Lai Mohammed', correct: false }
        ],
    },

    {
        question: 'What is the largest mammal in the world?',
        answers: [
            { text: 'Blue Whale', correct: true },
            { text: 'African Elephant', correct: false },
            { text: 'Giraffe', correct: false },
            { text: 'Hippopotamus', correct: false }
        ],
    },

    {
        question: 'What is the smallest country in the world?',
        answers: [
            { text: 'Vatican City', correct: true },
            { text: 'Monaco', correct: false },
            { text: 'San Marino', correct: false },
            { text: 'Liechtenstein', correct: false }
        ],
    },

    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            { text: 'Au', correct: true },
            { text: 'Ag', correct: false },
            { text: 'Fe', correct: false },
            { text: 'Cu', correct: false }
        ]
    },

    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Pacific Ocean', correct: true },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false }
        ]
    },

    {
        question: 'What is the tallest mountain in the world?',
        answers: [
            { text: 'Mount Everest', correct: true },
            { text: 'K2', correct: false },
            { text: 'Kangchenjunga', correct: false },
            { text: 'Lhotse', correct: false }
        ]
    },

    {
        question: 'What is the chemical symbol for oxygen?',
        answers: [
            { text: 'O', correct: true },
            { text: 'O2', correct: false },
            { text: 'CO2', correct: false },
            { text: 'HO', correct: false }
        ]
    },

    {
        question: 'What is the largest desert in the world?',
        answers: [
            { text: 'Sahara Desert', correct: true },
            { text: 'Gobi Desert', correct: false },
            { text: 'Arabian Desert', correct: false },
            { text: 'Kalahari Desert', correct: false }
        ]
    },

    {
        question: 'Who is the first President of Nigeria?',
        answers: [
            { text: 'Nnamdi Azikiwe', correct: true },
            { text: 'Gerald Sherrill', correct: false },
            { text: 'Olusegun Obasanjo', correct: false },
            { text: 'Muhammadu Buhari', correct: false }
        ]
    },

    {
        question: 'What was the first Ai program to be built?',
        answers: [
            { text: 'ELIZA', correct: false},
            { text: 'Deep Blue', correct: false },
            { text: 'Logic Theorist', correct: true },
            { text: 'Alexa', correct: false }
        ]
    },

    {
        question: 'What is the largest continent on Earth?',
        answers: [
            { text: 'Asia', correct: true },
            { text: 'Africa', correct: false },
            { text: 'North America', correct: false },
            { text: 'South America', correct: false }
        ]
    },

    {
        question: 'who is the greatest footballer of all time?',
        answers: [
            { text: 'Pele', correct: false },
            { text: 'Diego Maradona', correct: false },
            { text: 'Lionel Messi', correct: false },
            { text: 'Cristiano Ronaldo', correct: true }
        ]
    },

    {
        question: 'What does the acronym "HTML" stand for?',
        answers: [
            { text: 'HyperText Markup Language', correct: true },
            { text: 'High-Level Machine Language', correct: false },
            { text: 'Hyperlink and Text Markup Language', correct: false },
            { text: 'Home Tool Markup Language', correct: false }
        ]
    },

    {
        question: 'What does the acronym "CSS" stand for?',
        answers: [
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Colorful Style Sheets', correct: false },
            { text: 'Creative Style Sheets', correct: false }
        ]
    },

    {
        question: 'What does the acronym "JS" stand for in programming?',
        answers: [
            { text: 'JavaScript', correct: true },
            { text: 'Java Source', correct: false },
            { text: 'Jupiter Script', correct: false },
            { text: 'Job Search', correct: false }
        ]
    },

    {
        question: 'What does the acronym "API" stand for?',
        answers: [
            { text: 'Application Programming Interface', correct: true },
            { text: 'Advanced Persistent Identifier', correct: false },
            { text: 'Automated Process Integration', correct: false },
            { text: 'Audio Processing Interface', correct: false }
        ]
    },

    {
        question : 'What does the acronym "SQL" stand for?',
        answers: [
            { text: 'Structured Query Language', correct: true },
            { text: 'Simple Query Language', correct: false },
            { text: 'Standard Query Language', correct: false },
            { text: 'System Query Language', correct: false }
        ]
    }
]

startQuiz();

function startQuiz() {
    score = 0;
    questionContainer.style.display = "flex";
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    nextButton.classList.remove("hide");
    restartButton.classList.add("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index)=> {
        const inputGroup  = document.createElement("div");
        inputGroup.classList.add("input-group");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = "answer" + index;
        radio.name = "answer";
        radio.value = index;

        const label = document.createElement("label");
        label.htmlFor = "answer" + index;
        label.innerText = answer.text;

        inputGroup.appendChild(radio);
        inputGroup.appendChild(label);
        answerButtons.appendChild(inputGroup);
    
    });
}

function resetState() {
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    const answerIndex = Array.from(
        answerButtons.querySelectorAll("input")
    ).findIndex((radio) => radio.checked);

    if (answerIndex !== -1) {
        if (shuffledQuestions[currentQuestionIndex].answers[answerIndex].correct){
            score++;
        }
        currentQuestionIndex++;
        if (shuffledQuestions.length > currentQuestionIndex){
            setNextQuestion();
    }else {
        endQuiz();
    }
    }else{
        alert("please select an answer.");
    }
});
restartButton.addEventListener("click", startQuiz);
function endQuiz() {
    questionContainer.style.display = "none";
    nextButton.classList.add("hide");
    restartButton.classList.remove("hide");
    resultDiv.classList.remove("hide");
    resultDiv.innerText = `Quiz completed! Your score: ${score} out of ${shuffledQuestions.length}`;
}