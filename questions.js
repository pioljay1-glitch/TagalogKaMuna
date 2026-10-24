// TagalogKaMuna — Filipino (Tagalog) Question Bank
// Target: 50-100 questions per category. whyWrong explains incorrect choices.

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

const QUESTIONS = {
  "basic-vocabulary": [
    { q: "Ano ang Tagalog ng 'house'?", options: ["Bahay", "Kotse", "Aso", "Puno"], answer: 0, explanation: "'Bahay' ang karaniwang salita para sa house o tahanan.", level: "beginner", whyWrong: {1: "Kotse ay car, hindi house.", 2: "Aso ay dog.", 3: "Puno ay tree."} },
    { q: "Ano ang ibig sabihin ng 'salamat'?", options: ["Paalam", "Thank you", "Oo", "Hindi"], answer: 1, explanation: "'Salamat' = thank you.", level: "beginner", whyWrong: {0: "Paalam ay goodbye.", 2: "Oo ay yes.", 3: "Hindi ay no."} },
    { q: "Alin ang tamang salita para sa 'water'?", options: ["Tubig", "Apoy", "Hangin", "Lupa"], answer: 0, explanation: "'Tubig' ang water.", level: "beginner", whyWrong: {1: "Apoy ay fire.", 2: "Hangin ay air/wind.", 3: "Lupa ay earth/soil."} },
    { q: "Ano ang tawag sa 'mother'?", options: ["Ama", "Kuya", "Ina / Nanay", "Ate"], answer: 2, explanation: "'Ina' o 'Nanay' ang mother.", level: "beginner", whyWrong: {0: "Ama ay father.", 1: "Kuya ay older brother.", 3: "Ate ay older sister."} },
    { q: "Ano ang ibig sabihin ng 'maganda'?", options: ["Mabait", "Beautiful", "Mabilis", "Malaki"], answer: 1, explanation: "'Maganda' = beautiful.", level: "beginner", whyWrong: {0: "Mabait ay kind.", 2: "Mabilis ay fast.", 3: "Malaki ay big."} },
    { q: "Ano ang Tagalog ng 'friend'?", options: ["Kaibigan", "Kapatid", "Kapitbahay", "Kamag-anak"], answer: 0, explanation: "'Kaibigan' = friend.", level: "beginner", whyWrong: {1: "Kapatid ay sibling.", 2: "Kapitbahay ay neighbor.", 3: "Kamag-anak ay relative."} },
    { q: "Alin ang hindi pagkain?", options: ["Kanin", "Isda", "Kotse", "Gulay"], answer: 2, explanation: "Kotse ay sasakyan.", level: "beginner", whyWrong: {0: "Kanin ay rice (food).", 1: "Isda ay fish.", 3: "Gulay ay vegetable."} },
    { q: "Ano ang ibig sabihin ng 'umaga'?", options: ["Gabi", "Hapon", "Morning", "Tanghali"], answer: 2, explanation: "'Umaga' = morning.", level: "beginner", whyWrong: {0: "Gabi ay night.", 1: "Hapon ay afternoon.", 3: "Tanghali ay noon."} },
    { q: "Ano ang Tagalog ng 'book'?", options: ["Papel", "Aklat / Libro", "Lamesa", "Silya"], answer: 1, explanation: "'Aklat' o 'Libro' = book.", level: "beginner", whyWrong: {0: "Papel ay paper.", 2: "Lamesa ay table.", 3: "Silya ay chair."} },
    { q: "Ano ang tawag sa 'teacher'?", options: ["Doktor", "Guro / Titser", "Abogado", "Magsasaka"], answer: 1, explanation: "'Guro' o 'Titser' = teacher.", level: "beginner", whyWrong: {0: "Doktor ay doctor.", 2: "Abogado ay lawyer.", 3: "Magsasaka ay farmer."} },
    { q: "Ano ang Tagalog ng cooked rice?", options: ["Bigas", "Kanin", "Tinapay", "Gulay"], answer: 1, explanation: "'Kanin' = cooked rice.", level: "beginner", whyWrong: {0: "Bigas ay uncooked rice.", 2: "Tinapay ay bread.", 3: "Gulay ay vegetable."} },
    { q: "Ano ang ibig sabihin ng 'asawa'?", options: ["Anak", "Spouse", "Kapatid", "Kaibigan"], answer: 1, explanation: "'Asawa' = husband/wife.", level: "beginner", whyWrong: {0: "Anak ay child.", 2: "Kapatid ay sibling.", 3: "Kaibigan ay friend."} },
    { q: "Ano ang Tagalog ng 'market'?", options: ["Simbahan", "Palengke", "Paaralan", "Ospital"], answer: 1, explanation: "'Palengke' = market.", level: "beginner", whyWrong: {0: "Simbahan ay church.", 2: "Paaralan ay school.", 3: "Ospital ay hospital."} },
    { q: "Ano ang tawag sa younger brother?", options: ["Kuya", "Ate", "Bunso / Nakababatang kapatid", "Tito"], answer: 2, explanation: "'Bunso' o nakababatang kapatid.", level: "beginner", whyWrong: {0: "Kuya ay older brother.", 1: "Ate ay older sister.", 3: "Tito ay uncle."} },
    { q: "Ano ang Tagalog ng 'happy'?", options: ["Malungkot", "Masaya", "Galit", "Takot"], answer: 1, explanation: "'Masaya' = happy.", level: "beginner", whyWrong: {0: "Malungkot ay sad.", 2: "Galit ay angry.", 3: "Takot ay scared."} },
    { q: "Ano ang ibig sabihin ng 'trabaho'?", options: ["Bahay", "Work / Job", "Pagkain", "Pera"], answer: 1, explanation: "'Trabaho' = work/job.", level: "beginner", whyWrong: {0: "Bahay ay house.", 2: "Pagkain ay food.", 3: "Pera ay money."} },
    { q: "Ano ang Tagalog ng 'church'?", options: ["Palengke", "Simbahan", "Paaralan", "Ospital"], answer: 1, explanation: "'Simbahan' = church.", level: "beginner", whyWrong: {0: "Palengke ay market.", 2: "Paaralan ay school.", 3: "Ospital ay hospital."} },
    { q: "Ano ang tawag sa 'money'?", options: ["Pagkain", "Pera / Salapi", "Damit", "Sapatos"], answer: 1, explanation: "'Pera' o 'salapi' = money.", level: "beginner", whyWrong: {0: "Pagkain ay food.", 2: "Damit ay clothes.", 3: "Sapatos ay shoes."} },
    { q: "Ano ang Tagalog ng 'school'?", options: ["Bahay", "Paaralan / Eskwela", "Ospital", "Palengke"], answer: 1, explanation: "'Paaralan' o 'eskwela'.", level: "beginner", whyWrong: {0: "Bahay ay house.", 2: "Ospital ay hospital.", 3: "Palengke ay market."} },
    { q: "Ano ang Tagalog ng 'delicious'?", options: ["Masarap", "Maalat", "Maasim", "Mapait"], answer: 0, explanation: "'Masarap' = delicious.", level: "beginner", whyWrong: {1: "Maalat ay salty.", 2: "Maasim ay sour.", 3: "Mapait ay bitter."} },
    { q: "Ano ang tawag sa older sister?", options: ["Kuya", "Ate", "Bunso", "Tita"], answer: 1, explanation: "'Ate' = older sister.", level: "beginner", whyWrong: {0: "Kuya ay older brother.", 2: "Bunso ay youngest.", 3: "Tita ay aunt."} },
    { q: "Ano ang Tagalog ng 'car'?", options: ["Bisikleta", "Kotse / Sasakyan", "Eroplano", "Barko"], answer: 1, explanation: "'Kotse' o 'sasakyan'.", level: "beginner", whyWrong: {0: "Bisikleta ay bicycle.", 2: "Eroplano ay airplane.", 3: "Barko ay ship."} },
    { q: "Ano ang ibig sabihin ng 'ulan'?", options: ["Araw", "Rain", "Hangin", "Kidlat"], answer: 1, explanation: "'Ulan' = rain.", level: "beginner", whyWrong: {0: "Araw ay sun/day.", 2: "Hangin ay wind.", 3: "Kidlat ay lightning."} },
    { q: "Ano ang Tagalog ng 'love'?", options: ["Galit", "Pag-ibig / Mahal", "Takot", "Lungkot"], answer: 1, explanation: "'Pag-ibig' o 'mahal'.", level: "beginner", whyWrong: {0: "Galit ay anger.", 2: "Takot ay fear.", 3: "Lungkot ay sadness."} },
    { q: "Ano ang Tagalog ng 'dog'?", options: ["Pusa", "Aso", "Ibon", "Isda"], answer: 1, explanation: "'Aso' = dog.", level: "beginner", whyWrong: {0: "Pusa ay cat.", 2: "Ibon ay bird.", 3: "Isda ay fish."} },
    { q: "Ano ang Tagalog ng 'cat'?", options: ["Aso", "Pusa", "Daga", "Ibon"], answer: 1, explanation: "'Pusa' = cat.", level: "beginner", whyWrong: {0: "Aso ay dog.", 2: "Daga ay rat/mouse.", 3: "Ibon ay bird."} },
    { q: "Ano ang ibig sabihin ng 'malaki'?", options: ["Maliit", "Big", "Mabilis", "Mabagal"], answer: 1, explanation: "'Malaki' = big.", level: "beginner", whyWrong: {0: "Maliit ay small.", 2: "Mabilis ay fast.", 3: "Mabagal ay slow."} },
    { q: "Ano ang Tagalog ng 'small'?", options: ["Malaki", "Maliit", "Mahaba", "Maikli"], answer: 1, explanation: "'Maliit' = small.", level: "beginner", whyWrong: {0: "Malaki ay big.", 2: "Mahaba ay long.", 3: "Maikli ay short."} },
    { q: "Ano ang tawag sa 'father'?", options: ["Ina", "Ama / Tatay", "Kuya", "Lolo"], answer: 1, explanation: "'Ama' o 'Tatay' = father.", level: "beginner", whyWrong: {0: "Ina ay mother.", 2: "Kuya ay older brother.", 3: "Lolo ay grandfather."} },
    { q: "Ano ang Tagalog ng 'child'?", options: ["Matanda", "Anak / Bata", "Guro", "Kaibigan"], answer: 1, explanation: "'Anak' o 'bata' = child.", level: "beginner", whyWrong: {0: "Matanda ay old person.", 2: "Guro ay teacher.", 3: "Kaibigan ay friend."} },
    { q: "Ano ang ibig sabihin ng 'kumain'?", options: ["To sleep", "To eat", "To walk", "To drink"], answer: 1, explanation: "'Kumain' = to eat.", level: "beginner", whyWrong: {0: "Matulog ay to sleep.", 2: "Lumakad ay to walk.", 3: "Uminom ay to drink."} },
    { q: "Ano ang Tagalog ng 'to sleep'?", options: ["Kumain", "Matulog", "Lumakad", "Uminom"], answer: 1, explanation: "'Matulog' = to sleep.", level: "beginner", whyWrong: {0: "Kumain ay to eat.", 2: "Lumakad ay to walk.", 3: "Uminom ay to drink."} },
    { q: "Ano ang Tagalog ng 'to walk'?", options: ["Tumakbo", "Lumakad", "Lumipad", "Lumangoy"], answer: 1, explanation: "'Lumakad' = to walk.", level: "beginner", whyWrong: {0: "Tumakbo ay to run.", 2: "Lumipad ay to fly.", 3: "Lumangoy ay to swim."} },
    { q: "Ano ang ibig sabihin ng 'uminom'?", options: ["To eat", "To drink", "To sleep", "To run"], answer: 1, explanation: "'Uminom' = to drink.", level: "beginner", whyWrong: {0: "Kumain ay to eat.", 2: "Matulog ay to sleep.", 3: "Tumakbo ay to run."} },
    { q: "Ano ang Tagalog ng 'red'?", options: ["Asul", "Pula", "Berde", "Dilaw"], answer: 1, explanation: "'Pula' = red.", level: "beginner", whyWrong: {0: "Asul ay blue.", 2: "Berde ay green.", 3: "Dilaw ay yellow."} },
    { q: "Ano ang Tagalog ng 'blue'?", options: ["Pula", "Asul", "Berde", "Itim"], answer: 1, explanation: "'Asul' = blue.", level: "beginner", whyWrong: {0: "Pula ay red.", 2: "Berde ay green.", 3: "Itim ay black."} },
    { q: "Ano ang Tagalog ng 'green'?", options: ["Pula", "Asul", "Berde", "Dilaw"], answer: 2, explanation: "'Berde' = green.", level: "beginner", whyWrong: {0: "Pula ay red.", 1: "Asul ay blue.", 3: "Dilaw ay yellow."} },
    { q: "Ano ang Tagalog ng 'yellow'?", options: ["Pula", "Asul", "Berde", "Dilaw"], answer: 3, explanation: "'Dilaw' = yellow.", level: "beginner", whyWrong: {0: "Pula ay red.", 1: "Asul ay blue.", 2: "Berde ay green."} },
    { q: "Ano ang Tagalog ng 'black'?", options: ["Puti", "Itim", "Kulay-abo", "Kayumanggi"], answer: 1, explanation: "'Itim' = black.", level: "beginner", whyWrong: {0: "Puti ay white.", 2: "Kulay-abo ay gray.", 3: "Kayumanggi ay brown."} },
    { q: "Ano ang Tagalog ng 'white'?", options: ["Itim", "Puti", "Pula", "Asul"], answer: 1, explanation: "'Puti' = white.", level: "beginner", whyWrong: {0: "Itim ay black.", 2: "Pula ay red.", 3: "Asul ay blue."} },
    { q: "Ano ang ibig sabihin ng 'mabilis'?", options: ["Mabagal", "Fast", "Mababa", "Mataas"], answer: 1, explanation: "'Mabilis' = fast.", level: "beginner", whyWrong: {0: "Mabagal ay slow.", 2: "Mababa ay low/short.", 3: "Mataas ay high/tall."} },
    { q: "Ano ang Tagalog ng 'slow'?", options: ["Mabilis", "Mabagal", "Malakas", "Mahina"], answer: 1, explanation: "'Mabagal' = slow.", level: "beginner", whyWrong: {0: "Mabilis ay fast.", 2: "Malakas ay strong.", 3: "Mahina ay weak."} },
    { q: "Ano ang Tagalog ng 'hot'?", options: ["Malamig", "Mainit", "Maulan", "Maaraw"], answer: 1, explanation: "'Mainit' = hot.", level: "beginner", whyWrong: {0: "Malamig ay cold.", 2: "Maulan ay rainy.", 3: "Maaraw ay sunny."} },
    { q: "Ano ang Tagalog ng 'cold'?", options: ["Mainit", "Malamig", "Maaraw", "Maulap"], answer: 1, explanation: "'Malamig' = cold.", level: "beginner", whyWrong: {0: "Mainit ay hot.", 2: "Maaraw ay sunny.", 3: "Maulap ay cloudy."} },
    { q: "Ano ang ibig sabihin ng 'malakas'?", options: ["Mahina", "Strong", "Mabilis", "Mabagal"], answer: 1, explanation: "'Malakas' = strong.", level: "beginner", whyWrong: {0: "Mahina ay weak.", 2: "Mabilis ay fast.", 3: "Mabagal ay slow."} },
    { q: "Ano ang Tagalog ng 'weak'?", options: ["Malakas", "Mahina", "Mataba", "Payat"], answer: 1, explanation: "'Mahina' = weak.", level: "beginner", whyWrong: {0: "Malakas ay strong.", 2: "Mataba ay fat.", 3: "Payat ay thin."} },
    { q: "Ano ang Tagalog ng 'day'?", options: ["Gabi", "Araw", "Linggo", "Buwan"], answer: 1, explanation: "'Araw' = day/sun.", level: "beginner", whyWrong: {0: "Gabi ay night.", 2: "Linggo ay week/Sunday.", 3: "Buwan ay month/moon."} },
    { q: "Ano ang Tagalog ng 'night'?", options: ["Araw", "Gabi", "Umaga", "Hapon"], answer: 1, explanation: "'Gabi' = night.", level: "beginner", whyWrong: {0: "Araw ay day.", 2: "Umaga ay morning.", 3: "Hapon ay afternoon."} },
    { q: "Ano ang Tagalog ng 'week'?", options: ["Araw", "Linggo", "Buwan", "Taon"], answer: 1, explanation: "'Linggo' = week (also Sunday).", level: "beginner", whyWrong: {0: "Araw ay day.", 2: "Buwan ay month.", 3: "Taon ay year."} },
    { q: "Ano ang Tagalog ng 'month'?", options: ["Linggo", "Buwan", "Taon", "Araw"], answer: 1, explanation: "'Buwan' = month/moon.", level: "beginner", whyWrong: {0: "Linggo ay week.", 2: "Taon ay year.", 3: "Araw ay day."} },
    { q: "Ano ang Tagalog ng 'year'?", options: ["Buwan", "Taon", "Linggo", "Dekada"], answer: 1, explanation: "'Taon' = year.", level: "beginner", whyWrong: {0: "Buwan ay month.", 2: "Linggo ay week.", 3: "Dekada ay decade."} },
    { q: "Ano ang ibig sabihin ng 'pera'?", options: ["Pagkain", "Money", "Damit", "Bahay"], answer: 1, explanation: "'Pera' = money.", level: "beginner", whyWrong: {0: "Pagkain ay food.", 2: "Damit ay clothes.", 3: "Bahay ay house."} },
    { q: "Ano ang Tagalog ng 'food'?", options: ["Pera", "Pagkain", "Tubig", "Hangin"], answer: 1, explanation: "'Pagkain' = food.", level: "beginner", whyWrong: {0: "Pera ay money.", 2: "Tubig ay water.", 3: "Hangin ay air."} },
    { q: "Ano ang Tagalog ng 'clothes'?", options: ["Sapatos", "Damit", "Sombrero", "Medyas"], answer: 1, explanation: "'Damit' = clothes.", level: "beginner", whyWrong: {0: "Sapatos ay shoes.", 2: "Sombrero ay hat.", 3: "Medyas ay socks."} },
    { q: "Ano ang Tagalog ng 'shoes'?", options: ["Damit", "Sapatos", "Medyas", "Sinturon"], answer: 1, explanation: "'Sapatos' = shoes.", level: "beginner", whyWrong: {0: "Damit ay clothes.", 2: "Medyas ay socks.", 3: "Sinturon ay belt."} },
    { q: "Ano ang ibig sabihin ng 'bahay'?", options: ["School", "House", "Market", "Church"], answer: 1, explanation: "'Bahay' = house.", level: "beginner", whyWrong: {0: "Paaralan ay school.", 2: "Palengke ay market.", 3: "Simbahan ay church."} },
    { q: "Ano ang Tagalog ng 'hospital'?", options: ["Paaralan", "Ospital", "Palengke", "Simbahan"], answer: 1, explanation: "'Ospital' = hospital.", level: "beginner", whyWrong: {0: "Paaralan ay school.", 2: "Palengke ay market.", 3: "Simbahan ay church."} },
    { q: "Ano ang Tagalog ng 'doctor'?", options: ["Guro", "Doktor", "Abogado", "Pulis"], answer: 1, explanation: "'Doktor' = doctor.", level: "beginner", whyWrong: {0: "Guro ay teacher.", 2: "Abogado ay lawyer.", 3: "Pulis ay police."} },
    { q: "Ano ang Tagalog ng 'police'?", options: ["Sundalo", "Pulis", "Bumbero", "Doktor"], answer: 1, explanation: "'Pulis' = police.", level: "beginner", whyWrong: {0: "Sundalo ay soldier.", 2: "Bumbero ay firefighter.", 3: "Doktor ay doctor."} },
    { q: "Ano ang ibig sabihin ng 'kaibigan'?", options: ["Enemy", "Friend", "Stranger", "Boss"], answer: 1, explanation: "'Kaibigan' = friend.", level: "beginner", whyWrong: {0: "Kaaway ay enemy.", 2: "Estranghero ay stranger.", 3: "Boss ay amo/boss."} }
  ],
  "grammar-fundamentals": [
    { q: "Alin ang tamang pangungusap?", options: ["Ako ay kumain ng mansanas.", "Ako kumain mansanas.", "Kumain ako ng mansanas ay.", "Mansanas ako kumain."], answer: 0, explanation: "Tamang ayos: Subject + ay + Verb + Object.", level: "beginner", whyWrong: {1: "Kulang ang mga marker.", 2: "Maling posisyon ng 'ay'.", 3: "Maling ayos ng salita."} },
    { q: "Ano ang gamit ng 'ng' sa 'Kumain ako ng tinapay'?", options: ["Pang-uri", "Object marker", "Pandiwa", "Panghalip"], answer: 1, explanation: "Ang 'ng' ay object marker.", level: "beginner", whyWrong: {0: "Pang-uri ay adjective.", 2: "Pandiwa ay verb.", 3: "Panghalip ay pronoun."} },
    { q: "Alin ang future form ng 'kumain'?", options: ["Kumain", "Kakain", "Kumakain", "Kinain"], answer: 1, explanation: "'Kakain' ang future aspect.", level: "intermediate", whyWrong: {0: "Kumain ay completed/past.", 2: "Kumakain ay progressive.", 3: "Kinain ay object-focus past."} },
    { q: "Ano ang tawag sa 'ako', 'ikaw', 'siya'?", options: ["Pangngalan", "Panghalip", "Pandiwa", "Pang-uri"], answer: 1, explanation: "Ito ay mga panghalip.", level: "beginner", whyWrong: {0: "Pangngalan ay noun.", 2: "Pandiwa ay verb.", 3: "Pang-uri ay adjective."} },
    { q: "Alin ang tamang paggamit ng 'ang'?", options: ["Kumain ang tinapay ako.", "Ang bata ay natutulog.", "Ako ang kumain tinapay.", "Natutulog bata ang."], answer: 1, explanation: "'Ang' ang subject marker.", level: "beginner", whyWrong: {0: "Maling ayos.", 2: "Kulang ang 'ng'.", 3: "Maling posisyon."} },
    { q: "Alin ang tamang past form?", options: ["Kumakain ako kahapon.", "Kumain ako kahapon.", "Kakain ako kahapon.", "Kain ako kahapon."], answer: 1, explanation: "Past/completed: 'kumain'.", level: "beginner" },
    { q: "Ano ang aspect ng 'kumakain'?", options: ["Completed", "Incomplete / Progressive", "Future", "Infinitive"], answer: 1, explanation: "'Kumakain' ay progressive.", level: "intermediate" },
    { q: "Alin ang tamang linker?", options: ["Magandang araw", "Maganda araw", "Maganda na araw", "Magandang ng araw"], answer: 0, explanation: "Gamitin ang '-ng' kapag katinig ang dulo.", level: "beginner" },
    { q: "Ano ang focus ng 'Binasa ni Maria ang libro'?", options: ["Actor focus", "Object focus", "Locative focus", "Benefactive"], answer: 1, explanation: "Object focus dahil sa 'binasa' at 'ang libro'.", level: "advanced" },
    { q: "Alin ang tamang paggamit ng 'sa'?", options: ["Pumunta ako sa palengke.", "Pumunta ako ng palengke.", "Pumunta ako ang palengke.", "Pumunta ako ay palengke."], answer: 0, explanation: "'Sa' ang directional/locative marker.", level: "beginner" },
    { q: "Ano ang root word ng 'naglalakad'?", options: ["Lakad", "Nag", "La", "Kad"], answer: 0, explanation: "Ang root ay 'lakad'.", level: "intermediate" },
    { q: "Ano ang gamit ng 'ay' sa 'Ako ay guro'?", options: ["Object marker", "Inversion marker / Linker", "Verb", "Adjective"], answer: 1, explanation: "'Ay' ay ginagamit sa inversion o formal structure.", level: "intermediate" },
    { q: "Alin ang tamang plural?", options: ["Ang mga bata ay naglalaro.", "Ang bata ay naglalaro.", "Ang mga bata ay naglalaro ay.", "Bata ang mga naglalaro."], answer: 0, explanation: "'Mga' ang plural marker.", level: "beginner" },
    { q: "Ano ang difference ng 'si' at 'ang'?", options: ["Walang difference", "'Si' para sa personal names, 'ang' para sa common nouns", "'Si' ay verb", "'Ang' ay pangalan"], answer: 1, explanation: "'Si' para sa proper names ng tao.", level: "intermediate" },
    { q: "Alin ang tamang actor-focus?", options: ["Binasa ang libro.", "Bumasa siya ng libro.", "Basahin ang libro.", "Pinabasa ang libro."], answer: 1, explanation: "'Bumasa' ay actor-focus.", level: "advanced" }
  ],
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
