import { Todo } from './models';
import { LocalStorage } from './utils';

export class TodoService {

  storage = new LocalStorage('todo-service');

  createTodo(text: string): Todo {
    return { text, id: new Date().getTime(), done: false, createdTime: new Date() };
  }

  async addTodo(todo: Todo) {
    const todos = await this.getTodos();
    this.saveTodos([...todos, todo]);
  }

  async removeAll() {
    this.storage.clear('todos');
  }

  async saveTodos(todos: Todo[]) {
    this.storage.set('todos', JSON.stringify(todos));
  }

  async deleteTodo(id: Number) {
    const todos = await this.getTodos();
    this.saveTodos(todos.filter(todo => todo.id !== id));
  }

  async getTodos(): Promise<Todo[]> {
    const todos = JSON.parse(this.storage.get('todos') || '[]').map(data => data);
    return Promise.resolve(todos);
  }
}