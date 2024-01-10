import { Todo, Project } from "./js-files/classes";
import pageLoad from "./js-files/pageLoad";
import './style.css';

pageLoad();

function displayTodos(project) {
    todoArea = document.querySelector(".todoArea");
    for (todo in project.todos) {
        let todoButton = document.createElement("button");
        todoButton.classList.add("todo");
        todoButton.textContent = todo.title;
        todoArea.append(todoButton);
    }
}

function createTodo(title, description, dueDate, priority, project) {
    todo = new Todo(title, description, dueDate, priority);
    project.addTodo(todo);
}