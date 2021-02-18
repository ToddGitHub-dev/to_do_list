
"use strict"

let body = document.getElementsByTagName("body");
let btn_done = document.getElementById("done");
let task_input = document.getElementById("task_input");
let date_input = document.getElementById("date_input");
let input = document.getElementsByTagName("input");
let btn_delete = document.createElement("button").innerText = "Delete";
let btn_edit = document.createElement("button").innerText = "Edit";


btn_done.addEventListener("click", function(){
    addTask(date_input.value, task_input.value);
}, false);


// functions

let addTask = function(date, task){
    alert("Calling JS");
    alert(date);
    alert(task);
    console.log("WTDF");
    localStorage.setItem(date, task);
    let cont_task = document.getElementById("cont_task");
    cont_task.innerHTML = `<div class="card">
                        <div class="card-body">
                            <p>${task}</p>
                            <p>${date}</p>
                        </div>
                    </div>`;
}

let markTask = function(data){
    data.style.color = "#ccc";
}

let deleteTask = function(){}

let editTask = function(){}

let displayTask = function(){
    localStorage.getItem();
}


let isEmpty = function(data){
    if(data.value === ""){
        return true;
    }else{
        return false;
    }
}
let hasChild = function(value){
    if(value.innerHTML !== ""){
        return true;
    }else{
        return false;
    }
}
    
