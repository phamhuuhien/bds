import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { AppComponent }  from './app.component';
import { RioTodoPage } from './containers/todo-page'
import { RioTodoItem, Header } from './components'
import { TodoActions } from './actions/todoActions'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, NgReduxModule],
  declarations: [ AppComponent, RioTodoPage, RioTodoItem, Header ],
  providers:    [ TodoActions ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }