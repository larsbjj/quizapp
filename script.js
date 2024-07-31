let questions = [
    {
        "question": "Welches HTML-Element wird verwendet, um eine Überschrift erster Ordnung zu erstellen?",
        "answer_1": "<header>",
        "answer_2": "<h1>",
        "answer_3": "<heading>",
        "answer_4": "<title>",
        "right_answer": 2
    },
    {
        "question": "Welches Attribut wird verwendet, um einen Link zu einem externen Stylesheet herzustellen?",
        "answer_1": "src",
        "answer_2": "style",
        "answer_3": "link",
        "answer_4": "href",
        "right_answer": 4
    },
    {
        "question": "Welches HTML-Element wird für ungeordnete Listen verwendet?",
        "answer_1": "<ol>",
        "answer_2": "<li>",
        "answer_3": "<ul>",
        "answer_4": "<list>",
        "right_answer": 3
    },
    {
        "question": "Welche CSS-Eigenschaft wird verwendet, um den Abstand zwischen Elementen zu definieren?",
        "answer_1": "spacing",
        "answer_2": "margin",
        "answer_3": "padding",
        "answer_4": "border",
        "right_answer": 2
    },
    {
        "question": "Wie wählt man in CSS alle Elemente mit der Klasse \"highlight\" aus?",
        "answer_1": "#highlight",
        "answer_2": "highlight",
        "answer_3": ".highlight",
        "answer_4": "*highlight",
        "right_answer": 3
    },
    {
        "question": "Welche CSS-Eigenschaft wird verwendet, um die Schriftgröße zu ändern?",
        "answer_1": "text-size",
        "answer_2": "font-size",
        "answer_3": "size",
        "answer_4": "text-style",
        "right_answer": 2
    },
    {
        "question": "Welche Methode wird verwendet, um ein Element im DOM zu selektieren?",
        "answer_1": "selectElement()",
        "answer_2": "findElement()",
        "answer_3": "getElementById()",
        "answer_4": "getElementByName()",
        "right_answer": 3
    },
    {
        "question": "Welches Schlüsselwort wird in modernem JavaScript empfohlen, um eine Variable mit Block-Scope zu deklarieren?",
        "answer_1": "var",
        "answer_2": "const",
        "answer_3": "let",
        "answer_4": "block",
        "right_answer": 3
    },
    {
        "question": "Welche Methode wird verwendet, um ein Element an das Ende eines Arrays hinzuzufügen?",
        "answer_1": "append()",
        "answer_2": "add()",
        "answer_3": "push()",
        "answer_4": "insert()",
        "right_answer": 3
    }
]
      

let currentQuestion = 0;


  function startQuiz() {
    let mainContentRef = document.getElementById('main-content');
    mainContentRef.innerHTML = getQuizTemplate();

    let question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question['question'];                 
    document.getElementById('answer-1').textContent = question['answer_1']; 
    document.getElementById('answer-2').textContent = question['answer_2']; 
    document.getElementById('answer-3').textContent = question['answer_3']; 
    document.getElementById('answer-4').textContent = question['answer_4']; 
    document.getElementById('questions-quantity').textContent = questions.length; 
  }


function answer(answerCount) {
  let question = questions[currentQuestion];
  let questionNumber = answerCount.slice(-1);
  
  if (questionNumber == question['right_answer']) {
    document.getElementById(answerCount).parentElement.classList.add('bg-success'); 
  } else {
    document.getElementById(answerCount).parentElement.classList.add('bg-danger'); 
  }
}


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
    <span><b>1</b> von <b id="questions-quantity"></b> Fragen</span>
    <button class="btn btn-primary">Nächste Frage</button>
  </div>
</div>`
}
  
