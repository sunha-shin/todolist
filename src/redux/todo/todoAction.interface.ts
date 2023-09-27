import { AnyAction } from 'redux';
import { TODO_ACTION } from 'service/const/actionConst';
import { Todo } from 'service/model/Todo';

const { CREATE_TODO, READ_TODO, DELETE_TODO, UPDATE_TODO } = TODO_ACTION;

export type ReadTodoAction = {
  type: typeof READ_TODO;
  payload: Todo[];
};

export type CreateTodoAction = {
  type: typeof CREATE_TODO;
  payload: Partial<Todo>;
};

export type DeleteTodoAction = {
  type: typeof DELETE_TODO;
  payload: string;
};

export type UpdateTodoAction = {
  type: typeof UPDATE_TODO;
  payload: Todo;
};

export type TodoActionTypes = AnyAction | CreateTodoAction | DeleteTodoAction | UpdateTodoAction | ReadTodoAction;
