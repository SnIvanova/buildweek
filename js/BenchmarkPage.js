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

let domanda = document.querySelector("#question");
let risposte = document.querySelector("#answer");
let domandaAttuale = 0;
let risposteUtente = [];

function show() {
    aggiornaDomanda();
}


function domandaSuccessiva() {
    domandaAttuale++;
    if (domandaAttuale < questions.results.length) {
        aggiornaDomanda();
        startTimer();
    } else {
        window.location.href = "ResultsPage.html";
    }
}

function aggiornaDomanda() {
    domanda.innerText = questions.results[domandaAttuale].question;
    risposte.innerHTML = '';

    let arr = [];
    arr.push(questions.results[domandaAttuale].correct_answer);
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
            }else{
              console.log("Sbagliato")
            }
            resetTimer();
            startTimer();
            domandaSuccessiva();
        })
        risposte.appendChild(div);
        div.appendChild(btn);
    }
    let contatore = document.querySelector(".contatore")
    for(let t=0; t < arr.length; t++){
        contatore.innerHTML = `<p>QUESTION ${domandaAttuale+1} <span>/ 13</span></p>`
    }
}

show();



const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 6;
const ALERT_THRESHOLD = 3;
const TIME_LIMIT = 10; // Assicurati di definire TIME_LIMIT

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
    clearInterval(timerInterval);  // Aggiungi questa riga per fermare il timer corrente
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


let risposteCorrette = [];
for (let t=0;t<questions.results.length;t++) {
  risposteCorrette.push(questions.results[t].correct_answer);
}
console.log(risposteCorrette)
function checkRisposte(){
  
}