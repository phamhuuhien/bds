import { Component } from '@angular/core';
import { AppState, INITIAL_STATE } from './reducers'
import rootReducer from './reducers/index';
const createLogger = require('redux-logger');
import thunk from 'redux-thunk';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'my-app',
  template: `
    <header></header>
    <bds-page></bds-page>
  `
})
export class AppComponent {
	constructor(ngRedux: NgRedux<AppState>) {
      ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        [ createLogger() ]);
  	}
}