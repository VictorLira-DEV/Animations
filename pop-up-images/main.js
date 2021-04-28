const popUp = document.querySelector(".pop-up");
const popUpText = document.getElementsByTagName("h2")[0];
const overlay = document.querySelector(".overlay");
const closeModel = document.querySelector(".close-model");
const popUpInside = document.querySelector(".pop-up-inside");

const sun = document.querySelector(".show-modal.sun");
const moon = document.querySelector(".show-modal.moon");
const mars = document.querySelector(".show-modal.mars");

overlay.addEventListener("click", addHiddenClass);
closeModel.addEventListener("click", addHiddenClass);

sun.addEventListener("click", function () {
  displayImage("sun", "Sun", "#f5c7a9");
  removeHiddenClass();
});

moon.addEventListener("click", function () {
  displayImage("moon", "Moon", "#b0c5f5");
  removeHiddenClass();
});

mars.addEventListener("click", function () {
  displayImage("mars", "Mars", "#ffb5b5");
  removeHiddenClass();
});

function removeHiddenClass() {
  popUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function addHiddenClass() {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
}

function displayImage(content, text, color) {
  popUpInside.classList.remove("sun", "moon", "mars");
  popUpInside.classList.add(content);
  popUpInside.parentElement.style.backgroundColor = color;
  popUpText.innerHTML = text;
}
