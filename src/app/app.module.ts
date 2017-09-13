import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
