import React from 'react';
import styled from 'styled-components';
import CreateTodo from 'view/component/todo/createTodo/CreateTodo';
import ShowTodo from '../todo/showTodo/ShowTodo';

const Body = () => {
  console.log('body');
  return (
    <Container>
      <CreateTodo />
      <ShowTodo />
    </Container>
  );
};

const Container = styled.div`
  color: #0a1629;
  font-size: 36px;
  font-weight: 700;
`;

export default Body;
