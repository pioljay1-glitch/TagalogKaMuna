# Knowbotic — Filipino (Tagalog) Practice Platform

AA clean, responsive web app for practicing Filipino (Tagalog) through quizzes. Inspired by modern language learning interfaces.

## Features

- **By Topic** — Basic Vocabulary, Grammar, Conversational Skills, Cultural Insights, Idioms, Advanced Grammar, Reading, Writing, Pronunciation, Listening, Exam Prep
- **By Level** — Beginner → Intermediate → Advanced → Proficient
- **By Exam** — Filipino Language Proficiency Test, Tagalog Certification, PEPT, and more
- Working multiple-choice quizzes with instant feedback + explanations
- Score tracking & progress history (saved in browser localStorage)
- Fully responsive (mobile, tablet, desktop)
- Philippine-friendly design

## How to Run

Just open `index.html` in any modern browser.  
Or use a local server:

```bash
npx serve .
```

## Expanding the Question Bank

Open `questions.js` and add more objects to the arrays under `QUESTIONS`.  
Each question follows this format:

```js
{
  q: "Ang tanong dito?",
  options: ["A", "B", "C", "D"],
  answer: 0,          // index of correct answer (0-3)
  explanation: "Bakit tama ang sagot...",
  level: "beginner"   // beginner | intermediate | advanced
}
```

Aim for 50–100 questions per category for a full production version.

## Tech Stack

- HTML + Tailwind CSS (CDN)
- Vanilla JavaScript
- Font Awesome icons
- LocalStorage for progress

Made for Filipino learners. 🇵🇭
