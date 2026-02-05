const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const finishBtn = document.getElementById("finishBtn");
const questionBox = document.getElementById("questionBox");
const quizBox = document.getElementById("quizBox");
const finalScreen = document.getElementById("finalScreen");
const heartsContainer = document.querySelector(".hearts-container");

// No button runs away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Yes button shows quiz
yesBtn.addEventListener("click", () => {
    questionBox.style.display = "none";
    quizBox.style.display = "block";
});

// Final screen
finishBtn.addEventListener("click", () => {
    quizBox.style.display = "none";
    finalScreen.style.display = "block";
});

// Floating hearts generator
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);