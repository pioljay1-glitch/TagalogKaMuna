// Knowbotic — Filipino (Tagalog) Question Bank
// Expand each array to 50–100 questions later

const TOPICS = [
  {
    id: "basic-vocabulary",
    title: "Basic Vocabulary",
    description: "Learn essential Filipino (Tagalog) vocabulary for everyday conversations.",
    icon: "fa-book",
    color: "orange"
  },
  {
    id: "grammar-fundamentals",
    title: "Grammar Fundamentals",
    description: "Understand the rules of Filipino (Tagalog) grammar to construct correct sentences.",
    icon: "fa-brain",
    color: "orange"
  },
  {
    id: "pronunciation",
    title: "Pronunciation Practice",
    description: "Improve your Tagalog pronunciation with targeted exercises.",
    icon: "fa-bullseye",
    color: "orange"
  },
  {
    id: "conversational",
    title: "Conversational Skills",
    description: "Develop your ability to engage in everyday conversations in Filipino.",
    icon: "fa-comments",
    color: "orange"
  },
  {
    id: "cultural",
    title: "Cultural Insights",
    description: "Explore Filipino culture to enhance your language learning experience.",
    icon: "fa-book-open",
    color: "orange"
  },
  {
    id: "listening",
    title: "Listening Comprehension",
    description: "Practice listening skills with audio resources and comprehension questions.",
    icon: "fa-headphones",
    color: "orange"
  },
  {
    id: "writing",
    title: "Writing Skills",
    description: "Hone your writing abilities in Filipino through structured exercises.",
    icon: "fa-pen",
    color: "orange"
  },
  {
    id: "reading",
    title: "Reading Comprehension",
    description: "Enhance your reading skills with various Filipino texts and questions.",
    icon: "fa-file-lines",
    color: "orange"
  },
  {
    id: "advanced-grammar",
    title: "Advanced Grammar",
    description: "Tackle complex grammatical structures in Filipino (Tagalog).",
    icon: "fa-globe",
    color: "orange"
  },
  {
    id: "idioms",
    title: "Idiomatic Expressions",
    description: "Learn common idioms and expressions used in Filipino.",
    icon: "fa-code",
    color: "orange"
  },
  {
    id: "exam-prep",
    title: "Exam Preparation",
    description: "Gear up for Filipino language proficiency exams with specific practice.",
    icon: "fa-calculator",
    color: "orange"
  }
];

const LEVELS = [
  {
    id: "beginner",
    number: 1,
    title: "Beginner",
    description: "Focus on basic vocabulary and sentence structure."
  },
  {
    id: "intermediate",
    number: 2,
    title: "Intermediate",
    description: "Enhance conversational skills and understanding of grammar rules."
  },
  {
    id: "advanced",
    number: 3,
    title: "Advanced",
    description: "Refine fluency and comprehension in complex contexts."
  },
  {
    id: "proficient",
    number: 4,
    title: "Proficient",
    description: "Achieve mastery in the language with nuanced understanding."
  }
];

const EXAMS = [
  { id: "flpt", title: "Filipino Language Proficiency Test" },
  { id: "tlce", title: "Tagalog Language Certification Exam" },
  { id: "pept", title: "Philippine Education Placement Test" },
  { id: "jlpt-fil", title: "Japanese-Language Proficiency Test (with Filipino)" },
  { id: "ielts-tagalog", title: "International Language Testing System (IELTS) - Tagalog" },
  { id: "toeic-tagalog", title: "Test of English for International Communication (TOEIC) - Tagalog" }
];

// ========== QUESTION BANK ==========
// Format: { q, options: [a,b,c,d], answer: 0-3, explanation, level }

const QUESTIONS = {
  "basic-vocabulary": [
    {
      q: "Ano ang Tagalog ng 'house'?",
      options: ["Bahay", "Kotse", "Aso", "Puno"],
      answer: 0,
      explanation: "'Bahay' ang karaniwang salita para sa house o tahanan.",
      level: "beginner"
    },
    {
      q: "Ano ang ibig sabihin ng 'salamat'?",
      options: ["Paalam", "Salamat / Thank you", "Oo", "Hindi"],
      answer: 1,
      explanation: "'Salamat' ang standard na paraan ng pagsasabi ng 'thank you' sa Filipino.",
      level: "beginner"
    },
    {
      q: "Alin ang tamang salita para sa 'water'?",
      options: ["Tubig", "Apoy", "Hangin", "Lupa"],
      answer: 0,
      explanation: "'Tubig' ang Tagalog ng water.",
      level: "beginner"
    },
    {
      q: "Ano ang tawag sa 'mother' sa Filipino?",
      options: ["Ama", "Kuya", "Ina / Nanay", "Ate"],
      answer: 2,
      explanation: "'Ina' o 'Nanay' ang ginagamit para sa mother.",
      level: "beginner"
    },
    {
      q: "Ano ang ibig sabihin ng 'maganda'?",
      options: ["Mabait", "Maganda / Beautiful", "Mabilis", "Malaki"],
      answer: 1,
      explanation: "'Maganda' ang adjective para sa beautiful o pretty.",
      level: "beginner"
    },
    {
      q: "Ano ang Tagalog ng 'friend'?",
      options: ["Kaibigan", "Kapatid", "Kapitbahay", "Kamag-anak"],
      answer: 0,
      explanation: "'Kaibigan' ang salita para sa friend.",
      level: "beginner"
    },
    {
      q: "Alin ang hindi pagkain?",
      options: ["Kanin", "Isda", "Kotse", "Gulay"],
      answer: 2,
      explanation: "'Kotse' ay sasakyan, hindi pagkain.",
      level: "beginner"
    },
    {
      q: "Ano ang ibig sabihin ng 'umaga'?",
      options: ["Gabi", "Hapon", "Umaga / Morning", "Tanghali"],
      answer: 2,
      explanation: "'Umaga' ay morning.",
      level: "beginner"
    },
    {
      q: "Ano ang Tagalog ng 'book'?",
      options: ["Papel", "Aklat / Libro", "Lamesa", "Silya"],
      answer: 1,
      explanation: "'Aklat' o 'Libro' ang ginagamit para sa book.",
      level: "beginner"
    },
    {
      q: "Ano ang tawag sa 'teacher' sa Filipino?",
      options: ["Doktor", "Guro / Titser", "Abogado", "Magsasaka"],
      answer: 1,
      explanation: "'Guro' ang pormal na salita; 'Titser' din ang karaniwang gamit.",
      level: "beginner"
    },
    {
      q: "Ano ang ibig sabihin ng 'mabilis'?",
      options: ["Mabagal", "Mabilis / Fast", "Mababa", "Mataas"],
      answer: 1,
      explanation: "'Mabilis' ang adjective para sa fast o quick.",
      level: "beginner"
    },
    {
      q: "Alin ang tamang salita para sa 'night'?",
      options: ["Araw", "Gabi", "Buwan", "Bituin"],
      answer: 1,
      explanation: "'Gabi' ang Tagalog ng night.",
      level: "beginner"
    }
  ],

  "grammar-fundamentals": [
    {
      q: "Alin ang tamang pangungusap?",
      options: ["Ako ay kumain ng mansanas.", "Ako kumain mansanas.", "Kumain ako ng mansanas ay.", "Mansanas ako kumain."],
      answer: 0,
      explanation: "Tamang ayos ng salita: Subject + Linker + Verb + Object. 'Ako ay kumain ng mansanas' ay tama.",
      level: "beginner"
    },
    {
      q: "Ano ang gamit ng 'ng' sa pangungusap na 'Kumain ako ng tinapay'?",
      options: ["Pang-uri", "Pang-angkop / Marker ng object", "Pandiwa", "Panghalip"],
      answer: 1,
      explanation: "Ang 'ng' ay object marker sa Tagalog.",
      level: "beginner"
    },
    {
      q: "Alin ang tamang anyo ng pandiwa para sa 'kumain' sa hinaharap?",
      options: ["Kumain", "Kakain", "Kumakain", "Kinain"],
      answer: 1,
      explanation: "'Kakain' ang future aspect ng 'kain'.",
      level: "intermediate"
    },
    {
      q: "Ano ang tawag sa mga salitang 'ako', 'ikaw', 'siya'?",
      options: ["Pangngalan", "Panghalip", "Pandiwa", "Pang-uri"],
      answer: 1,
      explanation: "Ito ay mga panghalip (pronouns).",
      level: "beginner"
    },
    {
      q: "Alin ang tamang paggamit ng 'ang'?",
      options: ["Kumain ang tinapay ako.", "Ang bata ay natutulog.", "Ako ang kumain tinapay.", "Natutulog bata ang."],
      answer: 1,
      explanation: "'Ang' ang subject marker. 'Ang bata ay natutulog' ay tama.",
      level: "beginner"
    },
    {
      q: "Ano ang aspect ng pandiwang 'kumakain'?",
      options: ["Completed (Perfective)", "Incomplete / Progressive", "Contemplated (Future)", "Infinitive"],
      answer: 1,
      explanation: "'Kumakain' ay incomplete/progressive aspect (kasalukuyan).",
      level: "intermediate"
    },
    {
      q: "Alin ang tamang linker?",
      options: ["Magandang araw", "Maganda araw", "Maganda na araw", "Magandang ng araw"],
      answer: 0,
      explanation: "Kapag nagtatapos ang unang salita sa katinig, ginagamit ang '-ng' (maganda + ng = magandang).",
      level: "beginner"
    },
    {
      q: "Ano ang focus ng pangungusap na 'Binasa ni Maria ang libro'?",
      options: ["Actor focus", "Object focus", "Locative focus", "Benefactive focus"],
      answer: 1,
      explanation: "Dahil sa 'binasa' (in- + basa) at 'ang libro', ito ay object focus.",
      level: "advanced"
    },
    {
      q: "Alin ang tamang paggamit ng 'sa'?",
      options: ["Pumunta ako sa palengke.", "Pumunta ako ng palengke.", "Pumunta ako ang palengke.", "Pumunta ako ay palengke."],
      answer: 0,
      explanation: "'Sa' ang directional/locative marker. 'Pumunta ako sa palengke' ay tama.",
      level: "beginner"
    },
    {
      q: "Ano ang root word ng 'naglalakad'?",
      options: ["Lakad", "Nag", "La", "Kad"],
      answer: 0,
      explanation: "Ang root ay 'lakad'. Ang 'nag-' at reduplication ay affixes.",
      level: "intermediate"
    }
  ],

  "conversational": [
    {
      q: "Paano mo babatiin ang isang kaibigan sa umaga?",
      options: ["Magandang gabi!", "Magandang umaga!", "Tulog ka na!", "Anong oras na?"],
      answer: 1,
      explanation: "'Magandang umaga!' ang angkop na bati sa umaga.",
      level: "beginner"
    },
    {
      q: "Ano ang isasagot mo kung may nagtanong ng 'Kumusta ka?'",
      options: ["Aalis na ako.", "Mabuti naman, salamat!", "Wala akong pera.", "Hindi ko alam."],
      answer: 1,
      explanation: "Karaniwang sagot: 'Mabuti naman' o 'Okay lang, salamat'.",
      level: "beginner"
    },
    {
      q: "Paano magpaalam nang magalang?",
      options: ["Sige, bye!", "Paalam, ingat ka!", "Aalis na ako, wala kang pakialam.", "Tulog na."],
      answer: 1,
      explanation: "'Paalam, ingat ka!' ay magalang at mainit na paraan ng pagpapaalam.",
      level: "beginner"
    },
    {
      q: "Ano ang itatanong mo kung gusto mong malaman ang presyo?",
      options: ["Saan ka pupunta?", "Magkano po ito?", "Anong oras na?", "Sino ang may-ari?"],
      answer: 1,
      explanation: "'Magkano po ito?' ang standard na tanong para sa presyo.",
      level: "beginner"
    },
    {
      q: "Paano ka magpapasalamat nang mas mainit?",
      options: ["Sige.", "Salamat po nang marami!", "Okay lang.", "Walang anuman."],
      answer: 1,
      explanation: "'Salamat po nang marami' o 'Maraming salamat po' ay mas mainit.",
      level: "beginner"
    },
    {
      q: "Ano ang sasabihin mo kapag hindi mo naintindihan ang sinabi?",
      options: ["Ulitin mo nga?", "Pakiusap, pwedeng ulitin?", "Hindi ako interesado.", "Sige na."],
      answer: 1,
      explanation: "'Pakiulit po' o 'Pwedeng ulitin?' ang magalang na paraan.",
      level: "intermediate"
    },
    {
      q: "Paano mag-alok ng tulong?",
      options: ["Wala akong oras.", "Kailangan mo ba ng tulong?", "Gawin mo na lang.", "Hindi ko kaya."],
      answer: 1,
      explanation: "'Kailangan mo ba ng tulong?' o 'Matutulungan kita?' ang angkop.",
      level: "beginner"
    },
    {
      q: "Ano ang isasagot sa 'Salamat'?",
      options: ["Salamat din.", "Walang anuman.", "Sige.", "Oo."],
      answer: 1,
      explanation: "'Walang anuman' ang karaniwang tugon sa 'Salamat'.",
      level: "beginner"
    }
  ],

  "cultural": [
    {
      q: "Ano ang 'po' at 'opo' sa kulturang Filipino?",
      options: ["Mga pangalan ng pagkain", "Mga salitang nagpapakita ng respeto", "Mga sayaw", "Mga laro"],
      answer: 1,
      explanation: "Ginagamit ang 'po' at 'opo' upang magpakita ng respeto sa nakatatanda o sa pormal na sitwasyon.",
      level: "beginner"
    },
    {
      q: "Ano ang 'Mano po'?",
      options: ["Isang paraan ng pagbati sa nakatatanda sa pamamagitan ng pagdakma sa kamay", "Isang uri ng sayaw", "Isang pagkain", "Isang laro"],
      answer: 0,
      explanation: "Ang 'Mano po' ay tradisyonal na paraan ng paggalang sa nakatatanda.",
      level: "beginner"
    },
    {
      q: "Anong okasyon ang karaniwang may 'lechon'?",
      options: ["Araw-araw na tanghalian", "Pista, kaarawan, o espesyal na selebrasyon", "Libing", "Pasok sa eskwela"],
      answer: 1,
      explanation: "Ang lechon ay madalas na nagsisilbi sa mga espesyal na okasyon.",
      level: "beginner"
    },
    {
      q: "Ano ang 'Bayanihan'?",
      options: [ ["Isang uri ng sayaw", "Diwa ng pagtutulungan at pagkakaisa ng komunidad", "Isang pagkain", "Isang relihiyon"],
      answer: 1,
      explanation: "Ang Bayanihan ay ang espiritu ng sama-samang pagtulong sa kapwa.",
      level: "intermediate"
    },
    {
      q: "Ano ang karaniwang ginagawa sa 'Undas' o Araw ng mga Patay?",
      options: ["Pagsasayaw sa kalye", "Pagbisita sa libingan at pag-alala sa yumao", "Pagdiriwang ng kaarawan", "Paglalaro ng basketball"],
      answer: 1,
      explanation: "Sa Undas, binibisita ang mga libingan at inaalala ang mga yumao.",
      level: "beginner"
    },
    {
      q: "Ano ang 'harana'?",
      options: ["Isang uri ng pagkain", "Tradisyonal na pagkanta sa harap ng bahay ng nililigawan", "Isang sayaw", "Isang laro"],
      answer: 1,
      explanation: "Ang harana ay tradisyonal na paraan ng panliligaw sa pamamagitan ng awit.",
      level: "intermediate"
    },
    {
      q: "Alin ang hindi bahagi ng tipikal na Filipino hospitality?",
      options: ["Pag-alok ng pagkain sa bisita", "Pagpapakita ng respeto sa bisita", "Pagpapalayas agad sa bisita", "Pagpapakita ng init ng pagsalubong"],
      answer: 2,
      explanation: "Ang Filipino hospitality ay kilala sa pagiging mapagbigay at mainit, hindi sa pagpapalayas.",
      level: "beginner"
    }
  ],

  "idioms": [
    {
      q: "Ano ang ibig sabihin ng 'butas ang bulsa'?",
      options: ["May butas talaga ang bulsa", "Walang pera / Broke", "Mayaman", "Masaya"],
      answer: 1,
      explanation: "'Butas ang bulsa' ay idiom na nangangahulugang wala kang pera.",
      level: "intermediate"
    },
    {
      q: "Ano ang ibig sabihin ng 'malaking kagat'?",
      options: ["Malaking kagat sa pagkain", "Malaking bahagi o ambag", "Masarap", "Maliit"],
      answer: 1,
      explanation: "Karaniwang ginagamit para sa malaking bahagi ng trabaho o responsibilidad.",
      level: "intermediate"
    },
    {
      q: "Ano ang ibig sabihin ng 'isip-bata'?",
      options: ["Matalino", "May isipan ng bata / Immature", "Matanda", "Mabilis mag-isip"],
      answer: 1,
      explanation: "'Isip-bata' ang tawag sa taong immature o childish ang ugali.",
      level: "beginner"
    },
    {
      q: "Ano ang ibig sabihin ng 'kahiya-hiya'?",
      options: ["Nakakatawa", "Nakakahiya / Shameful", "Nakakatakot", "Nakakagalit"],
      answer: 1,
      explanation: "Ginagamit kapag may ginawa o sitwasyon na nakakahiya.",
      level: "beginner"
    },
    {
      q: "Ano ang ibig sabihin ng 'walang kiyeme'?",
      options: ["Walang problema", "Diretso / Walang pretensyon", "Walang pera", "Walang oras"],
      answer: 1,
      explanation: "'Walang kiyeme' ay nangangahulugang straight to the point, walang arte.",
      level: "intermediate"
    },
    {
      q: "Ano ang ibig sabihin ng 'nasa huli ang pagsisisi'?",
      options: ["Masaya sa huli", "Huli na ang pagsisisi / Too late for regrets", "Maganda ang ending", "Mabilis ang oras"],
      answer: 1,
      explanation: "Nangangahulugan itong huli na ang pagsisisi kapag nangyari na ang masama.",
      level: "intermediate"
    },
    {
      q: "Ano ang ibig sabihin ng 'bukas ang palad'?",
      options: ["Mayaman", "Mapagbigay / Generous", "Kuripot", "Tamad"],
      answer: 1,
      explanation: "'Bukas ang palad' ay idiom para sa taong mapagbigay.",
      level: "intermediate"
    }
  ],

  "advanced-grammar": [
    {
      q: "Ano ang difference ng 'mag-' at 'um-' verbs?",
      options: ["Walang difference", "Karaniwang actor-focus pareho, pero may pagkakaiba sa root at usage", "Ang 'mag-' ay object focus", "Ang 'um-' ay future lang"],
      answer: 1,
      explanation: "Parehong actor-focus, pero may mga roots na mas natural sa 'mag-' (magluto) at sa 'um-' (kumain).",
      level: "advanced"
    },
    {
      q: "Alin ang tamang object-focus form ng 'basa'?",
      options: ["Magbasa", "Bumasa", "Basahin", "Nagbabasa"],
      answer: 2,
      explanation: "'Basahin' ang object-focus (infinitive/contemplated) form.",
      level: "advanced"
    },
    {
      q: "Ano ang gamit ng 'ika-' prefix?",
      options: ["Pang-uri", "Ordinal numbers (ika-una, ikalawa)", "Pandiwa", "Panghalip"],
      answer: 1,
      explanation: "Ginagamit ang 'ika-' para gumawa ng ordinal numbers.",
      level: "intermediate"
    },
    {
      q: "Alin ang tamang paggamit ng causative 'pa-'?",
      options: ["Pinaluto niya ang kanin.", "Kumain siya ng kanin.", "Luto ang kanin.", "Kanin siya."],
      answer: 0,
      explanation: "'Pinaluto' ay nangangahulugang 'pinag-luto' o 'caused to cook'.",
      level: "advanced"
    },
    {
      q: "Ano ang 'linker' sa Tagalog?",
      options: ["Mga salitang nag-uugnay tulad ng 'na' at '-ng'", "Mga pandiwa", "Mga pangngalan", "Mga panghalip"],
      answer: 0,
      explanation: "Ang linker (na / -ng) ay nag-uugnay sa modifier at head noun.",
      level: "intermediate"
    }
  ],

  "reading": [
    {
      q: "Basahin: 'Si Maria ay pumunta sa palengke upang bumili ng gulay.' Ano ang ginawa ni Maria?",
      options: ["Natulog", "Pumunta sa palengke para bumili ng gulay", "Nagluto", "Nag-aral"],
      answer: 1,
      explanation: "Direktang sinasabi ng pangungusap na pumunta siya sa palengke upang bumili ng gulay.",
      level: "beginner"
    },
    {
      q: "Basahin: 'Bagaman at umuulan, nagpatuloy pa rin ang laro.' Ano ang ipinahihiwatig?",
      options: ["Hindi umuulan", "Nagpatuloy ang laro sa kabila ng ulan", "Tumigil ang laro", "Walang laro"],
      answer: 1,
      explanation: "Ang 'bagaman' ay nagpapakita ng contrast — umuulan pero nagpatuloy ang laro.",
      level: "intermediate"
    },
    {
      q: "Ano ang pangunahing ideya ng pangungusap: 'Ang edukasyon ang susi sa tagumpay'?",
      options: ["Mahalaga ang edukasyon para sa tagumpay", "Hindi mahalaga ang edukasyon", "Kailangan ng pera", "Kailangan ng suwerte"],
      answer: 0,
      explanation: "Ang pangungusap ay nagbibigay-diin sa kahalagahan ng edukasyon.",
      level: "beginner"
    }
  ],

  "writing": [
    {
      q: "Alin ang mas wastong pangungusap?",
      options: ["Ako ay pupunta sa simbahan kahapon.", "Ako ay pumunta sa simbahan kahapon.", "Ako ay pupunta sa simbahan bukas kahapon.", "Pupunta ako simbahan."],
      answer: 1,
      explanation: "Dahil 'kahapon', dapat past form: 'pumunta'.",
      level: "beginner"
    analog,
    {
      q: "Alin ang may tamang bantas?",
      options: ["Kumusta ka", "Kumusta ka?", "Kumusta ka!", "Kumusta ka."],
      answer: 1,
      explanation: "Dahil tanong, dapat may question mark.",
      level: "beginner"
    }
  ],

  "pronunciation": [
    {
      q: "Paano binibigkas ang 'ng' sa salitang 'ngayon'?",
      options: ["Parang 'n' + 'g' na hiwalay", "Bilang isang tunog (velar nasal) tulad ng 'ng' sa 'sing'", "Parang 'n' lang", "Parang 'g' lang"],
      answer: 1,
      explanation: "Ang 'ng' sa Filipino ay isang tunog — ang velar nasal, katulad ng dulo ng 'sing'.",
      level: "beginner"
    },
    {
      q: "Alin ang may diin sa ikalawang pantig?",
      options: ["Báhay", "Baháy", "Bahay (walang diin)", "Báhày"],
      answer: 1,
      explanation: "Sa 'bahay', karaniwang nasa ikalawang pantig ang diin (ba-HAY).",
      level: "intermediate"
    }
  ],

  "listening": [
    {
      q: "(Simulated) Kung narinig mo ang 'Magandang umaga, kumusta ka na?', ano ang angkop na sagot?",
      options: ["Magandang gabi.", "Mabuti naman, salamat!", "Paalam.", "Anong oras na?"],
      answer: 1,
      explanation: "Ito ay karaniwang pagbati sa umaga; ang angkop na sagot ay magbalita ng kalagayan.",
      level: "beginner"
    }
  ],

  "exam-prep": [
    {
      q: "Sa Filipino Language Proficiency Test, ano ang karaniwang sinusuri?",
      options: ["Grammar, Vocabulary, Reading, Writing", "Math lang", "Science", "History lang"],
      answer: 0,
      explanation: "Karamihan ng language proficiency tests ay sumusukat sa apat na macro skills + grammar at vocabulary.",
      level: "intermediate"
    },
    {
      q: "Alin ang pinakamahusay na estratehiya sa reading comprehension exam?",
      options: ["Basahin muna ang mga tanong bago ang teksto", "Magmadali", "Hindi magbasa ng teksto", "Random na sagot"],
      answer: 0,
      explanation: "Ang pagbabasa muna ng tanong ay tumutulong upang malaman kung ano ang hahanapin sa teksto.",
      level: "intermediate"
    }
  ]
};

// For levels and exams, we map to existing topic questions for demo
const LEVEL_QUESTIONS = {
  beginner: ["basic-vocabulary", "grammar-fundamentals", "conversational"],
  intermediate: ["grammar-fundamentals", "conversational", "cultural", "idioms"],
  advanced: ["advanced-grammar", "idioms", "reading"],
  proficient: ["advanced-grammar", "reading", "exam-prep"]
};
