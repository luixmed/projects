"use strict";

const starsContainer = document.querySelector(".stars-container");
const stars = document.querySelectorAll(".star");
const emoji = document.querySelector("#emoji");
let currentRating = null;

const emojis = {
  1: "😫",
  2: "😕",
  3: "😐",
  4: "😀",
  5: "😄",
};

starsContainer.addEventListener("click", (e) => {
  const ratingSelected = e.target.dataset.rating;

  stars.forEach((star) => star.classList.remove("selected"));

  console.log(currentRating);

  if (ratingSelected === currentRating) {
    stars.forEach((star) => star.classList.remove("selected"));
    currentRating = null;
  } else {
    [...stars]
      .filter((star) => +star.dataset.rating <= +ratingSelected)
      .forEach((star) => star.classList.toggle("selected"));
    currentRating = ratingSelected;
  }

  console.log(currentRating);

  emoji.textContent = currentRating ? emojis[ratingSelected] : "Rate!";
});
