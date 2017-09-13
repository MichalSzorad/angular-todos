import { Component, Input } from '@angular/core';
import { Todo } from '../types'

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  @Input() todo: Todo;
  @Input() TodoDoneClick: Function;
  @Input() TodoCancelClick: Function;
}
