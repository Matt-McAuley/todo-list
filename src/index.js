import { Todo, Project } from "./js-files/classes";
import {pageLoad, createPopup, removePopup} from "./js-files/pageLoad";
import './style.css';
import {format} from "date-fns";

pageLoad();

let editedTodos = [];
let completeEdit = false;

let general = new Project('General');

const todoArea = document.querySelector(".todoArea");

const todoPopup = document.querySelector(".todoPopup");
const projectPopup = document.querySelector(".projectPopup");

const todoExpand = document.querySelector(".todoExpand");
const expandTitle = document.querySelector("#expandTitle");
const expandDescription = document.querySelector("#expandDescription");
const expandDate = document.querySelector("#expandDate");
const expandPriority = document.querySelector("#expandPriority");
const closeExpand = document.querySelector("#closeExpand");

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
    let dueDate = new Date(todoDueDate.value.replace(/-/g, '\/'));
    let priority = todoPriority.value;

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
            todoPopup.classList.add('active');
            createPopup();
            todoTitle.value = todo.title;
            todoDescription.value = todo.description;
            todoDueDate.value = format(todo.dueDate, 'yyyy-MM-dd');
            todoPriority.value = todo.priority;
            editedTodos.push(todo);
        });

        todoDiv.addEventListener('click', () => {
            if (!completeEdit) {
                todoExpand.classList.add('active');
                expandTitle.textContent = "Title: " + todo.title;
                expandDescription.textContent = "Description: " + todo.description;
                expandDate.textContent = "Due Date: " + format(todo.dueDate, "MM/dd/yyyy");
                expandPriority.textContent = "Priority: " + todo.priority;
                createPopup();
            }
        });

        closeExpand.addEventListener('click', () => {
            todoExpand.classList.remove('active');
            removePopup();
        });
    }
}

function removeAllTodos() {
    while (todoArea.hasChildNodes()) {
        todoArea.firstChild.remove();
    }
}