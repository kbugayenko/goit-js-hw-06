"use strict";

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", btnClick);

function btnClick(evt) {
  const backColor = getRandomHexColor();
  document.body.style.backgroundColor = backColor;
  span.textContent = backColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
