import { Todo, Project } from "./js-files/classes";
import pageLoad from "./js-files/pageLoad";
import './style.css';

pageLoad();

function createTodo(title, description, dueDate, priority, project) {
    todo = new Todo(title, description, dueDate, priority);
    project.addTodo(todo);
}

function createProject(title) {
    return new Project(title);
}