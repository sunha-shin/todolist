import React from 'react';
import CreateTodo from 'view/component/todo/CreateTodo';
import ShowTodo from 'view/component/todo/ShowTodo';
import UpdateTodo from 'view/component/todo/UpdateTodo';

const App = () => {
  return (
    <div>
      <CreateTodo />
      <ShowTodo />
      <UpdateTodo />
    </div>
  );
};

export default App;
