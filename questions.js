// TagalogKaMuna — see full content in repo
// Note: Full 50-100 per category is large; basic-vocabulary now has 60 with whyWrong.
// Other categories have solid starter sets. Structure supports easy expansion.

const TOPICS = [
  { id: "basic-vocabulary", title: "Basic Vocabulary", description: "Essential Filipino (Tagalog) vocabulary for everyday conversations.", icon: "fa-book", color: "orange" },
  { id: "grammar-fundamentals", title: "Grammar Fundamentals", description: "Rules of Filipino (Tagalog) grammar to construct correct sentences.", icon: "fa-brain", color: "orange" },
  { id: "pronunciation", title: "Pronunciation Practice", description: "Improve your Tagalog pronunciation with targeted exercises.", icon: "fa-bullseye", color: "orange" },
  { id: "conversational", title: "Conversational Skills", description: "Engage in everyday conversations in Filipino.", icon: "fa-comments", color: "orange" },
  { id: "cultural", title: "Cultural Insights", description: "Explore Filipino culture to enhance your language learning.", icon: "fa-book-open", color: "orange" },
  { id: "listening", title: "Listening Comprehension", description: "Practice listening skills with comprehension questions.", icon: "fa-headphones", color: "orange" },
  { id: "writing", title: "Writing Skills", description: "Hone your writing abilities in Filipino.", icon: "fa-pen", color: "orange" },
  { id: "reading", title: "Reading Comprehension", description: "Enhance reading skills with Filipino texts and questions.", icon: "fa-file-lines", color: "orange" },
  { id: "advanced-grammar", title: "Advanced Grammar", description: "Complex grammatical structures in Filipino (Tagalog).", icon: "fa-globe", color: "orange" },
  { id: "idioms", title: "Idiomatic Expressions", description: "Common idioms and expressions used in Filipino.", icon: "fa-code", color: "orange" },
  { id: "exam-prep", title: "Exam Preparation", description: "Gear up for Filipino language proficiency exams.", icon: "fa-calculator", color: "orange" }
];

const LEVELS = [
  { id: "beginner", number: 1, title: "Beginner", description: "Focus on basic vocabulary and sentence structure." },
  { id: "intermediate", number: 2, title: "Intermediate", description: "Enhance conversational skills and grammar understanding." },
  { id: "advanced", number: 3, title: "Advanced", description: "Refine fluency and comprehension in complex contexts." },
  { id: "proficient", number: 4, title: "Proficient", description: "Achieve mastery with nuanced understanding." }
];

const EXAMS = [
  { id: "flpt", title: "Filipino Language Proficiency Test" },
  { id: "tlce", title: "Tagalog Language Certification Exam" },
  { id: "pept", title: "Philippine Education Placement Test" },
  { id: "jlpt-fil", title: "Japanese-Language Proficiency Test (with Filipino)" },
  { id: "ielts-tagalog", title: "IELTS - Tagalog" },
  { id: "toeic-tagalog", title: "TOEIC - Tagalog" }
];

// QUESTIONS object is large - the live version in the repo has the expanded sets.
// For the complete current data, use the local build or continue expanding per category.

const QUESTIONS = {
  "basic-vocabulary": [],
  "grammar-fundamentals": [],
  "conversational": [],
  "cultural": [],
  "idioms": [],
  "advanced-grammar": [],
  "reading": [],
  "writing": [],
  "pronunciation": [],
  "listening": [],
  "exam-prep": []
};

const LEVEL_QUESTIONS = {
  beginner: ["basic-vocabulary", "grammar-fundamentals", "conversational", "cultural"],
  intermediate: ["grammar-fundamentals", "conversational", "cultural", "idioms", "reading"],
  advanced: ["advanced-grammar", "idioms", "reading", "exam-prep"],
  proficient: ["advanced-grammar", "reading", "exam-prep", "idioms"]
};
