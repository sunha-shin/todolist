import { Reducer } from 'redux';
import { Todo } from 'service/model/Todo';
import { TODO_ACTION } from 'service/const/actionConst';
import { TodoActionTypes } from './todoAction.interface';
const { READ_TODO } = TODO_ACTION;

interface TodoStateType {
  todoList: Todo[];
}

const INITIAL_STATE: TodoStateType = {
  todoList: [],
};

const todoReducer: Reducer<TodoStateType, TodoActionTypes> = (
  state = INITIAL_STATE,
  action: TodoActionTypes,
): TodoStateType => {
  switch (action.type) {
    case READ_TODO:
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default todoReducer;
