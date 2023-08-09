import { useState } from 'react';
import { deleteTodo, updateTodo } from 'redux/todo/todoAction';
import { Todo } from 'service/model/Todo';
import { useAppSelector, useAppDispatch } from 'service/store';
import Input from '../common/input/Input';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state?.todoReducer);

  const [updateTodoInput, setUpdateTodoInput] = useState<Todo>({
    id: '',
    title: '',
    desc: '',
    isCompleted: false,
  });

  // update todo
  const changeTodo = () => {
    dispatch(updateTodo(updateTodoInput));
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
  };

  const completeTodo = (todo: Todo) => {
    const tempTodo = { ...todo, id: todo.id, isCompleted: !todo?.isCompleted };
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
          <div key={todo.id}>
            {todo.title} {todo.desc} @@:{todo.isCompleted?.toString()}
            <button onClick={() => clickUpdate(todo)}>update</button>
            <button onClick={() => clickDelete(todo.id)}>delete</button>
            <button onClick={() => completeTodo(todo)}>complete</button>
          </div>
        );
      })}
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
    </div>
  );
};

export default ShowTodo;
