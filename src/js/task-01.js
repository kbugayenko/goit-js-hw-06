const elem = document.querySelectorAll(".item");
console.log("Number of categories:", elem.length);
console.log("");
[...elem].forEach((el) => {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
  console.log("");
});
