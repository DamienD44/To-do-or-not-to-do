/* Partie création de cartes manuel */

// Sample des cartes à mettre dans le localstorage
//[{"title":"Carte 0","content":["Ceci est la carte 0, tache 0","Ceci est la carte 0, tache 1"]},{"title":"Carte 1","content":["Ceci est la carte 1, tache 0","Ceci est la carte 1, tache 1"]},{"title":"Carte 2","content":["Ceci est la carte 2, tache 0","Ceci est la carte 2, tache 1"]},{"title":"Carte 3","content":["Ceci est la carte 3, tache 0","Ceci est la carte 3, tache 1"]},{"title":"Carte 4","content":["Ceci est la carte 4, tache 0","Ceci est la carte 4, tache 1"]}]

/*
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
*/
/* Partie cartes dynamique depuis localstorage */
let cards = JSON.parse(localStorage.getItem("cards"));

/* desktop version */
let index = 0;
const carousselContainer = document.querySelector(".caroussel-container");
displayPrecCard();
displayNextCard();
displayMainContent();
function displayMainContent() {
  const mainContent = document.querySelector(".main-container");
  mainContent.innerHTML = null;
  for (let x = 0; x < 3 && cards[index + x]; x++) {
    let card = document.createElement("div");
    card.classList.add("main-card");
    let cardTitle = document.createElement("p");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = cards[index + x].title;
    card.appendChild(cardTitle);
    for (const todo of cards[index + x].content) {
      let task = document.createElement("p");
      task.classList.add("todo");
      task.textContent = todo;
      card.appendChild(task);
    }
    let addTask = document.createElement("div");
    addTask.classList.add("todo");
    addTask.textContent = "Ajouter une tâche";
    card.appendChild(addTask);
    mainContent.appendChild(card);
  }
}
function displayPrecCard() {
  const carousselPrecElement = document.querySelector(".caroussel-prec");
  if (carousselPrecElement) carousselPrecElement.remove();
  const precCardElement = document.querySelector(".card-prec");
  if (precCardElement) precCardElement.remove();
  if (cards[index - 1]) {
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
  } else if (cards.length <= 3) {
    carousselContainer.style.justifyContent = "center";
  } else carousselContainer.style.justifyContent = "flex-end";
}
function displayNextCard() {
  const carousselNextElement = document.querySelector(".caroussel-next");
  if (carousselNextElement) carousselNextElement.remove();
  const nextCardElement = document.querySelector(".card-next");
  if (nextCardElement) nextCardElement.remove();
  if (cards[index + 3]) {
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
  } else if (cards.length <= 3) {
    carousselContainer.style.justifyContent = "center";
  } else carousselContainer.style.justifyContent = "flex-start";
}

/* Mobile version */
displayMobileMainContent();
function displayMobileMainContent() {
  const mobileMainContent = document.querySelector(".mobile-main-container");
  mobileMainContent.innerHTML = null;
  for (const carte of cards) {
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
  displayCreateCategoryMobile(mobileMainContent);
}
function displayCreateCategoryMobile(parent) {
  let card = document.createElement("li");

  let cardHead = document.createElement("div");
  cardHead.classList.add("mobile-card-head", "card-create-category");

  let cardExtendButton = document.createElement("img");
  cardExtendButton.src = "https://www.svgrepo.com/show/532997/plus-large.svg";
  cardExtendButton.classList.add("card-extend-button");
  card.addEventListener("click", () => {
    createPopup();
  });
  let cardTitle = document.createElement("p");
  cardTitle.textContent = "Create a new category";
  card.style.width = "75%";
  card.appendChild(cardHead);
  cardHead.appendChild(cardTitle);
  cardHead.appendChild(cardExtendButton);
  parent.appendChild(card);
}
function extendCard(card) {
  const arrowUp = "https://www.svgrepo.com/show/521486/arrow-up.svg";
  const arrowDown = "https://www.svgrepo.com/show/521469/arrow-down.svg";
  const extendButton = card.querySelector(".card-extend-button");
  if (extendButton.src === arrowDown) {
    extendButton.src = arrowUp;
    const cardTitle = card.querySelector("p").innerHTML;
    const cardContent = cards.find((el) =>
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

/* common functions */

//    Create category
document.querySelector(".add-category-button").addEventListener("click", () => {
  createPopup();
});
function createPopup() {
  document.querySelector("main").style.filter = "blur(1.25px)";
  document.querySelector("header").style.filter = "blur(1.25px)";
  let createCategory = document.createElement("div");
  let createCategoryTitle = document.createElement("h2");
  let createCategoryInput = document.createElement("input");
  let buttonsContainer = document.createElement("div");
  let createCategorySubmit = document.createElement("button");
  let createCategoryCancel = document.createElement("button");
  createCategoryTitle.innerText = "Create a new category";
  createCategoryInput.placeholder = "My super category name !";
  createCategorySubmit.textContent = "Submit";
  createCategoryCancel.textContent = "Cancel";
  buttonsContainer.classList.add("new-category-buttons-container");
  createCategory.classList.add("new-category-container");
  document.body.appendChild(createCategory);
  buttonsContainer.appendChild(createCategoryCancel);
  buttonsContainer.appendChild(createCategorySubmit);
  const elements = [createCategoryTitle, createCategoryInput, buttonsContainer];
  elements.forEach((el) => {
    createCategory.appendChild(el);
  });
  //          Handle cancel button
  createCategoryCancel.addEventListener("click", () => {
    removePopup();
  });
  //          Handle submit button
  createCategorySubmit.addEventListener("click", () => {
    const newCategory = createCategoryInput.value;
    if (newCategory) {
      removePopup();
      createNewCategory(newCategory);
    }
  });
}
function removePopup() {
  document.querySelector(".new-category-container").remove();
  document.querySelector("main").style.filter = "blur(0)";
  document.querySelector("header").style.filter = "blur(0)";
}
function createNewCategory(categoryName) {
  let data = localStorage.getItem("cards");
  data = JSON.parse(data);
  data.push({ title: categoryName, content: [] });
  localStorage.setItem("cards", JSON.stringify(data));
  cards = data;
  displayNextCard();
  displayMainContent();
  displayMobileMainContent();
}

//    Search category function
const searchInput = document.querySelector(".searchbar-container > input");
searchInput.addEventListener("input", (event) => {
  cards = JSON.parse(localStorage.getItem("cards"));
  cards = cards.filter((el) => {
    return el.title.includes(event.target.value);
  });
  index = 0;
  displayPrecCard();
  displayNextCard();
  displayMainContent();
  displayMobileMainContent();
});

//    Sandwich menu
const menuButtons = document.querySelectorAll(".sandwich-button");
for (const menuButton of menuButtons) {
  menuButton.addEventListener("click", () => {
    createMenu();
  });
}
function createMenu() {
  document.querySelector("main").style.filter = "blur(1.25px)";
  document.querySelector("header").style.filter = "blur(1.25px)";
  let burgerMenu = document.createElement("div");
  let burgerMenuHeadDiv = document.createElement("div");
  let burgerMenuHeadTitle = document.createElement("h2");
  let burgerMenuHeadImg = document.createElement("img");
  burgerMenuHeadImg.addEventListener("click", () => {
    removeMenu(burgerMenu);
  });
  burgerMenu.classList.add("burger-menu-container");
  burgerMenuHeadDiv.classList.add("burger-menu-head-container");
  burgerMenuHeadTitle.innerText = "Wild Remind Me";
  burgerMenuHeadImg.src = "https://www.svgrepo.com/show/521590/cross.svg";
  document.body.appendChild(burgerMenu);
  burgerMenu.appendChild(burgerMenuHeadDiv);
  burgerMenuHeadDiv.appendChild(burgerMenuHeadTitle);
  burgerMenuHeadDiv.appendChild(burgerMenuHeadImg);
  listCategories(burgerMenu);
  listLinksMenu(burgerMenu);
}
function listCategories(parent) {
  let categoryList = document.createElement("ul");
  categoryList.classList.add("burger-menu-category-list-container");
  const title = "Category list";
  let burgerMenuListTitle = document.createElement("h3");
  burgerMenuListTitle.innerText = title;
  parent.appendChild(burgerMenuListTitle);
  for (const card of cards) {
    let categoryTitle = document.createElement("li");
    categoryTitle.innerText = card.title;
    categoryTitle.classList.add("burger-menu-category");
    categoryList.appendChild(categoryTitle);
  }
  parent.appendChild(categoryList);
  let separator = document.createElement("hr");
  parent.appendChild(separator);
}
function listLinksMenu(parent) {
  const links = ["About us", "Contact", "legal mentions"];
  const Title = "Liens inutile";
  let burgerMenuHeadTitle = document.createElement("h3");
  let categoryList = document.createElement("ul");
  categoryList.classList.add("links-list-container");
  burgerMenuHeadTitle.innerText = Title;
  parent.appendChild(burgerMenuHeadTitle);
  parent.appendChild(categoryList);
  for (const link of links) {
    const linkElement = document.createElement("li");
    const linkElementA = document.createElement("a");
    linkElementA.href = `/${link}`;
    linkElementA.innerText = link;
    linkElement.appendChild(linkElementA);
    categoryList.appendChild(linkElement);
  }
}
function removeMenu(el) {
  el.remove();
  document.querySelector("main").style.filter = "blur(0)";
  document.querySelector("header").style.filter = "blur(0)";
}
