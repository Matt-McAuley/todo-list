import { Todo, Project } from "./js-files/classes";
import {pageLoad, createTodoPopup, removePopup} from "./js-files/pageLoad";
import './style.css';
import {format} from "date-fns";

pageLoad();

let editedTodos = [];

let general = new Project('General');

const todoArea = document.querySelector(".todoArea");

const todoPopup = document.querySelector(".todoPopup");
const projectPopup = document.querySelector(".projectPopup");

const cancelButtons = document.querySelectorAll(".cancel");

const todoTitle = document.querySelector("#todoTitle");
const todoDescription = document.querySelector("#description");
const todoDueDate = document.querySelector("#dueDate");
const todoPriority = document.querySelector("#priority");

const projectTitle = document.querySelector("#projectTitle");

todoPopup.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = todoTitle.value;
    let description = todoDescription.value;
    let dueDate = new Date(todoDueDate.value);
    let priority = todoPriority.value;
    console.log(todoDueDate.value);
    console.log(dueDate);

    //Section uses general for now - to be changed later
    //Removed a todo if edited so it doesn't become doubled
    if (editedTodos.length > 0) {
        general.removeTodo(editedTodos[0]);
        editedTodos.splice(0,1);
    }
    let todo = new Todo(title, description, dueDate, priority);
    general.addTodo(todo);

    removePopup();

    removeAllTodos();
    displayAllTodos(general);

    todoTitle.value = "";
    todoDescription.value = "";
    todoDueDate.value = "";
    todoPriority.value = "medium";
});

for (let i = 0; i < cancelButtons.length; i++) {
    cancelButtons[i].addEventListener('click', () => {
        removePopup();
        todoTitle.value = "";
        todoDescription.value = "";
        todoDueDate.value = "";
        todoPriority.value = "medium";

        if (editedTodos.length > 0) {
            editedTodos.splice(0,1);
        }
    });
}

function displayAllTodos(project) {
    for (let i = 0; i < project.todos.length; i++) {
        let todo = project.todos[i];
        let todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoDiv.textContent = `Title: ${todo.title} | Due: ${format(todo.dueDate, "MM/dd/yyyy")}`;

        if (todo.priority == "low") {
            todoDiv.classList.add("low");
        }
        if (todo.priority == "medium") {
            todoDiv.classList.add("med");
        }
        if (todo.priority == "high") {
            todoDiv.classList.add("high");
        }
        
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add('editButton');
        todoDiv.append(editButton);
        
        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.classList.add('completeButton');
        todoDiv.append(completeButton);

        todoArea.append(todoDiv);

        completeButton.addEventListener('click', () => {
            project.removeTodo(todo);
            removeAllTodos();
            displayAllTodos(project);
        });

        editButton.addEventListener('click', () => {
            createTodoPopup();
            todoTitle.value = todo.title;
            todoDescription.value = todo.description;
            todoDueDate.value = format(todo.dueDate, 'yyyy-MM-dd');
            todoPriority.value = todo.priority;
            editedTodos.push(todo);
        });
    }
}

function removeAllTodos() {
    while (todoArea.hasChildNodes()) {
        todoArea.firstChild.remove();
    }
}