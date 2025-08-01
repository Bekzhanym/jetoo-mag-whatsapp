export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  points: number;
}

export interface UserInfo {
  goal: string;
  difficulty: string;
  experience: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is your name?",
    options: [
      "My name is John.",
      "I name is John.",
      "Me name John.",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 0,
    points: 1
  },
  {
    id: 2,
    question: "Choose the correct verb: \"I _ a student.\"",
    options: [
      "am",
      "is",
      "are",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 0,
    points: 1
  },
  {
    id: 3,
    question: "What's the opposite of \"hot\"?",
    options: [
      "Warm",
      "Cold",
      "Heat",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 1,
    points: 1
  },
  {
    id: 4,
    question: "Choose the correct question form:",
    options: [
      "You like pizza?",
      "Do you like pizza?",
      "Like you pizza?",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 1,
    points: 1
  },
  {
    id: 5,
    question: "What does \"usually\" mean?",
    options: [
      "Never",
      "Sometimes",
      "Most of the time",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 2,
    points: 1
  },
  {
    id: 6,
    question: "Choose the correct past form: \"They _ to the park yesterday.\"",
    options: [
      "go",
      "went",
      "going",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 1,
    points: 1
  },
  {
    id: 7,
    question: "Complete the sentence: \"If I have time, I _ help you.\"",
    options: [
      "would",
      "will",
      "have",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 1,
    points: 1
  },
  {
    id: 8,
    question: "What is the correct sentence in Present Perfect?",
    options: [
      "I have finished my homework.",
      "I finish my homework.",
      "I am finishing my homework.",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 0,
    points: 1
  },
  {
    id: 9,
    question: "What is a synonym for \"important\"?",
    options: [
      "Necessary",
      "Simple",
      "Optional",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 0,
    points: 1
  },
  {
    id: 10,
    question: "Choose the correct sentence using a relative clause:",
    options: [
      "The woman who lives next door is a lawyer.",
      "The woman she lives next door is a lawyer.",
      "The woman living next door she is a lawyer.",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 0,
    points: 1
  },
  {
    id: 11,
    question: "What is the correct form: \"I wish I _ better at maths.\"",
    options: [
      "am",
      "was",
      "be",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 1,
    points: 1
  },
  {
    id: 12,
    question: "Choose the correct conditional: \"If I had known, I _ earlier.\"",
    options: [
      "would have come",
      "would come",
      "will come",
      "Нақты білмеймін."
    ],
    correctAnswerIndex: 0,
    points: 1
  }
  
];





export const getLevel = (score: number): string => {
  if (score >= 11) return "Upper-Intermediate";
  if (score >= 9) return "Intermediate";
  if (score >= 7) return "Pre-Intermediate";
  if (score >= 4) return "Elementary";
  return "Beginner";
};

export const getLevelDescription = (level: string): string => {
  switch (level) {
    case "Upper-Intermediate":
      return "Күрделі мәтіндерді түсінеді, нақты әрі жүйелі ой айта алады. Әртүрлі тақырыпта еркін сөйлеуге және пікірталасқа қатысуға мүмкіндік бар.";
    case "Intermediate":
      return "Таныс жағдайларда өз ойын жеткізе алады, пікір білдіруде белсенділік байқалады. Грамматикалық қателері болса да, жалпы мағына түсінікті түрде беріледі.";
    case "Pre-Intermediate":
      return "Қарапайым мәтіндер мен диалогтардың мағынасын жартылай түсінеді, таныс тақырыптарда ойын жеткізуге тырысады. Күрделі құрылымдарды қабылдай бастайды.";
    case "Elementary":
      return "Негізгі грамматикалық құрылымдарды түсінеді, күнделікті сөйлемдерді құрастыра алады. Қарапайым сұрақтарға жауап беріп, қысқа диалогтарға қатыса алады.";
    case "Beginner":
      return "Қарапайым сөздер мен тіркестер таныс. Жаңа сөздерді меңгеру мен тыңдау арқылы түсіну дағдысы қалыптасып келеді.";
    default:
      return "Деңгей анықталмады.";
  }
}; 