const originalQuestions = [
  // Set A Questions
  {
    id: 1,
    set: "set-a",
    question: "Which of the following is not a relational database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    id: 2,
    set: "set-a",
    question: "What is the binary equivalent of the decimal number 15?",
    options: ["1111", "1010", "1101", "1001"],
    correctAnswer: "1111",
  },
  {
    id: 3,
    set: "set-a",
    question: "What does SQL stand for?",
    options: [
      "Standard Query Language",
      "Simple Query Language",
      "Structured Query Language",
      "System Query Language",
    ],
    correctAnswer: "Structured Query Language",
  },
  {
    id: 4,
    set: "set-a",
    question: "Which data structure uses FIFO (First In, First Out)?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    correctAnswer: "Queue",
  },

  // Set B Questions
  {
    id: 5,
    set: "set-b",
    question:
      "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    id: 6,
    set: "set-b",
    question: "Which language is primarily used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    id: 7,
    set: "set-b",
    question:
      "Which of the following scheduling algorithms may lead to starvation?",
    options: [
      "Round Robin",
      "Shortest Job Next",
      "First Come First Serve",
      "Multi-Level Queue",
    ],
    correctAnswer: "Shortest Job Next",
  },
  {
    id: 8,
    set: "set-b",
    question: "Which of the following is a dynamic data structure?",
    options: ["Array", "Linked List", "Stack (using array)", "String"],
    correctAnswer: "Linked List",
  },

  // bca Course Questions
  {
    id: 9,
    course: "bca",
    question: "Which of the following is not a relational database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    id: 10,
    course: "bca",
    question: "What is the binary equivalent of the decimal number 15?",
    options: ["1111", "1010", "1101", "1001"],
    correctAnswer: "1111",
  },
  {
    id: 11,
    course: "bca",
    question: "What does SQL stand for?",
    options: [
      "Standard Query Language",
      "Simple Query Language",
      "Structured Query Language",
      "System Query Language",
    ],
    correctAnswer: "Structured Query Language",
  },
  {
    id: 12,
    course: "bca",
    question: "Which data structure uses FIFO (First In, First Out)?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    correctAnswer: "Queue",
  },

  // bce Course Questions
  {
    id: 13,
    course: "bce",
    question:
      "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    id: 14,
    course: "bce",
    question: "Which language is primarily used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    id: 15,
    course: "bce",
    question:
      "Which of the following scheduling algorithms may lead to starvation?",
    options: [
      "Round Robin",
      "Shortest Job Next",
      "First Come First Serve",
      "Multi-Level Queue",
    ],
    correctAnswer: "Shortest Job Next",
  },
  {
    id: 16,
    course: "bce",
    question: "Which of the following is a dynamic data structure?",
    options: ["Array", "Linked List", "Stack (using array)", "String"],
    correctAnswer: "Linked List",
  },

  // bim Course Questions
  {
    id: 17,
    course: "bim",
    question: "What is the primary purpose of the OSI model?",
    options: [
      "To provide a framework for network protocols",
      "To manage system memory",
      "To secure data transmission",
      "To connect devices to the internet",
    ],
    correctAnswer: "To provide a framework for network protocols",
  },
  {
    id: 18,
    course: "bim",
    question: "Which of the following is an example of an object-oriented programming language?",
    options: ["Python", "C", "Assembly", "COBOL"],
    correctAnswer: "Python",
  },
  {
    id: 19,
    course: "bim",
    question: "Which of the following is NOT a type of operating system?",
    options: ["Windows", "Linux", "Android", "C++"],
    correctAnswer: "C++",
  },

  // bit Course Questions
  {
    id: 20,
    course: "bit",
    question: "What is the full form of HTTP?",
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "Hyper Transfer Text Protocol",
      "HyperText Text Protocol",
    ],
    correctAnswer: "HyperText Transfer Protocol",
  },
  {
    id: 21,
    course: "bit",
    question: "Which data type is used for true/false values?",
    options: ["Boolean", "Integer", "Character", "String"],
    correctAnswer: "Boolean",
  },
  {
    id: 22,
    course: "bit",
    question: "What is the time complexity of the binary search algorithm?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "O(log n)",
  },

  // csit Course Questions
  {
    id: 23,
    course: "csit",
    question: "Which of the following is an example of a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    id: 24,
    course: "csit",
    question: "Which of the following languages is used for web front-end development?",
    options: ["Java", "C", "JavaScript", "Python"],
    correctAnswer: "JavaScript",
  },
  {
    id: 25,
    course: "csit",
    question: "What is a stack data structure used for?",
    options: ["FIFO", "LIFO", "Stacking", "Queueing"],
    correctAnswer: "LIFO",
  },

  // bds Course Questions (Updated IDs)
  {
    id: 26,
    course: "bds",
    question: "What is the primary purpose of sterilization in dentistry?",
    options: [
      "To maintain oral hygiene",
      "To prevent the spread of infections",
      "To enhance taste",
      "To improve the aesthetic appearance",
    ],
    correctAnswer: "To prevent the spread of infections",
  },
  {
    id: 27,
    course: "bds",
    question: "What is the most common type of dental cavity?",
    options: ["Pit and fissure cavities", "Root cavities", "Smooth surface cavities", "None of the above"],
    correctAnswer: "Pit and fissure cavities",
  },
  {
    id: 28,
    course: "bds",
    question: "Which of the following is an example of an endodontic procedure?",
    options: ["Tooth extraction", "Root canal treatment", "Teeth whitening", "Scaling and polishing"],
    correctAnswer: "Root canal treatment",
  },
  {
    id: 29,
    course: "bds",
    question: "What is the most common cause of gum disease?",
    options: [
      "Vitamin deficiency",
      "Bacterial plaque buildup",
      "Genetic factors",
      "Smoking",
    ],
    correctAnswer: "Bacterial plaque buildup",
  },
  {
    id: 30,
    course: "bds",
    question: "At what age should children have their first dental check-up?",
    options: ["2 years old", "6 months old", "3 years old", "1 year old"],
    correctAnswer: "1 year old",
  },
];

export default originalQuestions;

