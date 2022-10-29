"use strict";

const ref = {
  input: document.querySelector("#name-input"),
  valueEl: document.querySelector("#name-output"),
};

ref.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  ref.valueEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    ref.valueEl.textContent = "Anonymous";
  }
}
