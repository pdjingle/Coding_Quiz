const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create questions
let questions = [
    {
        question : "What does HTML stand for?",
        choiceA : "Hypertext Markup Language",
        choiceB : "How To Make Language",
        choiceC : "How to Manulate Language",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        choiceA : "Central Style System",
        choiceB : "Cascading Style Sheets",
        choiceC : "Center Style System",
        correct : "B"
    },{
      question : "What does JS stand for?",
      choiceA : "Jpeg Storage",
      choiceB : "JQuery Start",
      choiceC : "Java Script",
      correct : "C"
  },{
    question : "What does PDF stand for?",
    choiceA : "Portable Document Format",
    choiceB : "Paperless Document Format",
    choiceC : "Printable Document Fonts",
    correct : "A"
},{
    question : "What is a computer terminal?",
    choiceA : "A system used for coding",
    choiceB : "A final message from the computer",
    choiceC : "A message when the computer is shut down",
    correct : "A"
    
  }
];

// variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 100; // 100px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// Right is green 
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// Wrong is red 
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}



















