import { useState } from 'react';
import { useAppDispatch } from 'service/store';
import Input from '../common/input/Input';
import { Todo } from 'service/model/Todo';
import { nanoid } from 'nanoid';
import { createTodo } from 'redux/todo/todoAction';

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  // const { todoList } = useAppSelector((state) => state.todoReducer);

  const [createTodoInput, setCreateTodoInput] = useState<Partial<Todo>>({
    title: '',
    desc: '',
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
    dispatch(createTodo({ ...createTodoInput, id: nanoid(), isCompleted: false }));
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
      <Input
        type={'text'}
        name={'desc'}
        value={createTodoInput.desc}
        placeholder={'description'}
        onChange={onChange}
        dataTestId={'data2'}
      />
      <button onClick={onClick}>Create Todo</button>
    </div>
  );
};

export default CreateTodo;
