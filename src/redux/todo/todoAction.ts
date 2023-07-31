import { TODO_ACTION } from 'service/const/actionConst';
import { CreateTodoAction, ChangeNameAction } from './todoAction.interface';

const { CREATE_TODO, CHANGE_NAME } = TODO_ACTION;

export const createTodo = (title: string): CreateTodoAction => {
  return {
    type: CREATE_TODO,
    payload: title,
  };
};

export const changeName = (name: string): ChangeNameAction => {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
};
