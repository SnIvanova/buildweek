const questions = {
    "response_code": 0,
    "results": [
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What does the MP stand for in MP3?",
            "correct_answer": "Moving Picture",
            "incorrect_answers": ["Music Player", "Multi Pass", "Micro Point"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What does GHz stand for?",
            "correct_answer": "Gigahertz",
            "incorrect_answers": ["Gigahotz", "Gigahetz", "Gigahatz"]
        },
        {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The programming language Python is based off a modified version of JavaScript.",
            "correct_answer": "False",
            "incorrect_answers": ["True"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "HTML is what type of language?",
            "correct_answer": "Markup Language",
            "incorrect_answers": ["Macro Language", "Programming Language", "Scripting Language"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "If you were to code software in this language you'd only be able to type 0's and 1's.",
            "correct_answer": "Binary",
            "incorrect_answers": ["JavaScript", "C++", "Python"]
        },
{
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the most preferred image format used for logos in the Wikimedia database?",
            "correct_answer": ".svg",
            "incorrect_answers": [".png", ".jpeg", ".gif"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the code name for the mobile operating system Android 7.0?",
            "correct_answer": "Nougat",
            "incorrect_answers": ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "On Twitter, what was the original character limit for a Tweet?",
            "correct_answer": "140",
            "incorrect_answers": ["120", "160", "100"]
        },
        {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "easy",
            "question": "HTML stands for Hypertext Markup Language.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
        {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The Windows 7 operating system has six main editions.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
{
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The Windows ME operating system was released in the year 2000.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How many values can a single byte represent?",
            "correct_answer": "256",
            "incorrect_answers": ["8", "1", "1024"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What language does Node.js use?",
            "correct_answer": "JavaScript",
            "incorrect_answers": ["Java", "Java Source", "Joomla Source Code"]
        }
    ]
};

const questionElement = document.querySelector("#question");
const answerContainer = document.querySelector("#answer");
const countElement = document.getElementById("count");
let currentQuestionIndex = 0;
let count = 15; 

function initializeQuiz() {
  displayQuestion();
  displayAnswers();
  startTimer();
  addAnswerClickListeners();
}

function startTimer() {
  const interval = setInterval(function () {
    countElement.innerHTML = count;
    count--;

    if (count < 0) {
      clearInterval(interval);
      countElement.innerHTML = "Time's up!";
      handleAnswerClick();
    }
  }, 1000);
}

function displayQuestion() {
  const currentQuestion = questions.results[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
}

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

function displayAnswers() {
  const currentQuestion = questions.results[currentQuestionIndex];
  const answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];
  shuffleArray(answers);

  answers.forEach(answer => {
    const div = document.createElement("div");
    div.innerText = answer;
    div.addEventListener("click", () => handleAnswerClick(answer));
    answerContainer.appendChild(div);
  });
}

function handleAnswerClick(selectedAnswer) {
  count = 15;


  nextQuestion();
}

function nextQuestion() {
  answerContainer.innerHTML = "";

  if (currentQuestionIndex < questions.results.length) {
    displayQuestion();
    displayAnswers();
  } else {

    console.log("Quiz completed!");
    countElement.innerHTML = "Quiz completed!";
  }
}

function addAnswerClickListeners() {
 
}

initializeQuiz();
