class Todo {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}

class Project {

    constructor(title) {
        this.todos = [];
        this.title = title;
    }

    addTodo(todo) {
        this.todos.push(todo);
        this.todos.sort(function(a,b) {
            return a.dueDate - b.dueDate;
        });
    }

    removeTodo(todo) {
        let i = this.todos.indexOf(todo);
        this.todos.splice(i, 1);
    }
}

export {Todo, Project};