import { useState } from 'react';
import { deleteTodo } from 'redux/todo/todoAction';
import { Todo } from 'service/model/Todo';
import { useAppSelector, useAppDispatch } from 'service/store';
import Input from '../common/input/Input';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoReducer);

  const [updateTodoInput, setUpdateTodoInput] = useState<Partial<Todo>>({
    id: '',
    title: '',
    desc: '',
  });

  const clickDelete = (id: string | number) => {
    dispatch(deleteTodo(id));
  };

  const clickUpdate = (todo: Partial<Todo>) => {
    setUpdateTodoInput({ ...todo });
    // console.log(updateTodoInput.id);
  };

  const onChangeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateTodoInput({ ...updateTodoInput, [name]: value });
  };

  return (
    <div>
      {todoList.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            {todo.title} {todo.desc}
            <button onClick={() => clickUpdate(todo)}>update</button>
            <button onClick={() => clickDelete(todo.id)}>delete</button>
          </div>
        );
      })}
      <Input
        type={'text'}
        name={'updateInputTitle'}
        value={updateTodoInput.title}
        placeholder={'title'}
        onChange={onChangeUpdate}
        dataTestId={'data1'}
      />
      <Input
        type={'text'}
        name={'updateInputDesc'}
        value={updateTodoInput.desc}
        placeholder={'desc'}
        onChange={onChangeUpdate}
        dataTestId={'data1'}
      />
    </div>
  );
};

export default ShowTodo;
