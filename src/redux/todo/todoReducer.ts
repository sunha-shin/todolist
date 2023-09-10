import { Reducer } from 'redux';
import { Todo } from 'service/model/Todo';
import { TODO_ACTION } from 'service/const/actionConst';
import { TodoActionTypes } from './todoAction.interface';
const { CREATE_TODO, DELETE_TODO, UPDATE_TODO } = TODO_ACTION;

interface TodoStateType {
  todoList: Todo[];
}

const INITIAL_STATE: TodoStateType = {
  todoList: [
    { id: '1', title: 'Go to gym', priority: 'high', isCompleted: 0 },
    { id: '2', title: 'Read a book', priority: 'low', isCompleted: 0 },
    { id: '3', title: 'Go to market', priority: 'high', isCompleted: 0 },
    { id: '4', title: 'Restart Learning Solid works', priority: 'low', isCompleted: 0 },
    { id: '5', title: 'Change slider to scroll', priority: 'medium', isCompleted: 0 },
    { id: '6', title: 'To publish the article', priority: 'high', isCompleted: 0 },
    {
      id: '7',
      title: 'To publish the article To publish the articleTo publish the articleTo publish the article',
      priority: 'low',
      isCompleted: 0,
    },
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
