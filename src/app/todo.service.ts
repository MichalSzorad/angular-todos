import { Todo } from './types';
class LocalStorage {

  private storage = localStorage;

  constructor(private prefix: string) {
  }

  set(key: string, data: string) {
    this.storage[this.prefix + key] = data;
  }

  get(key: string) {
    return this.storage[this.prefix + key];
  }

  clear(key: string) {
    delete this.storage[this.prefix + key];
  }
}

export class TodoService {

  storage = new LocalStorage('todo-service-');

  createTodo(text: string): Todo {
    const todo = { text, id: new Date().getTime(), done: false, createdTime: new Date() } as Todo;
    return todo;
  }

  async addTodo(todo: Todo): Promise<void> {
    const todos = await this.getTodos();
    this.saveTodos([...todos, todo]);
    return Promise.resolve(null);
  }

  async removeAll(): Promise<void> {
    this.storage.clear('todos');
    return Promise.resolve(null);
  }

  async saveTodos(todos: Todo[]): Promise<void> {
    this.storage.set('todos', JSON.stringify(todos));
    return Promise.resolve(null);
  }

  async deleteTodo(id: Number): Promise<void> {
    const todos = await this.getTodos();
    this.saveTodos(todos.filter(todo => todo.id !== id));
    return Promise.resolve(null);
  }

  async getTodos(): Promise<Todo[]> {
    const todos = JSON.parse(this.storage.get('todos') || '[]').map(data => data as Todo);

    return Promise.resolve(todos);
  }
}