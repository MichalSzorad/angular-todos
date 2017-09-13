import { Component, OnInit } from '@angular/core';
import { autobind } from 'core-decorators';
import { Todo } from '../types';
import { TodoService } from '../todo.service';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component'

@autobind
@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  addTodo(text: string): void {
    if (!text.trim().length) {
      return;
    }

    const todo = this.todoService.createTodo(text);
    this.todoService.addTodo(todo).then(() => {
      return this.todoService.getTodos();
    }).then(todos => {
      this.todos = todos;
    });
  }

  finishTodo(todo: Todo): void {
    todo.done = true;
    this.todoService.saveTodos(this.todos);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo.id)
      .then(() => this.todoService.getTodos())
      .then(todos => this.todos = todos);
  }

  removeAll(): void {
    this.todoService.removeAll().then(() => {
      this.todos = [];
    });
  }

  ngOnInit(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
}
