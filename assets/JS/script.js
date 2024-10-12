const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("Vous devez écrire quelquechose!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}

const inputBox1 = document.getElementById("input-box1");
const listContainer1 = document.getElementById("list-container1");

function addTask1(){
    if(inputBox1.value ===''){
        alert("Vous devez écrire quelquechose!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        listContainer.appendChild(li);
    }
}

const inputBox2 = document.getElementById("input-box2");
const listContainer2 = document.getElementById("list-container2");

function addTask2(){
    if(inputBox2.value ===''){
        alert("Vous devez écrire quelquechose!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox2.value;
        listContainer.appendChild(li);
    }
}