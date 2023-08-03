import { TODO_ACTION } from 'service/const/actionConst';
import { CreateTodoAction } from './todoAction.interface';
import { Todo } from 'service/model/Todo';
const { CREATE_TODO } = TODO_ACTION;

export const createTodo = (todo: Partial<Todo>): CreateTodoAction => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};
