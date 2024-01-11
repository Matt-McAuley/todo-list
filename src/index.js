import { Todo, Project } from "./js-files/classes";
import pageLoad from "./js-files/pageLoad";
import './style.css';

pageLoad();

let general = new Project('General');

function displayTodos(project) {
    todoArea = document.querySelector(".todoArea");
    for (todo in project.todos) {
        let todoButton = document.createElement("button");
        todoButton.classList.add("todo");
        todoButton.textContent = todo.title;
        todoArea.append(todoButton);
    }
}