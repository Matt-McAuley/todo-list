import { Todo, Project } from "./js-files/todo";
import './style.css';

function createTodo(title, description, dueDate, priority, project) {
    todo = new Todo(title, description, dueDate, priority);
    project.addTodo(todo);
}

function createProject(title) {
    return new Project(title);
}