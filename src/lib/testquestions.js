const testQuestions = [
    // IELTS - Set A
    {
      id: 1,
      set: "set-a",
      test: "ielts",
      question: "Which of the following is an essential section of the IELTS exam?",
      options: ["Speaking", "Mathematics", "Programming", "Physics"],
      correctAnswer: "Speaking",
    },
    {
      id: 2,
      set: "set-a",
      test: "ielts",
      question: "How long is the IELTS Speaking test?",
      options: ["30 minutes", "11-14 minutes", "45 minutes", "60 minutes"],
      correctAnswer: "11-14 minutes",
    },
  
    // IELTS - Set B
    {
      id: 3,
      set: "set-b",
      test: "ielts",
      question: "What is the purpose of the IELTS Writing Task 1?",
      options: [
        "To write an essay",
        "To describe a graph or diagram",
        "To narrate a story",
        "To solve a math problem",
      ],
      correctAnswer: "To describe a graph or diagram",
    },
    {
      id: 4,
      set: "set-b",
      test: "ielts",
      question: "How many sections are there in the IELTS Listening test?",
      options: ["Two", "Three", "Four", "Five"],
      correctAnswer: "Four",
    },
  
    // SAT - Set A
    {
      id: 5,
      set: "set-a",
      test: "sat",
      question: "What is the total duration of the SAT exam?",
      options: ["3 hours", "2 hours 30 minutes", "4 hours", "3 hours 50 minutes"],
      correctAnswer: "3 hours",
    },
    {
      id: 6,
      set: "set-a",
      test: "sat",
      question: "What type of math questions are included in the SAT?",
      options: [
        "Only algebra",
        "Only geometry",
        "Algebra, geometry, and data analysis",
        "Programming problems",
      ],
      correctAnswer: "Algebra, geometry, and data analysis",
    },
  
    // SAT - Set B
    {
      id: 7,
      set: "set-b",
      test: "sat",
      question: "How many sections are there in the SAT exam?",
      options: ["Three", "Four", "Two", "Five"],
      correctAnswer: "Four",
    },
    {
      id: 8,
      set: "set-b",
      test: "sat",
      question: "What is the highest possible SAT score?",
      options: ["1600", "2400", "2000", "1800"],
      correctAnswer: "1600",
    },
  
    // PTE - Set A
    {
      id: 9,
      set: "set-a",
      test: "pte",
      question: "How is the PTE exam delivered?",
      options: ["Paper-based", "Computer-based", "Oral exam", "Written exam"],
      correctAnswer: "Computer-based",
    },
    {
      id: 10,
      set: "set-a",
      test: "pte",
      question: "What is the maximum score for each section in PTE?",
      options: ["50", "100", "90", "80"],
      correctAnswer: "90",
    },
  
    // PTE - Set B
    {
      id: 11,
      set: "set-b",
      test: "pte",
      question: "How many sections are there in the PTE exam?",
      options: ["Two", "Four", "Three", "Five"],
      correctAnswer: "Three",
    },
    {
      id: 12,
      set: "set-b",
      test: "pte",
      question: "What does the PTE Speaking and Writing section include?",
      options: [
        "Essay writing and speech recognition",
        "Short answer and oral presentation",
        "Multiple-choice questions",
        "Reading and listening",
      ],
      correctAnswer: "Essay writing and speech recognition",
    },
  
    // TOEFL - Set A
    {
      id: 13,
      set: "set-a",
      test: "toefl",
      question: "What is the maximum score for the TOEFL exam?",
      options: ["120", "200", "160", "180"],
      correctAnswer: "120",
    },
    {
      id: 14,
      set: "set-a",
      test: "toefl",
      question: "How long is the TOEFL Speaking section?",
      options: ["10 minutes", "20 minutes", "30 minutes", "15 minutes"],
      correctAnswer: "20 minutes",
    },
  
    // TOEFL - Set B
    {
      id: 15,
      set: "set-b",
      test: "toefl",
      question: "What is the format of the TOEFL Listening section?",
      options: [
        "Multiple choice",
        "Fill in the blanks",
        "Essay writing",
        "Oral presentation",
      ],
      correctAnswer: "Multiple choice",
    },
    {
      id: 16,
      set: "set-b",
      test: "toefl",
      question: "What is the total duration of the TOEFL exam?",
      options: ["4 hours", "2 hours", "3 hours", "5 hours"],
      correctAnswer: "4 hours",
    },
  
    // GRE - Set A
    {
      id: 17,
      set: "set-a",
      test: "gre",
      question: "What is the GRE General Test?",
      options: [
        "Graduate Record Examination for business school",
        "Graduate Record Examination for engineering school",
        "Graduate Record Examination for law school",
        "General test for graduate school admissions",
      ],
      correctAnswer: "General test for graduate school admissions",
    },
    {
      id: 18,
      set: "set-a",
      test: "gre",
      question: "How many sections are there in the GRE General Test?",
      options: ["Two", "Four", "Three", "Five"],
      correctAnswer: "Three",
    },
  
    // GRE - Set B
    {
      id: 19,
      set: "set-b",
      test: "gre",
      question: "What is the maximum score for the GRE General Test?",
      options: ["170", "160", "200", "240"],
      correctAnswer: "170",
    },
    {
      id: 20,
      set: "set-b",
      test: "gre",
      question: "How long is the GRE Analytical Writing section?",
      options: ["45 minutes", "60 minutes", "30 minutes", "50 minutes"],
      correctAnswer: "60 minutes",
    },
  
    // GMAT - Set A
    {
      id: 21,
      set: "set-a",
      test: "gmat",
      question: "How many sections are there in the GMAT exam?",
      options: ["Four", "Three", "Two", "Five"],
      correctAnswer: "Four",
    },
    {
      id: 22,
      set: "set-a",
      test: "gmat",
      question: "What is the total time duration of the GMAT exam?",
      options: ["3 hours 30 minutes", "4 hours", "3 hours", "2 hours 30 minutes"],
      correctAnswer: "3 hours 30 minutes",
    },
  
    // GMAT - Set B
    {
      id: 23,
      set: "set-b",
      test: "gmat",
      question: "What is the GMAT Integrated Reasoning section about?",
      options: [
        "Solving word problems",
        "Analyzing data and solving quantitative problems",
        "Reading comprehension",
        "Solving equations",
      ],
      correctAnswer: "Analyzing data and solving quantitative problems",
    },
    {
      id: 24,
      set: "set-b",
      test: "gmat",
      question: "How many questions are there in the GMAT Quantitative section?",
      options: ["37", "50", "40", "45"],
      correctAnswer: "37",
    },
  ];

export default testQuestions;