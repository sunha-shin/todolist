import { Todo } from 'service/model/Todo';
import { loadEnv } from 'api/loadEnv';

const { GET, POST, PUT, PATCH, DELETE } = { GET: 'GET', POST: 'POST', PUT: 'PUT', PATCH: 'PATCH', DELETE: 'DELETE' };
export interface IResponse {
  message: string;
}

export const createTodoAPI = async (todoInput: Partial<Todo>): Promise<IResponse> => {
  const res: Response = await fetch(`${loadEnv()}/api/todo`, {
    method: POST,
    body: JSON.stringify(todoInput),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};

export const readTodosAPI = async (): Promise<Todo[]> => {
  const res: Response = await fetch(`${loadEnv()}/api/todo`, {
    method: GET,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};

export const updateTodoAPI = async (updatedInput: Todo): Promise<IResponse> => {
  const res: Response = await fetch(`${loadEnv()}/api/todo`, {
    method: PUT,
    body: JSON.stringify(updatedInput),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};

export const deleteTodoAPI = async (id: string): Promise<IResponse> => {
  const res: Response = await fetch(`${loadEnv()}/api/todo/${id}`, {
    method: DELETE,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};

export const updateProcessAPI = async (todo: Todo): Promise<IResponse> => {
  const res: Response = await fetch(`${loadEnv()}/api/todo/updateProcess`, {
    method: PUT,
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};
