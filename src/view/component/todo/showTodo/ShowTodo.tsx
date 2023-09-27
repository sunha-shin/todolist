/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Styled from './ShowTodo.Styled';
import { useCallback, useEffect, useState } from 'react';
import { readTodo } from 'redux/todo/todoAction';
import { Todo } from 'service/model/Todo';
import { useAppSelector, useAppDispatch } from 'service/store';
import UpdateTodo from '../updateTodo/UpdateTodo';
import TaskCard from './TaskCard';
import { IResponse, deleteTodoAPI, readTodosAPI, updateProcessAPI } from 'api/todo';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoReducer);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>({} as Todo);

  const handleUpdateOpen = (todo: Todo) => {
    setSelectedTodo(todo);
    setOpenUpdateModal(true);
  };
  const handleUpdateClose = () => setOpenUpdateModal(false);

  const updateProcess = async (todo: Todo) => {
    await updateProcessAPI(todo);
    const result: Todo[] = await readTodosAPI();
    dispatch(readTodo(result));
  };

  // Read todo
  const getAllTodos = useCallback(async () => {
    const result: Todo[] = await readTodosAPI();
    dispatch(readTodo(result));
  }, [dispatch]);

  // Delete todo
  const deleteTodo = async (id: string) => {
    const result: IResponse = await deleteTodoAPI(id);
    await getAllTodos();
  };

  useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);

  return (
    <Styled.ShowTodo>
      {todoList.map((todo: Todo) => {
        return (
          <TaskCard
            key={todo.id}
            todo={todo}
            updateProcess={updateProcess}
            handleUpdateOpen={handleUpdateOpen}
            clickDelete={deleteTodo}
          />
        );
      })}
      {openUpdateModal && (
        <UpdateTodo open={openUpdateModal} handleClose={handleUpdateClose} selectedTodo={selectedTodo} />
      )}
    </Styled.ShowTodo>
  );
};

export default ShowTodo;
