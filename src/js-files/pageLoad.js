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
        createTodoPopup();
    });
    
    addProject.addEventListener('click', () => {
        projectPopup.classList.add('active');

        generalButton.disabled = true;
        addProject.disabled = true;
        addTodo.disabled = true;
        projectDropdown.disabled = true;

    });
}

function createTodoPopup() {
    todoPopup.classList.add('active');

    generalButton.disabled = true;
    addProject.disabled = true;
    addTodo.disabled = true;
    projectDropdown.disabled = true;
}

function removePopup() {
    todoPopup.classList.remove('active');
    projectPopup.classList.remove('active');

    generalButton.disabled = false;
    addProject.disabled = false;
    addTodo.disabled = false;
    projectDropdown.disabled = false;
}

export {pageLoad, createTodoPopup, removePopup};