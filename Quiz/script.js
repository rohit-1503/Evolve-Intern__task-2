const quizDB =[
    {
        question:" Q1: What is the capital of france?",
        a:"Paris",
        b:"London",
        c:"Berlin",
        d:"Madrid",
        ans:"ans1"
    },
    {
        question:" Q2: Which is the largest planet in our solar system?",
        a:"Saturn",
        b:"Mars",
        c:"Jupiter",
        d:"Neptune",
        ans:"ans3",
    },
    {
        question:" Q3: Which is the largest ocean on earth?",
        a:"Arctic Ocean",
        b:"Atlantic Ocean",
        c:"Pacific Ocean",
        d:"Indian Ocean",
        ans:"ans3",
    },
    {
        question:"Q4:What is chemical symbol for gold?",
        a:"Au",
        b:"Cu",
        c:"Ag",
        d:"Fe",
        ans:"ans1",
    },
    {
        question:"Q5:What is the largest species of shark?",
        a:"Whale Shark",
        b:"Tiger Shark",
        c:"Great white Shark",
        d:"Hammerhead Shark",
        ans:"ans1",
    }

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

    
}

loadQuestion();

 const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
     if(curAnsElem.checked){
        answer = curAnsElem.id;
     }
    });
 
return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click' , () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer  ===  quizDB[questionCount].ans){
          score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} ✌️ </h3>
        <button class="btn" onclick="location.reload()">Play again</button>
       `;
       showScore.classList.remove('scoreArea');
    }

});