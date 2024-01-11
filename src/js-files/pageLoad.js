//Gather all buttons/form items
const generalButton = document.querySelector(".general");
const addProject = document.querySelector(".addButton");
const addTodo = document.querySelector(".todoButton");
const cancelButtons = document.querySelectorAll(".cancel");
const projectDropdown = document.querySelector(".projectSelect");
const todoPopup = document.querySelector(".todoPopup");
const projectPopup = document.querySelector(".projectPopup");

function pageLoad() {
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
            removePopup();
        });
    }
}

function removePopup() {
    todoPopup.classList.remove('active');
    projectPopup.classList.remove('active');

    generalButton.disabled = false;
    addProject.disabled = false;
    addTodo.disabled = false;
    projectDropdown.disabled = false;
}

export {pageLoad, removePopup};