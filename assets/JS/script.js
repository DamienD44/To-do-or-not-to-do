/* Mise en place des listes de tâche de la catégorie 1*/




const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("Vous devez écrire quelquechose!");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}



/* Mise en place des listes de tâche de la catégorie 2*/

const inputBox1 = document.getElementById("input-box1");
const listContainer1 = document.getElementById("list-container1");

function addTask1(){
    if(inputBox1.value ===''){
        alert("Vous devez écrire quelquechose!");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        listContainer1.appendChild(li);
    }
}

/* Mis en place de la listes des tâche de la catégorie 3*/

const inputBox2 = document.getElementById("input-box2");
const listContainer2 = document.getElementById("list-container2");

function addTask2(){
    if(inputBox2.value ===''){
        alert("Vous devez écrire quelquechose!");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox2.value;
        listContainer2.appendChild(li);
    }
}