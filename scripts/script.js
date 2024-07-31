let quizScore = 0;
let currentQuestion = 0;
let progressPercentage = 0;

let audio_success = new Audio('/assets/audio/success.mp3');
let audio_fail = new Audio('/assets/audio/fail.mp3');
let audio_trumpets = new Audio('/assets/audio/trumpets.mp3');


  function showQuestion() {
    let mainContentRef = document.getElementById('main-content');
    mainContentRef.innerHTML = getQuizTemplate();
    let question = questions[currentQuestion];

    document.getElementById('progress-bar').textContent = `${progressPercentage}%`
    document.getElementById('progress-bar').style = `width: ${progressPercentage}%`

    document.getElementById('question-text').textContent = question['question'];                 
    document.getElementById('answer-1').textContent = question['answer_1']; 
    document.getElementById('answer-2').textContent = question['answer_2']; 
    document.getElementById('answer-3').textContent = question['answer_3']; 
    document.getElementById('answer-4').textContent = question['answer_4']; 
    document.getElementById('questions-quantity').textContent = questions.length;
    document.getElementById('current-questions-number').textContent = currentQuestion + 1;
  }


function answer(answerCount) {
  let question = questions[currentQuestion];
  let questionNumber = answerCount.slice(-1);
  let rightAnswerId = `answer-${question['right_answer']}`;
  
  if (questionNumber == question['right_answer']) {
    document.getElementById(answerCount).parentElement.classList.add('bg-success');
    changeButtonAttributes();
    quizScore++;
    audio_success.play();
  } else {
    document.getElementById(answerCount).parentElement.classList.add('bg-danger');
    document.getElementById(rightAnswerId).parentElement.classList.add('bg-success');
    changeButtonAttributes();
    audio_fail.play();
  }
}


function changeButtonAttributes() {
  document.getElementById('answer-1').parentElement.disabled = true; 
  document.getElementById('answer-2').parentElement.disabled = true; 
  document.getElementById('answer-3').parentElement.disabled = true; 
  document.getElementById('answer-4').parentElement.disabled = true;
  document.getElementById('questions-quantity-btn').disabled = false;
}


function nextQuestion() {
  currentQuestion++;
  progressPercentage = currentQuestion / questions.length;
  progressPercentage = Math.round(progressPercentage * 100)
  if (currentQuestion >= questions.length) {
    document.getElementById('progress-bar').textContent = `${progressPercentage}%`
    document.getElementById('progress-bar').style = `width: ${progressPercentage}%`
    currentQuestion = 0;
    progressPercentage = 0;

    let mainContentRef = document.getElementById('main-content');
    mainContentRef.innerHTML = getEndScreenTemplate();
    quizScore = 0;
    audio_trumpets.play();
  } else {
    showQuestion();
  }
}
  
