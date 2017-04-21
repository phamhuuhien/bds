import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent }  from './app.component';
import { RioTodoPage } from './containers/todo-page'
import { BdsPage } from './containers/bds/bds-page.container'
import { RioTodoItem, Header, BdsItem, Footer } from './components'
import { TodoActions } from './actions/todoActions'
import { BdsActions } from './actions/bdsActions'


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, NgReduxModule, LazyLoadImageModule],
  declarations: [ AppComponent, RioTodoPage, RioTodoItem, Header, Footer, BdsItem, BdsPage ],
  providers:    [ TodoActions, BdsActions ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }