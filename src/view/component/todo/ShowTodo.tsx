import React from 'react';
import { useAppSelector } from 'service/store';

const ShowTodo = () => {
  const { todoList } = useAppSelector((state) => state.todoReducer);

  // const deleteTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log('deleteTodo');
  // };

  const todoComponent = todoList.map((todo) => {
    return (
      <div key={todo.id}>
        {todo.title} {todo.desc}
        {/* <button onClick={deleteTodo}>delete</button> */}
      </div>
    );
  });

  return <div>{todoComponent}</div>;
};

export default ShowTodo;
