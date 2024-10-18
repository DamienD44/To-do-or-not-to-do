const register = document.querySelector(".register-button");

let ident = document.getElementById("identifiant");

let pwd = document.getElementById("password");

let registerValid = { username: false, password: false };

register.addEventListener("click", () => {
  if (!localStorage.getItem(ident.value))
    localStorage.setItem(ident.value, pwd.value);
});

register.disabled = true;

ident.addEventListener("input", () => {
  onOff();
  let userInput = ident.value;
  if (userInput === "") registerValid.username = false;
  else registerValid.username = true;
});

pwd.addEventListener("input", () => {
  onOff();
  let userInput = pwd.value;
  if (userInput === "") registerValid.password = false;
  else registerValid.password = true;
});

function onOff() {
  if (registerValid.username && registerValid.password) {
    register.disabled = false;
  } else {
    register.disabled = true;
  }
}
