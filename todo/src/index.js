import _, { forEach } from 'lodash';
import './style.css';

const createProjectButton = document.getElementById('create_project_button');
const closeForm = document.getElementById('close_form_button');
const closeFormTask = document.getElementById('close_form_button_task');
const project_list = document.getElementById('project_list');
const project_submit_button = document.getElementById('project_submit_button');

const createTaskButton = document.getElementById('create_task_button');
const task_submit_button = document.getElementById('task_submit_button');

refreshPage();

document.addEventListener("click", (event) => {
    if (event.target.classList.contains('link')) {
        createTaskButton.style.display = "block";
        let links = document.getElementsByClassName("newlist");
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("newlist");
        }
        event.target.classList.add('newlist');
        refreshMain();
    }
});

createTaskButton.addEventListener('click', () => {
    document.getElementById('myFormTask').style.display = 'block';
})

createProjectButton.addEventListener('click', () => {
    document.getElementById("myForm").style.display = "block";
})

closeForm.addEventListener('click', () => {
    document.getElementById("myForm").style.display = "none";
})

closeFormTask.addEventListener('click', () => {
    document.getElementById("myFormTask").style.display = "none";
})

task_submit_button.addEventListener('click', () => {
    let taskName = document.getElementById('task_name').value;
    let taskDescription = document.getElementById('description').value;
    let task = {"name": taskName, "description": taskDescription, "completed": false};
    let projectName = document.querySelector('.newlist').innerText;
    pushTask(task, projectName);
    refreshMain()
})

function pushTask(task, projectName) {
    let projectTasks = getAllTasks(projectName);
    projectTasks.push(task);
    localStorage.setItem(projectName, JSON.stringify(projectTasks));
}

project_submit_button.addEventListener('click', () => {
    let projectName = document.getElementById('project_name').value;
    localStorage.setItem(projectName,"");
    refreshPage();
})

function refreshMain(){
    let projectName = document.querySelector('.newlist').innerText;
    let projectTasks = getAllTasks(projectName);
    let main = document.getElementById('main');
    main.innerHTML = "";
    for (let i = 0; i < projectTasks.length; i++) {
        let task = projectTasks[i];
        let taskDiv = createTaskElement(task);
        main.appendChild(taskDiv);
    }
}

function refreshPage() {
    project_list.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        let projectName = localStorage.key(i);
        let projectElement = createProjectElement(projectName);
        project_list.appendChild(projectElement);
    }
}

function createTaskElement(task) {

    let taskElement = document.createElement('div');
    let taskName = document.createElement('h3');
    let taskDescription = document.createElement('p');
    let container = document.createElement('div');
    let taskCompleted = document.createElement('input');
    let taskDelete = document.createElement('button');

    taskName.classList.add('task_name');
    container.classList.add('task_container');
    taskDelete.classList.add('delete');
    taskElement.classList.add('task');
    taskCompleted.type = "checkbox";

    taskCompleted.checked = task.completed;
    taskCompleted.addEventListener('click', () => {
        task.completed = !task.completed;
        console.log(task.completed);
        refreshMain();
    });
    taskName.innerHTML = task.name;
    taskDescription.innerHTML = task.description;
    taskDelete.innerHTML = "Delete";
    taskDelete.addEventListener('click', () => {
        deleteTask(task);
        refreshMain();
    }
    );
    container.appendChild(taskCompleted);
    container.appendChild(taskDelete);
    taskElement.appendChild(taskName);
    taskElement.appendChild(taskDescription);
    taskElement.appendChild(container);
    return taskElement;
}




function createProjectElement(projectName){
    let projectElement = document.createElement('li');
    projectElement.classList.add('project');
    projectElement.innerHTML = `<h1><a href="#" class="link">${projectName}</a></h1>`;
    return projectElement;
}

function getAllTasks(projectName) {
    let tasks = JSON.parse(localStorage.getItem(projectName) || "[]");
    return tasks;
}


function deleteTask(task) {
    let projectName = document.querySelector('.newlist').innerText;
    let projectTasks = getAllTasks(projectName);
    let newProjectTasks = _.filter(projectTasks, (t) => {
        return t.name !== task.name;
    });
    localStorage.setItem(projectName, JSON.stringify(newProjectTasks));
}