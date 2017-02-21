import * as types from '../constants'

export interface Todo {  
  id: number;
  completed: boolean;
  text: string;

}

export const TODO_INITIAL_STATE = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  },
  {
    text: 'Buy The Milk',
    completed: false,
    id: 1
  },
  {
    text: 'Use ng2-redux',
    completed: true,
    id: 3
  },
  {
    text: 'Populate Mock Data',
    completed: false,
    id: 4
  }
];

export interface TodoState extends Array<Todo> { };

const getNextId = (todos): number => todos.reduce(
  (maxId, todo) => Math.max(todo.id, maxId), -1) + 1;

export function todos(state: TodoState = [], action): TodoState {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: getNextId(state),
          completed: false,
          text: action.text
        }];

    case types.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );
    default:
      return state;
  }
};