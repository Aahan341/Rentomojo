import { navbar } from "../Components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

const forms = document.querySelector(".popup");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");
// console.log(forms,pwShowHide,links)

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll("#password");
    pwFields.forEach((password) => {
      if (password.type == "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});

// login functinality

let sb = document.querySelector(".link");
sb.onclick = () => {
  window.location.href = "signup.html";
};

let dataApply = JSON.parse(localStorage.getItem("data"));

let log = document.getElementById("continue");
log.addEventListener("click", function (event) {
  event.preventDefault();
  signin(event);
});

let signin = (e) => {
  e.preventDefault();

  console.log("No");
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  //   var getEmail = localStorage.getItem("email");
  //   var getpass = localStorage.getItem("password");
  //   console.log(getEmail);
  //   console.log(getpass);

  if (email == dataApply.email && pass == dataApply.password) {
    window.location.href = "./index.html";
  } else {
    alert("incorrect");
  }
};
