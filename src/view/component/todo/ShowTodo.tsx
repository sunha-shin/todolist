import React from 'react';
import { deleteTodo } from 'redux/todo/todoAction';
import { Todo } from 'service/model/Todo';
import { useAppSelector, useAppDispatch } from 'service/store';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state) => state.todoReducer);

  const clickDelete = (id: string | number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todoList.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            {todo.title} {todo.desc}
            <button onClick={() => clickDelete(todo.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTodo;

// // Object
// Object.entries({}).
// const fruit = {
//   id: 1,
//   name: 'banana',
// };

// const list = Object.keys(fruit).map((fru) => {
//   // console.log(fru);
//   return;
// });
// console.log(list);

// // Array
// map filter splice findIndex

// const fruitList = [
//   {
//     id: 1,
//     name: 'banana'
//   },
//   {
//     id: 2,
//     name: 'cherry'
//   },
//   {
//     id:3,
//     name: 'orange'
//   }
// ]

// const index = fruitList.findIndex((fruit) => fruit.name === 'orawqdwqdnge');

// fruitList.splice(index, 1);

// const newFruitList = fruitList.map((fruit)=>{
//   if(fruit.name === 'cherry') {
//     return { ...fruit, color: 'red' }
//   }
//   return fruit;
// })

/**
 * Arrow Function
 * Spread Operator (with Overwrite and Add New Property)
 * Destructure
 */

// const user = {
//   id: 1,
//   name: 'hong',
//   address: {
//     lat: 'a',
//     lng: 'b',
//     detail: {
//       country: 'ca',
//       street: 'aaa',
//     },
//   }
// };

// const { address: { detail: { street } } } = user;

// street;

// const newUser = {
//   ...user,
//   name: 'shin',
//   address: { ...user.address, detail: { ...user.address.detail, apartment: 'abc', country: 'ko' } },
// };

// console.log(newUser);
