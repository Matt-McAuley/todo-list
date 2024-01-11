import { Project } from "./classes";

export default function pageLoad() {
    //Gather all buttons/form items
    const generalButton = document.querySelector(".general");
    const addProject = document.querySelector(".addButton");
    const addTodo = document.querySelector(".todoButton");
    const cancelButtons = document.querySelectorAll(".cancel");
    const todoSubmit = document.querySelector(".todoSubmit");
    const projectSubmit = document.querySelector(".projectSubmit");
    const projectDropdown = document.querySelector(".projectSelect");
    const todoPopup = document.querySelector(".todoPopup");
    const projectPopup = document.querySelector(".projectPopup");

    const todoTitle = document.querySelector("#todoTitle");
    const todoDescription = document.querySelector("#description");
    const todoDueDate = document.querySelector("#dueDate");
    const todoPriority = document.querySelector("#priority");

    const projectTitle = document.querySelector("#projectTitle");

    //Add necessary event listeners
    addTodo.addEventListener('click', () => {
        todoPopup.classList.add('active');

        generalButton.disabled = true;
        addProject.disabled = true;
        addTodo.disabled = true;
        projectDropdown.disabled = true;

    });
    
    addProject.addEventListener('click', () => {
        projectPopup.classList.add('active');

        generalButton.disabled = true;
        addProject.disabled = true;
        addTodo.disabled = true;
        projectDropdown.disabled = true;

    });

    for (let i = 0; i < cancelButtons.length; i++) {
        cancelButtons[i].addEventListener('click', () => {
            todoPopup.classList.remove('active');
            projectPopup.classList.remove('active');
    
            generalButton.disabled = false;
            addProject.disabled = false;
            addTodo.disabled = false;
            projectDropdown.disabled = false;
        });
    }

    // todoSubmit.addEventListener('click', () => {
    //     let title = todoTitle.value;
    //     let description = todoDescription.value;
    //     let dueDate = todoDueDate.value;
    //     let priority = todoPriority.value;
    // });
}

function createTodo(title, description, dueDate, priority, project) {
    todo = new Todo(title, description, dueDate, priority);
    project.addTodo(todo);
}