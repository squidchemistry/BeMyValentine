"use strict";

// Select elements
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

// Constants
const MAX_IMAGES = 5;
const MESSAGES = [
  "No",
  "Are you sure, Pakhu?",
  "Pookie please",
  "Pakhu hnn bolde",
  "Dill k saath khelte nhi",
  "Bby ab toh mujhe hnn hi sunna hai",
  "Hnn bolde khana bnake khilaunga",
];

// State variables
let play = true;
let noCount = 0;

// Event listeners
yesButton.addEventListener("click", handleYesClick);
noButton.addEventListener("click", handleNoClick);

// Event handlers
function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
}

function handleNoClick() {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
}

// Helper functions
function resizeYesButton() {
  const fontSize = parseFloat(window.getComputedStyle(yesButton).getPropertyValue("font-size"));
  yesButton.style.fontSize = `${fontSize * 1.6}px`;
}

function generateMessage(noCount) {
  return MESSAGES[Math.min(noCount, MESSAGES.length - 1)];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}