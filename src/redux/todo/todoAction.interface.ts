import { AnyAction } from 'redux';
import { TODO_ACTION } from 'service/const/actionConst';

const { CREATE_TODO, CHANGE_NAME } = TODO_ACTION;

export type CreateTodoAction = {
  type: typeof CREATE_TODO;
  payload: string;
};

export type ChangeNameAction = {
  type: typeof CHANGE_NAME;
  payload: string;
};

export type TodoActionTypes = AnyAction | CreateTodoAction | ChangeNameAction;
