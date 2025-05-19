

/* const quizData = [
  {
    question: "What is the capital of France?",
    options: {
      a: "London",
      b: "Paris",
      c: "Berlin",
      d: "Madrid"
    },
    correct: "b"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: {
      a: "Venus",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn"
    },
    correct: "b"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: {
      a: "Mark Twain",
      b: "Charles Dickens",
      c: "William Shakespeare",
      d: "J.K. Rowling"
    },
    correct: "c"
  }
];
*/ 
const quizData = [
  // 1. History & Development of Computers
  {
    question: "Who is considered the father of the computer?",
    options: {
      a: "Alan Turing",
      b: "Charles Babbage",
      c: "Bill Gates",
      d: "Steve Jobs"
    },
    correct: "b"
  },
  {
    question: "What was the first programmable computer?",
    options: {
      a: "ENIAC",
      b: "UNIVAC",
      c: "Z3",
      d: "IBM 701"
    },
    correct: "c"
  },
  {
    question: "Which generation introduced the use of transistors?",
    options: {
      a: "First",
      b: "Second",
      c: "Third",
      d: "Fourth"
    },
    correct: "b"
  },
  {
    question: "ENIAC was primarily used for:",
    options: {
      a: "Weather forecasting",
      b: "Space research",
      c: "Military calculations",
      d: "Banking"
    },
    correct: "c"
  },
  {
    question: "Which language was used in first-generation computers?",
    options: {
      a: "Assembly",
      b: "Machine language",
      c: "C",
      d: "QBasic"
    },
    correct: "b"
  },
  {
    question: "Who developed the Analytical Engine?",
    options: {
      a: "John Atanasoff",
      b: "Charles Babbage",
      c: "Alan Turing",
      d: "Konrad Zuse"
    },
    correct: "b"
  },
  {
    question: "Which of these is a fifth-generation computing concept?",
    options: {
      a: "Artificial Intelligence",
      b: "Vacuum Tubes",
      c: "Magnetic Drums",
      d: "Transistors"
    },
    correct: "a"
  },

  // 2. Computer Hardware Structure
  {
    question: "Which of the following is not an output device?",
    options: {
      a: "Printer",
      b: "Speaker",
      c: "Monitor",
      d: "Scanner"
    },
    correct: "d"
  },
  {
    question: "What does CPU stand for?",
    options: {
      a: "Central Processing Unit",
      b: "Computer Processing Unit",
      c: "Central Programming Unit",
      d: "Computer Power Unit"
    },
    correct: "a"
  },
  {
    question: "RAM is considered:",
    options: {
      a: "Long-term memory",
      b: "Read-only memory",
      c: "Volatile memory",
      d: "Non-volatile memory"
    },
    correct: "c"
  },
  {
    question: "Which part of the computer performs calculations?",
    options: {
      a: "ALU",
      b: "RAM",
      c: "ROM",
      d: "Monitor"
    },
    correct: "a"
  },
  {
    question: "The keyboard is classified as a:",
    options: {
      a: "Storage device",
      b: "Processing device",
      c: "Input device",
      d: "Peripheral device"
    },
    correct: "c"
  },
  {
    question: "Hard drives are considered:",
    options: {
      a: "Primary memory",
      b: "Volatile memory",
      c: "Secondary storage",
      d: "Temporary storage"
    },
    correct: "c"
  },
  {
    question: "Which one is an example of a pointing device?",
    options: {
      a: "Keyboard",
      b: "Joystick",
      c: "Monitor",
      d: "Speaker"
    },
    correct: "b"
  },

  // 3. Introduction to Software
  {
    question: "Which is an example of system software?",
    options: {
      a: "MS Paint",
      b: "Windows 10",
      c: "Google Chrome",
      d: "MS Word"
    },
    correct: "b"
  },
  {
    question: "What type of software is MS Excel?",
    options: {
      a: "System software",
      b: "Utility software",
      c: "Application software",
      d: "Programming software"
    },
    correct: "c"
  },
  {
    question: "Software that helps to manage hardware is:",
    options: {
      a: "Driver",
      b: "Browser",
      c: "Word processor",
      d: "Compiler"
    },
    correct: "a"
  },
  {
    question: "Which of these is not application software?",
    options: {
      a: "Microsoft Word",
      b: "Photoshop",
      c: "Linux",
      d: "Excel"
    },
    correct: "c"
  },
  {
    question: "A program used to scan for viruses is:",
    options: {
      a: "Antivirus",
      b: "Compiler",
      c: "Debugger",
      d: "Driver"
    },
    correct: "a"
  },
  {
    question: "Which software helps programmers write code?",
    options: {
      a: "Compiler",
      b: "Spreadsheet",
      c: "Driver",
      d: "Browser"
    },
    correct: "a"
  },
  {
    question: "Software is classified into:",
    options: {
      a: "Only system software",
      b: "Only application software",
      c: "System and Application software",
      d: "None of the above"
    },
    correct: "c"
  },

  // 4. The Internet
  {
    question: "What does WWW stand for?",
    options: {
      a: "World Wide Web",
      b: "Web World Wide",
      c: "World Web Wide",
      d: "Wide World Web"
    },
    correct: "a"
  },
  {
    question: "Which protocol is used to transfer web pages?",
    options: {
      a: "FTP",
      b: "HTTP",
      c: "SMTP",
      d: "IP"
    },
    correct: "b"
  },
  {
    question: "A web browser is used to:",
    options: {
      a: "Send emails",
      b: "Design websites",
      c: "Access web pages",
      d: "Store passwords"
    },
    correct: "c"
  },
  {
    question: "Which of the following is a search engine?",
    options: {
      a: "Yahoo",
      b: "Facebook",
      c: "Gmail",
      d: "Amazon"
    },
    correct: "a"
  },
  {
    question: "What is an IP address?",
    options: {
      a: "Email ID",
      b: "Unique identifier for devices on a network",
      c: "Browser version",
      d: "Internet password"
    },
    correct: "b"
  },
  {
    question: "The device that connects a LAN to the Internet is:",
    options: {
      a: "Router",
      b: "Monitor",
      c: "Switch",
      d: "Modem"
    },
    correct: "d"
  },
  {
    question: "Email stands for:",
    options: {
      a: "Electric Mail",
      b: "Electronic Mail",
      c: "Engine Mail",
      d: "Error Mail"
    },
    correct: "b"
  },

  // 5. Introduction to QBasic Programming
  {
    question: "Which command displays output in QBasic?",
    options: {
      a: "WRITE",
      b: "DISPLAY",
      c: "SHOW",
      d: "PRINT"
    },
    correct: "d"
  },
  {
    question: "QBasic is an example of a:",
    options: {
      a: "Low-level language",
      b: "High-level language",
      c: "Assembly language",
      d: "Binary language"
    },
    correct: "b"
  },
  {
    question: "Which symbol is used for comments in QBasic?",
    options: {
      a: "#",
      b: "'",
      c: "//",
      d: "*"
    },
    correct: "b"
  },
  {
    question: "Which statement is used for loops in QBasic?",
    options: {
      a: "FOR...NEXT",
      b: "LOOP",
      c: "REPEAT",
      d: "IF...THEN"
    },
    correct: "a"
  },
  {
    question: "The END statement in QBasic is used to:",
    options: {
      a: "Print output",
      b: "Stop program execution",
      c: "Start a program",
      d: "Loop execution"
    },
    correct: "b"
  },
  {
    question: "What does CLS do in QBasic?",
    options: {
      a: "Clear screen",
      b: "Close program",
      c: "Comment line",
      d: "Clear storage"
    },
    correct: "a"
  },
  {
    question: "Which one is a correct variable name in QBasic?",
    options: {
      a: "1total",
      b: "total$",
      c: "#value",
      d: "END"
    },
    correct: "b"
  }
];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionBtns.forEach(btn => {
    const option = btn.getAttribute("data-option");
    btn.textContent = `${option.toUpperCase()}: ${current.options[option]}`;
    btn.disabled = false;
    btn.style.backgroundColor = "#e0e0e0";
  });
  nextBtn.style.display = "none";
}

optionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.getAttribute("data-option");
    const correct = quizData[currentQuestion].correct;

    if (selected === correct) {
      btn.style.backgroundColor = "#4caf50";
      score++;
    } else {
      btn.style.backgroundColor = "#f44336";
    }

    optionBtns.forEach(button => button.disabled = true);
    nextBtn.style.display = "block";
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  document.querySelector(".options").innerHTML = "";
  nextBtn.style.display = "none";
}

loadQuestion();

//time logic

const timerEl = document.getElementById("timer");
let totalSeconds = 0;
let timer;
 
function startTimer() {
  timer = setInterval(() => {
    totalSeconds++;
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    timerEl.textContent = `Time: ${minutes}:${seconds}`;

    if (totalSeconds >= 900 ) {
      clearInterval(timer);
      showScore(true);
    }
  }, 200);
}




function showScore(timeout = false) {
  questionEl.textContent = timeout
    ? `Time's up! You scored ${score} out of ${quizData.length}.`
    : `You scored ${score} out of ${quizData.length}!`;
  document.querySelector(".options").innerHTML = "";
  nextBtn.style.display = "none";
  timerEl.style.color = "red";
  clearInterval(timer);
}

startTimer(); // Call at the bottom of script.js