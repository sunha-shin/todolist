import { useState } from 'react';
import { deleteTodo, updateTodo } from 'redux/todo/todoAction';
import { Todo } from 'service/model/Todo';
import { useAppSelector, useAppDispatch } from 'service/store';
import Input from '../common/input/Input';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { EditIcon, TrashCanIcon } from 'resource/icons';
import { todoIsCompeted } from 'service/model/Todo';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state?.todoReducer);

  const [updateTodoInput, setUpdateTodoInput] = useState<Todo>({
    id: '',
    title: '',
    desc: '',
    isCompleted: 0,
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
    <div>
      {todoList.map((todo: Todo) => {
        return (
          <TaskCard key={todo.id}>
            <div style={{ width: '100px', border: '2px solid black', textOverflow: 'ellipsis' }}>
              <TaskText>Task</TaskText>
              <div>{todo.title}</div>
            </div>
            <div>
              <TaskText>Priority</TaskText>
              <div>High</div>
            </div>
            <Button onClick={() => completeTodo(todo)}>{todoIsCompeted[todo.isCompleted as number]}</Button>

            <Button onClick={() => clickUpdate(todo)}>
              <EditIcon />
            </Button>
            <Button onClick={() => clickDelete(todo.id)}>
              <TrashCanIcon />
            </Button>
          </TaskCard>
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
          <Input
            type={'text'}
            name={'desc'}
            value={updateTodoInput.desc}
            placeholder={'desc'}
            onChange={onChangeUpdate}
            dataTestId={'data1'}
          />
          <button onClick={changeTodo}>update todo</button>
        </>
      )}
    </div>
  );
};

const TaskCard = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 6px 58px rgba(196, 203, 214, 0.104);
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 22px 30px;
`;

const TaskText = styled.span`
  color: #91929e;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 7px;
`;

export default ShowTodo;
