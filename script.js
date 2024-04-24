function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

function LearnMore() {
  let question = prompt("Have you tried Ghana food?");
  let firstName = prompt("What is your first name?");
  let email = prompt("What is your email?");

  alert(
    "Thanks " + firstName + "! We'll be in touch soon with more details 😊"
  );
}

let applyButton = document.querySelector(".second-button");
applyButton.addEventListener("click", LearnMore);
