"use strict";

const refs = {
  inputMail: document.querySelector("#mail"),
  inputPass: document.querySelector("#password"),
  submitEl: document.querySelector("#submit"),
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  event.preventDefault();
}
