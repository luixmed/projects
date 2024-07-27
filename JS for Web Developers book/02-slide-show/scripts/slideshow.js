"use strict";

window.onerror = (message, url, line) => {
  alert(`Error: ${message}\n${url}: ${line}`);
};

init();

async function init() {
  doSlide("div.slides", 3000);
}

function doSlide(slideSelector, interval) {
  const slidesContainer = document.querySelector(slideSelector);
  const img = slidesContainer.querySelector("img");
  const prefetch = new Image();

  // Add button
  const button = document.createElement("button");
  button.id = "play-pause-btn";
  button.textContent = "Play";
  button.addEventListener("click", startPauseSlide);
  slidesContainer.insertAdjacentElement("beforeend", button);

  // Add Caption
  const caption = document.createElement("p");
  slidesContainer.insertAdjacentElement("beforeend", caption);

  // Cross Fade
  const crossFade = img.cloneNode();
  crossFade.id = "crossfade";
  img.insertAdjacentElement("afterend", crossFade);

  // Fadding
  const style = document.createElement("style");
  document.head.insertAdjacentElement("afterbegin", style);

  style.sheet.insertRule(`
    .slides > img#crossfade {
      display: block;
      position: absolute;
      inset: 0;
    }
  `);

  style.sheet.insertRule(`
    .slides > img#crossfade.fading {
      opacity: 0;
      transition: opacity 2500ms;
    }  
  `);

  const IMAGES_COUNT = 20;
  let index = 0;
  let running;

  startPauseSlide();

  document.onkeydown = (event) => {
    event.preventDefault();

    if (event.code === "Space") {
      startPauseSlide();
    }
  };

  function startPauseSlide() {
    if (!running) {
      running = setInterval(nextSlide, interval);
      nextSlide();
      button.textContent = "Pause";
      slidesContainer.classList.add("running");
    } else {
      running = clearInterval(running);
      button.textContent = "Play";
      slidesContainer.classList.remove("running");
    }
  }

  function nextSlide() {
    crossFade.src = img.src;
    img.src = `https://picsum.photos/id/${index * 25}/800/600`;
    img.title = img.alt = caption.textContent = `Image ${index + 1}`;

    crossFade.classList.remove("fading");
    crossFade.offsetHeight;
    crossFade.classList.add("fading");

    index++;

    // Wrap around
    if (index > IMAGES_COUNT) index = 0;

    // Prefetch next image
    prefetch.src = `https://picsum.photos/id/${index * 25}/800/600`;
  }
}
