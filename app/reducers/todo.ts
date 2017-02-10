import { ADD_TODO, DELETE_TODO } from '../constants'  
export interface Todo {  
  id: number;
  completed: boolean;
  text: string;

}
export interface TodoState extends Array<Todo> { };

const INITIAL_STATE = [  
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

const getNextId = (todos) => {  
  todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
}

export default function todos(state: TodoState = INITIAL_STATE,  
  action): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: getNextId(state),
          completed: false,
          text: action.text
        },
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )
    default:
      return state;
    }
  }