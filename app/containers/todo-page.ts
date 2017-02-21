import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';
import { RioTodoItem } from '../components';
import { AppState } from '../reducers'
import { TodoState } from '../reducers/todos'
import { TodoActions } from '../actions/todoActions'


@Component({
    selector: 'todo-page',
    template: `
      <ul>  
        <li *ngFor="let todo of todos$ | async">
          <rio-todo-item 
               [todo]="todo"
             (todoDeleted)="actions.deleteTodo($event)">
          </rio-todo-item>
        </li>
      </ul> 
      <button (click)="actions.addTodo('aaa')">Add</button>
     `
})
export class RioTodoPage implements OnInit {  
  todos$: Observable<TodoState>;
  constructor(public ngRedux: NgRedux<AppState>,
              private actions: TodoActions) { }

  ngOnInit() {
    this.todos$ = this.ngRedux.select('todos')
  }
}