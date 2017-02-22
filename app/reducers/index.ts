import { combineReducers } from 'redux';
import { todos, TodoState, TODO_INITIAL_STATE } from './todos';
import { bds, BdsState, BDS_INITIAL_STATE } from './bds'

export const INITIAL_STATE: AppState = {
	todos: TODO_INITIAL_STATE,
	bds: BDS_INITIAL_STATE
}

export default combineReducers<AppState>({
  todos,
  bds
});

export interface AppState {
  todos: TodoState;
  bds: BdsState;
}