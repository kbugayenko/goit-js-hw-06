"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Потрібно заповнити всі поля");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
