function getQuizTemplate() {
    return `<div class="col-md-9 quiz-cart">
  <h4 class="mb-4" id="question-text"></h4>
  <div class="list-group">
    <button type="button" class="quiz-button list-group-item list-group-item-action mb-3" onclick="answer('answer-1')">
      <span class="badge bg-secondary">A</span> <span></span> 
      <span class="ms-2" id="answer-1"></span> 
    </button> 
    <button type="button" class="quiz-button list-group-item list-group-item-action mb-3" onclick="answer('answer-2')">
      <span class="badge bg-secondary">B</span> 
      <span class="ms-2" id="answer-2"></span> 
    </button> 
    <button type="button" class="quiz-button list-group-item list-group-item-action mb-3" onclick="answer('answer-3')">
      <span class="badge bg-secondary">C</span>  
      <span class="ms-2" id="answer-3"></span> 
    </button> 
    <button type="button" class="quiz-button list-group-item list-group-item-action mb-4" onclick="answer('answer-4')">
      <span class="badge bg-secondary">D</span>
      <span class="ms-2" id="answer-4"></span>
    </button>
  </div>
  <div class="question-footer">
    <span><b id="current-questions-number"></b> von <b id="questions-quantity"></b> Fragen</span>
    <button class="btn btn-primary" id="questions-quantity-btn" onclick="nextQuestion()" disabled>Nächste Frage</button>
  </div>
</div>`
}


function getEndScreenTemplate() {
  return `<div class="end-screen-content">
  <img src="./assets/img/brain result.png" class="mb-2">
  <h2 class="mb-5">COMPLETE QUIZ</h2>
  <span class="mb-5" id="result-score"><b class="me-4" style="color: #F58732;">YOUR SCORE</b> <b id="quiz-score">${quizScore}</b><b>/</b><b>${questions.length}</b></span>
  <button class="btn btn-primary mb-2">SHARE</button>
  <button class="btn" onclick="showQuestion()">REPLAY</button>
</div>`
}