/* Mise en place des listes de tâche de la catégorie 1*/

let cards = localStorage.getItem("cards")


const mainContainer = document.querySelector('.containertotal')
cards = JSON.parse(cards)
for (const card of cards) {
    createCardHead(mainContainer, card)
}

//  ca c'est le titre + la carte
function createCardHead(parent, card) {
    const cardDiv = document.createElement("div")
    const cardToDoApp = document.createElement("div")
    const cardTitle = document.createElement("h2")

    cardTitle.innerHTML = card.title

    cardToDoApp.classList.add("todo-app");
    cardDiv.classList.add("container");
    cardToDoApp.appendChild(cardTitle)
    createRow(cardToDoApp)
    listTask(cardToDoApp, card)
    cardDiv.appendChild(cardToDoApp)
    parent.appendChild(cardDiv)
}

function createRow(parent) {
    const cardDiv = document.createElement("div")
    const inputTxt = document.createElement("input");
    const addBtn = document.createElement("button")
    inputTxt.classList.add("input-box")
    inputTxt.placeholder = "Ajouter une tâche"
    addBtn.innerHTML = "ajouter"
    cardDiv.appendChild(inputTxt)
    cardDiv.appendChild(addBtn)
    cardDiv.classList.add(`row`)
    parent.appendChild(cardDiv)
}
function listTask(parent, card) {
    const cardList = document.createElement("ul")

    cardList.classList.add("list-container")
    parent.appendChild(cardList)


    for (const task of card.content) {
        const elementTask = document.createElement("li")
        elementTask.innerHTML = task
        cardList.appendChild(elementTask)
    }

}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const li = document.createElement("li");
li.innerHTML = localStorage.getItem("task");
li.classList.add("task-list");
listContainer.appendChild(li);

function addTask() {
    if (inputBox.value === '') {
        alert("Vous devez écrire quelquechose!");
    }
    else {
        const li = document.createElement("li");
        li.classList.add("task-list");
        li.innerHTML = inputBox.value;
        localStorage.setItem("task", inputBox.value);
        listContainer.appendChild(li);


    }
}



/* Mise en place des listes de tâche de la catégorie 2*/

const inputBox1 = document.getElementById("input-box1");
const listContainer1 = document.getElementById("list-container1");

function addTask1() {
    if (inputBox1.value === '') {
        alert("Vous devez écrire quelquechose!");
    }
    else {
        const li = document.createElement("li");
        li.classList.add("task-list1");
        li.innerHTML = inputBox1.value;
        localStorage.setItem("task", inputBox1.value);
        listContainer1.appendChild(li);

    }
}

/* Mis en place de la listes des tâche de la catégorie 3*/

const inputBox2 = document.getElementById("input-box2");
const listContainer2 = document.getElementById("list-container2");

function addTask2() {
    if (inputBox2.value === '') {
        alert("Vous devez écrire quelquechose!");
    }
    else {
        const li = document.createElement("li");
        li.classList.add("task-list2");
        li.innerHTML = inputBox2.value;
        localStorage.setItem("task", inputBox2.value);
        listContainer2.appendChild(li);


    }
}

addTask.onclick = () => {
    localStorage.setItem("key", "input-box.value")


}