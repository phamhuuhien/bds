import { Component,  
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy } from '@angular/core';
import { TodoState } from '../../reducers/todos'

@Component({
  selector: 'rio-todo-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `     
  <input className="toggle"
    type="checkbox"
    [ngModel]="todo.completed"
    (ngModelChange)="todoCompleted.emit(todo.id)" />

  <input [ngModel]="todo.text"
    (ngModelChange)="todoEdited.emit({id: todo.id, text: $event})"/>
  <button type="button"
  (click)="todoDeleted.emit(todo.id)">X</button>   
  `
})
export class RioTodoItem {  
  @Input() todo: TodoState;
  @Output() todoCompleted: EventEmitter<any> = new EventEmitter();
  @Output() todoEdited: EventEmitter<any> = new EventEmitter();
  @Output() todoDeleted: EventEmitter<any> = new EventEmitter();
  constructor() { }
 };