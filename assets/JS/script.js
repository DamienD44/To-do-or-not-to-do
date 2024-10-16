/* Mise en place des listes de tâche de la catégorie 1*/




const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Vous devez écrire quelquechose!");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.style.border = "solid 1px black";
        li.style.backgroundColor = "white";
        li.style.display = "flex";
        li.style.flexDirection = "row"
        li.style.margintop = "10px";

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
        li.innerHTML = inputBox1.value;
        li.style.border = "solid 1px black";
        li.style.backgroundColor = "white";
        li.style.display = "flex";
        li.style.flexDirection = "row"
        li.style.margintop = "10px";
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
        li.style.border = "solid 1px black";
        li.style.backgroundColor = "white";
        li.style.display = "flex";
        li.style.flexDirection = "row"

        li.innerHTML = inputBox2.value;
        listContainer2.appendChild(li);
    }
}


