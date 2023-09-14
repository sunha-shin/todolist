import * as Styled from './ShowTodo.Styled';
import { useState } from 'react';
import { deleteTodo, updateTodo } from 'redux/todo/todoAction';
import { Todo } from 'service/model/Todo';
import { useAppSelector, useAppDispatch } from 'service/store';
import UpdateTodo from '../updateTodo/UpdateTodo';
import TaskCard from './TaskCard';
import { todoIsCompleted } from 'service/const/general';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state?.todoReducer);
  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>({} as Todo);
  // const [progress, setProgress] = useState<number>(100);

  const handleUpdateOpen = (todo: Todo) => {
    setSelectedTodo(todo);
    setOpenUpdateModal(true);
  };
  const handleUpdateClose = () => setOpenUpdateModal(false);

  const completeTodo = (todo: Todo) => {
    let tempTodo: Todo = { ...todo };

    let index = todoIsCompleted.indexOf(tempTodo.isCompleted);
    if (index === todoIsCompleted.length - 1) {
      index = 0;
    } else {
      index += 1;
    }

    // 0 --> todo --> 0%
    // 1 --> in pro-> 50%
    // 2 --> Done --> 100%

    // if (index === 0) setProgress(0);
    // if (index === 1) setProgress(50);
    // if (index === 2) setProgress(100);

    tempTodo = { ...todo, isCompleted: todoIsCompleted[index] };
    dispatch(updateTodo(tempTodo));
  };

  // delete todo
  const clickDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Styled.ShowTodo>
      {todoList.map((todo: Todo) => {
        return (
          <TaskCard
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            handleUpdateOpen={handleUpdateOpen}
            clickDelete={clickDelete}
            // progress={progress}
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
