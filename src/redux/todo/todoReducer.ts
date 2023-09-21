import { Reducer } from 'redux';
import { Todo } from 'service/model/Todo';
import { TODO_ACTION } from 'service/const/actionConst';
import { TodoActionTypes } from './todoAction.interface';
import { nanoid } from 'nanoid';
const { CREATE_TODO, DELETE_TODO, UPDATE_TODO } = TODO_ACTION;

interface TodoStateType {
  todoList: Todo[];
}

const INITIAL_STATE: TodoStateType = {
  todoList: [
    { id: nanoid(), title: 'Go to gym', priority: 'high', isCompleted: 'Todo' },
    { id: nanoid(), title: 'Read a book', priority: 'low', isCompleted: 'In Progress' },
    { id: nanoid(), title: 'Go to market', priority: 'high', isCompleted: 'In Progress' },
    { id: nanoid(), title: 'Restart Learning Solid works', priority: 'low', isCompleted: 'Done' },
    { id: nanoid(), title: 'Change slider to scroll', priority: 'medium', isCompleted: 'Done' },
    { id: nanoid(), title: 'To publish the article', priority: 'high', isCompleted: 'Todo' },
  ],
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
