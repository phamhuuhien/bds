import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../reducers';

@Injectable()
export class TodoActions {
  static ADD_TODO = 'ADD_TODO';
  static DELETE_TODO = 'DELETE_TODO';

  constructor(private ngRedux: NgRedux<AppState>) {}

  addTodo(text: string) {
    this.ngRedux.dispatch({ type: TodoActions.ADD_TODO, text });
  }

  deleteTodo(event) {
    this.ngRedux.dispatch({ type: TodoActions.DELETE_TODO, id: event });
  }
}
