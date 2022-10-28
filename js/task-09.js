"use strict";

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", btnClick);

function btnClick(evt) {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
