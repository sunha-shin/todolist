import { useState } from 'react';
import { useAppDispatch } from 'service/store';
import Input from '../../common/input/InputComp';
import { Todo } from 'service/model/Todo';
import { nanoid } from 'nanoid';
import { createTodo } from 'redux/todo/todoAction';
import Button from '@mui/material/Button';

const CreateTodo = () => {
  console.log('createtodo');
  const dispatch = useAppDispatch();

  const [createTodoInput, setCreateTodoInput] = useState<Partial<Todo>>({
    title: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCreateTodoInput({ ...createTodoInput, [name]: value });
  };

  const onClick = () => {
    // validation
    if (!createTodoInput.title) {
      alert('Enter title');
      return;
    }
    dispatch(createTodo({ ...createTodoInput, id: nanoid(), isCompleted: 0 }));
    setCreateTodoInput({ ...createTodoInput, title: '' });
  };

  return (
    <div>
      <Input
        type={'text'}
        name={'title'}
        value={createTodoInput.title}
        placeholder={'Enter todo'}
        onChange={onChange}
        dataTestId={'data1'}
      />

      <Button onClick={onClick}>Create Todo</Button>
    </div>
  );
};

export default CreateTodo;
