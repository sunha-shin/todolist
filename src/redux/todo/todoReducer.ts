import { Reducer } from 'redux';
import { Todo } from 'service/model/Todo';
import { TODO_ACTION } from 'service/const/actionConst';
import { TodoActionTypes } from './todoAction.interface';
const { CREATE_TODO, DELETE_TODO, UPDATE_TODO } = TODO_ACTION;

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
    case CREATE_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO: {
      // const tempTodoList = [...state.todoList];
      // const index = tempTodoList.findIndex((todo) => todo.id === action.payload);
      // tempTodoList.splice(index, 1);
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todoList: state.todoList.map((todo: Todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              ...action.payload,
            };
          }
          return {
            ...todo,
          };
        }),
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default todoReducer;

// const personA = {
//   name: 'hong',
// };

// const personB = { ...personA };
// personB.name = 'shin';

// console.log(personA);
// console.log(personB);
