import { TODO_ACTION } from 'service/const/actionConst';
import { CreateTodoAction, DeleteTodoAction, ReadTodoAction, UpdateTodoAction } from './todoAction.interface';
import { Todo } from 'service/model/Todo';
const { READ_TODO, CREATE_TODO, DELETE_TODO, UPDATE_TODO } = TODO_ACTION;

export const readTodo = (todoList: Todo[]): ReadTodoAction => {
  return {
    type: READ_TODO,
    payload: todoList,
  };
};

export const createTodo = (todo: Partial<Todo>): CreateTodoAction => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id: string): DeleteTodoAction => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateTodo = (updatedTodo: Todo): UpdateTodoAction => {
  return {
    type: UPDATE_TODO,
    payload: updatedTodo,
  };
};
