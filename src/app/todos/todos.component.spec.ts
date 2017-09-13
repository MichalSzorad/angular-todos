import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodosComponent,
        TodoDetailComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list', () => {
    expect(el.querySelectorAll('ul').length).toBeGreaterThan(0);
  });

  it('should render at least 2 buttons - add and remove todo', () => {
    expect(el.querySelectorAll('button').length).toBeGreaterThan(1);
  });

  it('should have text input to create todo', () => {
    expect(el.querySelectorAll('input').length).toBeGreaterThan(0);
  });

});
