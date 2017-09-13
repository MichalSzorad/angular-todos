import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { TodoDetailComponent } from './todo-detail.component';
import { Todo } from '../types'
describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;
  let el;
  let todo;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDetailComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
    todo = { text: 'Fix bugs in my code', id: 1, done: false, createdTime: new Date() } as Todo;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo text', () => {
    component.todo = todo;
    fixture.detectChanges();
    expect(el.textContent).toContain(todo.text);
  });

  it('should display 2 buttons', () => {
    component.todo = todo;
    fixture.detectChanges();
    expect(el.querySelectorAll('button').length).toBe(2);
  });

  it('should trigger TodoDoneClick and TodoCancelClick when clicked on buttons', () => {
    component.todo = todo;
    component.TodoCancelClick = () => { };
    component.TodoDoneClick = () => { };
    spyOn(component, 'TodoCancelClick');
    spyOn(component, 'TodoDoneClick');
    fixture.detectChanges();

    const btnCancel = el.querySelector('button.btn-cancel');
    const btnDone = el.querySelector('button.btn-done');

    expect(component.TodoCancelClick).not.toHaveBeenCalled();
    expect(component.TodoDoneClick).not.toHaveBeenCalled();
    btnCancel.click();
    expect(component.TodoCancelClick).toHaveBeenCalledTimes(1);
    expect(component.TodoDoneClick).not.toHaveBeenCalled();
    btnDone.click();
    expect(component.TodoCancelClick).toHaveBeenCalledTimes(1);
    expect(component.TodoDoneClick).toHaveBeenCalledTimes(1);
  });

  it('should add a "finished" className when todo is finished', () => {
    const todo1 = { text: 'Test1', id: 1, done: false, createdTime: new Date() } as Todo;
    const todo2 = { text: 'Test2', id: 2, done: true, createdTime: new Date() } as Todo;



    component.todo = todo1;
    fixture.detectChanges();
    const div = el.querySelector('div');
    expect(div.classList.contains('finished')).toBe(false);

    component.todo = todo2;
    fixture.detectChanges();
    expect(div.classList.contains('finished')).toBe(true);
  });
});
