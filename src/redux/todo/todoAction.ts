import { TODO_ACTION } from 'service/const/actionConst';
import { CreateTodoAction, DeleteTodoAction } from './todoAction.interface';
import { Todo } from 'service/model/Todo';
const { CREATE_TODO, DELETE_TODO } = TODO_ACTION;

export const createTodo = (todo: Partial<Todo>): CreateTodoAction => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id: string | number): DeleteTodoAction => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
