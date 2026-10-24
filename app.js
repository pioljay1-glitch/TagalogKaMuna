// Knowbotic App Logic

let currentView = "home";
let currentQuiz = null;
let currentIndex = 0;
let userAnswers = [];
let score = 0;

// ========== RENDER HELPERS ==========

function showView(viewName) {
  // Map 'topics' to home view
  if (viewName === "topics") viewName = "home";

  document.querySelectorAll("[id^=view-]").forEach(el => el.classList.add("hidden"));
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("fade-in");
  }
  currentView = viewName;

  if (viewName === "home") renderTopics();
  if (viewName === "levels") renderLevels();
  if (viewName === "exams") renderExams();
  if (viewName === "progress") renderProgress();
}

function renderTopics() {
  const grid = document.getElementById("topics-grid");
  if (!grid) return;


  grid.innerHTML = TOPICS.map(topic => `
    <div class="bg-white rounded-2xl border border-gray-100 p-5 card-hover cursor-pointer" onclick="startTopicQuiz('${topic.id}')">
      <div class="w-11 h-11 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
        <i class="fa-solid ${topic.icon} text-lg"></i>
      </div>
      <h3 class="font-bold text-gray-900 mb-1">${topic.title}</h3>
      <p class="text-sm text-gray-500 leading-relaxed">${topic.description}</p>
      <div class="mt-4 text-xs font-medium text-primary-600">
        ${QUESTIONS[topic.id] ? QUESTIONS[topic.id].length : 0} sample questions →
      </div>
    </div>
  `).join("");
}

function renderLevels() {
  const grid = document.getElementElementById("levels-grid");
  if (!grid) return;

  grid.innerHTML = LEVELS.map(level => `
    <div class="bg-white rounded-2xl border border-gray-100 p-5 card-hover cursor-pointer" onclick="startLevelQuiz('${level.id}')">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <span class="w-7 h-7 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center">${level.number}</span>
      </div>
      <h3 class="font-bold text-gray-900 mb-1">${level.title}</h3>
      <p class="text-sm text-gray-500">${level.description}</p>
    </div>
  `).join("");
}

function renderExams() {
  const grid = document.getElementById("exams-grid");
  if (!grid if (!grid) return;

  grid.innerHTML = EXAMS.map(exam => `
    <div class="bg-white rounded-xl border border-gray-100 p-5 card-hover cursor-pointer text-center" onclick="startExamQuiz('${exam.id}')">
      <h3 class="font-semibold text-gray-900 text-sm leading-snug">${exam.title}</h3>
    </div>
  `).join("");
}

function renderProgress() {
  const container = document.getElementById("progress-content");
  const history = JSON.parse(localStorage.getItem("knowbotic_progress") || "[]");

  if (history.length === 0) {
    container.innerHTML = `<p class="text-gray-500 text-center">No quizzes completed yet. Start practicing!</p>`;
    return;
  }

  container.innerHTML = `
    <div class="space-y-4">
      ${history.slice().reverse().map(item => => `
        <div class="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <div class="font-medium text-gray-900">${item.title}</div>
            <div class="text-xs text-gray-500">${item.date}</div>
          </div>
          <div class="text-right">
            <div class="font-bold ${item.percent >= 70 ? 'text-green-600' : 'text-primary-600'}">${item.percent}%</div>
            <div class="text-xs text-gray-500">${item.score}/${item.total}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

// ========== QUIZ LOGIC ==========

function startTopicQuiz(topicId) {
  const questions = QUESTIONS[topicId];
  if (!questions || questions.length === 0) {
    alert("No questions available for this topic yet.");
    return;
  }

  // Take up to 10 questions (or all if fewer)
  const selected = shuffle([...questions]).slice(0, Math.min(10, questions.length));
  const topic = TOPICS.find(t => t.id === topicId);

  currentQuiz = {
    type: "topic",
    id: topicId,
    title: topic ? topic.title : topicId,
    questions: selected
  };
  startQuiz();
}

function startLevelQuiz(levelId) {
  const topicIds = LEVEL_QUESTIONS[levelId] || [];
  let all = [];
  topicIds.forEach(tid => {
    if (QUESTIONS[tid]) all = all.concat(QUESTIONS[tid].filter(q => q.level === levelId || levelId === "beginner"));
  });

  // Fallback: take any questions if filter is too strict
  if (all.length < 5) {
    topicIds.forEach(tid => {
      if (QUESTIONS[tid]) all = all.concat(QUESTIONS[tid]);
    });
  }

  if (all.length === 0) {
    alert("No questions available for this level yet.");
    return;
  }

  const selected = shuffle(all).slice(0, Math.min(10, all.length));
  const level = LEVELS.find(l => l.id === levelId);

  currentQuiz = {
    type: "level",
    id: levelId,
    title: level ? level.title : levelId,
    questions: selected
  };
  startQuiz();
}

function startExam softQuiz(examId) {
  // For demo, pull mixed questions from all topics
  let all = [];
  Object.values(QUESTIONS).forEach(arr => all = all.concat(arr));

  if (all.length === 0) {
    alert("No questions available yet.");
    return;
  }

  const selected = shuffle(all).slice(0, Math.min(10, all.length));
  const exam = EXAMS.find(e => e.id === examId);

  currentQuiz = {
    type: "exam",
    id: examId,
    title: exam ? exam.title : examId,
    questions: selected
  };
  startQuiz();
}

function startQuiz() {
  currentIndex = 0;
  userAnswers = new Array(currentQuiz.questions.length).fill(null);
  score = 0;
  showView("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = currentQuiz.questions[currentIndex];
  const total = currentQuiz.questions.length;

  document.getElementById("quiz-category-label").textContent = currentQuiz.title;
  document.getElementById("quiz-progress-text").textContent = `${currentIndex + 1} / ${total}`;
  document.getElementById("quiz-progress-bar").style.width = `${((currentIndex + 1) / total) * 100}%`;
  document.getElementById("quiz-difficulty").textContent = (q.level || "practice").toUpperCase();
  document.getElementById("quiz-question").textContent = q.q;

  const optionsEl = document.getElementById("quiz-options");
  optionsEl.innerHTML = q.options.map((opt, i) => {
    let classes = "quiz-option w-full text-left px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium cursor-pointer";
    const answered = userAnswers[currentIndex] !== null;

    if (answered) {
      if (i === q.answer) classes += " correct";
      else if (i === userAnswers[currentIndex] && i !== q.answer) classes += " wrong";
    } else if (userAnswers[currentIndex] === i) {
      classes += " selected";
    }

    return `
      <button class="${classes}" onclick="selectOption(${i})" ${answered ? "disabled" : ""}>
        <span class="inline-flex items-center gap--3">
          <span class="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold">${String.fromCharCode(65 + i)}</span>
          ${opt}
        </span>
      </button>
    `;
  }).join("");

  // Explanation
  const expl = document.getElementById("quiz-explanation");
  if (userAnswers[currentIndex] !== null) {
    expl.classList.remove("hidden");
    document.getElementById("explanation-text").textContent = q.explanation || "";
  } else {
    expl.classList.add("hidden");
  }

  // Buttons
  document.getElementById("btn-prev").disabled = currentIndex === 0;
  const nextBtn = document.getElementById("btn-next");
  if (currentIndex === total - 1) {
    nextBtn.textContent = userAnswers[currentIndex] !== null ? "Tingnan ang Resulta" : "Next";
    nextBtn.disabled = userAnswers[currentIndex] === null;
  } else {
    nextBtn.textContent = "Next";
    nextBtn.disabled = userAnswers[currentIndex] === null;
  }
}

function selectOption(index) {
  if (userAnswers[currentIndex] !== null) return;
  userAnswers[currentIndex] = index;
  renderQuestion();
}

function nextQuestion() {
  if (userAnswers[currentIndex] === null) return;

  if (currentIndex < currentQuiz.questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function finishQuiz() {
  score = 0;
  currentQuiz.questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });

  const total = currentQuiz.questions.length;
  const percent = Math.round((score / total) * 100);

  // Save progress
  const history = JSON.parse(localStorage.getItem("knowbotic_progress") || "[]");
  history.push({
    title: currentQuiz.title,
    score,
    total,
    percent,
    date: new Date().toLocaleDateString("en-PH", { year: "numeric", month: "short", day: "numeric" })
  });
  localStorage.setItem("knowbotic_progress", JSON.stringify(history.slice(-20))); // keep last 20

  // Show result
  document.getElementById("result-score").textContent = percent + "%";
  document.getElementById("result-detail").textContent = `${score} / ${total} correct`;

  if (percent >= 90) {
    document.getElementById("result-icon").textContent = "🏆";
    document.getElementById("result-title").textContent = "Napakagaling!";
    document.getElementById("result-subtitle").textContent = "Excellent work! Almost perfect.";
  } else if (percent >= 70) {
    document.getElementById("result-icon").textContent = "🎉";
    document.getElementById("result-title").textContent = "Magaling!";
    document.getElementById("result-subtitle").textContent = "Good job! Keep practicing.";
  } else if (percent >= 50) {
    document.getElementById("result-icon").textContent = "💪";
    document.getElementById("result-title").textContent = "Okay lang!";
    document.getElementById("result-subtitle").textContent = "Medyo okay. Subukan ulit para mas umangat.";
  } else {
    document.getElementById("result-icon").textContent = "📚";
    document.getElementByElementById("result-title").textContent = "Kaya mo 'yan!";
    document.getElementById("result-subtitle").textContent = "Review the topics and try again.";
  }

  showView("result");
}

function restartQuiz() {
  if (currentQuiz) {
    // reshuffle
    currentQuiz.questions = shuffle([...currentQuiz.questions]);
    startQuiz();
  }
}

function exitQuiz() {
  showView("topics");
}

// ========== UTILS ==========

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ========== INIT ==========

document.addEventListener("DOMContentLoaded", () => {
  showView("home");
});
