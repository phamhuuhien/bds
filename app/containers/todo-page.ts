import 'NgRedux' from 'ng2-redux';  
import { AsyncPipe } from 'angular2/common';
import {  
  deleteTodo,
  editTodo,
  completeTodo
 } from '../actions/todo';
 import { RioTodoItem } from '../components';

@Component({
    selector: 'todo-page',
    pipes: [AsyncPipe],
    template: `
      <ul>  
        <li *ngFor="#todo of todos$ | async">
        <rio-todo-item [todo]="todo"
             (todoCompleted)="completeTodo($event)"
             (todoDeleted)="deleteTodo($event)"
             (todoEdited)="editTodo($event)">
        </rio-todo-item>
      </ul> 
     `
})

export class RioTodoPage implements OnInit {  
  todos$: Observable<any>
  constructor(private ngRedux: NgRedux) { }

  ngOnInit() {
    this.todos$ = this.ngRedux.select('todos')
  }

  completeTodo(id: number): void {
     this.ngRedux.dispatch(completeTodo(id));
  }

  deleteTodo(id: number): void {
     this.ngRedux.dispatch(deleteTodo(id));
  }

  editTodo({id, text}: Todo): void {
     this.ngRedux.dispatch(editTodo(id,text));
  }
}