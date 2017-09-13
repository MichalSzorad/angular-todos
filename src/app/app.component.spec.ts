import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component'
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

describe('AppComponent', () => {

  let fixture, component, el;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodosComponent,
        TodoDetailComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
  it(`should have as title 'todos'`, async(() => {
    expect(component.title.toLowerCase()).toEqual('todos');
  }));
  it('should render title in a h1 tag', async(() => {
    expect(el.querySelector('h1').textContent.toLowerCase()).toContain('todos');
  }));
  it('should have only one h1 tag', async(() => {
    expect(el.querySelectorAll('h1').length).toBe(1);
  }));
});
