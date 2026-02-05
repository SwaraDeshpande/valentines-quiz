const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const readyBtn = document.getElementById("readyBtn");
const notReadyBtn = document.getElementById("notReadyBtn");

const questionBox = document.getElementById("questionBox");
const readyBox = document.getElementById("readyBox");
const quizBox = document.getElementById("quizBox");
const finalScreen = document.getElementById("finalScreen");

const quizNumber = document.getElementById("quizNumber");
const quizQuestion = document.getElementById("quizQuestion");
const optionsDiv = document.getElementById("options");
const imageRow = document.getElementById("imageRow");

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

// YES → show READY PAGE
yesBtn.addEventListener("click", () => {
    questionBox.style.display = "none";
    readyBox.style.display = "block";
});

// NOT READY → stay here
notReadyBtn.addEventListener("click", () => {
    alert("Take your time, babe 😘");
});

// READY → start quiz
readyBtn.addEventListener("click", () => {
    readyBox.style.display = "none";
    quizBox.style.display = "block";
    loadQuestion();
});

// Quiz data
const quizData = [
    {
        question: "Where did we meet first?",
        options: ["Coffee Shark", "Radio Coffee"],
        correct: [0],
        images: ["images/q1-optionA.jpeg", "images/q1-optionB.jpeg"]
    },
    {
        question: "What is your Valentine’s favorite food?",
        options: ["Spicy Ramen", "Spicy Biryani"],
        correct: [1],
        images: ["images/q2-optionA.jpeg", "images/q2-optionB.jpeg"]
    },
    {
        question: "Where was this picture taken?",
        options: ["A bar in downtown Austin", "Bar in Rochester Hills"],
        correct: [0],
        images: ["images/us-photo.jpeg"]
    }
];

let currentQuestion = 0;

// Load each question
function loadQuestion() {
    const q = quizData[currentQuestion];

    quizNumber.textContent = `Question ${currentQuestion + 1}`;
    quizQuestion.textContent = q.question;

    // Load images
    imageRow.innerHTML = "";
    q.images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("quiz-img");
        imageRow.appendChild(img);
    });

    // Load options
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("big-btn");

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