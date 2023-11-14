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
let prova = questions.results[0].question
domanda.innerText = prova

let arr = []

arr.push(questions.results[0].correct_answer);
arr.push(questions.results[0].incorrect_answers[0]);
arr.push(questions.results[0].incorrect_answers[1]);
arr.push(questions.results[0].incorrect_answers[2]);

console.log(arr);

function show(){
    let risposte = document.querySelector("#answer")
    let arr2 = [];
    for(let i=0; i < arr.length; i++){
        arr2.push(arr[i]);
    }

    for (let i = arr2.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr2[i], arr2[j]] = [arr2[j], arr2[i]];
    }

    for(let z = 0; z < arr2.length; z++){
        let div = document.createElement("div");
        div.innerText = arr2[z];
        risposte.appendChild(div);
    }

}

show();

