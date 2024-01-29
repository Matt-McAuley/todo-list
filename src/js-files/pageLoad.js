//Gather all buttons/form items
const generalButton = document.querySelector(".general");
const addProject = document.querySelector(".addButton");
const addTodo = document.querySelector(".todoButton");
const projectDropdown = document.querySelector(".projectSelect");
const todoPopup = document.querySelector(".todoPopup");
const projectPopup = document.querySelector(".projectPopup");

function pageLoad() {
    //Add necessary event listeners
    addTodo.addEventListener('click', () => {
        todoPopup.classList.add('active');
        createPopup();
    });
    
    addProject.addEventListener('click', () => {
        projectPopup.classList.add('active');
        createPopup();
    });
}

function createPopup() {
    generalButton.disabled = true;
    addProject.disabled = true;
    addTodo.disabled = true;
    projectDropdown.disabled = true;

    const editButtons = document.querySelectorAll('.editButton');
    const completeButtons = document.querySelectorAll('.completeButton');
    const todos = document.querySelectorAll('.todo');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].disabled = true;
    }
    for (let i = 0; i < completeButtons.length; i++) {
        completeButtons[i].disabled = true;
    }
    for (let i = 0; i < todos.length; i++) {
        todos[i].classList.add('disabled');
    }
}

function removePopup() {
    todoPopup.classList.remove('active');
    projectPopup.classList.remove('active');

    generalButton.disabled = false;
    addProject.disabled = false;
    addTodo.disabled = false;
    projectDropdown.disabled = false;

    const editButtons = document.querySelectorAll('.editButton');
    const completeButtons = document.querySelectorAll('.completeButton');
    const todos = document.querySelectorAll('.todo');
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].disabled = false;
    }
    for (let i = 0; i < completeButtons.length; i++) {
        completeButtons[i].disabled = false;
    }
    for (let i = 0; i < todos.length; i++) {
        todos[i].classList.remove('disabled');
    }
}

export {pageLoad, createPopup, removePopup};