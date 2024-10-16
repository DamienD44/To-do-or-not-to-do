/* Partie création de cartes manuel */
let cartes = [];
let nbrOfCard = 5;
for (let y = 0; y < nbrOfCard; y++)
  cartes.push({
    title: `Carte ${y}`,
    content: [
      `Ceci est la carte ${y}, tache 0`,
      `Ceci est la carte ${y}, tache 1`,
    ],
  });

/* desktop version */
let index = 0;
const carousselContainer = document.querySelector(".caroussel-container");
displayPrecCard();
displayNextCard();
displayMainContent();
function displayMainContent() {
  const mainContent = document.querySelector(".main-container");
  mainContent.innerHTML = null;
  for (let x = 0; x < 3 && cartes[index + x]; x++) {
    let card = document.createElement("div");
    card.classList.add("main-card");
    let cardTitle = document.createElement("p");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = cartes[index + x].title;
    card.appendChild(cardTitle);
    for (const todo of cartes[index + x].content) {
      let task = document.createElement("p");
      task.classList.add("todo");
      task.textContent = todo;
      card.appendChild(task);
    }
    mainContent.appendChild(card);
  }
}
function displayPrecCard() {
  const carousselPrecElement = document.querySelector(".caroussel-prec");
  if (carousselPrecElement) carousselPrecElement.remove();
  const precCardElement = document.querySelector(".card-prec");
  if (precCardElement) precCardElement.remove();
  if (cartes[index - 1]) {
    //  Créer la prévisu de la carte précédente
    let precCard = document.createElement("div");
    precCard.classList.add("future-card", "card-prec");
    document
      .querySelector(".caroussel-container")
      .insertAdjacentElement("afterbegin", precCard);
    // Créer le boutton "Carte précédente"
    let preButton = document.createElement("img");
    preButton.classList.add("caroussel-button", "caroussel-prec");
    preButton.src = "https://www.svgrepo.com/show/496800/arrow-left-1.svg";
    preButton.addEventListener("click", () => {
      index--;
      displayMainContent();
      displayPrecCard();
      displayNextCard();
    });
    document
      .querySelector(".main-container")
      .insertAdjacentElement("beforebegin", preButton);
  } else carousselContainer.style.justifyContent = "flex-end";
}
function displayNextCard() {
  const carousselNextElement = document.querySelector(".caroussel-next");
  if (carousselNextElement) carousselNextElement.remove();
  const nextCardElement = document.querySelector(".card-next");
  if (nextCardElement) nextCardElement.remove();
  if (cartes[index + 3]) {
    let nextCard = document.createElement("div");
    nextCard.classList.add("future-card", "card-next");
    document
      .querySelector(".caroussel-container")
      .insertAdjacentElement("beforeend", nextCard);
    // Créer le boutton "Carte précédente"
    let nextButton = document.createElement("img");
    nextButton.classList.add("caroussel-button", "caroussel-next");
    nextButton.src = "https://www.svgrepo.com/show/496803/arrow-right-1.svg";
    nextButton.addEventListener("click", () => {
      index++;
      displayMainContent();
      displayPrecCard();
      displayNextCard();
    });
    document
      .querySelector(".main-container")
      .insertAdjacentElement("afterend", nextButton);
  } else carousselContainer.style.justifyContent = "flex-start";
}

/* Mobile version */
displayMobileMainContent();
function displayMobileMainContent() {
  const mobileMainContent = document.querySelector(".mobile-main-container");
  mobileMainContent.innerHTML = null;
  for (const carte of cartes) {
    let card = document.createElement("li");

    let cardHead = document.createElement("div");
    cardHead.classList.add("mobile-card-head");

    let cardExtendButton = document.createElement("img");
    cardExtendButton.src = "https://www.svgrepo.com/show/521469/arrow-down.svg";
    cardExtendButton.classList.add("card-extend-button");
    cardExtendButton.addEventListener("click", () => {
      extendCard(card);
    });

    let cardTitle = document.createElement("p");
    cardTitle.textContent = carte.title;

    card.appendChild(cardHead);
    cardHead.appendChild(cardTitle);
    cardHead.appendChild(cardExtendButton);
    mobileMainContent.appendChild(card);
  }
}
function extendCard(card) {
  const arrowUp = "https://www.svgrepo.com/show/521486/arrow-up.svg";
  const arrowDown = "https://www.svgrepo.com/show/521469/arrow-down.svg";
  const extendButton = card.querySelector(".card-extend-button");
  if (extendButton.src === arrowDown) {
    extendButton.src = arrowUp;
    const cardTitle = card.querySelector("p").innerHTML;
    const cardContent = cartes.find((el) =>
      el.title.includes(cardTitle)
    ).content;
    let cardContentContainer = document.createElement("ul");
    cardContentContainer.classList.add("mobile-card-content-container");
    card.appendChild(cardContentContainer);
    cardContent.forEach((el) => {
      let cardContent = document.createElement("li");
      cardContent.classList.add("mobile-card-content");
      cardContent.innerHTML = el;
      cardContentContainer.appendChild(cardContent);
    });
  } else {
    extendButton.src = arrowDown;
    card.querySelector(".mobile-card-content-container").remove();
  }
}
