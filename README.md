# TagalogKaMuna — Filipino (Tagalog) Practice Platform

A clean, responsive web app for practicing Filipino (Tagalog) through quizzes.

## Features

- **By Topic** — Basic, Grammar, Conversational, Cultural Insights, Idioms, Advanced Grammar, Reading, Writing, Pronunciation, Listening, Exam Prep
- **By Level** — Beginner → Intermediate → Advanced → Proficient
- **By Exam** — Filipino Language Proficiency Test, Tagalog Certification, PEPT, and more
- Working multiple-choice quizzes with instant feedback + explanations
- Score tracking & progress history (localStorage)
- Fully responsive

## How to Run

Open `index.html` in any modern browser, or deploy as Static Site on Render / GitHub Pages.

## Expanding Questions

Edit `questions.js`. Format:

```js
{
  q: "Tanong?",
  options: ["A", "B", "C", "D"],
  answer: 0,
  explanation: "Bakit tama...",
  level: "beginner"
}
```

Made for Filipino learners. 🇵🇭
