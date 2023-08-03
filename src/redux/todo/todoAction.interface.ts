import { AnyAction } from 'redux';
import { TODO_ACTION } from 'service/const/actionConst';
import { Todo } from 'service/model/Todo';

const { CREATE_TODO } = TODO_ACTION;

export type CreateTodoAction = {
  type: typeof CREATE_TODO;
  payload: Partial<Todo>;
};
export type TodoActionTypes = AnyAction | CreateTodoAction;
