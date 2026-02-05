const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionBox = document.getElementById("questionBox");
const quizBox = document.getElementById("quizBox");
const finalScreen = document.getElementById("finalScreen");
const quizQuestion = document.getElementById("quizQuestion");
const optionsDiv = document.getElementById("options");
const quizImage = document.getElementById("quizImage");
const heartsContainer = document.querySelector(".hearts-container");

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

// No button runs away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Quiz data
const quizData = [
    {
        question: "Where did we meet first?",
        options: ["Coffee Shark", "Radio Coffee"],
        correct: [0],
        showImage: false
    },
    {
        question: "What is your Valentine’s favorite food?",
        options: ["Spicy food", "Indian Food"],
        correct: [0, 1],
        showImage: false
    },
    {
        question: "Where was this picture taken?",
        options: ["A bar in downtown Austin", "Bar in Rochester Hills"],
        correct: [0],
        showImage: true
    }
];

let currentQuestion = 0;

// Start quiz
yesBtn.addEventListener("click", () => {
    questionBox.style.display = "none";
    quizBox.style.display = "block";
    loadQuestion();
});

// Load each question
function loadQuestion() {
    const q = quizData[currentQuestion];
    quizQuestion.textContent = q.question;

    optionsDiv.innerHTML = "";
    quizImage.style.display = q.showImage ? "block" : "none";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;

        btn.addEventListener("click", () => handleAnswer(btn, index));

        optionsDiv.appendChild(btn);
    });
}

// Handle answer
function handleAnswer(button, index) {
    const q = quizData[currentQuestion];

    if (q.correct.includes(index)) {
        button.classList.add("correct");
        celebrate();

        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                quizBox.style.display = "none";
                finalScreen.style.display = "block";
            }
        }, 1000);

    } else {
        button.classList.add("wrong");
        alert("Try harder for your valentine ❤️");
    }
}

// Celebration animation
function celebrate() {
    for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 100);
    }
}