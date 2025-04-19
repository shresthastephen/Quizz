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
  {
    id: 13,
    course: "bca",
    question: "Which language is primarily used to style web pages?",
    options: ["HTML", "JavaScript", "CSS", "Python"],
    correctAnswer: "CSS",
  },
  {
    id: 14,
    course: "bca",
    question: "Which of the following is a compiled programming language?",
    options: ["Python", "Java", "JavaScript", "HTML"],
    correctAnswer: "Java",
  },
  {
    id: 15,
    course: "bca",
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: "<a>",
  },
  {
    id: 16,
    course: "bca",
    question: "Which of these is not a programming paradigm?",
    options: ["Object-Oriented", "Functional", "Procedural", "Incremental"],
    correctAnswer: "Incremental",
  },
  {
    id: 17,
    course: "bca",
    question: "What is the purpose of a compiler?",
    options: ["Execute code", "Write code", "Translate code", "Debug code"],
    correctAnswer: "Translate code",
  },
  {
    id: 18,
    course: "bca",
    question: "Which company developed the Windows operating system?",
    options: ["Apple", "IBM", "Google", "Microsoft"],
    correctAnswer: "Microsoft",
  },
  {
    id: 19,
    course: "bca",
    question: "What is the full form of CPU?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Processor Utility",
      "Core Processing Unit",
    ],
    correctAnswer: "Central Processing Unit",
  },
  {
    id: 20,
    course: "bca",
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["var", "int", "dim", "declare"],
    correctAnswer: "var",
  },
  {
    id: 21,
    course: "bca",
    question: "What is an algorithm?",
    options: [
      "A type of computer virus",
      "A process or set of rules to solve a problem",
      "A type of database",
      "A computer language",
    ],
    correctAnswer: "A process or set of rules to solve a problem",
  },
  {
    id: 22,
    course: "bca",
    question: "What is the default port for HTTP?",
    options: ["21", "25", "80", "443"],
    correctAnswer: "80",
  },
  {
    id: 23,
    course: "bca",
    question: "Which of the following is not a valid JavaScript data type?",
    options: ["String", "Boolean", "Float", "Undefined"],
    correctAnswer: "Float",
  },
  {
    id: 24,
    course: "bca",
    question: "Which HTML tag is used to insert a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    correctAnswer: "<br>",
  },
  {
    id: 25,
    course: "bca",
    question: "What is the output of 2 + '2' in JavaScript?",
    options: ["4", "22", "undefined", "NaN"],
    correctAnswer: "22",
  },
  {
    id: 26,
    course: "bca",
    question: "Which of the following is a logical operator?",
    options: ["+", "-", "&&", "="],
    correctAnswer: "&&",
  },
  {
    id: 27,
    course: "bca",
    question: "What does RAM stand for?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Run Accept Memory",
      "Read Allocate Memory",
    ],
    correctAnswer: "Random Access Memory",
  },
  {
    id: 28,
    course: "bca",
    question: "Which of the following is a front-end framework?",
    options: ["Django", "React", "Node.js", "Laravel"],
    correctAnswer: "React",
  },
  
  // bce Course Questions
  {
    id: 29,
    course: "bce",
    question: "Which branch of engineering deals with computer hardware and software design?",
    options: ["Civil", "Mechanical", "Computer", "Electrical"],
    correctAnswer: "Computer",
  },
  {
    id: 30,
    course: "bce",
    question: "Which logic gate outputs true only when both inputs are true?",
    options: ["OR", "AND", "NOT", "XOR"],
    correctAnswer: "AND",
  },
  {
    id: 31,
    course: "bce",
    question: "Which number system uses only digits 0 and 1?",
    options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
    correctAnswer: "Binary",
  },
  {
    id: 32,
    course: "bce",
    question: "What is the unit of electrical resistance?",
    options: ["Ohm", "Watt", "Volt", "Ampere"],
    correctAnswer: "Ohm",
  },
  {
    id: 33,
    course: "bce",
    question: "Which of the following is not a programming language?",
    options: ["Python", "C++", "Java", "Oracle"],
    correctAnswer: "Oracle",
  },
  {
    id: 34,
    course: "bce",
    question: "What does an operating system do?",
    options: [
      "Manages computer hardware and software",
      "Compiles programs",
      "Creates graphics",
      "Controls the internet",
    ],
    correctAnswer: "Manages computer hardware and software",
  },
  {
    id: 35,
    course: "bce",
    question: "Which protocol is used to send emails?",
    options: ["HTTP", "SMTP", "FTP", "TCP"],
    correctAnswer: "SMTP",
  },
  {
    id: 36,
    course: "bce",
    question: "Which device is used to convert digital signals to analog?",
    options: ["Modem", "Router", "Switch", "Repeater"],
    correctAnswer: "Modem",
  },
  {
    id: 37,
    course: "bce",
    question: "Which programming language is primarily used for Android app development?",
    options: ["Swift", "Kotlin", "PHP", "Ruby"],
    correctAnswer: "Kotlin",
  },
  {
    id: 38,
    course: "bce",
    question: "What does 'www' stand for?",
    options: [
      "World Wide Web",
      "Wide World Web",
      "Web With World",
      "Web Wide World",
    ],
    correctAnswer: "World Wide Web",
  },
  {
    id: 39,
    course: "bce",
    question: "What is the full form of ALU?",
    options: [
      "Arithmetic Logic Unit",
      "Advanced Logic Unit",
      "Automatic Logic Unit",
      "Arithmetic Level Unit",
    ],
    correctAnswer: "Arithmetic Logic Unit",
  },
  {
    id: 40,
    course: "bce",
    question: "Which software is used for version control?",
    options: ["Photoshop", "Git", "MS Word", "Excel"],
    correctAnswer: "Git",
  },
  {
    id: 41,
    course: "bce",
    question: "What is a byte equal to?",
    options: ["4 bits", "8 bits", "16 bits", "32 bits"],
    correctAnswer: "8 bits",
  },
  {
    id: 42,
    course: "bce",
    question: "Which of these is used in circuit design simulation?",
    options: ["AutoCAD", "MATLAB", "Multisim", "Photoshop"],
    correctAnswer: "Multisim",
  },
  {
    id: 43,
    course: "bce",
    question: "What is the function of a transistor?",
    options: [
      "Amplify and switch electronic signals",
      "Store data",
      "Transfer data",
      "Connect devices",
    ],
    correctAnswer: "Amplify and switch electronic signals",
  },
  {
    id: 44,
    course: "bce",
    question: "Which of these is a database management system?",
    options: ["MySQL", "GitHub", "Google", "Linux"],
    correctAnswer: "MySQL",
  },
  {
    id: 45,
    course: "bce",
    question: "What type of memory is non-volatile?",
    options: ["RAM", "Cache", "ROM", "Register"],
    correctAnswer: "ROM",
  },
  {
    id: 46,
    course: "bce",
    question: "Which of the following is used to measure current?",
    options: ["Voltmeter", "Ammeter", "Ohmmeter", "Multimeter"],
    correctAnswer: "Ammeter",
  },
  {
    id: 47,
    course: "bce",
    question: "Which symbol represents the NOT gate?",
    options: ["&", "|", "!", "~"],
    correctAnswer: "!",
  },
  {
    id: 48,
    course: "bce",
    question: "What is the base of the hexadecimal number system?",
    options: ["8", "10", "16", "2"],
    correctAnswer: "16",
  },
  
  // bim Course Questions
  {
    id: 49,
    course: "bim",
    question: "What does MIS stand for in the context of business systems?",
    options: [
      "Management Information System",
      "Manual Information System",
      "Marketing Information Service",
      "Manufacturing Information System"
    ],
    correctAnswer: "Management Information System"
  },
  {
    id: 50,
    course: "bim",
    question: "Which of the following is not a type of database model?",
    options: ["Hierarchical", "Relational", "Object-oriented", "Sequential"],
    correctAnswer: "Sequential"
  },
  {
    id: 51,
    course: "bim",
    question: "What is the primary function of an ERP system?",
    options: [
      "Graphic design",
      "Manage business processes",
      "Data encryption",
      "Web hosting"
    ],
    correctAnswer: "Manage business processes"
  },
  {
    id: 52,
    course: "bim",
    question: "Which software is commonly used for accounting?",
    options: ["Tally", "Photoshop", "AutoCAD", "WordPress"],
    correctAnswer: "Tally"
  },
  {
    id: 53,
    course: "bim",
    question: "What does SWOT stand for in business analysis?",
    options: [
      "Strengths, Weaknesses, Opportunities, Threats",
      "Sales, Wages, Operations, Taxes",
      "System, Workflow, Output, Testing",
      "Strategy, Work, Objectives, Tactics"
    ],
    correctAnswer: "Strengths, Weaknesses, Opportunities, Threats"
  },
  {
    id: 54,
    course: "bim",
    question: "Which of the following is a primary activity in the value chain?",
    options: ["Marketing", "Human Resource Management", "Technology Development", "Procurement"],
    correctAnswer: "Marketing"
  },
  {
    id: 55,
    course: "bim",
    question: "In data communication, what does LAN stand for?",
    options: ["Local Area Network", "Large Access Network", "Linear Access Node", "Low Access Net"],
    correctAnswer: "Local Area Network"
  },
  {
    id: 56,
    course: "bim",
    question: "Which programming language is mostly used for business applications?",
    options: ["COBOL", "JavaScript", "Python", "C"],
    correctAnswer: "COBOL"
  },
  {
    id: 57,
    course: "bim",
    question: "What is the full form of CRM?",
    options: [
      "Customer Relationship Management",
      "Client Resource Monitoring",
      "Company Record Manager",
      "Customer Resource Method"
    ],
    correctAnswer: "Customer Relationship Management"
  },
  {
    id: 58,
    course: "bim",
    question: "Which chart is ideal for representing percentages?",
    options: ["Pie Chart", "Bar Graph", "Line Graph", "Histogram"],
    correctAnswer: "Pie Chart"
  },
  {
    id: 59,
    course: "bim",
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTabular Markup Language",
      "None of these"
    ],
    correctAnswer: "HyperText Markup Language"
  },
  {
    id: 60,
    course: "bim",
    question: "Which Microsoft Office application is best for data analysis?",
    options: ["Excel", "Word", "PowerPoint", "Outlook"],
    correctAnswer: "Excel"
  },
  {
    id: 61,
    course: "bim",
    question: "In networking, which device connects different networks?",
    options: ["Router", "Switch", "Hub", "Repeater"],
    correctAnswer: "Router"
  },
  {
    id: 62,
    course: "bim",
    question: "What is the function of a firewall in a computer network?",
    options: [
      "To improve network speed",
      "To block unauthorized access",
      "To store passwords",
      "To install updates"
    ],
    correctAnswer: "To block unauthorized access"
  },
  {
    id: 63,
    course: "bim",
    question: "Which financial statement shows a company’s performance over a period of time?",
    options: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Equity Statement"],
    correctAnswer: "Income Statement"
  },
  {
    id: 64,
    course: "bim",
    question: "Which of these is a popular open-source content management system?",
    options: ["WordPress", "Photoshop", "Excel", "Dropbox"],
    correctAnswer: "WordPress"
  },
  {
    id: 65,
    course: "bim",
    question: "Which technique is used in Excel to summarize large data sets?",
    options: ["Pivot Table", "Conditional Formatting", "Charting", "Data Validation"],
    correctAnswer: "Pivot Table"
  },
  {
    id: 66,
    course: "bim",
    question: "Which of the following is a part of e-commerce?",
    options: ["Online shopping", "Social media", "Graphic designing", "Software installation"],
    correctAnswer: "Online shopping"
  },
  {
    id: 67,
    course: "bim",
    question: "What type of database is used in a bank to track transactions?",
    options: ["Relational", "Hierarchical", "Object-oriented", "Flat-file"],
    correctAnswer: "Relational"
  },
  {
    id: 68,
    course: "bim",
    question: "Which function is used in Excel to find the average of numbers?",
    options: ["=AVG()", "=SUM()", "=AVERAGE()", "=MEAN()"],
    correctAnswer: "=AVERAGE()"
  },
  

  // bit Course Questions
  {
    id: 69,
    course: "bit",
    question: "Which of the following is a programming language used for web development?",
    options: ["HTML", "Java", "Python", "JavaScript"],
    correctAnswer: "JavaScript"
  },
  {
    id: 70,
    course: "bit",
    question: "Which of the following is a NoSQL database?",
    options: ["Oracle", "MongoDB", "MySQL", "PostgreSQL"],
    correctAnswer: "MongoDB"
  },
  {
    id: 71,
    course: "bit",
    question: "Which one is a front-end framework?",
    options: ["Laravel", "Django", "React", "Spring"],
    correctAnswer: "React"
  },
  {
    id: 72,
    course: "bit",
    question: "What is the purpose of version control systems like Git?",
    options: ["Edit videos", "Backup files", "Manage source code", "Scan for viruses"],
    correctAnswer: "Manage source code"
  },
  {
    id: 73,
    course: "bit",
    question: "Which of these is a cloud computing platform?",
    options: ["AWS", "Node.js", "Photoshop", "Linux"],
    correctAnswer: "AWS"
  },
  {
    id: 74,
    course: "bit",
    question: "What is the purpose of normalization in databases?",
    options: ["To increase redundancy", "To remove redundancy", "To make data encrypted", "To slow down queries"],
    correctAnswer: "To remove redundancy"
  },
  {
    id: 75,
    course: "bit",
    question: "Which data structure uses LIFO (Last In First Out)?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: "Stack"
  },
  {
    id: 76,
    course: "bit",
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Program Interaction", "Applied Protocol Interface"],
    correctAnswer: "Application Programming Interface"
  },
  {
    id: 77,
    course: "bit",
    question: "Which of the following is not a valid HTTP method?",
    options: ["GET", "POST", "FETCH", "PUT"],
    correctAnswer: "FETCH"
  },
  {
    id: 78,
    course: "bit",
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-align"],
    correctAnswer: "font-size"
  },
  {
    id: 79,
    course: "bit",
    question: "Which of the following is used to store data in key-value pairs?",
    options: ["Array", "Set", "Map", "Queue"],
    correctAnswer: "Map"
  },
  {
    id: 80,
    course: "bit",
    question: "Which of these is not a primitive data type in JavaScript?",
    options: ["Number", "String", "Boolean", "List"],
    correctAnswer: "List"
  },
  {
    id: 81,
    course: "bit",
    question: "What is the purpose of responsive design?",
    options: ["Speed up backend", "Work offline", "Adapt UI for different screens", "Optimize SEO"],
    correctAnswer: "Adapt UI for different screens"
  },
  {
    id: 82,
    course: "bit",
    question: "What does JSON stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Source Object Network",
      "JavaScript Online Notifier",
      "Java Service Object Notation"
    ],
    correctAnswer: "JavaScript Object Notation"
  },
  {
    id: 83,
    course: "bit",
    question: "What is the default port number for HTTP?",
    options: ["21", "80", "443", "8080"],
    correctAnswer: "80"
  },
  {
    id: 84,
    course: "bit",
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["==", "!=", "===", "<="],
    correctAnswer: "==="
  },
  {
    id: 85,
    course: "bit",
    question: "What is the output of 2 + '2' in JavaScript?",
    options: ["4", "22", "NaN", "undefined"],
    correctAnswer: "22"
  },
  {
    id: 86,
    course: "bit",
    question: "Which tag is used for inserting an image in HTML?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    correctAnswer: "<img>"
  },
  {
    id: 87,
    course: "bit",
    question: "Which protocol is used for sending emails?",
    options: ["FTP", "SMTP", "HTTP", "SNMP"],
    correctAnswer: "SMTP"
  },
  {
    id: 88,
    course: "bit",
    question: "Which of the following is not a valid data type in SQL?",
    options: ["VARCHAR", "INT", "BOOLEAN", "ARRAY"],
    correctAnswer: "ARRAY"
  },
  
  // csit Course Questions
  {
    id: 89,
    course: "csit",
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    correctAnswer: "Merge Sort"
  },
  {
    id: 90,
    course: "csit",
    question: "Which of the following is a compiled language?",
    options: ["Python", "JavaScript", "Java", "PHP"],
    correctAnswer: "Java"
  },
  {
    id: 91,
    course: "csit",
    question: "What does the 'this' keyword refer to in Java?",
    options: ["The parent class", "The current object", "The superclass", "A global variable"],
    correctAnswer: "The current object"
  },
  {
    id: 92,
    course: "csit",
    question: "Which of these is an operating system?",
    options: ["Ubuntu", "Oracle", "Git", "Chrome"],
    correctAnswer: "Ubuntu"
  },
  {
    id: 93,
    course: "csit",
    question: "What is the main role of a compiler?",
    options: ["Execute code", "Translate high-level to machine code", "Debug code", "Store files"],
    correctAnswer: "Translate high-level to machine code"
  },
  {
    id: 94,
    course: "csit",
    question: "Which protocol is used to browse websites?",
    options: ["HTTP", "SMTP", "FTP", "SSH"],
    correctAnswer: "HTTP"
  },
  {
    id: 95,
    course: "csit",
    question: "What is Big O notation used for?",
    options: ["Describing security", "Describing space used", "Describing time complexity", "Describing memory address"],
    correctAnswer: "Describing time complexity"
  },
  {
    id: 96,
    course: "csit",
    question: "Which of the following is used to create dynamic web pages?",
    options: ["CSS", "HTML", "JavaScript", "XML"],
    correctAnswer: "JavaScript"
  },
  {
    id: 97,
    course: "csit",
    question: "Which data structure is used in recursion?",
    options: ["Queue", "Stack", "Heap", "Tree"],
    correctAnswer: "Stack"
  },
  {
    id: 98,
    course: "csit",
    question: "Which logic gate returns true only if both inputs are true?",
    options: ["OR", "XOR", "NOT", "AND"],
    correctAnswer: "AND"
  },
  {
    id: 99,
    course: "csit",
    question: "Which of the following is a primary key feature?",
    options: ["Allows null", "Duplicates allowed", "Uniquely identifies records", "Must be an integer"],
    correctAnswer: "Uniquely identifies records"
  },
  {
    id: 100,
    course: "csit",
    question: "What is the hexadecimal equivalent of decimal 15?",
    options: ["E", "F", "D", "A"],
    correctAnswer: "F"
  },
  {
    id: 101,
    course: "csit",
    question: "What is the main function of a router?",
    options: ["Convert analog to digital", "Store files", "Direct network traffic", "Backup data"],
    correctAnswer: "Direct network traffic"
  },
  {
    id: 102,
    course: "csit",
    question: "Which of the following is not an OOP concept?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
    correctAnswer: "Compilation"
  },
  {
    id: 103,
    course: "csit",
    question: "Which of these is used to prevent SQL injection?",
    options: ["Stored procedures", "Parameterized queries", "Joins", "Triggers"],
    correctAnswer: "Parameterized queries"
  },
  {
    id: 104,
    course: "csit",
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Styled Sheets",
      "Coded Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    id: 105,
    course: "csit",
    question: "What is the base of the binary number system?",
    options: ["2", "8", "10", "16"],
    correctAnswer: "2"
  },
  {
    id: 106,
    course: "csit",
    question: "Which of the following is used for asynchronous operations in JavaScript?",
    options: ["Loops", "Callbacks", "Variables", "Arrays"],
    correctAnswer: "Callbacks"
  },
  {
    id: 107,
    course: "csit",
    question: "Which memory is directly accessible by the CPU?",
    options: ["ROM", "Cache", "Hard disk", "SSD"],
    correctAnswer: "Cache"
  },
  {
    id: 108,
    course: "csit",
    question: "Which symbol is used for comments in Python?",
    options: ["//", "#", "<!-- -->", "/* */"],
    correctAnswer: "#"
  },
  

  // bds Course Questions (Updated IDs)
  {
    id: 109,
    course: "bds",
    question: "What is the hardest substance in the human body?",
    options: ["Bone", "Enamel", "Dentin", "Cartilage"],
    correctAnswer: "Enamel"
  },
  {
    id: 110,
    course: "bds",
    question: "Which tooth is also known as the wisdom tooth?",
    options: ["First molar", "Second molar", "Third molar", "Premolar"],
    correctAnswer: "Third molar"
  },
  {
    id: 111,
    course: "bds",
    question: "What does 'gingivitis' refer to?",
    options: ["Tooth decay", "Jaw misalignment", "Inflammation of the gums", "Tooth extraction"],
    correctAnswer: "Inflammation of the gums"
  },
  {
    id: 112,
    course: "bds",
    question: "Which vitamin is essential for healthy teeth?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: "Vitamin D"
  },
  {
    id: 113,
    course: "bds",
    question: "What is the study of the structure and diseases of the mouth called?",
    options: ["Odontology", "Pathology", "Microbiology", "Histology"],
    correctAnswer: "Odontology"
  },
  {
    id: 114,
    course: "bds",
    question: "Which nerve is responsible for tooth sensation?",
    options: ["Facial nerve", "Trigeminal nerve", "Optic nerve", "Hypoglossal nerve"],
    correctAnswer: "Trigeminal nerve"
  },
  {
    id: 115,
    course: "bds",
    question: "What is the normal pH of saliva?",
    options: ["4.0–5.0", "5.5–6.5", "6.2–7.6", "7.5–8.5"],
    correctAnswer: "6.2–7.6"
  },
  {
    id: 116,
    course: "bds",
    question: "Which of the following is not part of a tooth?",
    options: ["Crown", "Root", "Dentin", "Mandible"],
    correctAnswer: "Mandible"
  },
  {
    id: 117,
    course: "bds",
    question: "What causes dental caries?",
    options: ["Viral infection", "Fungal infection", "Bacterial acid", "Tooth grinding"],
    correctAnswer: "Bacterial acid"
  },
  {
    id: 118,
    course: "bds",
    question: "How many teeth does a normal adult human have?",
    options: ["28", "30", "32", "36"],
    correctAnswer: "32"
  },
  {
    id: 119,
    course: "bds",
    question: "Which is the outermost layer of a tooth?",
    options: ["Pulp", "Dentin", "Enamel", "Cementum"],
    correctAnswer: "Enamel"
  },
  {
    id: 120,
    course: "bds",
    question: "What is the function of fluoride in toothpaste?",
    options: ["Whiten teeth", "Prevent cavities", "Reduce pain", "Kill fungi"],
    correctAnswer: "Prevent cavities"
  },
  {
    id: 121,
    course: "bds",
    question: "What is the dental formula of permanent human teeth?",
    options: ["2-1-2-3", "1-1-1-3", "2-2-2-3", "2-1-3-2"],
    correctAnswer: "2-1-2-3"
  },
  {
    id: 122,
    course: "bds",
    question: "Which condition is treated with orthodontics?",
    options: ["Tooth decay", "Gum infection", "Misaligned teeth", "Canker sores"],
    correctAnswer: "Misaligned teeth"
  },
  {
    id: 123,
    course: "bds",
    question: "What is the term for complete removal of a tooth?",
    options: ["Extraction", "Implant", "Root canal", "Scaling"],
    correctAnswer: "Extraction"
  },
  {
    id: 124,
    course: "bds",
    question: "Which instrument is used to check tooth mobility?",
    options: ["Scaler", "Probe", "Curette", "Forceps"],
    correctAnswer: "Probe"
  },
  {
    id: 125,
    course: "bds",
    question: "Which bacteria is primarily responsible for dental plaque?",
    options: ["Lactobacillus", "E. coli", "Streptococcus mutans", "Staphylococcus aureus"],
    correctAnswer: "Streptococcus mutans"
  },
  {
    id: 126,
    course: "bds",
    question: "What is the soft tissue inside a tooth called?",
    options: ["Pulp", "Enamel", "Cementum", "Dentin"],
    correctAnswer: "Pulp"
  },
  {
    id: 127,
    course: "bds",
    question: "What does the term 'prosthodontics' refer to?",
    options: ["Tooth decay treatment", "Oral surgery", "Dental prosthesis", "Gum diseases"],
    correctAnswer: "Dental prosthesis"
  },
  {
    id: 128,
    course: "bds",
    question: "Which material is commonly used for dental fillings?",
    options: ["Copper", "Plastic", "Amalgam", "Gold"],
    correctAnswer: "Amalgam"
  }, 
];

export default originalQuestions;

