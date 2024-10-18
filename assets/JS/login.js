let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

document.getElementById("connected").addEventListener("click", connect);

function connect() {
  let account = localStorage.getItem(usernameInput.value);

  event.preventDefault();
  if (passwordInput.value === account) {
    console.log("Connexion réussie");
  } else {
    console.log("Mauvais identifiants");
  }
}
