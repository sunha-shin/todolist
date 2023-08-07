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
        // todoList: tempTodoList
      };
    }
    case UPDATE_TODO: {
      const tempTodoList = [...state.todoList];
      // const updatedTodo =
      return {
        ...state,
        todoList: [...state.todoList],
        // state.todoList.filter((todo) => todo.id !== action.payload),
        // const toggleFilter =  { ...state, todo_1: state.todo_1.map(todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone} : todo)}
        // return toggleFilter
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default todoReducer;
