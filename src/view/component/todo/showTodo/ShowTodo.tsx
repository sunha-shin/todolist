import * as Styled from './ShowTodo.Styled';
import { useState } from 'react';
import { deleteTodo, updateTodo } from 'redux/todo/todoAction';
import { Todo } from 'service/model/Todo';
import { useAppSelector, useAppDispatch } from 'service/store';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { EditIcon, TrashCanIcon } from 'resource/icons';
import { todoIsCompeted } from 'service/model/Todo';
import Input from 'view/component/common/input/InputComp';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state?.todoReducer);

  const [updateTodoInput, setUpdateTodoInput] = useState<Todo>({
    id: '',
    title: '',
    isCompleted: 0,
    priority: 0,
  });
  const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);
  console.log(updateTodoInput);

  // update todo
  const changeTodo = () => {
    dispatch(updateTodo(updateTodoInput));
    setShowUpdateInput(false);
  };

  const onChangeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateTodoInput({ ...updateTodoInput, [name]: value });
  };

  const clickUpdate = (todo: Todo) => {
    setUpdateTodoInput({
      ...updateTodoInput,
      ...todo,
    });
    setShowUpdateInput(true);
  };

  const completeTodo = (todo: Todo) => {
    let tempTodo: Todo;

    if ((todo.isCompleted as number) === todoIsCompeted.length - 1) {
      tempTodo = { ...todo, isCompleted: 0 };
    } else {
      tempTodo = { ...todo, isCompleted: (todo?.isCompleted as number) + 1 };
    }

    dispatch(updateTodo(tempTodo));
  };

  // delete todo
  const clickDelete = (id: string | number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Styled.ShowTodo background={'red'}>
      {todoList.map((todo: Todo) => {
        return (
          <section className="task-card" key={todo.id}>
            <div className="task-wrapper">
              <div className="task-top-text">Task</div>
              <div className="task-text">{todo.title}</div>
            </div>
            <div className="priority-wrapper">
              <div className="task-top-text">Priority</div>
              <div className="task-text">High</div>
            </div>
            <div className="task-status-wrapper">
              <Button onClick={() => completeTodo(todo)}>{todoIsCompeted[todo.isCompleted as number]}</Button>
            </div>
            <div className="progress-bar-wrapper">
              <CircularProgress variant="determinate" value={100} size={'24px'} />
            </div>
            <div className="buttons-wrapper">
              <div onClick={() => clickUpdate(todo)} style={{ marginRight: '20px' }}>
                <EditIcon />
              </div>
              <div onClick={() => clickDelete(todo.id)}>
                <TrashCanIcon />
              </div>
            </div>
          </section>
        );
      })}
      {showUpdateInput && (
        <>
          <Input
            type={'text'}
            name={'title'}
            value={updateTodoInput.title}
            placeholder={'title'}
            onChange={onChangeUpdate}
            dataTestId={'data1'}
          />
          <button onClick={changeTodo}>update todo</button>
        </>
      )}
    </Styled.ShowTodo>
  );
};

export default ShowTodo;
