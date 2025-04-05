// Basketball Quiz Game
const basketballQuestions = [
  {
    question: "Who holds the NBA record for most points in a single game?",
    options: ["Kobe Bryant", "Michael Jordan", "Wilt Chamberlain", "LeBron James"],
    answer: 2,
    explanation: "Wilt Chamberlain scored 100 points in a game against the New York Knicks on March 2, 1962."
  },
  {
    question: "Which NBA team has won the most championships?",
    options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
    answer: 1,
    explanation: "The Boston Celtics have won 17 NBA championships, with the Lakers close behind at 17."
  },
  {
    question: "What is the height of an NBA basketball hoop from the floor?",
    options: ["9 feet", "10 feet", "11 feet", "12 feet"],
    answer: 1,
    explanation: "The standard height of a basketball hoop is 10 feet (3.05 meters) from the floor."
  },
  {
    question: "Who was the first NBA player to score 30,000 career points?",
    options: ["Kareem Abdul-Jabbar", "Wilt Chamberlain", "Michael Jordan", "Karl Malone"],
    answer: 0,
    explanation: "Kareem Abdul-Jabbar was the first NBA player to reach 30,000 points, a milestone he achieved in 1984."
  },
  {
    question: "How long is an NBA basketball game's regulation time?",
    options: ["40 minutes", "48 minutes", "50 minutes", "60 minutes"],
    answer: 1,
    explanation: "An NBA game consists of four 12-minute quarters, totaling 48 minutes of regulation play."
  },
  {
    question: "Which player has won the most NBA MVP awards?",
    options: ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar", "Bill Russell"],
    answer: 2,
    explanation: "Kareem Abdul-Jabbar has won the NBA MVP award 6 times."
  },
  {
    question: "What is the diameter of a basketball hoop?",
    options: ["16 inches", "18 inches", "20 inches", "22 inches"],
    answer: 1,
    explanation: "The diameter of a basketball hoop is 18 inches (45.7 cm)."
  },
  {
    question: "Which team drafted Kobe Bryant in 1996?",
    options: ["Los Angeles Lakers", "Charlotte Hornets", "Chicago Bulls", "Philadelphia 76ers"],
    answer: 1,
    explanation: "Kobe Bryant was drafted by the Charlotte Hornets with the 13th overall pick, then traded to the Lakers."
  },
  {
    question: "What is the 'three-second rule' in basketball?",
    options: [
      "Players can't hold the ball for more than 3 seconds",
      "Offensive players can't stay in the paint for more than 3 seconds",
      "Teams have 3 seconds to advance the ball past half-court",
      "Players have 3 seconds to shoot after receiving the ball"
    ],
    answer: 1,
    explanation: "The three-second rule prohibits offensive players from staying in the paint (restricted area) for more than 3 consecutive seconds."
  },
  {
    question: "Which country won the men's basketball gold medal at the 2020 Tokyo Olympics?",
    options: ["USA", "France", "Australia", "Spain"],
    answer: 0,
    explanation: "The United States won the gold medal in men's basketball at the 2020 Tokyo Olympics (held in 2021)."
  }
];

class BasketballQuizGame {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.isGameOver = false;
    this.timeRemaining = 15;
    this.timer = null;
  }

  startGame() {
    this.renderQuestion();
    this.startTimer();
  }

  startTimer() {
    this.timeRemaining = 15;
    this.updateTimerDisplay();
    clearInterval(this.timer);
    
    this.timer = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();
      
      if (this.timeRemaining <= 0) {
        clearInterval(this.timer);
        this.showCorrectAnswer();
        setTimeout(() => this.nextQuestion(), 2000);
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    timerEl.textContent = `Time: ${this.timeRemaining}s`;
    
    if (this.timeRemaining <= 5) {
      timerEl.classList.add('warning');
    } else {
      timerEl.classList.remove('warning');
    }
  }

  renderQuestion() {
    if (this.isGameOver) return;

    const question = this.questions[this.currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    
    questionContainer.innerHTML = `
      <div class="question-number">Question ${this.currentQuestionIndex + 1} of ${this.questions.length}</div>
      <h2>${question.question}</h2>
      <div class="options">
        ${question.options.map((option, index) => `
          <button class="option" data-index="${index}">${option}</button>
        `).join('')}
      </div>
      <div id="feedback" class="feedback"></div>
    `;

    // Add event listeners to options
    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        this.checkAnswer(parseInt(e.target.dataset.index));
      });
    });
  }

  checkAnswer(selectedIndex) {
    clearInterval(this.timer);
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const feedbackEl = document.getElementById('feedback');
    const optionButtons = document.querySelectorAll('.option');
    
    // Disable all buttons
    optionButtons.forEach(button => {
      button.disabled = true;
    });
    
    // Highlight correct answer
    optionButtons[currentQuestion.answer].classList.add('correct');
    
    if (selectedIndex === currentQuestion.answer) {
      this.score++;
      feedbackEl.innerHTML = `<span class="correct-text">Correct!</span> ${currentQuestion.explanation}`;
      feedbackEl.classList.add('show', 'correct-feedback');
    } else {
      optionButtons[selectedIndex].classList.add('incorrect');
      feedbackEl.innerHTML = `<span class="incorrect-text">Incorrect!</span> ${currentQuestion.explanation}`;
      feedbackEl.classList.add('show', 'incorrect-feedback');
    }
    
    setTimeout(() => this.nextQuestion(), 3000);
  }

  showCorrectAnswer() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const feedbackEl = document.getElementById('feedback');
    const optionButtons = document.querySelectorAll('.option');
    
    // Disable all buttons
    optionButtons.forEach(button => {
      button.disabled = true;
    });
    
    // Highlight correct answer
    optionButtons[currentQuestion.answer].classList.add('correct');
    
    feedbackEl.innerHTML = `<span class="timeout-text">Time's up!</span> ${currentQuestion.explanation}`;
    feedbackEl.classList.add('show', 'timeout-feedback');
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    
    if (this.currentQuestionIndex >= this.questions.length) {
      this.endGame();
    } else {
      this.renderQuestion();
      this.startTimer();
    }
  }

  endGame() {
    this.isGameOver = true;
    const questionContainer = document.getElementById('question-container');
    
    const percentage = Math.round((this.score / this.questions.length) * 100);
    
    let feedback;
    if (percentage >= 90) {
      feedback = "Amazing! You're a basketball expert!";
    } else if (percentage >= 70) {
      feedback = "Great job! You know your basketball!";
    } else if (percentage >= 50) {
      feedback = "Not bad! You have decent basketball knowledge!";
    } else {
      feedback = "Keep learning about basketball!";
    }
    
    questionContainer.innerHTML = `
      <h2>Quiz Complete!</h2>
      <div class="final-score">
        <p>Your score: ${this.score} out of ${this.questions.length}</p>
        <p>${feedback}</p>
      </div>
      <button id="restart-btn" class="restart-btn">Play Again</button>
    `;
    
    document.getElementById('restart-btn').addEventListener('click', () => {
      this.reset();
    });
  }

  reset() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.isGameOver = false;
    this.startGame();
  }
}

// Initialize the game when the page loads
window.onload = function() {
  // Create game container
  const gameContainer = document.createElement('div');
  gameContainer.className = 'basketball-quiz-container';
  gameContainer.innerHTML = `
    <h1>🏀 Basketball Quiz 🏀</h1>
    <div id="timer" class="timer">Time: 15s</div>
    <div id="question-container" class="question-container"></div>
  `;
  
  // Create and append style
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .basketball-quiz-container {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
      text-align: center;
      color: #e65100;
      margin-bottom: 20px;
    }
    
    .timer {
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 15px;
      color: #333;
    }
    
    .timer.warning {
      color: #d32f2f;
      animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    .question-number {
      text-align: right;
      color: #666;
      margin-bottom: 10px;
      font-size: 0.9rem;
    }
    
    .question-container {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    
    .question-container h2 {
      color: #333;
      margin-bottom: 20px;
      font-size: 1.3rem;
    }
    
    .options {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .option {
      background-color: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 12px 15px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s;
      text-align: left;
    }
    
    .option:hover:not([disabled]) {
      background-color: #e9ecef;
    }
    
    .option.correct {
      background-color: #c8e6c9;
      border-color: #81c784;
      color: #2e7d32;
    }
    
    .option.incorrect {
      background-color: #ffcdd2;
      border-color: #e57373;
      color: #c62828;
    }
    
    .option[disabled] {
      cursor: not-allowed;
      opacity: 0.8;
    }
    
    .feedback {
      height: 0;
      overflow: hidden;
      transition: height 0.3s;
      font-size: 1rem;
      padding: 0 15px;
      border-radius: 5px;
      margin-top: 0;
    }
    
    .feedback.show {
      height: auto;
      padding: 15px;
      margin-top: 15px;
    }
    
    .correct-feedback {
      background-color: #f1f8e9;
      border-left: 4px solid #7cb342;
    }
    
    .incorrect-feedback {
      background-color: #ffebee;
      border-left: 4px solid #e57373;
    }
    
    .timeout-feedback {
      background-color: #fff8e1;
      border-left: 4px solid #ffd54f;
    }
    
    .correct-text {
      color: #2e7d32;
      font-weight: bold;
    }
    
    .incorrect-text {
      color: #c62828;
      font-weight: bold;
    }
    
    .timeout-text {
      color: #f57f17;
      font-weight: bold;
    }
    
    .final-score {
      text-align: center;
      margin: 20px 0;
      font-size: 1.1rem;
    }
    
    .restart-btn {
      display: block;
      margin: 20px auto;
      padding: 12px 25px;
      background-color: #e65100;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .restart-btn:hover {
      background-color: #d84315;
    }
  `;
  
  // Add the game to the page
  document.body.appendChild(styleElement);
  document.body.appendChild(gameContainer);
  
  // Start the game
  const game = new BasketballQuizGame(basketballQuestions);
  game.startGame();
}; 