export interface Question {
  id: number;
  category: string;
  type: string;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correct_option: string;
}

export interface UserInfo {
  goal: string;
  difficulty: string;
  experience: string;
}

export const questions: Question[] = [
  // 1–15 аралығынан (5 сұрақ)
  {
    "id": 1,
    "category": "Критикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Дүкенде жолды дәптер 14 тг, ал тор көзді 16 тг тұрады. Егер Санжар жол және тор көзді дәптерлердің сандары бірдей болатындай алғысы келсе, онда оның 134 тг-ге ең көп дегенде неше дәптерден сатып ала алатынын табыңыз.",
    "options": {
      "A": "7 жолды және 7 тор көзді",
      "B": "5 жолды және 5 тор көзді",
      "C": "4 жолды және 4 тор көзді",
      "D": "3 жолды және 3 тор көзді",
      "E": "9 жолды және 9 тор көзді"
    },
    "correct_option": "A"
  },
  {
    "id": 2,
    "category": "Критикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Бірінші көбейткішті 30%-ке арттырып, екінші көбейткішті 30%-ке кеміткенде көбейтінді неше пайызға өзгеретінін табыңыз.",
    "options": {
      "A": "9,1%-ке артты",
      "B": "өзгермейді",
      "C": "9,1%-ке кемиді",
      "D": "9%-ке кемиді",
      "E": "9%-ке артады"
    },
    "correct_option": "D"
  },
  {
    "id": 3,
    "category": "Критикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Балмұздақтың 70% су, 12% сары май, қалғаны қант. 3,5 кг балмұздақ дайындау үшін неше грамм қант керек?",
    "options": {
      "A": "445",
      "B": "390",
      "C": "630",
      "D": "380",
      "E": "525"
    },
    "correct_option": "C"
  },
  {
    "id": 4,
    "category": "Критикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Соңғы он күндегі сүт өнімдері (т): 12,2; 12; 10; 11,6; 13; 12,5; 12,2; 13; 12,5; 10. Медианасы?",
    "options": {
      "A": "11,6 т",
      "B": "10 т",
      "C": "12,2 т",
      "D": "12,5 т",
      "E": "13 т"
    },
    "correct_option": "C"
  },
  {
    "id": 5,
    "category": "Критикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Әсем пойыздың басынан санағанда 7-вагонға, Мадина соңынан санағанда 7-вагонға отырды және олар бір вагонда. Пойызда неше вагон бар?",
    "options": {
      "A": "13",
      "B": "11",
      "C": "12",
      "D": "14",
      "E": "15"
    },
    "correct_option": "A"
  },

  // 16–30 аралығынан (5 сұрақ)
  {
    "id": 16,
    "category": "Аналитикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Әбу Насыр әл-Фараби – дүниежүзіне әйгілі ұлы ғалым. Аристотельден кейінгі [...] ұстаз.",
    "options": {
      "A": "бірінші",
      "B": "екінші",
      "C": "үшінші",
      "D": "төртінші",
      "E": "бесінші"
    },
    "correct_option": "B"
  },
  {
    "id": 18,
    "category": "Аналитикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Табиғат қазынасы… Сирек түрлер арнайы кітапқа тіркеледі. Бұл кітап қалай аталады?",
    "options": {
      "A": "Ақ",
      "B": "Қызыл",
      "C": "Сары",
      "D": "Көк",
      "E": "Жасыл"
    },
    "correct_option": "B"
  },
  {
    "id": 22,
    "category": "Аналитикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Шахмат алғаш қай елде пайда болды?",
    "options": {
      "A": "Үндістан",
      "B": "Иран",
      "C": "Кавказ",
      "D": "Франция",
      "E": "Қытай"
    },
    "correct_option": "A"
  },
  {
    "id": 24,
    "category": "Аналитикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Шахмат тақтасы қанша шаршыдан тұрады?",
    "options": {
      "A": "16",
      "B": "32",
      "C": "64",
      "D": "72",
      "E": "100"
    },
    "correct_option": "C"
  },
  {
    "id": 28,
    "category": "Аналитикалық ойлау",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Құмырсқаларды зерттейтін ғылым.",
    "options": {
      "A": "лепидоптерология",
      "B": "нематология",
      "C": "гельминтология",
      "D": "мирмекология",
      "E": "орнитология"
    },
    "correct_option": "D"
  },

  // Ағылшыннан (5 сұрақ)
  {
    "id": 31,
    "category": "Ағылшын",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "She ___ to the gym every morning.",
    "options": {
      "A": "go",
      "B": "goes",
      "C": "going",
      "D": "gone",
      "E": "went"
    },
    "correct_option": "B"
  },
  {
    "id": 34,
    "category": "Ағылшын",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "By the time we arrived, the movie ___.",
    "options": {
      "A": "starts",
      "B": "has started",
      "C": "had started",
      "D": "is starting",
      "E": "was starting"
    },
    "correct_option": "C"
  },
  {
    "id": 41,
    "category": "Ағылшын",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Choose the correct form for a cleft sentence: ___ was my brother who broke the vase.",
    "options": {
      "A": "That",
      "B": "There",
      "C": "It",
      "D": "This",
      "E": "What"
    },
    "correct_option": "C"
  },
  {
    "id": 43,
    "category": "Ағылшын",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Find the sentence that contains a verb in the subjunctive mood:",
    "options": {
      "A": "She was walking when it started to rain.",
      "B": "He asked if I was ready.",
      "C": "It is essential that he be informed immediately.",
      "D": "Do you want to join us?",
      "E": "He can speak French fluently."
    },
    "correct_option": "C"
  },
  {
    "id": 47,
    "category": "Ағылшын",
    "type": "SINGLE_ANSWER_OPTIONS",
    "text": "Choose the correct comparative form: This hotel is ___ than the one we stayed at last year.",
    "options": {
      "A": "more good",
      "B": "better",
      "C": "more better",
      "D": "best",
      "E": "most good"
    },
    "correct_option": "B"
  }
];




