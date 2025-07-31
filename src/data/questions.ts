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

export const goals = [
  "Шетелге оқуға түсу",
  "ҰБТ-да таңдау пәнім",
  "Work & Travel",
  "Магистратура",
  "Басқа"
];

export const difficulties = [
  "Speaking нашар",
  "Грамматика үйрену керек",
  "Дисциплина жоқ",
  "Жақсы мұғалім жоқ"
];

export const experienceLevels = [
  "Енді кірісіп бастаймын",
  "6 айдан көп",
  "1 жылдан көп"
];

export const getLevel = (score: number): string => {
  if (score >= 11) return "Upper-intermediate";
  if (score >= 9) return "Intermediate";
  if (score >= 7) return "Pre-intermediate";
  if (score >= 4) return "Elementary";
  return "Beginner";
};

export const getLevelDescription = (level: string): string => {
  switch (level) {
    case "Upper-intermediate":
      return "Күрделі мәтіндерді түсініп, нақты әрі еркін сөйлей алады.";
    case "Intermediate":
      return "Таныс тақырыпта өз ойын жеткізе алады, грамматикалық қателер болуы мүмкін.";
    case "Pre-intermediate":
      return "Қарапайым диалогтар мен мәтіндерді жартылай түсінеді, күрделі құрылымдар қиын.";
    case "Elementary":
      return "Негізгі грамматиканы меңгерген, күнделікті қарапайым сөйлемдер түсінікті.";
    case "Beginner":
      return "Тілді жаңа бастаған, қарапайым сөздер мен тіркестерді біледі.";
    default:
      return "Деңгей анықталмады.";
  }
}; 