import React from 'react';
import { createTodo, changeName } from 'redux/todo/todoAction';
import { useAppSelector, useAppDispatch } from 'service/store';

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList, name } = useAppSelector((state) => state.todoReducer);
  console.log(todoList);

  const onClick = () => {
    // const todo = useAppDispatch(createTodo(''));
    dispatch(createTodo('hello'));
    // console.log(todo);
  };

  const onClickChange = () => {
    dispatch(changeName('shin'));
  };

  return (
    <div>
      <button onClick={onClick}>Create Todo</button>
      <button onClick={onClickChange}>Change Todo</button>
      <h2>{name}</h2>
    </div>
  );
};

export default CreateTodo;
