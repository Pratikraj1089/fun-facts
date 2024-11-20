// script.js
const facts = [
    "I was born in 1997 or 1998, making me part of Gen Z.",
    "I entered the workforce during the unique period of the global pandemic.",
    "I grew up alongside the rise of social media and smartphones.",
    "I'm in the prime age group for career development and personal growth.",
    "I experienced my early 20s during unprecedented global events."
];

const factDisplay = document.getElementById('fact-display');
const newFactBtn = document.getElementById('new-fact-btn');

// Function to get a random fact
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// Function to update the displayed fact
function updateFact() {
    factDisplay.textContent = getRandomFact();
}

// Event listener for button click
newFactBtn.addEventListener('click', updateFact);

// Display initial fact when page loads
updateFact();
