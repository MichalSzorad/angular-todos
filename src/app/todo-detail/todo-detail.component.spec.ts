import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { TodoDetailComponent } from './todo-detail.component';
import { Todo } from '../types'

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo text', () => {
    const todo = { text: 'Fix bugs in my code', id: 1, done: false, createdTime: new Date() } as Todo;
    component.todo = todo;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.textContent).toContain('Fix bugs in my code')
  });
});
