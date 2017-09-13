import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component'
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodosComponent,
        TodoDetailComponent
      ],
    }).compileComponents();
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'todos'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title.toLowerCase()).toEqual('todos');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent.toLowerCase()).toContain('todos');
  }));
  it('should have only one h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.nativeElement.querySelectorAll('h1').length).toBe(1);
  }));
});
