import { combineReducers } from 'redux';
import { todos, TODO_INITIAL_STATE } from './todos';
import { TodoState } from './todos'

export const INITIAL_STATE: AppState = {
	todos: TODO_INITIAL_STATE
}

export default combineReducers<AppState>({
  todos
});

export interface AppState {
  todos: TodoState;
}