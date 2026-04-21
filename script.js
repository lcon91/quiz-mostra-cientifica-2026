// State
let currentScreen = 'screen-start';
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 10;
let isAnswered = false;

// DOM Elements
const screens = document.querySelectorAll('.screen');
const navItems = document.querySelectorAll('.nav-item');

// Quiz Elements
const currentQuestionNumEl = document.getElementById('current-question-num');
const quizProgressBar = document.getElementById('quiz-progress-bar');
const timerText = document.getElementById('timer-text');
const questionAbbreviation = document.getElementById('question-abbreviation');
const optionsContainer = document.getElementById('options-container');
const finalScoreEl = document.getElementById('final-score');
const scoreProgressBar = document.getElementById('score-progress-bar');

// Buttons
const btnStart = document.getElementById('btn-start');
const btnSkip = document.getElementById('btn-skip');
const btnPlayAgain = document.getElementById('btn-play-again');
const btnGoHome = document.getElementById('btn-go-home');
const btnGoLearn = document.getElementById('btn-go-learn');

// Search and Catalog
const searchInput = document.getElementById('search-input');
const catalogContainer = document.getElementById('catalog-container');

// Initialization
function init() {
    setupNavigation();
    setupButtons();
    populateCatalog();
    
    // Select Home nav by default
    document.querySelector('.nav-item[data-target="screen-start"]').classList.add('active');
}

// Screen Navigation
function navigateTo(screenId) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
    
    // Reset or start behaviors based on screen
    if (screenId !== 'screen-quiz') {
        stopTimer();
    }
    
    // Update bottom nav (only if it has a matching target)
    navItems.forEach(item => {
        if (!item.disabled) {
            item.classList.remove('active');
            if (item.dataset.target === screenId) {
                item.classList.add('active');
            }
        }
    });
}

function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.disabled && currentScreen !== 'screen-quiz') {
                navigateTo(item.dataset.target);
            } else if (currentScreen === 'screen-quiz' && !item.disabled) {
                // If leaving quiz midway, confirm or just leave? Let's just leave and reset.
                if(confirm("Deseja sair do quiz? Seu progresso será perdido.")) {
                    navigateTo(item.dataset.target);
                }
            }
        });
    });
}

function setupButtons() {
    btnStart.addEventListener('click', startQuiz);
    btnPlayAgain.addEventListener('click', startQuiz);
    btnGoHome.addEventListener('click', () => navigateTo('screen-start'));
    btnGoLearn.addEventListener('click', () => navigateTo('screen-learn'));
    
    btnSkip.addEventListener('click', () => {
        if(!isAnswered) {
            isAnswered = true;
            stopTimer();
            showCorrectAnswer();
            setTimeout(nextQuestion, 1500);
        }
    });

    searchInput.addEventListener('input', (e) => {
        populateCatalog(e.target.value);
    });
}

// Utilities
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Quiz Logic
function startQuiz() {
    // Pick 10 random questions
    quizQuestions = shuffleArray(questions).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    
    navigateTo('screen-quiz');
    loadQuestion();
}

function loadQuestion() {
    isAnswered = false;
    const q = quizQuestions[currentQuestionIndex];
    
    // Update UI
    currentQuestionNumEl.textContent = String(currentQuestionIndex + 1).padStart(2, '0');
    quizProgressBar.style.width = `${((currentQuestionIndex) / 10) * 100}%`;
    questionAbbreviation.textContent = q.abbreviation;
    
    // Render Options
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const shuffledOptions = shuffleArray(q.options);
    
    shuffledOptions.forEach((optText, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <div class="option-letter">${letters[index]}</div>
            <div class="option-text">${optText}</div>
        `;
        
        btn.addEventListener('click', () => handleAnswer(optText, q.meaning, btn));
        optionsContainer.appendChild(btn);
    });
    
    startTimer();
}

function handleAnswer(selectedOption, correctOption, btnElement) {
    if (isAnswered) return;
    isAnswered = true;
    stopTimer();
    
    const isCorrect = selectedOption === correctOption;
    if (isCorrect) {
        score++;
        btnElement.classList.add('correct');
    } else {
        btnElement.classList.add('wrong');
        showCorrectAnswer(correctOption);
    }
    
    disableAllOptions();
    
    // Wait ~1.5s then next
    setTimeout(nextQuestion, 1500);
}

function showCorrectAnswer(correctOption = null) {
    // If correctOption is null, find it via the data
    const q = quizQuestions[currentQuestionIndex];
    const correctText = correctOption || q.meaning;
    
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        if (btn.querySelector('.option-text').textContent === correctText) {
            btn.classList.add('correct');
        }
    });
    disableAllOptions();
}

function disableAllOptions() {
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    finalScoreEl.textContent = score;
    quizProgressBar.style.width = '100%'; // Complete the quiz bar visually before hiding
    
    setTimeout(() => {
        scoreProgressBar.style.width = `${(score / 10) * 100}%`;
        navigateTo('screen-results');
    }, 300);
}

// Timer Logic
function startTimer() {
    stopTimer(); // Ensure clear
    timeLeft = 10;
    timerText.textContent = timeLeft;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            stopTimer();
            if (!isAnswered) {
                isAnswered = true;
                showCorrectAnswer();
                setTimeout(nextQuestion, 1500);
            }
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Learn Mode Logic
function populateCatalog(filterText = '') {
    catalogContainer.innerHTML = '';
    
    // Sort alphabetically
    const sortedQuestions = [...questions].sort((a, b) => a.abbreviation.localeCompare(b.abbreviation));
    
    const filtered = sortedQuestions.filter(q => {
        const text = filterText.toLowerCase();
        return q.abbreviation.toLowerCase().includes(text) || q.meaning.toLowerCase().includes(text);
    });
    
    filtered.forEach((q, index) => {
        const card = document.createElement('div');
        // Make every alternating card slightly different or specifically the first one dark based on inspiration
        // For variety, let's make 1 in 5 cards dark
        card.className = `catalog-card ${index % 5 === 0 ? 'dark' : ''}`;
        
        card.innerHTML = `
            <div class="catalog-header">
                <div class="catalog-title">${q.abbreviation}</div>
            </div>
            <div class="catalog-meaning">${q.meaning}</div>
            <div class="catalog-desc">${q.description}</div>
            <div class="catalog-examples">
                Ex: "${q.examples.split('|').join('" / "')}"
            </div>
        `;
        
        catalogContainer.appendChild(card);
    });
}

// Start
document.addEventListener('DOMContentLoaded', init);
