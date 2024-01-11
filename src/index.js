import { Todo, Project } from "./js-files/classes";
import {pageLoad, removePopup} from "./js-files/pageLoad";
import './style.css';

pageLoad();

let general = new Project('General');

const todoArea = document.querySelector(".todoArea");

const todoPopup = document.querySelector(".todoPopup");
const projectPopup = document.querySelector(".projectPopup");

const todoTitle = document.querySelector("#todoTitle");
const todoDescription = document.querySelector("#description");
const todoDueDate = document.querySelector("#dueDate");
const todoPriority = document.querySelector("#priority");

const projectTitle = document.querySelector("#projectTitle");

todoPopup.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = todoTitle.value;
    let description = todoDescription.value;
    let dueDate = todoDueDate.value;
    let priority = todoPriority.value;

    let todo = new Todo(title, description, dueDate, priority);
    general.addTodo(todo);

    removePopup();

    addTodoDOM(todo);
});

function displayAllTodos(project) {
    for (let i = 0; i < project.todos.length; i++) {
        let todoButton = document.createElement("button");
        todoButton.classList.add("todo");
        todoButton.textContent = project.todos[i].title;
        todoArea.append(todoButton);
    }
}

function removeAllTodos() {
    while (todoArea.hasChildNodes()) {
        todoArea.removeChild();
    }
}

function addTodoDOM(todo) {
    let todoButton = document.createElement("button");
    todoButton.classList.add("todo");
    todoButton.textContent = todo.title;
    todoArea.append(todoButton);
}