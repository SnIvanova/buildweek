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

const hardQuestions = {
  "response_code": 0,
    "results": [
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "What five letter word is the motto of the IBM Computer company?",
        correct_answer: "Think",
        incorrect_answers: ["Click", "Logic", "Pixel"]
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "How many bytes are in a single Kibibyte?",
        correct_answer: "1024",
        incorrect_answers: ["2400", "1000", "1240"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Science: Computers",
        question: "\"Windows NT\" is a monolithic kernel.",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "What is the main CPU in the Sega Mega Drive / Sega Genesis?",
        correct_answer: "Motorola 68000",
        incorrect_answers: ["Zilog Z80", "Yamaha YM2612", "Intel 8088"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Science: Computers",
        question: "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "In computing terms, typically what does CLI stand for?",
        correct_answer: "Command Line Interface",
        incorrect_answers: ["Common Language Input", "Control Line Interface", "Common Language Interface"]
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "While Apple was formed in California, in which western state was Microsoft founded?",
        correct_answer: "New Mexico",
        incorrect_answers: ["Washington", "Colorado", "Arizona"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Science: Computers",
        question: "The open source program Redis is a relational database server.",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        type: "multiple",
        difficulty: "hard",
        category: "Science: Computers",
        question: "What was the first commercially available computer processor?",
        correct_answer: "Intel 4004",
        incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"]
      },
      {
        type: "boolean",
        difficulty: "hard",
        category: "Science: Computers",
        question: "It's not possible to format a write-protected DVD-R Hard Disk.",
        correct_answer: "True",
        incorrect_answers: ["False"]
      }
    ]
  };


let domanda = document.querySelector("#question");
let risposte = document.querySelector("#answer");
let numero = document.querySelector(".numero");
let difficulty = localStorage.getItem("scelta");
let domandaAttuale = 0;
let score = 0;
let risposteUtente = [];
let risposteCorrette = [];

let indice = localStorage.getItem("indice");



for (let t=0;t<questions.results.length;t++) {
risposteCorrette.push(questions.results[t].correct_answer);
}

function show() {
  aggiornaDomanda();
}


function domandaSuccessiva() {
  domandaAttuale++;
  if (domandaAttuale < indice) {
      aggiornaDomanda();
      startTimer();
  } else {
      checkRisposte();
      storeResults();
      window.location.href = "ResultsPage.html";
  }
}


function aggiornaDomanda() {

  if(difficulty == "easy"){
    domanda.innerText = questions.results[domandaAttuale].question;
    console.log("ciao");
  }else if (difficulty == "hard"){
    domanda.innerText = hardQuestions.results[domandaAttuale].question;
    console.log("ciao");
  }
  
  risposte.innerHTML = '';

  let arr = [];
  let hardArr = [];
  arr.push(questions.results[domandaAttuale].correct_answer);
  hardArr.push(hardQuestions.results[domandaAttuale].correct_answer);



  if(difficulty == "easy"){
    for (let i=0;i<questions.results[domandaAttuale].incorrect_answers.length;i++) {
      arr.push(questions.results[domandaAttuale].incorrect_answers[i]);
    }

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for (let z = 0; z < arr.length; z++) {
        let div = document.createElement("div");
        let btn = document.createElement("button");
        btn.classList.add("bottone");
        btn.innerText = arr[z];
        div.classList.add("risposta")
        div.addEventListener("click", () =>{
            risposteUtente.push(btn.innerText)
            if(risposteCorrette.includes(btn.innerText)){
              console.log("Giusto");
              btn.style.backgroundColor = "green";
            }else{
              console.log("Sbagliato")
              btn.style.backgroundColor = "red";
            }
            resetTimer();
            setTimeout(() => {
              startTimer();
              domandaSuccessiva();
          }, 2000);
        })
        risposte.appendChild(div);
        div.appendChild(btn);
    }
    let contatore = document.querySelector(".contatore")
    for(let t=0; t < arr.length; t++){
        contatore.innerHTML = `<p>QUESTION ${domandaAttuale+1} <span>/ ${indice}</span></p>`
    }
  }else if(difficulty == "hard"){
    for (let i=0;i< hardQuestions.results[domandaAttuale].incorrect_answers.length;i++) {
      hardArr.push(hardQuestions.results[domandaAttuale].incorrect_answers[i]);
      
    }

    for (let i = hardQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for (let z = 0; z < hardArr.length; z++) {
        let div = document.createElement("div");
        let btn = document.createElement("button");
        btn.classList.add("bottone");
        btn.innerText = hardArr[z];
        div.classList.add("risposta")
        div.addEventListener("click", () =>{
            risposteUtente.push(btn.innerText)
            if(risposteCorrette.includes(btn.innerText)){
              console.log("Giusto");
              btn.style.backgroundColor = "green";
            }else{
              console.log("Sbagliato")
              btn.style.backgroundColor = "red";
            }
            resetTimer();
            setTimeout(() => {
              startTimer();
              domandaSuccessiva();
          }, 2000);
        })
        risposte.appendChild(div);
        div.appendChild(btn);
    }
    let contatore = document.querySelector(".contatore")
    for(let t=0; t < arr.length; t++){
        contatore.innerHTML = `<p>QUESTION ${domandaAttuale+1} <span>/ ${indice}</span></p>`
    }
  

  }else{

  }
  
}

show();



const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 6;
const ALERT_THRESHOLD = 3;
const TIME_LIMIT = 10; 

const COLOR_CODES = {
info: {
  color: "green",
},
warning: {
  color: "orange",
  threshold: WARNING_THRESHOLD,
},
alert: {
  color: "red",
  threshold: ALERT_THRESHOLD,
},
};

let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
<svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g class="base-timer__circle">
    <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
    <path
      id="base-timer-path-remaining"
      stroke-dasharray="283"
      class="base-timer__path-remaining ${remainingPathColor}"
      d="
      M 50, 50
      m -45, 0
      a 45,45 0 1,1 90,0
      a 45,45 0 1,1 -90,0
      "
    ></path>
  </g>
</svg>
<span id="base-timer-label" class="base-timer__label">${formatTime(
  timeLeft
)}</span>
</div>
`;

function resetTimer() {
  timeLeft = TIME_LIMIT;
  timePassed = 0;
  setRemainingPathColor(timeLeft);
  setCircleDasharray();
  document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
  clearInterval(timerInterval);  
}
function startTimer() {
clearInterval(timerInterval);
timeLeft = TIME_LIMIT;
timePassed = 0;
let initialColor = COLOR_CODES.info.color;

document.getElementById("base-timer-path-remaining").classList.remove(
  COLOR_CODES.alert.color,
  COLOR_CODES.warning.color
);
document.getElementById("base-timer-path-remaining").classList.add(initialColor);


timerInterval = setInterval(() => {
  if (timeLeft > 0) {
      timePassed+= 1;
      timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
   
    setCircleDasharray();
setRemainingPathColor(timeLeft);
  }else if (timeLeft === 0) {
      timeLeft=0;
      clearInterval(timerInterval);
      document.getElementById("base-timer-path-remaining").classList.remove(COLOR_CODES.alert.color, COLOR_CODES.warning.color);
      document.getElementById("base-timer-path-remaining").classList.add(initialColor);
      resetTimer();
          startTimer();
          domandaSuccessiva(); 
      
  } else {
      clearInterval(timerInterval);
      domandaSuccessiva();
   
  }
}, 1000);

}

function formatTime(time) {
const minutes = Math.floor(time / 60);
let seconds = time % 60;
if (seconds < 10) {
  seconds = `0${seconds}`;
}
return `<p class="textCont">SECONDS</p>${seconds}<p class="textCont">REMAINING</p>`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
    document.getElementById("base-timer-path-remaining").classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document.getElementById("base-timer-path-remaining").classList.remove(info.color);
    document.getElementById("base-timer-path-remaining").classList.add(warning.color);
  } else {
    document.getElementById("base-timer-path-remaining").classList.remove(alert.color, warning.color);
    document.getElementById("base-timer-path-remaining").classList.add(info.color);
  }
}

function calculateTimeFraction() {
const rawTimeFraction = timeLeft / TIME_LIMIT;
return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
const circleDasharray = 
`${(calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
document
.getElementById("base-timer-path-remaining")
.setAttribute("stroke-dasharray", circleDasharray);
}

startTimer();


console.log(risposteCorrette)
function checkRisposte(){
let score = 0;
for(let i = 0; i < risposteUtente.length; i++){
  localStorage.setItem('rispostaUtente' + i, risposteUtente[i]);
}
localStorage.setItem('totalRisposteUtente', risposteUtente.length);
console.log("Score: " + score);}



document.addEventListener('DOMContentLoaded', function () {
let match = localStorage.getItem('score');
let unmatch = questions.results.length - match;

});
function storeResults() {
for(let i = 0; i < risposteUtente.length; i++){
  if (risposteCorrette.includes(risposteUtente[i])) {
    score++;
  }
}
localStorage.setItem('totalQuestions', indice);
localStorage.setItem('score', score.toString());
localStorage.setItem('risposteUtente', risposteUtente.toString());
}