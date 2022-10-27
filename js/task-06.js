"use strict";

const ref = {
  input: document.querySelector("#validation-input"),
};

ref.input.addEventListener("blur", onInputValid);

function onInputValid(event) {
  if (
    Number(event.currentTarget.value.length) ===
    Number(ref.input.dataset.length)
  ) {
    ref.input.classList.add("valid");
    ref.input.classList.remove("invalid");
  } else {
    ref.input.classList.add("invalid");
    ref.input.classList.remove("valid");
  }
}
