import { Reducer } from 'redux';
import { Todo } from 'service/model/Todo';
import { TODO_ACTION } from 'service/const/actionConst';
import { TodoActionTypes } from './todoAction.interface';
const { CREATE_TODO, CHANGE_NAME } = TODO_ACTION;

interface TodoStateType {
  todoList: Todo[];
  name: string;
}

const INITIAL_STATE: TodoStateType = {
  todoList: [],
  name: 'hong',
};

const todoReducer: Reducer<TodoStateType, TodoActionTypes> = (
  state = INITIAL_STATE,
  action: TodoActionTypes,
): TodoStateType => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todoList: [{ id: '1', title: action.payload }],
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default todoReducer;
