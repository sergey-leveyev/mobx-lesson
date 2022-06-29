import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 1, title: "Learn mobx", completed: false },
    { id: 2, title: "Learn redux", completed: true },
    { id: 3, title: "Learn saga", completed: true },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}

export default new Todo();
