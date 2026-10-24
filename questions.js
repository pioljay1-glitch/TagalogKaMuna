// TagalogKaMuna — Filipino (Tagalog) Question Bank
// Pure Filipino / Philippines-themed questions by level

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
    { q: "Ano ang Tagalog ng 'house'?", options: ["Bahay", "Kotse", "Aso", "Puno"], answer: 0, explanation: "'Bahay' ang karaniwang salita para sa house o tahanan.", level: "beginner" },
    { q: "Ano ang ibig sabihin ng 'salamat'?", options: ["Paalam", "Thank you", "Oo", "Hindi"], answer: 1, explanation: "'Salamat' ang standard na paraan ng pagsasabi ng 'thank you'.", level: "beginner" },
    { q: "Alin ang tamang salita para sa 'water'?", options: ["Tubig", "Apoy", "Hangin", "Lupa"], answer: 0, explanation: "'Tubig' ang Tagalog ng water.", level: "beginner" },
    { q: "Ano ang tawag sa 'mother' sa Filipino?", options: ["Ama", "Kuya", "Ina / Nanay", "Ate"], answer: 2, explanation: "'Ina' o 'Nanay' ang ginagamit para sa mother.", level: "beginner" },
    { q: "Ano ang ibig sabihin ng 'maganda'?", options: ["Mabait", "Beautiful", "Mabilis", "Malaki"], answer: 1, explanation: "'Maganda' ang adjective para sa beautiful.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'friend'?", options: ["Kaibigan", "Kapatid", "Kapitbahay", "Kamag-anak"], answer: 0, explanation: "'Kaibigan' ang salita para sa friend.", level: "beginner" },
    { q: "Alin ang hindi pagkain?", options: ["Kanin", "Isda", "Kotse", "Gulay"], answer: 2, explanation: "'Kotse' ay sasakyan, hindi pagkain.", level: "beginner" },
    { q: "Ano ang ibig sabihin ng 'umaga'?", options: options: ["Gabi", "Hapon", "Morning", "Tanghali"], answer: 2, explanation: "'Umaga' ay morning.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'book'?", options: ["Papel", "Aklat / Libro", "Lamesa", "Silya"], answer: 1, explanation: "'Aklat' o 'Libro' ang ginagamit para sa book.", level: "beginner" },
    { q: "Ano ang tawag sa 'teacher'?", options: ["Doktor", "Guro / Titser", "Abogado", "Magsasaka"], answer: 1, explanation: "'Guro' ang pormal na salita.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'rice' (cooked)?", options: ["Bigas", "Kanin", "Tinapay", "Gulay"], answer: 1, explanation: "'Kanin' ang cooked rice; 'bigas' ang uncooked.", level: "beginner" },
    { q: "Ano ang ibig sabihin ng 'asawa'?", options: ["Anak", "Spouse / Husband or Wife", "Kapatid", "Kaibigan"], answer: 1, explanation: "'Asawa' ang spouse.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'market'?", options: ["Simbahan", "Palengke", "Paaralan", "Ospital"], answer: 1, explanation: "'Palengke' ang local market.", level: "beginner" },
    { q: "Ano ang tawag sa 'younger brother'?", options: ["Kuya", "Ate", "Bunso / Nakababatang kapatid", "Tito"], answer: 2, explanation: "'Bunso' o 'nakababatang kapatid'.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'happy'?", options: ["Malungkot", "Masaya", "Galit", "Takot"], answer: 1, explanation: "'Masaya' ang happy.", level: "beginner" },
    { q: "Ano ang ibig sabihin ng 'trabaho'?", options: ["Bahay", "Work / Job", "Pagkain", "Pera"], answer: 1, explanation: "'Trabaho' ang work o job.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'church'?", options: ["Palengke", "Simbahan", "Paaralan", "Ospital"], answer: 1, explanation: "'Simbahan' ang church.", level: "beginner" },
    { q: "Ano ang tawag sa 'money'?", options: ["Pagkain", "Pera / Salapi", "Damit", "Sapatos"], answer: 1, explanation: "'Pera' o 'salapi' ang money.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'school'?", options: ["Bahay", "Paaralan / Eskwela", "Ospital", "Palengke"], answer: 1, explanation: "'Paaralan' o 'eskwela'.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'delicious'?", options: ["Masarap", "Maalat", "Maasim", "Mapait"], answer: 0, explanation: "'Masarap' ang delicious.", level: "beginner" },
    { q: "Ano ang tawag sa 'older sister'?", options: ["Kuya", "Ate", "Bunso", "Tita"], answer: 1, explanation: "'Ate' ang older sister o respectful term for older female.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'car'?", options: ["Bisikleta", "Kotse / Sasakyan", "Eroplano", "Barko"], answer: 1, explanation: "'Kotse' o 'sasakyan'.", level: "beginner" },
    { q: "Ano ang ibig sabihin ng 'ulan'?", options: ["Araw", "Rain", "Hangin", "Kidlat"], answer: 1, explanation: "'Ulan' ang rain.", level: "beginner" },
    { q: "Ano ang Tagalog ng 'love'?", options: ["Galit", "Pag-ibig / Mahal", "Takot", "Lungkot"], answer: 1, explanation: "'Pag-ibig' o 'mahal'.", level: "beginner" }
  ],
  "grammar-fundamentals": [
    { q: "Alin ang tamang pangungusap?", options: ["Ako ay kumain ng mansanas.", "Ako kumain mansanas.", "Kumain ako ng mansanas ay.", "Mansanas ako kumain."], answer: 0, explanation: "Tamang ayos: Subject + ay + Verb + Object.", level: "beginner" },
    { q: "Ano ang gamit ng 'ng' sa 'Kumain ako ng tinapay'?", options: ["Pang-uri", "Object marker", "Pandiwa", "Panghalip"], answer: 1, explanation: "Ang 'ng' ay object marker.", level: "beginner" },
    { q: "Alin ang future form ng 'kumain'?", options: ["Kumain", "Kakain", "Kumakain", "Kinain"], answer: 1, explanation: "'Kakain' ang future aspect.", level: "intermediate" },
    { q: "Ano ang tawag sa 'ako', 'ikaw', 'siya'?", options: ["Pangngalan", "Panghalip", "Pandiwa", "Pang-uri"], answer: 1, explanation: "Ito ay mga panghalip.", level: "beginner" },
    { q: "Alin ang tamang paggamit ng 'ang'?", options: ["Kumain ang tinapay ako.", "Ang bata ay natutulog.", "Ako ang kumain tinapay.", "Natutulog bata ang."], answer: 1, explanation: "'Ang' ang subject marker.", level: "beginner" },
    { q: "Ano ang aspect ng 'kumakain'?", options: ["Completed", "Incomplete / Progressive", "Future", "Infinitive"], answer: 1, explanation: "'Kumakain' ay progressive.", level: "intermediate" },
    { q: "Alin ang tamang linker?", options: ["Magandang araw", "Maganda araw", "Maganda na araw", "Magandang ng araw"], answer: 0, explanation: "Gamitin ang '-ng' kapag katinig ang dulo.", level: "beginner" },
    { q: "Ano ang focus ng 'Binasa ni Maria ang libro'?", options: ["Actor focus", "Object focus", "Locative focus", "Benefactive"], answer: 1, explanation: "Object focus dahil sa 'binasa' at 'ang libro'.", level: "advanced" },
    { q: "Alin ang tamang paggamit ng 'sa'?", options: ["Pumunta ako sa palengke.", "Pumunta ako ng palengke.", "Pumunta ako ang palengke.", "Pumunta ako ay palengke."], answer: 0, explanation: "'Sa' ang directional/locative marker.", level: "beginner" },
    { q: "Ano ang root word ng 'naglalakad'?", options: ["Lakad", "Nag", "La", "Kad"], answer: 0, explanation: "Ang root ay 'lakad'.", level: "intermediate" },
    { q: "Alin ang tamang past form?", options: ["Kumakain ako kahapon.", "Kumain ako kahapon.", "Kakain ako kahapon.", "Kain ako kahapon."], answer: 1, explanation: "Past/completed: 'kumain'.", level: "beginner" },
    { q: "Ano ang gamit ng 'ay' sa 'Ako ay guro'?", options: ["Object marker", "Inversion marker / Linker", "Verb", "Adjective"], answer: 1, explanation: "'Ay' ay ginagamit sa inversion o formal structure.", level: "intermediate" },
    { q: "Alin ang tamang plural?", options: ["Ang mga bata ay naglalaro.", "Ang bata ay naglalaro.", "Ang mga bata ay naglalaro ay.", "Bata ang mga naglalaro."], answer: 0, explanation: "'Mga' ang plural marker.", level: "beginner" },
    { q: "Ano ang bel ang difference ng 'si' at 'ang'?", options: ["Walang difference", "'Si' para sa personal names, 'ang' para sa common nouns", "'Si' ay verb", "'Ang' ay pangalan"], answer: 1, explanation: "'Si' para sa proper names ng tao.", level: "intermediate" },
    { q: "Alin ang tamang actor-focus?", options: ["Binasa ang libro.", "Bumasa siya ng libro.", "Basahin ang libro.", "Pinabasa ang libro."], answer: 1, explanation: "'Bumasa' ay actor-focus.", level: "advanced" }
  ],
  "conversational": [
    { q: "Paano babatiin ang kaibigan sa umaga?", options: ["Magandang gabi!", "Magandang umaga!", "Tulog ka na!", "Anong oras na?"], answer: 1, explanation: "'Magandang umaga!' ang angkop.", level: "beginner" },
    { q: "Ano ang sagot sa 'Kumusta ka?'?", options: ["Aalis na ako.", "Mabuti naman, salamat!", "Wala akong pera.", "Hindi ko alam."], answer: 1, explanation: "Karaniwang sagot: 'Mabuti naman'.", level: "beginner" },
    { q: "Paano magpaalam nang magalang?", options: ["Sige, bye!", "Paalam, ingat ka!", "Aalis na ako.", "Tulog na."], answer: 1, explanation: "'Paalam, ingat ka!' ay magalang.", level: "beginner" },
    { q: "Ano ang itatanong para sa presyo?", options: ["Saan ka pupunta?", "Magkano po ito?", "Anong oras na?", "Sino ang may-ari?"], answer: 1, explanation: "'Magkano po ito?'", level: "beginner" },
    { q: "Paano magpasalamat nang mainit?", options: ["Sige.", "Maraming salamat po!", "Okay lang.", "Walang anuman."], answer: 1, explanation: "'Maraming salamat po' ay mainit.", level: "beginner" },
    { q: "Ano ang sasabihin kung hindi naintindihan?", options: ["Ulitin mo nga?", "Pakiulit po?", "Hindi ako interesado.", "Sige na."], answer: 1, explanation: "'Pakiulit po' ang magalang.", level: "intermediate" },
    { q: "Paano mag-alok ng tulong?", options: ["Wala akong oras.", "Kailangan mo ba ng tulong?", "Gawin mo na lang.", "Hindi ko kaya."], answer: 1, explanation: "'Kailangan mo ba ng tulong?'", level: "beginner" },
    { q: "Ano ang sagot sa 'Salamat'?", options: ["Salamat din.", "Walang anuman.", "Sige.", "Oo."], answer: 1, explanation: "'Walang anuman'.", level: "beginner" },
    { q: "Paano magtanong ng direksyon?", options: ["Saan ang palengke?", "Anong oras na?", "Magkano ito?", "Kumusta ka?"], answer: 0, explanation: "'Saan ang...?' para sa location.", level: "beginner" },
    { q: "Ano ang sasabihin sa birthday?", options: ["Maligayang bati!", "Maligayang kaarawan!", "Salamat!", "Paalam!"], answer: 1, explanation: "'Maligayang kaarawan!'", level: "beginner" },
    { q: "Paano mag-order sa restaurant?", options: ["Gusto ko po ng adobo.", "Saan ka pupunta?", "Magkano ang pamasahe?", "Anong oras ang biyahe?"], answer: 0, explanation: "'Gusto ko po ng...'", level: "intermediate" },
    { q: "Ano ang sasabihin kapag late?", options: ["Pasensya na, na-late ako.", "Salamat!", "Kumusta?", "Paalam!"], answer: 0, explanation: "'Pasensya na...' para sa apology.", level: "intermediate" }
  ],
  "cultural": [
    { q: "Ano ang 'po' at 'opo'?", options: ["Pagkain", "Salitang paggalang", "Sayaw", "Laro"], answer: 1, explanation: "Ginagamit upang magpakita ng respeto.", level: "beginner" },
    { q: "Ano ang 'Mano po'?", options: ["Pagbati sa nakatatanda sa pamamagitan ng kamay", "Sayaw", "Pagkain", "Laro"], answer: 0, explanation: "Tradisyonal na paggalang sa nakatatanda.", level: "beginner" },
    { q: "Kailan karaniwang may lechon?", options: ["Araw-araw", "Pista o espesyal na okasyon", "Libing", "Pasok sa eskwela"], answer: 1, explanation: "Lechon sa mga espesyal na selebrasyon.", level: "beginner" },
    { q: "Ano ang 'Bayanihan'?", options: ["Sayaw", "Diwa ng pagtutulungan", "Pagkain", "Relihiyon"], answer: 1, explanation: "Espiritu ng sama-samang pagtulong.", level: "intermediate" },
    { q: "Ano ang ginagawa sa Undas?", options: ["Pagsasayaw", "Pagbisita sa libingan", "Kaarawan", "Basketball"], answer: 1, explanation: "Pag-alala sa yumao.", level: "beginner" },
    { q: "Ano ang 'harana'?", options: ["Pagkain", "Pagkanta sa nililigawan", "Sayaw", "Laro"], answer: 1, explanation: "Tradisyonal na panliligaw.", level: "intermediate" },
    { q: "Alin ang hindi bahagi ng Filipino hospitality?", options: ["Pag-alok ng pagkain", "Pagpapakita ng respeto", "Pagpapalayas agad sa bisita", "Mainit na pagsalubong"], answer: 2, explanation: "Hospitality ay mapagbigay, hindi mapagpalayas.", level: "beginner" },
    { q: "Ano ang 'fiesta'?", options: ["Araw ng trabaho", "Selebrasyon ng bayan o patron", "Pagsusulit", "Paglilibing"], answer: 1, explanation: "Fiesta ay tradisyonal na selebrasyon.", level: "beginner" },
    { q: "Ano ang 'balut'?", options: ["Prutas", "Itlog na may sisiw", "Isda", "Gulay"], answer: 1, explanation: "Kilalang street food.", level: "intermediate" },
    { q: "Ano ang 'jeepney'?", options: ["Eroplano", "Sikat na pampublikong transportasyon", "Barko", "Tren"], answer: 1, explanation: "Iconic na sasakyan sa Pilipinas.", level: "beginner" },
    { q: "Ano ang 'ninong/ninang'?", options: ["Kapatid", "Godparent", "Tito/Tita", "Kaibigan"], answer: 1, explanation: "Godparent sa binyag o kasal.", level: "intermediate" },
    { q: "Ano ang 'pasalubong'?", options: ["Regalo mula sa biyahe", "Pagkain", "Damit", "Pera"], answer: 0, explanation: "Regalo na dala mula sa biyahe.", level: "beginner" }
  ],
  "idioms": [
    { q: "Ano ang ibig sabihin ng 'butas ang bulsa'?", options: ["May butas ang bulsa", "Walang pera", "Mayaman", "Masaya"], answer: 1, explanation: "Idiom para sa broke.", level: "intermediate" },
    { q: "Ano ang 'isip-bata'?", options: ["Matalino", "Immature", "Matanda", "Mabilis mag-isip"], answer: 1, explanation: "Childish o immature.", level: "beginner" },
    { q: "Ano ang 'kahiya-hiya'?", options: ["Nakakatawa", "Nakakahiya", "Nakakatakot", "Nakakagalit"], answer: 1, explanation: "Shameful.", level: "beginner" },
    { q: "Ano ang 'walang kiyeme'?", options: ["Walang problema", "Diretso / walang pretensyon", "Walang pera", "Walang oras"], answer: 1, explanation: "Straight to the point.", level: "intermediate" },
    { q: "Ano ang 'nasa huli ang pagsisisi'?", options: ["Masaya sa huli", "Huli na ang pagsisisi", "Maganda ang ending", "Mabilis ang oras"], answer: 1, explanation: "Too late for regrets.", level: "intermediate" },
    { q: "Ano ang 'bukas ang palad'?", options: ["Mayaman", "Mapagbigay", "Kuripot", "Tamad"], answer: 1, explanation: "Generous.", level: "intermediate" },
    { q: "Ano ang 'makapal ang mukha'?", options: ["Mataba", "Walang hiya / shameless", "Maganda", "Mabait"], answer: 1, explanation: "Shameless.", level: "intermediate" },
    { q: "Ano ang 'malaking kagat'?", options: ["Malaking kagat sa pagkain", "Malaking bahagi o responsibilidad", "Masarap", "Maliit"], answer: 1, explanation: "Big share of responsibility.", level: "intermediate" },
    { q: "Ano ang 'kagatin ang dila'?", options: ["Kumain", "Huwag magsalita / manahimik", "Uminom", "Matulog"], answer: 1, explanation: "Hold your tongue.", level: "advanced" },
    { q: "Ano ang 'iligpit ang buntot'?", options: ["Maglinis", "Umalis / umatras nang tahimik", "Magtrabaho", "Matulog"], answer: 1, explanation: "Leave quietly / back off.", level: "advanced" }
  ],
  "advanced-grammar": [
    { q: "Ano ang difference ng 'mag-' at 'um-'?", options: ["Walang difference", "Parehong actor-focus pero may pagkakaiba sa usage", "'mag-' ay object focus", "'um-' ay future lang"], answer: 1, explanation: "Parehong actor-focus, iba ang natural roots.", level: "advanced" },
    { q: "Alin ang object-focus form ng 'basa'?", options: ["Magbasa", "Bumasa", "Basahin", "Nagbabasa"], answer: 2, explanation: "'Basahin' ang object-focus.", level: "advanced" },
    { q: "Ano ang gamit ng 'ika-'?", options: ["Pang-uri", "Ordinal numbers", "Pandiwa", "Panghalip"], answer: 1, explanation: "Para sa ika-una, ikalawa, etc.", level: "intermediate" },
    { q: "Alin ang causative 'pa-'?", options: ["Pinaluto niya ang kanin.", "Kumain siya ng kanin.", "Luto ang kanin.", "Kanin siya."], answer: 0, explanation: "'Pinaluto' = caused to cook.", level: "advanced" },
    { q: "Ano ang linker sa Tagalog?", options: ["'na' at '-ng'", "Mga pandiwa", "Mga pangngalan", "Mga panghalip"], answer: 0, explanation: "Nag-uugnay sa modifier at head.", level: "intermediate" },
    { q: "Alin ang tamang benefactive?", options: ["Ibinili niya ako ng libro.", "Bumili siya ng libro.", "Binili ang libro.", "Bibili siya."], answer: 0, explanation: "'Ibinili' ay benefactive focus.", level: "advanced" },
    { q: "Ano ang 'maka-' potential?", options: ["Makakain", "Kumain", "Kakain", "Kinain"], answer: 0, explanation: "'Maka-' ay potential/ability.", level: "advanced" },
    { q: "Alin ang tamang locative focus?", options: ["Pinuntahan niya ang tindahan.", "Pumunta siya sa tindahan.", "Pupunta siya.", "Napunta siya."], answer: 0, explanation: "'Pinuntahan' ay locative focus.", level: "advanced" }
  ],
  "reading": [
    { q: "Basahin: 'Si Maria ay pumunta sa palengke upang bumili ng gulay.' Ano ang ginawa ni Maria?", options: ["Natulog", "Pumunta sa palengke para bumili ng gulay", "Nagluto", "Nag-aral"], answer: 1, explanation: "Direktang sinasabi ng pangungusap.", level: "beginner" },
    { q: "Basahin: 'Bagaman at umuulan, nagpatuloy pa rin ang laro.' Ano ang ibig sabihin?", options: ["Hindi umuulan", "Nagpatuloy ang laro sa kabila ng ulan", "Tumigil ang laro", "Walang laro"], answer: 1, explanation: "'Bagaman' ay contrast.", level: "intermediate" },
    { q: "Ano ang pangunahing ideya: 'Ang edukasyon ang susi sa tagumpay'?", options: ["Mahalaga ang edukasyon", "Hindi mahalaga ang edukasyon", "Kailangan ng pera", "Kailangan ng suwerte"], answer: 0, explanation: "Nagbibigay-diin sa kahalagahan ng edukasyon.", level: "beginner" },
    { q: "Basahin: 'Sa kabila ng hirap, nagsikap siya upang makapagtapos.' Ano ang ipinahihiwatig?", options: ["Madali ang buhay niya", "Nagsikap siya sa kabila ng hirap", "Hindi siya nagtapos", "Mayaman siya"], answer: 1, explanation: "Contrast ng hirap at pagsisikap.", level: "intermediate" },
    { q: "Ano ang konklusyon mula sa: 'Maraming Filipino ang nagtatrabaho sa ibang bansa upang suportahan ang pamilya.'?", options: ["Hindi mahalaga ang pamilya", "Malakas ang family-oriented culture", "Ayaw ng trabaho sa Pilipinas", "Madali ang buhay sa abroad"], answer: 1, explanation: "Nagpapakita ng sakripisyo para sa pamilya.", level: "advanced" }
  ],
  "writing": [
    { q: "Alin ang wastong pangungusap?", options: ["Ako ay pupunta sa simbahan kahapon.", "Ako ay pumunta sa simbahan kahapon.", "Ako ay pupunta sa simbahan bukas kahapon.", "Pupunta ako simbahan."], answer: 1, explanation: "Past form dahil 'kahapon'.", level: "beginner" },
    { q: "Alin ang may tamang bantas?", options: ["Kumusta ka", "Kumusta ka?", "Kumusta ka!", "Kumusta ka."], answer: 1, explanation: "Tanong = question mark.", level: "beginner" },
    { q: "Alin ang mas pormal?", options: ["Kumain na tayo!", "Kain na!", "Tara kain!", "Kain tayo."], answer: 0, explanation: "Mas kumpleto at magalang.", level: "intermediate" },
    { q: "Alin ang tamang paggamit ng 'po'?", options: ["Salamat po.", "Salamat.", "Salamat nga.", "Salamat ulit."], answer: 0, explanation: "'Po' para sa respeto.", level: "beginner" }
  ],
  "pronunciation": [
    { q: "Paano binibigkas ang 'ng' sa 'ngayon'?", options: ["N + G na hiwalay", "Isang tunog (velar nasal) tulad ng 'sing'", "N lang", "G lang"], answer: 1, explanation: "Velar nasal sound.", level: "beginner" },
    { q: "Saan ang diin sa 'bahay'?", options: ["Báhay", "Baháy", "Walang diin", "Báhày"], answer: 1, explanation: "Karaniwang sa ikalawang pantig.", level: "intermediate" },
    { q: "Ano ang tamang bigkas ng 'ngipin'?", options: ["ngí-pin", "ngi-pín", "ngip-in", "n-gipin"], answer: 0, explanation: "Diin sa unang pantig.", level: "intermediate" }
  ],
  "listening": [
    { q: "Kung narinig mo ang 'Magandang umaga, kumusta ka na?', ano ang angkop na sagot?", options: ["Magandang gabi.", "Mabuti naman, salamat!", "Paalam.", "Anong oras na?"], answer: 1, explanation: "Karaniwang tugon sa pagbati.", level: "beginner" },
    { q: "Ano ang ibig sabihin ng 'Ingat ka'?", options: ["Salamat", "Take care", "Paalam lang", "Kumusta"], answer: 1, explanation: "Take care / be careful.", level: "beginner" }
  ],
  "exam-prep": [
    { q: "Ano ang karaniwang sinusuri sa Filipino Language Proficiency Test?", options: ["Grammar, Vocabulary, Reading, Writing", "Math lang", "Science", "History lang"], answer: 0, explanation: "Apat na macro skills + grammar at vocabulary.", level: "intermediate" },
    { q: "Ano ang pinakamahusay na estratehiya sa reading comprehension?", options: ["Basahin muna ang mga tanong", "Magmadali", "Hindi magbasa", "Random na sagot"], answer: 0, explanation: "Alamin muna kung ano ang hahanapin.", level: "intermediate" },
    { q: "Bakit mahalaga ang 'po' at 'opo' sa exam context?", options: ["Para maging pormal at magalang", "Para gawing mahaba", "Para magkamali", "Walang kwenta"], answer: 0, explanation: "Nagpapakita ng wastong register.", level: "beginner" }
  ]
};

const LEVEL_QUESTIONS = {
  beginner: ["basic-vocabulary", "grammar-fundamentals", "conversational", "cultural"],
  intermediate: ["grammar-fundamentals", "conversational", "cultural", "idioms", "reading"],
  advanced: ["advanced-grammar", "idioms", "reading", "exam-prep"],
  proficient: ["advanced-grammar", "reading", "exam-prep", "idioms"]
};
